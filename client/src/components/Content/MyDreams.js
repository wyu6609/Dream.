import React, { useState, useEffect } from "react";
import Post from "./Post";
import axios from "axios";
const MyDreams = () => {
  //my dream wall state
  const [myDreamWall, setMyDreamWall] = useState([]);

  useEffect(() => {
    axios.get("/mydreams").then((res) => {
      const myDreams = res.data;
      console.log(myDreams);
      setMyDreamWall(myDreams);
    });
  }, []);

  const dreams = myDreamWall.map((dream) => {
    return <Post dream={dream} />;
  });

  return <div className="post-container">{dreams}</div>;
};

export default MyDreams;
