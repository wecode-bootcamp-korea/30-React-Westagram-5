import React from 'react';
import './SideBar.scss';

const SideBar = () => {
  return (
    <div className="mainRight">
      <div>
        <div className="mainRightImg">
          <div>
            {/* <!-- 상단 이미지 --> */}
            <img
              className="rightImg"
              alt="profileImg"
              src="/images/yoojungNoh/light.PNG"
            />
          </div>
          <div>nyj_n</div>
        </div>
        <div>
          <p>회원님을 위한 추천</p>
        </div>
        <div className="mainRightImg">
          <div>
            {/* <!-- 추천 아이디 --> */}
            <img
              className="recommendImg"
              alt="profileImg"
              src="/images/yoojungNoh/bluebottle.PNG"
            />
          </div>
          <div>Yookiki</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
