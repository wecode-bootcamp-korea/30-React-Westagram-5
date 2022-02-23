import './Main.scss';
// import { BiSearch, BiCompass, BiHeart } from 'react-icons/bi';
// import {
//   BsPerson,
//   BsFillEmojiHeartEyesFill,
//   BsDownload,
//   BsBookmark,
// } from 'react-icons/bs';
// import { AiOutlineHeart } from 'react-icons/ai';
// import { FaRegComment } from 'react-icons/FaReg';

function MainYunsook() {
  return (
    <nav>
      <div className="nav-left">
        <div className="gn-container">
          <div className="gn-icon">
            <button className="btn">button</button>
            <p>Westagram</p>
          </div>
          <div className="nav-search">
            <form className="search-bar">
              <input
                required
                maxlength="15"
                className="id"
                type="type"
                // onChange={updateIdValue}
                placeholder="전화번호, 사용자 이름또는 이메일"
                name="name"
              />
            </form>
            <span>BsSearch</span>
          </div>
          <div className="nav-right">
            <div className="nav-container">
              <span>BiCompass</span>
              <span>BiHeart</span>
              <span>BsPerson</span>
            </div>
          </div>
        </div>
      </div>
      // {/* // add </nav> closing tag here!!!!!! */}
      <div className="main">
        <div className="feeds">
          <div className="feeds-container">
            <span>BsFillEmojiHeartEyesFill</span>
            <p>
              wecode_bootcamp<span>wecode 위코드</span>
            </p>
            <img src="./images/feeds_images1.jpeg" />
          </div>
          <div className="comments"></div>
          <div className="comments-container">
            <span>AiOutlineHeart</span>
            <span>FaRegComment</span>
            <span>BsDownload</span>
            <span>BsBookmark</span>
            <button className="더 보기">더 보기</button>
            <input type="text" placeholder="댓글 달기..." />
            <button className="comments-btn">게시</button>
          </div>
        </div>
        <div className="story">
          <div className="story-container">
            <p>스토리</p>
            <a href="#" alt="모두 보기">
              모두 보기
            </a>
            <img src="#" alt="" />
            <p>story listing</p>
          </div>
        </div>
        <div className="recomendation">
          <div className="recommendation-container">
            <p>회원을 위한 추천</p>
            <a>
              className="App-link" href="https://reactjs.org" target="_blank"
              rel="noopener noreferrer" alt="모두 보기"
            </a>
            <img src="#" alt="" />
            <p>story listing</p>
          </div>
        </div>
        <div className="company">
          <a href="#">
            <ul>
              <li>Westagram 정보 &amp;</li>
              <li>지원 &amp;</li>
              <li>홍보 센터 &amp;</li>
              <li>API &amp;</li>
              <li>채용 정보 &amp;</li>
              <li>개인정보처리방침 &amp;</li>
              <li>약관 &amp;</li>
              <li>디렉토리 &amp;</li>
              <li>프로필 &amp;</li>
              <li>해시태그 &amp;</li>
              <li>언어 &amp;</li>
              <li>&copy; 2022 Westagram</li>
            </ul>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default MainYunsook;
