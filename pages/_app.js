// _app.js
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const theme = extendTheme({
  fonts: {
    body: "'Smooch Sans', sans-serif",
    heading: "'Smooch Sans', sans-serif",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
