import ProductPage from "@/app/components/ProductPage";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <ProductPage />
    </Suspense>
  );
}
