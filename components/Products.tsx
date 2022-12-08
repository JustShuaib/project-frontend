import { useState, FormEvent } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Layout, Heading, BackToTop, ProductsContainer } from ".";
import { Wave } from "../icons";
import { useGetProductsQuery } from "../services/api";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/a11y";
import "swiper/css/keyboard";

const Products = () => {
  const { data, isError, error, refetch, isLoading } =
    useGetProductsQuery("products");
  const [searchTerm, setSearchTerm] = useState("");
  let uniqueCategories: string[] = [];
  if (data) {
    uniqueCategories = Array.from(
      new Set(data.map((product) => product.category))
    );
  }
  console.log("isError is: ", error);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchTerm.length === 0) return;
    console.log(searchTerm);
    setSearchTerm("");
  };
  console.log("Data is: ", data);
  if (isError)
    return (
      <Flex
        justify="center"
        flexDir="column"
        align="center"
        h="100vh"
        w="100vw"
        gap={2}
      >
        <Text>Something went wrong</Text>
        <Button size="sm" onClick={refetch}>
          Retry
        </Button>
      </Flex>
    );
  return (
    <Layout title="Products">
      <Box as="main" my={6}>
        <Heading as="h1">Products</Heading>
        {/* <Flex
          as="form"
          onSubmit={handleSubmit}
          maxW={["xs", "lg"]}
          gap={[1, 4]}
          direction={["column", "row"]}
          align={["initial", "end"]}
          mx="auto"
        >
          <FormControl>
            <FormLabel m={1} fontSize={[null, "sm"]} htmlFor="search">
              Search
            </FormLabel>
            <Input
              id="search"
              placeholder="Start typing to search for any product..."
              value={searchTerm}
              onChange={({ target }) => setSearchTerm(target.value)}
              sx={{
                "&::placeholder": {
                  fontSize: "sm",
                },
              }}
            />
          </FormControl>
          <Button size={["sm", "md"]} type="submit" mt={[2, 0]} px={{ md: 8 }}>
            Search
          </Button>
        </Flex> */}
        {isLoading && (
          <Box my={10} textAlign="center">
            <Spinner size="xl" />
          </Box>
        )}
        {uniqueCategories.map((category) => (
          <ProductsContainer
            key={category}
            heading={category}
            products={
              data
                ? data.filter((product) => product.category === category)
                : []
            }
          />
        ))}
        <BackToTop />
        {data && <Wave />}
      </Box>
    </Layout>
  );
};

export default Products;
