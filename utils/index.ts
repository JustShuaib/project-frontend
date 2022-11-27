export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string;
export interface ProductsProps {
  products: {
    name: string;
    price: number;
    image: string;
    category: string;
    id: number;
  }[];
}
