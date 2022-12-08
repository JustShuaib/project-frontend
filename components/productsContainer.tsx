import { useRouter } from "next/router";
import { Container, IconButton } from "@chakra-ui/react";
import { Navigation, A11y, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Heading, ProductCard, SeeAll } from ".";
import { Next, Previous } from "../icons";
import { ProductProps } from "../utils";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/a11y";
import "swiper/css/keyboard";

const ProductsContainer = ({
  heading,
  products,
}: {
  heading: string;
  products: ProductProps[];
}) => {
  const router = useRouter();
  const seeAll = () => {
    router.push("/products/" + heading.toLowerCase());
  };
  return (
    <Container as="section" my={[10, 8]} maxW="container.xl">
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
              bg: "gray.300",
            },
          }}
          className="prevBtn"
        />
        {products.map((product) => (
          <SwiperSlide key={product.product_id}>
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
              bg: "gray.300",
            },
          }}
          className="nextBtn"
        />
      </Swiper>
      <SeeAll onClick={seeAll} />
    </Container>
  );
};

export default ProductsContainer;
