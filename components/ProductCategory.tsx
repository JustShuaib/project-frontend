import { useRouter } from "next/router";
import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import { Heading, Layout, ProductCard, Link } from ".";
import { Back } from "../icons";
import { useGetProductsByCategoryQuery, usePrefetch } from "../services/api";

const ProductCategory = () => {
  const router = useRouter();
  const prefetch = usePrefetch("getProducts");
  const { category } = router.query as { category: string };
  const { data, isLoading, isError } = useGetProductsByCategoryQuery(category);

  if (isLoading) return <Box>Loading...</Box>;
  if (isError) return <Box>Error: Something went wrong</Box>;
  return (
    <Layout title={category}>
      <Box as="main" my={6}>
        <Center mb={8} pl={[6, 16]}>
          <Box
            pos="absolute"
            left={[6, 10]}
            onMouseEnter={() => prefetch("getProducts")}
          >
            <Link href="/products">
              <Back
                aria-label="Previous Page"
                fontSize={["xl", "x-large"]}
                color="black"
              />
            </Link>
          </Box>
          <Heading as="h1" color="red.700">
            {category}
          </Heading>
        </Center>
        <SimpleGrid overflow="hidden" gap={6} columns={[1, 2, 4]}>
          {data?.map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))}
        </SimpleGrid>
      </Box>
    </Layout>
  );
};

export default ProductCategory;
