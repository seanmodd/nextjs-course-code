import { Button } from '@chakra-ui/button';
import {
  Flex,
  Grid,
  Heading,
  Stack,
  VStack,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
} from '@chakra-ui/layout';
import { useCounter } from '../components/hooks/useCounter';
import FeaturedPosts from '../components/styles/featured-posts';
import Hero from '../components/styles/Hero';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10',
  },
];
function seanmodd() {
  const { count, incrementCount, decreaseCount } = useCounter(26);
  return (
    <div>
      <Hero />

      <Grid bg="red.50" p={5}>
        <VStack>
          <Button onClick={() => incrementCount()}>Increment Count</Button>
        </VStack>
        <VStack>
          <Heading fontWeight="normal">{count}</Heading>
        </VStack>
        <VStack>
          <Button onClick={() => decreaseCount()}>Decrease Count</Button>
        </VStack>
      </Grid>

      <FeaturedPosts posts={DUMMY_POSTS} />
    </div>
  );
}

export default seanmodd;
