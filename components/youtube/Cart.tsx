import { Heading, Text } from '@chakra-ui/layout';
import { useState } from 'react';
import CartItem from './CartItem';
import classes from './Cart.module.css';

function Cart({ initialItems }) {
  const [items, setItems] = useState(initialItems);

  const updateQty = (id, newQty) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, qty: newQty };
      }
      return item;
    });
    setItems(newItems);
  };

  const grandTotal = items
    .reduce((total, item) => total + item.qty * item.price, 0)
    .toFixed(2);
  return (
    <>
      <div className={classes.Cart}>
        <Heading align="center">I am a Checkout Cart</Heading>
        <ul>
          <div className={classes.Cartitems}>
            {items.map((item) => (
              <CartItem key={item.id} updateQty={updateQty} {...item} />
            ))}
          </div>
        </ul>
        <Text fontSize={24} my={5}>
          Grand Total: ${grandTotal}
        </Text>
      </div>
    </>
  );
}

export default Cart;
