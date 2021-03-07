import { ChakraProvider, Flex, Button } from '@chakra-ui/react';
import '../styles/globals.css';
import customTheme from '../styles/theme';
import { ExampleButton } from '../components/youtube/menu/ExampleButton';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider resetCSS theme={customTheme}>
        <ExampleButton />
        <Flex direction="column">
          <Component {...pageProps} />
          <Button />
        </Flex>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
