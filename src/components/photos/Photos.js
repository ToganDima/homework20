import React from "react";
import "../photos/Photos.css";

function Photos() {

  const imageData = [
    {
      url: "https://images.unsplash.com/photo-1611416457332-946853cc75d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmlnaHQlMjBjaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Beijing, China",
    },
    {
      url: "https://images.unsplash.com/photo-1542642839-83adadcbe645?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmlnaHQlMjBjaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Guangzhou, China",
    },
    {
      url: "https://images.unsplash.com/photo-1606152536277-5aa1fd33e150?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5pZ2h0JTIwY2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Warszawa, Poland",
    },
    {
      url: "https://images.unsplash.com/photo-1603793510575-a8cf24361baa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fG5pZ2h0JTIwY2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Kuala Lumpur, Malaisia",
    },
    {
      url: "https://images.unsplash.com/photo-1628164304740-dfef5f3a9c39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG5pZ2h0JTIwY2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Brooklyn, USA",
    },
    {
      url: "https://images.unsplash.com/photo-1571182092747-f3491824b90a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG5pZ2h0JTIwY2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "NYC, USA",
    },
  ];

  const imgList = imageData.map((value, index) => {
    return (
      <div className="photo-box" key={index.toString()}>
        <img src={value.url} alt="nigth city" />
        <span className="photo-desc">{value.title}</span>
      </div>
    );
  });

  return (
    <div className="photo-container">
      <h2>Night city</h2>
      <div className="photo-list">{imgList}</div>
    </div>
  );
}

export default Photos;
