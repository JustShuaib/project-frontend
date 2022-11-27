import React, { useState, SyntheticEvent } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading as ChakraHeading,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Navigation, A11y, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Page, Heading, BackToTop, ProductCard } from "../../components";
import { Wave } from "../../icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/a11y";
import "swiper/css/keyboard";

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

        <Container as="section" my={3} maxW="container.xl">
          <Heading as="h2" variant="h2">
            Phones
          </Heading>
          <Swiper
            modules={[Navigation, A11y, Keyboard]}
            navigation
            keyboard
            a11y={{
              enabled: true,
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
            }}
            slidesPerView={4}
            spaceBetween={25}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
          </Swiper>
          <SimpleGrid columns={[1, 2, 4]} gap={6}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </SimpleGrid>
        </Container>
        <BackToTop />
      </Box>
      <Wave />
    </Page>
  );
};

export default Products;
