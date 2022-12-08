import {
  Box,
  Container,
  Divider,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { ProductProps } from "../utils";

const ProductCard = ({ product }: { product: ProductProps }) => {
  const { product_name, price, image } = product;
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
      <Image
        h={64}
        w="full"
        src={image}
        alt={product_name}
        objectFit="contain"
      />
      <Divider />
      <Container>
        <Heading
          size="xs"
          mt={3}
          textAlign="left"
          sx={{
            maxW: "30ch",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {product_name}
        </Heading>
        <Text fontSize="sm">₦ {price.toLocaleString()}</Text>
      </Container>
    </Box>
  );
};

export default ProductCard;
