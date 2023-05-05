import React from "react";
import "../styles/Single.css";
import SideBar from "./SideBar";
import SinglePost from "./SinglePost";

function Single() {
  return (
    <div className="single">
      <SinglePost />
      <SideBar />
    </div>
  );
}

export default Single;
