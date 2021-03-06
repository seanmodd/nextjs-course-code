/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import Backdrop from '../components/Backdrop';
import Hero from '../components/chakraPro/HeroWithFeaturedLogos/Hero';
import Modal from '../components/Modal';
import Todo from '../components/Todo';
import styles from '../styles/Home.module.css';
import Navbar from '../components/chakraPro/NavbarWithRightCta/Navbar.tsx';
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
