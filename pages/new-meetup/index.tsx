import { Heading } from '@chakra-ui/layout';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return (
    <div>
      <Heading> New Meetup Form</Heading>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetupPage;
