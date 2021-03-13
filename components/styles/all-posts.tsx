import { Heading } from '@chakra-ui/layout';
import classes from './all-posts.module.css';
import PostsGrid from './posts-grid';

function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <Heading fontWeight="normal">All Posts</Heading>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;

