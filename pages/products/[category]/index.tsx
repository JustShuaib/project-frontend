import { RouteGuard, ProductCategory } from "../../../components";

const Category = () => {
  return (
    <RouteGuard>
      <ProductCategory />
    </RouteGuard>
  );
};
export default Category;
