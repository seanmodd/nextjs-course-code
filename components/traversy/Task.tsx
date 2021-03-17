import { Button, IconButton } from '@chakra-ui/button';
import { CloseIcon, WarningIcon } from '@chakra-ui/icons';
import { Flex, Heading, Spacer, Text, VStack } from '@chakra-ui/layout';
import Tasks from '../Tasks';

const Task = ({ task, onDelete, onToggle }) => (
  <div>
    <Flex
      align="center"
      w="800px"
      bg="gray.50"
      onDoubleClick={() => onToggle(task.id)}
    >
      <VStack onDoubleClick={() => onToggle(task.id)}>
        <Text
          onDoubleClick={() => {
            onToggle(task.id);
          }}
          fontSize={22}
          m={19}
          cursor="pointer"
          fontWeight="normal"
        >
          {task.text}
        </Text>
        <Text m={19}>{task.day} </Text>
        {task.reminder && (
          <Heading m={19} textColor="red.500" fontSize={20} fontWeight="normal">
            This is a reminder!
          </Heading>
        )}
      </VStack>
      <Spacer onDoubleClick={() => onToggle(task.id)} />
      <CloseIcon
        cursor="pointer"
        color="red.500"
        m={5}
        onClick={() => {
          onDelete(task.id);
        }}
      />
    </Flex>
  </div>
);

export default Task;
