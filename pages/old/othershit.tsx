import { Flex } from '@chakra-ui/layout';
import LoginForm from '../../components/old/formik/LoginForm';

import styles from '../styles/Home.module.css';

export default function othershit() {
  return (
    <>
      <Flex w="auto" h={400} alignItems="center">
        <LoginForm />
      </Flex>
    </>
  );
}
