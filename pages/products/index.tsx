import { GetServerSideProps } from "next";
import React, { useState, SyntheticEvent } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { Page, Heading, BackToTop, ProductsContainer } from "../../components";
import { Wave } from "../../icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/a11y";
import "swiper/css/keyboard";
import { BACKEND_URL, ProductsProps } from "../../utils";
interface Props {
  products:
    | ProductsProps["products"]
    | {
        detail: string;
      };
}

const Products = ({ products }: Props) => {
  console.log(products);
  // const { detail } = products;
  const [searchTerm, setSearchTerm] = useState("");
  let categories: string[] = [];
  const toast = useToast({
    description: "Looks like your session has expired. Please log in again.",
    position: "top-right",
    isClosable: true,
    status: "error",
  });
  if (Array.isArray(products)) {
    console.log(products);
    // find the unique categories in the products array
    categories = Array.from(new Set(products.map((prod) => prod.category)));
  } else {
    toast({
      onCloseComplete() {
        window.location.href = "/login";
      },
    });
  }
  // if (products.) {
  //   toast({
  //     onCloseComplete() {
  //       window.location.href = "/login";
  //     },
  //   });
  //   return;
  // } else {
  //   console.log("PROPS");
  //   console.log(products);
  //   // categories = products.filter()
  // }
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (searchTerm.length === 0) return;
    console.log(searchTerm);
    setSearchTerm("");
  };
  return (
    <Page title="Products">
      <Box as="main" my={6}>
        <Heading as="h1">Products</Heading>
        <Flex
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
        </Flex>
        {/* <ProductsContainer heading="Phones" products={productS} />
        <ProductsContainer heading="Laptops" products={productS} />
        <ProductsContainer heading="Tablets" products={productS} />
        <ProductsContainer heading="Monitors" products={productS} /> */}
        <BackToTop />
      </Box>
      <Wave />
    </Page>
  );
};

export default Products;
const productT = [
  {
    name: "Iphone 12 Pro Max",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1632972097677-f97e4e2a40d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGlwaG9uZSUyMDEyJTIwcHJvJTIwbWF4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "phones",
    id: 1,
  },
  {
    name: "Iphone 12 Pro",
    price: 1000,
    image:
      "https://images.unsplash.com/photo-1607936854279-55e8a4c64888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "phones",
    id: 2,
  },
  {
    name: "MacBook Pro",
    price: 2000,
    image:
      "https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "laptops",
    id: 3,
  },
  {
    name: "Iphone 12 Pro Max",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1632972097677-f97e4e2a40d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGlwaG9uZSUyMDEyJTIwcHJvJTIwbWF4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "phones",
    id: 1,
  },
  {
    name: "Iphone 12 Pro",
    price: 1000,
    image:
      "https://images.unsplash.com/photo-1607936854279-55e8a4c64888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "phones",
    id: 2,
  },
  {
    name: "MacBook Pro",
    price: 2000,
    image:
      "https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "laptops",
    id: 3,
  },
  {
    name: "Iphone 12 Pro Max",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1632972097677-f97e4e2a40d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGlwaG9uZSUyMDEyJTIwcHJvJTIwbWF4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "phones",
    id: 1,
  },
  {
    name: "Iphone 12 Pro",
    price: 1000,
    image:
      "https://images.unsplash.com/photo-1607936854279-55e8a4c64888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "phones",
    id: 2,
  },
  {
    name: "MacBook Pro",
    price: 2000,
    image:
      "https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "laptops",
    id: 3,
  },
];
export const getServerSideProps: GetServerSideProps = async () => {
  const products = await getProducts();
  console.log("SERVER PRODUCTS");
  console.log(products);
  return {
    props: {
      products,
    },
  };
};
const getProducts = async () => {
  const res = await fetch(`${BACKEND_URL}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsImV4cCI6MTY2OTU1Mzk5MX0.Liau-gFAx37uHFNjAsPuaQ187PhJ12nMXBejDqUnMJw`,
    },
    credentials: "include",
  });
  const products = await res.json();
  console.log(products);
  return products;
};
