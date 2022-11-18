import type { AppProps } from "next/app";
import { Open_Sans, Libre_Franklin } from "@next/font/google";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
const openSans = Open_Sans();
const libreFranklin = Libre_Franklin();
const myTheme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: libreFranklin.style.fontFamily,
      },
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: openSans.style.fontFamily,
      },
      "input::-ms-reveal, input::-ms-clear": {
        display: "none",
      },
    },
  },
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={myTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
