import React from "react";
import CardWrapper from "@/app/components/CardWrapper";
import { PROMOS } from "@/app/lib/promos";
import { AppliedPromo } from "@/app/lib/types";

interface PromoFormProps {
  promoInput: string;
  setPromoInput: (v: string) => void;
  appliedPromo: AppliedPromo;
  onApply: (e: React.FormEvent) => void;
  error: string;
}

export default function PromoForm({
  promoInput,
  setPromoInput,
  appliedPromo,
  onApply,
  error,
}: PromoFormProps) {
  return (
    <CardWrapper>
      <p className="font-bold">Use your discount</p>
      <form onSubmit={onApply} className="flex gap-3">
        <input
          value={promoInput}
          onChange={(e) => setPromoInput(e.target.value)}
          className="border p-2 flex-1"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded cursor-pointer"
          disabled={!!appliedPromo}
        >
          Apply
        </button>
      </form>

      {appliedPromo && (
        <p className="text-green-700 mt-2">
          Applied {appliedPromo} — Get {PROMOS[appliedPromo] * 100}% discount
        </p>
      )}
      {error && <p className="text-red-600 mt-1">{error}</p>}
    </CardWrapper>
  );
}
