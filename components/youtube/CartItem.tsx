import { Heading, Text } from '@chakra-ui/layout';
import classes from './Cart.module.css';

function CartItem({ id, name, price, qty, updateQty }) {
  const addOne = () => {
    updateQty(id, qty + 1);
  };
  const subtractOne = () => {
    updateQty(id, qty - 1);
  };

  return (
    <>
      <div className={classes.CartItem}>
        <Text>{name}</Text>
        <Text>${price}</Text>

        <Text>
          <button onClick={subtractOne}>-</button>
          {qty} <button onClick={addOne}>+</button>
        </Text>

        <Text>Total: ${qty * price}</Text>
      </div>
    </>
  );
}
export default CartItem;
