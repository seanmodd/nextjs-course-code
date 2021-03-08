import { ChakraProvider, Flex, Button } from '@chakra-ui/react';
import '../styles/globals.css';
import customTheme from '../styles/theme';
import { ExampleButton } from '../components/ExampleButton';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider resetCSS theme={customTheme}>
        <ExampleButton />
        <Flex alignItems="center" justifyContent="center" direction="column">
          <Component {...pageProps} />
        </Flex>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
