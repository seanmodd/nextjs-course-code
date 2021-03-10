import { Heading } from '@chakra-ui/layout';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import YouTubeComponent from '../../components/youtube/YouTubeComponent';

function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return (
    <div>
      <YouTubeComponent />
      <br />
      <br />
      <br />
      <br />
      <Heading> New Meetup Form</Heading>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetupPage;
