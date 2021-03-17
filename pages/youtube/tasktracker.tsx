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
import FormButton from '../../components/traversy/FormButton';

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

  // Show Form!
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <VStack>
        <Heading fontWeight="500" mt={10} mb={4}>
          The Task Tracker App
        </Heading>{' '}
        <FormButton onAdd={() => setShowForm(!showForm)} showAdd={showForm} />
        {tasks.length > 0 && (
          <Heading fontSize={28} fontWeight="300">
            {tasks.length} tasks!
          </Heading>
        )}
        {showForm && <AddTask onAdd={addTask} />}
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
