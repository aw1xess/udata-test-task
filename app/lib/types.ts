import { PromoKey } from "@/app/lib/promos";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface FetchState<T> {
  status: "idle" | "loading" | "success";
  data?: T;
}

export type AppliedPromo = PromoKey | null;
