import React, { useState, useEffect } from "react";
import Post from "./Post";
import axios from "axios";
const MyDreams = ({
  user,
  dreamwall,
  setDreamWall,
  handleDelete,
  setDreamDescription,
  handleOpen,
}) => {
  const dreams = dreamwall
    .filter((el) => el.user.id === user.id)
    .map((dream) => {
      return (
        <Post
          user={user}
          dream={dream}
          handleOpen={handleOpen}
          setDreamDescription={setDreamDescription}
          handleDelete={handleDelete}
        />
      );
    });

  return <div className="post-container">{dreams}</div>;
};

export default MyDreams;
