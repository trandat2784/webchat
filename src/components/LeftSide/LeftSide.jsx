import "./LeftSide.css";
import assets from "../../assets/assets";
function LeftSide() {
  return (
    <div>
      <div className="ls">
        <div className="ls-top">
          <div className="ls-nav">
            <img src={assets.logo} alt="" className="ls-logo" />
            <div className="menu">
              <img src={assets.menu_icon} className="ls-menu-more" alt="" />
              <div className="sub-menu">
                <p>Edit profile</p>
                <hr/>
                <p>Log out</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ls-search">
          <img src={assets.search_icon} alt="" className="ls-icon-search" />
          <input
            type="text"
            placeholder="Search here"
            className="ls-input-search"
          />
        </div>
        <div className="ls-list">
          <div className="friends">
            <img src={assets.profile_img} alt="" />
            <div className="friends-info">
              <p>Tran dat</p>
              <span>Hello</span>
            </div>
          </div>
          <div className="friends">
            <img src={assets.profile_img} alt="" />
            <div className="friends-info">
              <p>Tran dat</p>
              <span>Hello</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
