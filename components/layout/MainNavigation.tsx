import { Flex, Heading, HStack, Stack, VStack } from '@chakra-ui/layout';
import Link from 'next/Link';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Stack mt={0}>
        <Heading align="center" mt={3} textColor="white" fontWeight="normal">
          React Meetups
        </Heading>
        <nav>
          <HStack mb={5} justifyContent="space-between">
            <Link href="/">All Meetups</Link>

            <Link href="/new-meetup">Add New Meetup</Link>

            <Link href="/favorites">Favorites</Link>
          </HStack>
        </nav>
      </Stack>
    </header>
  );
}

export default MainNavigation;
