import Todo from '../components/Todo';
import styles from '../styles/Home.module.css';
import { ExampleButton } from '../components/youtube/menu/ExampleButton';

export default function Home() {
  return (
    <>
      <div className="sean">
        <div className={styles.container}>
          <div className="seanbg">
            <Todo text="example 1" />
            <Todo text="example 2" />
            <Todo text="example 3" />
            <ExampleButton />
          </div>
        </div>
      </div>
    </>
  );
}
