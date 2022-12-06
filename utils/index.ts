export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string;
export interface ProductProps {
  product_name: string;
  price: number;
  image: string;
  category: string;
  discount: number;
  flash_sale: boolean;
  new_arrival: boolean;
  product_id: number;
  quantity: number;
}
