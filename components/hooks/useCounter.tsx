import { Heading } from '@chakra-ui/layout';
import { useState } from 'react';

export function useCounter(initialState = 0) {
  const [count, setCount] = useState(initialState);

  function incrementCount(val = 1) {
    setCount(count + val);
  }
  function decreaseCount(val = 1) {
    setCount(count - val);
  }
  return { count, incrementCount, decreaseCount };
}
