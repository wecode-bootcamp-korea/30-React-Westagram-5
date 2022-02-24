import React from 'react';
import './Main.scss';
import Feeds from './Feed/Feeds';
import Aside from './Aside/Aside';
import Nav from '../Nav/Nav';

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
