import { ReactNode } from "react";
import { Heading as ChakraHeading } from "@chakra-ui/react";
import type { As } from "@chakra-ui/react";
import { motion } from "framer-motion";
const Heading = ({
  as,
  size,
  variant,
  children,
}: {
  as: As;
  size?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.6,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
    >
      <ChakraHeading
        as={as}
        mb={2}
        size={"lg" || size}
        textAlign="center"
        variant={variant}
      >
        {children}
      </ChakraHeading>
    </motion.div>
  );
};

export default Heading;
