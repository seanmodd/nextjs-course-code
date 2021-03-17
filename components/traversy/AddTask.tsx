import { Button } from '@chakra-ui/button';
import { Checkbox } from '@chakra-ui/checkbox';

import { Input } from '@chakra-ui/input';
import { Flex, VStack } from '@chakra-ui/layout';
import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);
  const [formfill, setFormFill] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert('Please add a task');
      return;
    }
    onAdd({ text, day, reminder });
    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <VStack m={15} p={15}>
          <Input
            placeholder="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Input
            placeholder="date and time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </VStack>
        <Flex>
          <FormLabel>Set Reminder</FormLabel>
          <Checkbox
            type="checkbox"
            value={reminder}
            checked={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </Flex>
        <Button type="submit" bg="black" textColor="white">
          Save Task
        </Button>
      </form>
    </>
  );
};

export default AddTask;
