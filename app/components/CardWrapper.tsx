import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export default function CardWrapper({ children }: CardProps) {
  return <div className="bg-white p-5 rounded shadow border">{children}</div>;
}
