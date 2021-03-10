import { Heading } from '@chakra-ui/layout';
import MeetupList from '../../components/meetups/MeetupList';

import styles from '../../styles/Home.module.css';

export default function Home() {
  const DUMMY_MEETUPS = [
    {
      id: 'm1',
      title: 'THe title of the meetups',
      image:
        'https://www.irandestination.com/wp-content/uploads/milad-tower.jpg',
      address: 'Some address of the picture',
      description: 'A detailed overview of the picture',
    },
    {
      id: 'm2',
      title: 'The second title of the meetups',
      image:
        'https://www.irandestination.com/wp-content/uploads/milad-tower.jpg',
      address: 'The second address of the picture',
      description: 'The second detailed overview of the picture',
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <Heading>Home Page</Heading>
        <MeetupList meetups={DUMMY_MEETUPS} />
      </div>
    </>
  );
}
