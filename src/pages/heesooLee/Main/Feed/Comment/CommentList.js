import React from 'react';
import Comment from './Comment';

function CommentList({ commentList }) {
  return (
    <>
      {commentList.map(comment => {
        return (
          <Comment
            key={comment.id}
            name={comment.userName}
            comment={comment.content}
          />
        );
      })}
    </>
  );
}

export default CommentList;
