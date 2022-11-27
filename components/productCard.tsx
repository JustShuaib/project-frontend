import {
  Box,
  Container,
  Divider,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const ProductCard = () => {
  return (
    <Box
      rounded="md"
      overflow="hidden"
      sx={{
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
          // boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
        alt="Green double couch with wooden legs"
        objectFit="contain"
        w="full"
      />
      <Divider />
      <Container>
        <Heading size="sm" mb={2}>
          Green double couch with wooden legs
        </Heading>
        <Text mb={2}>$ 1,500</Text>
        <Text mb={2}>Available</Text>
        <Text mb={2}>In stock</Text>
      </Container>
    </Box>
  );
};

export default ProductCard;
