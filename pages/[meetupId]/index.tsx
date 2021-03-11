import { Heading } from '@chakra-ui/layout';
import MeetupDetails from '../../components/meetups/MeetupDetail';

const MyHome = () => (
  <div>
    <MeetupDetails
      image="https://github.com"
      title="FirstMeetup"
      address="Some Street, Some City"
      description="this is a first meetup"
    />
  </div>
);

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },

        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image: 'https://github.com',
        id: meetupId,
        title: 'SEANFIRSTMEETUP',
        address: 'Some street and some city',
        description: 'this is it',
      },
    },
  };
}

export default MyHome;
