import { Button } from '@chakra-ui/button';
import { Flex, Heading } from '@chakra-ui/layout';
import AddTask from './AddTask';
import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => (
  <>
    <Flex alignItems="center" />
    {tasks.map((task, index) => (
      <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
    ))}
  </>
);

export default Tasks;
