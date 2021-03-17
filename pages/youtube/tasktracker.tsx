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
  Box,
} from '@chakra-ui/layout';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import { useCounter } from '../../components/hooks/useCounter';
import { useToggle } from '../../components/hooks/useToggle';
import Task from '../../components/traversy/Task';
import Tasks from '../../components/traversy/Tasks';
import AddTask from '../../components/traversy/AddTask';

function toggle() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Sep 11, 2001',
      reminder: true,
    },
    {
      id: 2,
      text: 'Teachers Appointment',
      day: 'Jan 11, 2012',
      reminder: true,
    },
    {
      id: 3,
      text: 'Coaches Appointment',
      day: 'Sep 11, 2001',
      reminder: false,
    },
  ]);
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const reminderToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <>
      <VStack>
        <Heading fontWeight="500" m={10}>
          The Task Tracker App
        </Heading>
        <AddTask />
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={reminderToggle}
          />
        ) : (
          <Heading
            mt={100}
            pt={40}
            fontWeight="normal"
            fontSize={80}
            textColor="red.500"
          >
            No tasks to show!
          </Heading>
        )}
      </VStack>
    </>
  );
}

export default toggle;
