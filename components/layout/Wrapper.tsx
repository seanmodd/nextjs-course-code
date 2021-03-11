import { Box, Center, Container, Flex, Stack, Wrap } from '@chakra-ui/layout';

const WrapperSean = (props) => (
  <div>
    <Center w="800px" alignItems="center" bg="gray.50">
      {props.children}
    </Center>
  </div>
);

export default WrapperSean;
