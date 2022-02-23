import React from 'react';
import './Comment.scss';

const Comment = () => {
  return (
    <>
      <div className="commentViewBox">
        <div className="commentFlex">
          <span className="commentUser">yookiki</span>
          <li className="commentStyle">여긴 어디?</li>
        </div>
      </div>
      <section className="comment">
        <div>
          <div className="commentBox">
            {/* <!-- 피드댓글 input --> */}
            <input id="commentInput" type="text " placeholder="댓글달기.." />
            <button id="commentBtn">게시</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Comment;
