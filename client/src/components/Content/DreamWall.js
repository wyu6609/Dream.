import React from "react";
import Post from "./Post";
const DreamWall = () => {
  return (
    <div>
      <Post sx={{ py: 2 }} />
      <Post />
      <Post />
    </div>
  );
};

export default DreamWall;
