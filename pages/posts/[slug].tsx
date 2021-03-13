import { Heading } from '@chakra-ui/layout';
import PostContent from '../../components/styles/post-content';

function PostDetailPage() {
  return (
    <div>
      <Heading
        fontWeight="normal"
        alignItems="center"
        w="100%"
        m={15}
        align="center"
      >
        Post Detail Page
      </Heading>
      <PostContent />
    </div>
  );
}

export default PostDetailPage;
