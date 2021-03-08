import { Heading } from '@chakra-ui/layout';
import { useHistory } from 'next/history';
import NewMeetupForm from './NewMeetupForm';

function NewMeetup() {
  // const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch(
      'https://nextjscourseseanmodd-default-rtdb.firebaseio.com/meetupssean.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
  return (
    <>
      <Heading>New Meetup PAGE!</Heading>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}

export default NewMeetup;
