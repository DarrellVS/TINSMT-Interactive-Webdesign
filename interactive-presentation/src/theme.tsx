import { extendTheme } from "@chakra-ui/react";

const accent = {
  500: "#efc43d",
  600: "#f0b31b",
  700: "#61dafb",
};

export const HeadingColor = "#212121";
export const BodyColor = "gray.700";

export const theme = extendTheme({
  colors: {
    accent,
  },
  fonts: {
    heading: "montserrat, sans-serif",
    body: "sofia-pro, sans-serif",
  },
  components: {
    Text: {
      baseStyle: {
        color: BodyColor,
        fontSize: "20px",
        fontWeight: "400",
      },
    },
    Heading: {
      sizes: {
        sm: {
          fontSize: "18px",
          fontWeight: "700",
        },
        md: {
          fontSize: "20px",
          fontWeight: "700",
        },
        lg: {
          fontSize: "24px",
          lineHeight: "24px",
        },
        xl: {
          fontSize: "30px",
          lineHeight: "30px",
        },
        "2xl": {
          fontSize: "48px",
          fontWeight: "extrabold",
          lineHeight: "60px",
        },
        "3xl": {
          fontSize: "60px",
          fontWeight: "extrabold",
          lineHeight: "68px",
        },
        "4xl": {
          fontSize: "72px",
          fontWeight: "extrabold",
          lineHeight: "80px",
        },
      },
      baseStyle: {
        color: HeadingColor,
        fontWeight: "800",
        fontFamily: "Montserrat",
      },
      variant: {
        text: {
          fontFamily: "Sofia Pro, sans-serif",
        },
      },
    },
  },
});
