import React from 'react';
import Nav from './Nav/Nav';
import Feed from './Feed/Feed';
// import Comment from './Feed/Comment/Comment';
import SideBar from './Feed/SideBar/SideBar';
import './Main.scss';

const MainYoojung = () => {
  return (
    <>
      <Nav />
      <div className="main">
        <Feed />
        <div>
          <main>
            <br />
            <section className="main" />
            <SideBar />
          </main>
        </div>
      </div>
    </>
  );
};
export default MainYoojung;
