import { ChakraProvider, Flex, Button } from '@chakra-ui/react';
import '../styles/globals.css';
import customTheme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider resetCSS theme={customTheme}>
        <Flex direction="column">
          <Component {...pageProps} />
          <Button />
        </Flex>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
