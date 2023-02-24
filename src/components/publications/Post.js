import React from "react";
import "../publications/Post.css";
import PostActions from "./PostActions";
import authorizedIcon from "../../images/correct.png";

const Post = (props) => {
  const postInfo = props.postData;
  return (
    <div className="post">
      <div className="author-logo">
        <img src={postInfo.author.photo} alt="author logo" />
      </div>
      <div className="post-info">
        <div className="author">
          <p className="author-name">{postInfo.author.name}</p>
          <img src={authorizedIcon} alt="autorized user" />
          <p className="author-nick">{postInfo.author.nickname}</p>
          <p className="post-date">{postInfo.date}</p>
        </div>
        <div className="post-desc">
          <p>{postInfo.content}</p>
        </div>
        <div className="main-image">
          <img className="post-img" src={postInfo.image} alt="main" />
          <PostActions postImgUrl={postInfo.image} />
        </div>
      </div>
    </div>
  );
};

export default Post;
