import { Button, Container, IconButton } from "@chakra-ui/react";
import { Navigation, A11y, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Heading, ProductCard } from "../components";
import { Next, Previous } from "../icons";
import { ProductsProps } from "../utils";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/a11y";
import "swiper/css/keyboard";
// interface ProductsProps {
//   products: {
//     name: string;
//     price: number;
//     image: string;
//     category: string;
//     id: number;
//   }[];
// }

const productsContainer = ({
  heading,
  products,
}: {
  heading: string;
  products: ProductsProps["products"];
}) => {
  return (
    <Container as="section" my={10} maxW="container.xl">
      <Heading as="h2" variant="h2" mb={[4, 6]}>
        {heading}
      </Heading>
      <Swiper
        modules={[Navigation, A11y, Keyboard]}
        navigation={{
          nextEl: ".nextBtn",
          prevEl: ".prevBtn",
        }}
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
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        <IconButton
          aria-label="previous element"
          icon={<Previous />}
          sx={{
            position: "absolute",
            top: "50%",
            left: 5,
            transform: "translateY(-65%)",
            zIndex: 1,
            display: ["none", "block"],
            borderRadius: "50%",
            pt: 1.5,
            px: 2,
            "&:hover": {
              bg: "gray.200",
            },
          }}
          className="prevBtn"
        />
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
        <IconButton
          aria-label="Next element"
          icon={<Next />}
          sx={{
            position: "absolute",
            top: "50%",
            right: 5,
            transform: "translateY(-65%)",
            zIndex: 1,
            display: ["none", "block"],
            borderRadius: "50%",
            pt: 1.5,
            px: 2,
            "&:hover": {
              bg: "gray.200",
            },
          }}
          className="nextBtn"
        />
      </Swiper>
      <Button
        pos="relative"
        textAlign="right"
        right={0}
        as="a"
        rightIcon={<Next />}
      >
        See All
      </Button>
    </Container>
  );
};

export default productsContainer;
