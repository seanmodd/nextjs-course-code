import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Flex } from '@chakra-ui/layout';

const colors = '#001277';

function ExampleButton() {
  const style = { border: `3px solid ${colors}` };

  return (
    <>
      <Flex flexDirection="row">
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <div className="text-placeholder seanlist" style={style}>
            <Link href="/">Home</Link>
          </div>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <div className="text-placeholder seanlist" style={style}>
            <Link href="/youtube">Checkout Cart</Link>
          </div>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <div className="text-placeholder seanlist" style={style}>
            <Link href="/old">TODO LIST</Link>
          </div>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <div className="text-placeholder seanlist" style={style}>
            <Link href="/old/allmeetups">All Meetups</Link>
          </div>
        </motion.li>
      </Flex>
      <Flex flexDirection="row">
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <div className="text-placeholder seanlist" style={style}>
            <Link href="/old/newmeetup">New Meetup</Link>
          </div>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <div className="text-placeholder seanlist" style={style}>
            <Link href="/old/favorites">Favorites</Link>
          </div>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <div className="text-placeholder seanlist" style={style}>
            <Link href="/old/othershit">Formik Login Form</Link>
          </div>
        </motion.li>

        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <div className="text-placeholder seanlist" style={style}>
            <Link href="/old/framermotion">framermotion</Link>
          </div>
        </motion.li>
      </Flex>
    </>
  );
}
export default ExampleButton;
