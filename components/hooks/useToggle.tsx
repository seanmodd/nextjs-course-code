import { Heading } from '@chakra-ui/layout';
import { useState } from 'react';

export function useToggle(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);
  function toggle() {
    setIsOpen(!isOpen);
  }

  function onOpen() {
    setIsOpen(true);
  }
  function onClose() {
    setIsOpen(false);
  }
  return { isOpen, toggle, onOpen, onClose };
}
