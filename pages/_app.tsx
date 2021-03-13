import { ChakraProvider, Flex, Button } from '@chakra-ui/react';
import '../styles/globals.css';
import customTheme from '../styles/theme';
import ExampleButton from '../components/old/ExampleButton';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout/Layout.tsx';
import LayoutTwo from '../components/styles/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider resetCSS theme={customTheme}>
        {/* <ExampleButton /> */}
        {/* <Flex alignItems="center" justifyContent="center" direction="column"> */}
        {/* <Layout> */}
        <LayoutTwo>
          {/* <div className={styles.container}> */}

          <Component {...pageProps} />
          {/* </div> */}
        </LayoutTwo>
        {/* </Layout> */}
        {/* </Flex> */}
      </ChakraProvider>
    </>
  );
}

export default MyApp;
