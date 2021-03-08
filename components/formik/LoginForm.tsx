import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import FormikControl from './FormikControl';

function LoginForm() {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            h="auto"
            bg="gray.50"
            w={400}
            p={5}
            borderRadius={5}
          >
            <FormikControl
              // control="input"
              control="chakraInput"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
            />

            <Button
              mt={3}
              bg="blue.900"
              color="blue.50"
              type="submit"
              disabled={!formik.isValid}
            >
              Submit
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
