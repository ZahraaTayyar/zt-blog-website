import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <img
        src="https://images.unsplash.com/photo-1486944859394-ed1c44255713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="Landscape of mountains and hills with lots of purple flowers"
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
        quas possimus ad placeat, voluptatem a reprehenderit tempore minus quia
        ullam in labore nemo. Tempora, velit dolor? Rerum veniam laudantium
        consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Accusantium quas possimus ad placeat, voluptatem a reprehenderit tempore
        minus quia ullam in labore nemo. Tempora, velit dolor? Rerum veniam
        laudantium consectetur. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Accusantium quas possimus ad placeat, voluptatem a
        reprehenderit tempore minus quia ullam in labore nemo. Tempora, velit
        dolor? Rerum veniam laudantium consectetur.
      </p>
    </div>
  );
}

export default Post;
