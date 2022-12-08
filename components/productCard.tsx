import { Box, Container, Image, Text } from "@chakra-ui/react";
import { ProductProps } from "../utils";

const ProductCard = ({ product }: { product: ProductProps }) => {
  const { product_name, price, image } = product;
  return (
    <Box
      textAlign="center"
      sx={{
        transition: "all 0.2s ease-in-out",
        _hover: {
          transform: "scale(1.02)",
        },
      }}
    >
      <Image
        h={64}
        w="full"
        src={image}
        alt={product_name}
        objectFit="contain"
      />
      <Container py={3}>
        <Text
          fontWeight="semibold"
          textAlign="center"
          sx={{
            mx: "auto",
            maxW: "30ch",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {product_name}
        </Text>
        <Text fontSize="sm">₦ {price.toLocaleString()}</Text>
      </Container>
    </Box>
  );
};

export default ProductCard;
