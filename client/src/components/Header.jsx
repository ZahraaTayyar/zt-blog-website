import React from 'react';
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>

      <img
        src="https://images.unsplash.com/photo-1490358797389-318e9366b034?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="flowers"
        className="headerImg"
      />
    </div>
  );
}

export default Header
