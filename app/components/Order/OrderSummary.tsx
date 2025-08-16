import React from "react";
import OrderRow from "@/app/components/Order/OrderRow";
import { formatCurrency } from "@/app/lib/utils";
import { PROMOS } from "@/app/lib/promos";
import { AppliedPromo } from "@/app/lib/types";

interface OrderSummaryProps {
  appliedPromo: AppliedPromo;
  price: number;
}

export default function OrderSummary({
  appliedPromo,
  price,
}: OrderSummaryProps) {
  function calculateDiscount() {
    if (!appliedPromo) return 0;

    const discountPercent = PROMOS[appliedPromo];

    if (!discountPercent) return 0;

    let discount = subtotal * discountPercent;

    return discount;
  }

  const subtotal = price;
  const discount = calculateDiscount();
  const total = subtotal - discount;

  return (
    <div className="bg-white p-5 rounded shadow">
      <h3 className="text-lg font-semibold">Order Summary</h3>
      <div className="mt-4 space-y-2">
        <OrderRow label="Subtotal" value={formatCurrency(subtotal)} />
        <OrderRow label={`Discount`} value={`- ${formatCurrency(discount)}`} />
        <OrderRow label={<b>Total</b>} value={<b>{formatCurrency(total)}</b>} />
      </div>
    </div>
  );
}
