import { Button } from '@chakra-ui/button';
import { useState } from 'react';
import {
  Flex,
  Grid,
  Heading,
  Stack,
  VStack,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
} from '@chakra-ui/layout';
import { useCounter } from '../components/hooks/useCounter';

function toggle() {
  // const { count, incrementCount, decreaseCount } = useCounter(26);
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  function onOpen() {
    setIsOpen(true);
  }
  function onClose() {
    setIsOpen(false);
  }
  return (
    <div>
      {/* <Grid bg="red.50" p={5}>
        <VStack>
          <Button onClick={() => incrementCount()}>Increment Count</Button>
        </VStack>
        <VStack>
          <Heading fontWeight="normal">{count}</Heading>
        </VStack>
        <VStack>
          <Button onClick={() => decreaseCount()}>Decrease Count</Button>
        </VStack>
      </Grid> */}
      <Heading>{isOpen.toString()}</Heading>
      <Button onClick={toggle}>Toggle</Button>
      <Button onClick={onOpen}>Open</Button>
      <Button onClick={onClose}>Close</Button>

      {isOpen && <div>NavBar</div>}
    </div>
  );
}

export default toggle;
