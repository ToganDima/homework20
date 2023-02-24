import React from "react";
import "./PostActions.css";
import commentImg from "../../images/comment.png";
import shareImg from "../../images/repeat.png";
import likeImg from "../../images/heart.png";
import downloadImg from "../../images/download.png";

const PostActions = (props) => {

  return (
    <div className="post-actions">
      <div className="post-comments">
        <img src={commentImg} alt="comment-img" />
        <span>446</span>
      </div>
      <div className="post-sharing">
        <img src={shareImg} alt="shares-img" />
        <span>147</span>
      </div>
      <div className="post-likes">
        <img src={likeImg} alt="like" />
        <span>886</span>
      </div>
      <div className="post-download">
        <img src={downloadImg} alt="download" />
      </div>
    </div>
  );
};

export default PostActions;
