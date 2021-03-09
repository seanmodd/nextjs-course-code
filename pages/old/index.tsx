import LoginForm from '../../components/old/formik/LoginForm';
import Todo from '../../components/old/Todo';
import styles from '../../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <div className="sean">
        <div className={styles.container}>
          <div className="seanbg">
            <LoginForm />
            <Todo text="example 1" />
            <Todo text="example 2" />
            <Todo text="example 3" />
          </div>
        </div>
      </div>
    </>
  );
}
