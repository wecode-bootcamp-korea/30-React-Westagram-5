import React from 'react';
import './Comment.scss';

const Comment = ({ key, name, comment }) => {
  return (
    <div className="feed-comment-box">
      <div className="feed-comment" key={key}>
        <p className="account-id">{name}</p>
        <p className="comment">{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
