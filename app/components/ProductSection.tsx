import React from "react";
import { FetchState, Product } from "@/app/lib/types";
import CardWrapper from "@/app/components/CardWrapper";
import { formatCurrency } from "@/app/lib/utils";

interface ProductSectionProps {
  productData: FetchState<Product>;
}

export default function ProductSection({ productData }: ProductSectionProps) {
  if (productData.status === "idle" || productData.status === "loading") {
    return (
      <CardWrapper>
        <div className="animate-pulse">
          <div className="h-64 bg-gray-200 rounded-xl" />
          <div className="mt-4 h-6 bg-gray-200 rounded" />
        </div>
      </CardWrapper>
    );
  }

  const productInfo = productData.data;

  if (productInfo) {
    return (
      <CardWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src={productInfo.thumbnail}
            alt={productInfo.title}
            className="w-full h-64 object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold">{productInfo.title}</h2>
            <p>{productInfo.description}</p>
            <p className="text-2xl font-bold mt-3">
              {formatCurrency(productInfo.price)}
            </p>
          </div>
        </div>
      </CardWrapper>
    );
  }
}
