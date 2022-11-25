import { useState, SyntheticEvent } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Page, Heading, BackToTop } from "../../components";
const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
          gap={[2, 4]}
          direction={["column", "row"]}
          align={["initial", "end"]}
          mx="auto"
        >
          <FormControl>
            <FormLabel m={1} htmlFor="search">
              Search
            </FormLabel>
            <Input
              id="search"
              placeholder="Start typing to search for any product..."
              value={searchTerm}
              onChange={({ target }) => setSearchTerm(target.value)}
            />
          </FormControl>
          <Button size={["sm", "md"]} type="submit" mt={[2, 0]} px={{ md: 8 }}>
            Search
          </Button>
        </Flex>
        <BackToTop />
      </Box>
    </Page>
  );
};

export default Products;
