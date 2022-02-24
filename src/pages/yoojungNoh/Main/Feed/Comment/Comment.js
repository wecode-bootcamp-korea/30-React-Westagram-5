import React, { useState, useEffect } from 'react';
import './Comment.scss';

const Comment = ({ comment, onRemove }) => {
  return (
    <div className="commentViewBox">
      <ul>
        return (
        <div className="commentFlex" key={comment.key}>
          <span className="commentUser">{comment.userName}</span>
          <li className="commentStyle">{comment.content}</li>
          <button className="delete" onClick={() => onRemove(comment.id)}>
            X
          </button>
        </div>
        );
      </ul>
    </div>
  );
};

export default Comment;
