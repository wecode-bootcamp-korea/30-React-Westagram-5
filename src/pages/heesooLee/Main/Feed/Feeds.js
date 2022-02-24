import React, { useEffect, useState } from 'react';
import PostComment from './Comment/PostComment';
import CommentList from './Comment/CommentList';

function Feeds() {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json')
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);

  return (
    <div className="feeds">
      <div className="feed-title">
        <img
          className="feed-account-image"
          alt="feed account 1"
          src="/images/heesooLee/account1.png"
        />
        <h4 className="feed-account-id">eden_yoo</h4>
        <img className="more" alt="more" src="/images/heesooLee/more.png" />
      </div>
      <img
        className="feed-post-image"
        alt="feed post"
        src="/images/heesooLee/feedimage.jpg"
      />
      <div className="feed-bottom">
        <div className="feed-bottom-icon">
          <img
            className="like-icon"
            alt="like icon"
            src="/images/heesooLee/like.png"
          />
          <img
            className="comment-icon"
            alt="comment icon"
            src="/images/heesooLee/comments.png"
          />
          <img
            className="share-icon"
            alt="share icon"
            src="/images/heesooLee/paper-plane.png"
          />
          <img
            className="bookmark-icon"
            alt="bookmark icon"
            src="/images/heesooLee/bookmark.png"
          />
        </div>

        <p className="feed-likes">23,860 Likes</p>
        <div className="feed-comment-box">
          {/* <div className="feed-account-caption">
            <p className="feed-account-id">eden_yoo</p>
            <p className="feed-caption">Make it count!</p>
          </div> */}
          <CommentList commentList={commentList} />
          <PostComment />
        </div>
      </div>
    </div>
  );
}

export default Feeds;
