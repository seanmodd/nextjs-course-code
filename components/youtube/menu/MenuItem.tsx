import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AllMeetups from '../../../pages/allmeetups';
import NewMeetups from '../../../pages/newmeetup';
import Favorites from '../../../pages/favorites';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = '#61040a';
const items = [
  'TODO LIST',
  'New Meetup',
  'All Meetups',
  'Favorites',
  'Other Stuff',
];
const itemLinks = [
  <AllMeetups />,
  <NewMeetups />,
  <Favorites />,
  <Favorites />,
  <Favorites />,
];
export const MenuItem = () => {
  const style = { border: `2px solid ${colors}` };
  const name = items;
  const links = itemLinks;
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-placeholder seanlist" style={style}>
        <Link href="/">TODO LIST</Link>
      </div>
      <div className="text-placeholder seanlist" style={style}>
        <Link href="/allmeetups">All Meetups</Link>
      </div>
      <div className="text-placeholder seanlist" style={style}>
        <Link href="/newmeetup">New Meetup</Link>
      </div>
      <div className="text-placeholder seanlist" style={style}>
        <Link href="/favorites">Favorites</Link>
      </div>
      <div className="text-placeholder seanlist" style={style}>
        <Link href="/othershit">Other Shit</Link>
      </div>
    </motion.li>
  );
};
