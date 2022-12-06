import Head from "next/head";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { motion } from "framer-motion";
import { theme } from "../utils/theme";
import { store, persistor } from "../services/store";

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
      {/* TODO: Change the provider to allow Redux work on the server too */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ChakraProvider theme={theme}>
            <Head>
              <title>e-commerce</title>
              <meta charSet="UTF-8" />
              <link rel="icon" type="image/png" href="/favicon.ico" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <meta name="theme-color" content="#0099ff" />
              <meta
                name="description"
                content="This e-commerce is a platform where you can buy electronic accessories of all sort"
              />
            </Head>
            <Component {...pageProps} />
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </motion.div>
  );
}
