import React from 'react';
import './Feed.scss';
import Comment from './Comment/Comment';

const Feed = () => {
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
                <Comment />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Feed;
