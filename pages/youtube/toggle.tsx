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
  HStack,
} from '@chakra-ui/layout';
import { useCounter } from '../../components/hooks/useCounter';
import { useToggle } from '../../components/hooks/useToggle';

function toggle() {
  const { isOpen, toggle, onOpen, onClose } = useToggle();
  return (
    <div>
      <Grid h="100%" m={20} p={10} justifyContent="center">
        <Heading align="center" m={5}>
          {isOpen.toString()}
        </Heading>

        <HStack m={10}>
          <Button onClick={toggle}>Toggle</Button>{' '}
          <Button onClick={onOpen}>Open</Button>{' '}
          <Button onClick={onClose}>Close</Button>
        </HStack>

        {isOpen && (
          <>
            <Grid>
              <VStack>
                <Button bg="red.500">NAVBARBUTTON</Button>
              </VStack>
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
}

export default toggle;
