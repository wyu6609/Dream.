import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./DreamWall.css";
import axios from "axios";
const DreamWall = () => {
  //map dreams to post
  const [dreamwall, setDreamWall] = React.useState([]);
  React.useEffect(() => {
    axios.get(`/dreams`).then((res) => {
      const dreams = res.data;

      setDreamWall(dreams.slice(0, 4));
      console.log(dreamwall);
    });
  }, []);
  console.log(dreamwall);
  const dreams = dreamwall.map((dream) => {
    return <Post dream={dream} />;
  });

  //map dreams with Post
  return <div className="post-container  ">{dreams}</div>;
};

export default DreamWall;
