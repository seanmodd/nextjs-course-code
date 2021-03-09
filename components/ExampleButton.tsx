import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Flex } from '@chakra-ui/layout';

const colors = '#61040a';

export const ExampleButton = () => {
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
            <Link href="/allmeetups">All Meetups</Link>
          </div>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <div className="text-placeholder seanlist" style={style}>
            <Link href="/newmeetup">New Meetup</Link>
          </div>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <div className="text-placeholder seanlist" style={style}>
            <Link href="/favorites">Favorites</Link>
          </div>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <div className="text-placeholder seanlist" style={style}>
            <Link href="/othershit">Other Shit</Link>
          </div>
        </motion.li>

        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <div className="text-placeholder seanlist" style={style}>
            <Link href="/framermotion">framermotion</Link>
          </div>
        </motion.li>
      </Flex>
    </>
  );
};
