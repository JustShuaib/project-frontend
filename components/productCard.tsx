import {
  Box,
  Container,
  Divider,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const ProductCard = ({
  product,
}: {
  product: {
    name: string;
    price: number;
    image: string;
    category: string;
    id: number;
  };
}) => {
  const { name, price, image, category } = product;
  return (
    <Box
      rounded="md"
      overflow="hidden"
      sx={{
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <Image h={64} w="full" src={image} alt={name} objectFit="cover" />
      <Divider />
      <Container>
        <Heading size="sm" my={2} textAlign="left">
          {name}
        </Heading>
        <Text mb={2}>${price.toLocaleString()}</Text>
      </Container>
    </Box>
  );
};

export default ProductCard;
