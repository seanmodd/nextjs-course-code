import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Flex } from '@chakra-ui/layout';

const colors = '#61040a';

function ExampleButton() {
  const style = { border: `1px solid ${colors}` };

  return (
    <>
      <Flex>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <div className="text-placeholder seanlist" style={style}>
            <Link href="/">TODO LIST</Link>
          </div>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <div className="text-placeholder seanlist" style={style}>
            <Link href="/old/allmeetups">All Meetups</Link>
          </div>
        </motion.li>
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
            <Link href="/old/othershit">Other Shit</Link>
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
