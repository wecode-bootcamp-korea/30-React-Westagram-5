import React, { useEffect, useState } from 'react';
import Nav from './Nav/Nav';
import Feed from './Feed/Feed';
// import Comment from './Feed/Comment/Comment';
import SideBar from './Feed/SideBar/SideBar';
import './Main.scss';

const MainYoojung = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/commentData.json')
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);
  return (
    <>
      <Nav />
      {/* <div className="mainWrap"> */}
      <div className="main">
        {/* <div className="feedList"> */}
        {/* {feedList.map(feed => {
              console.log('피드');
              return (
                <Feed
                  key={feed.id}
                  userName={feed.userName}
                  userImg={feed.userImg}
                  feedImg={feed.feedImg}
                  feedContent={feed.feedContent}
                  commenttest={feed.comment}
                />
              );
            })} */}
        <Feed />
        <div>
          <main>
            <br />
            <section className="main" />
            <SideBar />
          </main>
        </div>
        {/* </div> */}
      </div>
      {/* </div> */}
    </>
  );
};
export default MainYoojung;
