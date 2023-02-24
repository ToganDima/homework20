import React from "react";
import "../publications/Publications.css";
import Post from "./Post";

function Publications() {
  const postData1 = {
    author: {
      name: "Anakin skywalker",
      photo:
        "https://static.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
      nickname: "@dart_vader",
    },
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image:
      "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg",
    date: "27 лют.",
  };
  const postData2 = {
    author: {
      name: "Jason Statham",
      photo: "https://cdn.mos.cms.futurecdn.net/n9Y6P279e9iXhRPHU6TdNF.jpg",
      nickname: "@jason_statham",
    },
    content: "Wow...?",
    image:
      "https://onecms-res.cloudinary.com/image/upload/v1641029364/8days-migration/jason-statham-main-photo-data.jpg",
    date: "24 лют.",
  };

  return (
    <div className="posts-list">
      <Post postData={postData1} />
      <Post postData={postData2} />
    </div>
  );
}

export default Publications;
