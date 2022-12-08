import { Products, RouteGuard } from "../../components";
const ProductsPage = () => {
  return (
    <RouteGuard>
      <Products />
    </RouteGuard>
  );
};

export default ProductsPage;
