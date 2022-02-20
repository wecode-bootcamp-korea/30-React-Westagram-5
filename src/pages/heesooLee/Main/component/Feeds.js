import React from 'react';

function Feeds() {
  return (
    <div className="feeds">
      <div className="feed-title">
        <img
          className="feed-account-image"
          src="/images/heesooLee/account1.png"
        />
        <h4 className="feed-account-id">eden_yoo</h4>
        <img className="more" src="/images/heesooLee/more.png" />
      </div>
      <img className="feed-post-image" src="/images/heesooLee/feedimage.jpg" />
      <div className="feed-bottom">
        <div className="feed-bottom-icon">
          <img className="like-icon" src="/images/heesooLee/like.png" />
          <img className="comment-icon" src="/images/heesooLee/comments.png" />
          <img className="share-icon" src="/images/heesooLee/paper-plane.png" />
          <img className="bookmark-icon" src="/images/heesooLee/bookmark.png" />
        </div>
        <div className="feed-text">
          <p className="feed-likes">23,860 Likes</p>
          <div className="id-caption">
            <a className="account-id">eden_yoo</a>
            <p className="caption">Make it count!</p>
          </div>
        </div>
        <div className="feed-comments">
          <input
            className="comment"
            type="text"
            placeholder="Add a comment..."
          />
          <button className="post-button">Post</button>
        </div>
      </div>
    </div>
  );
}

export default Feeds;
