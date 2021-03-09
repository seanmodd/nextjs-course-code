import React from 'react';

const Gridstuff = () => (
  <>
    return (
    <motion.li
      key={id}
      className="card"
      whileHover={{
        position: 'relative',
        zIndex: 1,
        background: 'white',
        scale: [1, 1.4, 1.2],
        rotate: [0, 10, -10, 0],
        filter: [
          'hue-rotate(0) contrast(100%)',
          'hue-rotate(360deg) contrast(200%)',
          'hue-rotate(45deg) contrast(300%)',
          'hue-rotate(0) contrast(100%)',
        ],
        transition: {
          duration: 0.2,
        },
      }}
    >
      <Link href="/character/[id]" as={`/character/${id}`}>
        <a>
          <img src={image} alt={`${name} Thumbnail`} />
          <h3>{name}</h3>
        </a>
      </Link>
    </motion.li>
    );
  </>
);

export default Gridstuff;
