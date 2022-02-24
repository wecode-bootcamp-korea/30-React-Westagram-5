import React from 'react';

function Aside() {
  return (
    <aside className="main-right">
      <div className="my-account">
        <img
          className="my-account-image"
          alt="myaccount"
          src="/images/heesooLee/myaccount-image.png"
        />
        <div className="my-account-text">
          <p className="my-account-id">xeexulee</p>
          <p className="my-account-id-detail">my name is Heesu</p>
        </div>
      </div>
      <div className="story">
        <div className="story-text">
          <p className="story-title">Story</p>
          <p className="story-view-all">View All</p>
        </div>
        <div className="story-body">
          <div className="story-profile1">
            <img
              className="story-profile1-image"
              alt="story profile 1"
              src="/images/heesooLee/story-profile1.png"
            />
            <div className="story-profile1-text">
              <p className="story-profile1-id">JisooLee</p>
              <p className="story-time-uploaded">15 minutes</p>
            </div>
          </div>
          <div className="story-profile2">
            <img
              className="story-profile2-image"
              alt="story profile 2"
              src="/images/heesooLee/story-profile2.png"
            />
            <div className="story-profile2-text">
              <p className="story-profile2-id">Shinziro</p>
              <p className="story-time-uploaded">20 minutes</p>
            </div>
          </div>
          <div className="story-profile3">
            <img
              className="story-profile3-image"
              alt="story profile 3"
              src="/images/heesooLee/story-profile3.png"
            />
            <div className="story-profile3-text">
              <p className="story-profile3-id">Yonderrong</p>
              <p className="story-time-uploaded">25 minutes</p>
            </div>
          </div>
          <div className="story-profile4">
            <img
              className="story-profile4-image"
              alt="story profile 4"
              src="/images/heesooLee/story-profile4.png"
            />
            <div className="story-profile4-text">
              <p className="story-profile4-id">Originalshinunge</p>
              <p className="story-time-uploaded">30 minutes</p>
            </div>
          </div>
        </div>
      </div>
      <div className="suggestion">
        <p className="suggestion-title">Suggestions For You</p>
        <div className="suggestion-body">
          <div className="suggestion-profile1">
            <img
              className="suggestion-profile1-image"
              alt="suggestion profile 1"
              src="/images/heesooLee/suggestion-profile1.png"
            />
            <div className="suggestion-profile1-text">
              <p className="suggestion-profile1-id">JinjinHeo</p>
              <p className="suggestion-profile1-followers">Suggested for you</p>
            </div>
          </div>
          <div className="suggestion-profile2">
            <img
              className="suggestion-profile2-image"
              alt="suggestion profile 2"
              src="/images/heesooLee/suggestion-profile2.png"
            />
            <div className="suggestion-profile2-text">
              <p className="suggestion-profile2-id">JunghwanPark</p>
              <p className="suggestion-profile2-followers">
                Followed by ChaeminKim + 3 more
              </p>
            </div>
          </div>
          <div className="suggestion-profile3">
            <img
              className="suggestion-profile3-image"
              alt="suggestion profile 3"
              src="/images/heesooLee/suggestion-profile3.png"
            />
            <div className="suggestion-profile3-text">
              <p className="suggestion-profile3-id">ChaeminKim</p>
              <p className="suggestion-profile3-followers">
                Followed by JinjinHeo + 1 more
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p className="links">
          About · Help · Press · API · Jobs · Privacy ·Terms · Locations · Top ·
          Accounts · Hashtags · Language
        </p>
        <p className="copyright">© 2022 INSTAGRAM FROM META</p>
      </footer>
    </aside>
  );
}

export default Aside;
