import React from "react";
import "./Navbar.css";
import { Avatar, WhiteLogo } from "../../assets/ImageIndex";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="headerDiv">
          <div>
            <div className="humburger">
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <img src={WhiteLogo} alt="YouTube Logo" title="YouTube" />
          </div>
          <div className="searchContainer">
            <div className="searchBox">
              <input type="text" placeholder="Search" />
              <span className="material-symbols-rounded">close</span>
            </div>
            <div className="searchBtn">
              <span className="material-symbols-rounded">search</span>
            </div>
            <div className="searchMic">
              <span className="material-symbols-rounded">mic</span>
            </div>
          </div>
          <div className="profileContainer">
            <span className="material-symbols-rounded">add_box</span>
            <span className="material-symbols-rounded">notifications</span>
            <img src={Avatar} alt="" title="TheNotoriousMac" />
          </div>
        </div>

        <div className="profileBtns">
          <div className="avatarInfo profileTab">
            <img src={Avatar} alt="Your Avatar" title="Avatar" />
            <p>TheNotoriousMac</p>
          </div>
          <div className="horizontalLine"></div>
          <div className="profileTabs">
            <div className="profileTabs">
              <div className="profileTab">
                <span className="material-symbols-rounded">account_box</span>
                <p>Your Channel</p>
              </div>
              <div className="profileTab">
                <span className="material-symbols-rounded">play_circle</span>
                <p>Youtube Studio</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
