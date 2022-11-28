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
  // define the part you're going to style
  title: {
    fontSize: 14,
    fontFamily: "mono", // change the font family
    color: "teal.500", // change the input text color
  },
  description: {
    fontSize: 12, // change the font size
    color: "gray.500", // change the input text color
  },
});

const alertTheme = defineMultiStyleConfig({ baseStyle });

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
const AlertTheme = defineStyleConfig({
  baseStyle: {
    fontSize: "0.6rem",
  },
});
export const theme = extendTheme({
  components: {
    Heading: HeadingTheme,
    Button: ButtonTheme,
    alert: alertTheme,
    toast: alertTheme,
    // AlertDescription: AlertTheme,
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
