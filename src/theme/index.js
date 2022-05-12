// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// function mode(lightValue, darkValue) {
//     return (param) => {
//         return props.colorMode === 'dark' ? lightValue : 'gray.600'
//     }
// }

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  // config
  config,

  // global
  styles: {
    global: (props) => ({
      body: {
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("gray.100", "gray.900")(props),
      },
    }),
  },

  // foundation
  colors: {
    primary: "red",
    secondary: "blue",
    // gray: {
    //   100: "#f1f1f1",
    //   900: "#222222",
    // },
  },
});

export default theme;
