import { extendTheme, defineStyleConfig } from "@chakra-ui/react";
import { Open_Sans, Roboto } from "@next/font/google";
const openSans = Open_Sans();
const roboto = Roboto({ weight: "700" });
const Heading = defineStyleConfig({
  baseStyle: {
    fontFamily: roboto.style.fontFamily,
    textAlign: "center",
  },
});
export const theme = extendTheme({
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
