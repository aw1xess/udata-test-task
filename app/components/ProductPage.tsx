"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductSection from "@/app/components/ProductSection";
import PromoForm from "@/app/components/PromoForm";
import OrderSummary from "@/app/components/Order/OrderSummary";
import { PROMOS, PromoKey } from "@/app/lib/promos";
import { Product, FetchState, AppliedPromo } from "@/app/lib/types";

export default function ProductPage() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("product_id");

  const [productData, setProductData] = useState<FetchState<Product>>({
    status: "idle",
  });

  const [promoInput, setPromoInput] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<AppliedPromo>(null);
  const [applyError, setApplyError] = useState<string>("");

  async function fetchProduct() {
    setProductData({ status: "loading" });
    const res = await fetch(`https://dummyjson.com/products/${productId}`);

    if (!res.ok) throw new Error(`Failed to load product #${productId}`);

    const data: Product = await res.json();
    setProductData({ status: "success", data });
  }

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const price = productData.data ? productData.data.price : 0;

  const onApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setApplyError("");

    const code = promoInput.trim().toUpperCase();

    if (!code) return setApplyError("Enter a promo code.");

    if (!Object.keys(PROMOS).includes(code))
      return setApplyError("Promo code not found.");

    setAppliedPromo(code as PromoKey);
  };

  return (
    <main className="min-h-dvh">
      <div className="mx-auto max-w-5xl p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold">Product Checkout</h1>
        <p className="text-gray-500 mt-1">
          Change number in product_id in URL to get new product
        </p>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2 space-y-6">
            <ProductSection productData={productData} />
            <PromoForm
              promoInput={promoInput}
              setPromoInput={setPromoInput}
              appliedPromo={appliedPromo}
              onApply={onApplyPromo}
              error={applyError}
            />
          </section>
          <aside>
            <OrderSummary appliedPromo={appliedPromo} price={price} />
          </aside>
        </div>
      </div>
    </main>
  );
}
