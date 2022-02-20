import React from 'react';
import './Main.scss';
import Feeds from './component/Feeds';
import Aside from './component/Aside';
import Nav from './component/Nav';

const Main = () => {
  return (
    <>
      <Nav />
      <main className="main">
        <Feeds />
        <Aside />
      </main>
    </>
  );
};

export default Main;
