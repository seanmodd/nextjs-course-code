import { Button, IconButton } from '@chakra-ui/button';

const FormButton = ({ onAdd, showAdd, text }) => (
  <div>
    <Button
      onClick={onAdd}
      bg={!showAdd ? 'blue.500' : 'red.500'}
      textColor={!showAdd ? 'white' : 'black'}
      hov
    >
      {' '}
      {!showAdd ? (text = 'Show Form') : 'Close Form'}
    </Button>
  </div>
);

export default FormButton;
