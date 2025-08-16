import { redirect } from "next/navigation";

export default function Home() {
  redirect("product/?product_id=1");
}
