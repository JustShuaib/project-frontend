import { ReactNode } from "react";
import { Heading as ChakraHeading } from "@chakra-ui/react";
import type { As } from "@chakra-ui/react";
import { motion } from "framer-motion";
const Heading = ({
  as,
  size,
  children,
}: {
  as: As;
  size?: string;
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
      <ChakraHeading as={as} mb={2} size={"lg" || size} textAlign="center">
        {children}
      </ChakraHeading>
    </motion.div>
  );
};

export default Heading;
