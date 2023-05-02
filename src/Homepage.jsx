import React from 'react';
import Header from './Header';
import "./Homepage.css";
import Posts from './Posts';
import SideBar from './SideBar';

function Homepage() {
  return (
    <div>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </div>
  )
}

export default Homepage
