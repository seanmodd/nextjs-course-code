import { Button, IconButton } from '@chakra-ui/button';
import { CloseIcon, WarningIcon } from '@chakra-ui/icons';
import { Flex, Heading, HStack, Spacer, Text, VStack } from '@chakra-ui/layout';
import Tasks from '../Tasks';
import classes from './contact-form.module.css';

const Task = ({ task, onDelete, onToggle }) => (
  <div>
    <Flex
      align="center"
      w="800px"
      bg="gray.50"
      className={
        (classes.seanFlex,
        task.reminder ? classes.contact : classes.othercontact)
      }
    >
      <VStack>
        <HStack>
          <Text ml={10}  fontWeight="normal">
            {task.text}
          </Text>
          <Button
            mt={20}
            fontSize={22}
            cursor="pointer"
            onClick={() => {
              onToggle(task.id);
            }}
          >
            ?!?
          </Button>
        </HStack>
        <Text m={1}>{task.day} </Text>
        {task.reminder && (
          <Heading mb={15} textColor="red.500" fontSize={20} fontWeight="normal">
            This is important!
          </Heading>
        )}
      </VStack>
      <Spacer />
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
