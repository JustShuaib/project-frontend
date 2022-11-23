import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { theme } from "../utils/theme";
export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div
      key={router.route}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
    >
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </motion.div>
  );
}
