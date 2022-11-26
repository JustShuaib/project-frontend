import { extendTheme, defineStyleConfig } from "@chakra-ui/react";
import {
  Open_Sans,
  Roboto,
  Ubuntu_Mono,
  Cedarville_Cursive,
} from "@next/font/google";
const openSans = Open_Sans();
const roboto = Roboto({ weight: "700" });
const ubuntuMono = Ubuntu_Mono({ weight: "400" });
const cedarvilleCursive = Cedarville_Cursive({ weight: "400" });
const Heading = defineStyleConfig({
  baseStyle: {
    fontFamily: roboto.style.fontFamily,
    textAlign: "center",
  },
  variants: {
    h2: {
      fontSize: "lg",
      fontFamily: cedarvilleCursive.style.fontFamily,
      color: "red.700",
      textAlign: "left",
    },
  },
});
const Button = defineStyleConfig({
  baseStyle: {
    // color: "white",
    // bg: "#0099ff",
    fontFamily: ubuntuMono.style.fontFamily,
    backgroundColor: "blue.500",
    _hover: {
      bg: "#0066cc",
    },
  },
});
export const theme = extendTheme({
  // colors: {
  //   // primary: "#0099ff",
  //   // :"#0099ff"
  // },
  components: {
    toast: {
      baseStyle: {
        fontSize: "12px",
      },
      defaultProps: {
        fontSize: "12px",
        position: "top-right",
      },
    },
    Heading: Heading,
    Button: Button,
  },
  styles: {
    global: {
      body: {
        fontFamily: openSans.style.fontFamily,
      },
      "::-webkit-scrollbar": {
        width: "0.6em",
      },
      "::-webkit-scrollbar-track": {
        borderRadius: "0.5rem",
        backgroundColor: "gray.100",
        border: "1px solid gray.300",
        boxShadow: "inset 0 0 6px rgba(0, 0, 0, .3)",
      },
      "::-webkit-scrollbar-thumb": {
        borderRadius: "0.6rem",
        backgroundColor: "#0099ff",
      },
      "input::-ms-reveal, input::-ms-clear": {
        display: "none",
      },
    },
  },
});
