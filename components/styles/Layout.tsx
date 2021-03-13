import { Fragment } from 'react';

import MainNavigation from './main-navigation';

function LayoutTwo(props) {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
}

export default LayoutTwo;
