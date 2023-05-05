import React from "react";
import "../styles/Settings.css";
import SideBar from "./SideBar";

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>

        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.unsplash.com/photo-1486944859394-ed1c44255713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <label htmlFor="fileInput" className="newPP">
              <i className="settingsPPIcon fa-solid fa-image"></i>
              <i className="newPPPlusIcon fa-regular fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>

          <label>Username</label>
          <input type="text" placeholder="Zahraa" />
          <label>Email</label>
          <input type="email" placeholder="zahraatayyar@gmail.com" />
          <label>Password</label>
          <input type="password" />

          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}

export default Settings;
