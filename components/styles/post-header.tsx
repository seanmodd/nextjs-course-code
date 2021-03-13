import { Heading } from '@chakra-ui/layout';
import Image from 'next/image';
import classes from './post-header.module.css';

function PostHeader(props) {
  const { title, image } = props;
  return (
    <div>
      <header className={classes.header}>
        <Heading
          fontWeight="normal"
          alignItems="center"
          w="100%"
          m={15}
          align="center"
        >
          {title}
        </Heading>

        <Image src={image} alt={title} width={200} height={150} />
      </header>
    </div>
  );
}

export default PostHeader;
