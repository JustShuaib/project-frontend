import { ReactNode } from "react";
import { Heading as ChakraHeading } from "@chakra-ui/react";
import type { As, SpaceProps, ThemingProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
const Heading = ({
  as,
  size,
  variant,
  mb,
  children,
}: {
  as: As;
  size?: ThemingProps["size"];
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  mb?: SpaceProps["mb"];
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
        mb={mb || 2}
        size={size || "lg"}
        textAlign="center"
        variant={variant}
      >
        {children}
      </ChakraHeading>
    </motion.div>
  );
};

export default Heading;
