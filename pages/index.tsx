/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import Backdrop from '../components/Backdrop';
import Hero from '../components/chakraPro/HeroWithFeaturedLogos/Hero';
import Modal from '../components/Modal';
import Todo from '../components/Todo';
import styles from '../styles/Home.module.css';
import Navbar from '../components/chakraPro/NavbarWithRightCta/Navbar.tsx';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <Todo text="example 1" />
          <Todo text="example 2" />
          <Todo text="example 3" />
          <Hero />
          <Navbar />
        </div>
      </div>
    </>
  );
}
