import { Button } from '@chakra-ui/button';
import { Flex, Heading } from '@chakra-ui/layout';
import AddTask from './AddTask';
import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => (
  <>
    <Flex alignItems="center">
      
    </Flex>
    {tasks.map((task) => (
      <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
    ))}
  </>
);

export default Tasks;
