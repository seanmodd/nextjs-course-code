import NewMeetup from '../components/meetups/NewMeetup';
import styles from '../styles/Home.module.css';

export default function newmeetup() {
  return (
    <>
      <div className="sean">
        <div className={styles.container}>
          <h1>Test for all newmeetup</h1>
          <NewMeetup />
        </div>
      </div>
    </>
  );
}
