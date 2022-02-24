import React, { useState } from 'react';
import './Feed.scss';
import Comment from './Comment/Comment';

let comment_id = 1;

const Feed = () => {
  const [isInput, setIsInput] = useState(false);
  const [comment, setComment] = useState('');
  const [commentList, setcommentList] = useState([]);

  // const postComent = e => {
  //   setComment(e.target.value);
  // };

  const commentInput = e => {
    setComment(e.target.value);
  };

  const onComment = e => {
    e.preventDefault();
    if (comment === '') return;

    setcommentList([
      ...commentList,
      {
        userName: 'yoo',
        content: comment,
        id: comment_id,
      },
    ]);
    setComment('');
    comment_id += 1;
  };

  const onRemove = id => {
    setcommentList(commentList.filter(comment => comment.id !== id));
  };

  return (
    <section className="main">
      <div>
        <div>
          <article>
            <div className="feedsMain">
              <div className="feedIdText">
                {/* <!-- 피드 상단 프로필이미지 & 아이디 --> */}
                <img
                  className="profileImg"
                  alt="profileImg"
                  src="/images/yoojungNoh/light.PNG"
                />
                <div>nyj_n</div>
                {/* <!-- nyj_n --> */}
              </div>
              <img
                className="feedImg"
                alt="profileImg"
                src="/images/yoojungNoh/sakura.PNG"
              />
              <div className="feedBottomIcon">
                <div>
                  {/* <!-- 피드 하단 아이콘 --> */}
                  <img
                    className="feedIcon"
                    alt="heartIcon"
                    src="/images/yoojungNoh/heart.png"
                  />
                  <img
                    className="feedIcon"
                    alt="chatIcon"
                    src="/images/yoojungNoh/chat-bubble.png"
                  />
                  <img
                    className="feedIcon"
                    alt="directIcon"
                    src="/images/yoojungNoh/direct-instagram.png"
                  />
                </div>
                <div>
                  <img
                    className="feedIcon"
                    alt="saveIcon"
                    src="/images/yoojungNoh/save-instagram.png"
                  />
                </div>
              </div>
              {/* <!-- 피드 좋아요 --> */}
              <div className="feedBottom">
                <div>누군가 좋아합니다</div>
                <div className="commentTextStyle">
                  <div className="idStyle">nyj_n</div>
                  <a>벚꽃 🌸</a>
                </div>
                <ul>
                  {commentList.map((comment, index) => (
                    <Comment
                      key={index}
                      id={comment_id}
                      // name={comment.userName}
                      comment={comment}
                      onRemove={onRemove}
                    />
                  ))}
                </ul>
                <section className="comment">
                  <div>
                    <div className="commentBox">
                      {/* <!-- 피드댓글 input --> */}
                      <input
                        value={comment}
                        onKeyUp={e =>
                          e.target.value.length > 0
                            ? setIsInput(true)
                            : setIsInput(false)
                        }
                        onChange={commentInput}
                        id="commentInput"
                        type="text "
                        placeholder="댓글달기.."
                      />
                      <button
                        id="commentBtn"
                        onclick={onComment}
                        disabled={isInput ? false : true}
                      >
                        게시
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Feed;
