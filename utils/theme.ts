import { alertAnatomy } from "@chakra-ui/anatomy";
import {
  extendTheme,
  defineStyleConfig,
  createMultiStyleConfigHelpers,
} from "@chakra-ui/react";
import { Open_Sans, Roboto, Ubuntu_Mono } from "@next/font/google";
const openSans = Open_Sans();
const roboto = Roboto({ weight: "700" });
const ubuntuMono = Ubuntu_Mono({ weight: "400" });

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(alertAnatomy.keys);

const baseStyle = definePartsStyle({
  title: {
    fontSize: 14,
  },
  description: {
    fontSize: 13,
  },
});

const AlertTheme = defineMultiStyleConfig({ baseStyle });

const HeadingTheme = defineStyleConfig({
  baseStyle: {
    fontFamily: roboto.style.fontFamily,
    textAlign: "center",
  },
  variants: {
    h2: {
      fontSize: "1.25rem",
      color: "red.700",
    },
  },
});
const ButtonTheme = defineStyleConfig({
  baseStyle: {
    fontFamily: ubuntuMono.style.fontFamily,
    backgroundColor: "blue.500",
    _hover: {
      bg: "#0066cc",
    },
  },
});

export const theme = extendTheme({
  components: {
    Heading: HeadingTheme,
    Button: ButtonTheme,
    Alert: AlertTheme,
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
