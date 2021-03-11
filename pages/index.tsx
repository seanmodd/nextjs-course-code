import { Heading } from '@chakra-ui/layout';

import WrapperSean from '../components/layout/Wrapper';
import MeetupList from '../components/meetups/MeetupList';
import styles from '../styles/Home.module.css';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'THe title of the meetups',
    image: 'https://www.irandestination.com/wp-content/uploads/milad-tower.jpg',
    address: 'Some address of the picture',
    description: 'A detailed overview of the picture',
  },
  {
    id: 'm2',
    title: 'The second title of the meetups',
    image: 'https://www.irandestination.com/wp-content/uploads/milad-tower.jpg',
    address: 'The second address of the picture',
    description: 'The second detailed overview of the picture',
  },
];
function Home(props) {
  return (
    <>
      <div className={styles.container}>
        <WrapperSean>
          <Heading alignContent="center">Home Page</Heading>
        </WrapperSean>
        <MeetupList meetups={props.meetups} />
      </div>
    </>
  );
}

// export async function getServerSideProps(context) {
//   const { req } = context;
//   const { res } = context;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  return {
    props: { meetups: DUMMY_MEETUPS },
    revalidate: 10,
  };
}
export default Home;
