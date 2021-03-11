import { Heading } from '@chakra-ui/layout';

const MeetupDetails = (props) => (
  <div>
    <img src={props.image} alt={props.title} />
    <Heading>{props.title}</Heading>
    <address>{props.address}</address>
    <p>{props.description}</p>
  </div>
);

export default MeetupDetails;
