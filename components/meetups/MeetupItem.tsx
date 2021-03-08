import { Button } from '@chakra-ui/button';
import { Heading, Text } from '@chakra-ui/layout';

function MeetupItem(props) {
  return (
    <>
      <li>
        <div>
          <img src={props.image} alt={props.title} />
        </div>
        <div>
          <Heading>{props.title}</Heading>
          <Heading>{props.address}</Heading>
          <Text>{props.description}</Text>
        </div>
        <div>
          <Button>To Favorites?</Button>
        </div>
      </li>
    </>
  );
}
export default MeetupItem;
