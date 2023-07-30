import { extendTheme } from "native-base";

export const darkModeBackgroundColor = "#09181f";
export const darkModePostBackgroundColor = "#0c1e27";

export const colors = {
  gray: {
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#71717a",
  },
};

export const typography = {
  fonts: {
    heading: "PlusJakartaSans",
    body: "PlusJakartaSans",
    mono: "PlusJakartaSans",
  },
  fontConfig: {
    PlusJakartaSans: {
      100: {
        normal: "PlusJakartaSans-ExtraLight",
        italic: "PlusJakartaSans-ExtraLightItalic",
      },
      200: {
        normal: "PlusJakartaSans-Light",
        italic: "PlusJakartaSans-LightItalic",
      },
      300: {
        normal: "PlusJakartaSans-Light", // You may adjust this to your preference
        italic: "PlusJakartaSans-LightItalic", // You may adjust this to your preference
      },
      400: {
        normal: "PlusJakartaSans-Regular",
        italic: "PlusJakartaSans-Italic",
      },
      500: {
        normal: "PlusJakartaSans-Medium",
        italic: "PlusJakartaSans-MediumItalic",
      },
      600: {
        normal: "PlusJakartaSans-SemiBold",
        italic: "PlusJakartaSans-SemiBoldItalic",
      },
      700: {
        normal: "PlusJakartaSans-Bold",
        italic: "PlusJakartaSans-BoldItalic",
      },
      800: {
        normal: "PlusJakartaSans-ExtraBold",
        italic: "PlusJakartaSans-ExtraBoldItalic",
      },
      900: {
        normal: "PlusJakartaSans-Black", // You may adjust this to your preference
        italic: "PlusJakartaSans-BlackItalic", // You may adjust this to your preference
      },
    },
  },
};

// Override NativeBase theme here
export const theme = extendTheme({
  fontConfig: typography.fontConfig,
  fonts: typography.fonts,
  colors: colors,
  components: {
    Text: {
      baseStyle: ({ colorMode }: { colorMode: any }) => {
        return {
          color: "white",
          fontWeight: "400",
        };
      },
    },
    Heading: {
      baseStyle: ({ colorMode }: { colorMode: any }) => {
        return {
          color: "white",
          fontWeight: "800",
        };
      },
    },
  },
});
