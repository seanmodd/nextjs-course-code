import { Button } from '@chakra-ui/button';
import { FormControl } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Flex, Heading, HStack, Stack, Text } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import { useRef } from 'react';

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    props.onAddMeetup(meetupData);
  }
  return (
    <>
      <Stack>
        <HStack>
          <form onSubmit={submitHandler}>
            <div>
              <HStack my={5}>
                <input
                  type="text"
                  placeholder="The Title"
                  ref={titleInputRef}
                />
              </HStack>
              <HStack my={5}>
                <input
                  type="text"
                  placeholder="Image URL"
                  ref={imageInputRef}
                />
              </HStack>
              <HStack my={5}>
                <input
                  type="text"
                  placeholder="Address"
                  ref={addressInputRef}
                />
              </HStack>
              <HStack my={5}>
                <textarea
                  type="text"
                  placeholder="Desc"
                  ref={descriptionInputRef}
                />
              </HStack>
              <button>Submit</button>
            </div>
          </form>
        </HStack>
      </Stack>
    </>
  );
}
export default NewMeetupForm;
