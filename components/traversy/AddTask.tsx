import { Button } from '@chakra-ui/button';
import { Checkbox } from '@chakra-ui/checkbox';
import { FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Flex, VStack } from '@chakra-ui/layout';
import { useState } from 'react';

const AddTask = () => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);
  return (
    <>
      <VStack>
        <VStack m={15} p={15}>
          <Input
            placeholder="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Input placeholder="date and time" />
        </VStack>
        <Flex>
          <FormLabel>Set Reminder</FormLabel>
          <Checkbox />
        </Flex>
        <Button bg="black" textColor="white">
          Save Task
        </Button>
      </VStack>
    </>
  );
};

export default AddTask;
