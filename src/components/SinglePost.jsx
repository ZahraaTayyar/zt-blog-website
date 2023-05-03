import React from "react";
import "../styles/SinglePost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1486944859394-ed1c44255713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Zahraa</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
          veniam perspiciatis porro vitae quia aliquam esse ullam minus odio
          similique, explicabo debitis corporis veritatis ipsum officiis
          blanditiis libero dicta dolores!Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Magni, veniam perspiciatis porro vitae
          quia aliquam esse ullam minus odio similique, explicabo debitis
          corporis veritatis ipsum officiis blanditiis libero dicta
          dolores!Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Magni, veniam perspiciatis porro vitae quia aliquam esse ullam minus
          odio similique, explicabo debitis corporis veritatis ipsum officiis
          blanditiis libero dicta dolores!
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
