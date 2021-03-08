import { Button } from '@chakra-ui/button';
import { FormControl } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Heading, Text } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';

function NewMeetup(props) {
  return (
    <>
      <Heading>Add New Meetup</Heading>
      <FormControl w="50%" isRequired>
        <Input m={3} type="text" placeholder="The Title" />
        <Input m={3} type="url" placeholder="Image URL" />
        <Input m={3} type="text" placeholder="Location of Picture" />
        <Textarea m={3} type="text" placeholder="Description of Picture" />
        <Button m={10} colorScheme="twitter" size="lg">
          Submit
        </Button>
      </FormControl>
    </>
  );
}
export default NewMeetup;
