import React from "react";

interface OrderRowProps {
  label: React.ReactNode;
  value: React.ReactNode;
}

export default function OrderRow({ label, value }: OrderRowProps) {
  return (
    <div className="flex justify-between">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
