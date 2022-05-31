import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./DreamWall.css";

import DreamDescriptionModal from "../DreamDescriptionModal";
const DreamWall = ({ user, dreamwall, setDreamWall, handleDelete }) => {
  console.log(user);
  //map dreams to post

  // modal state
  const [open, setOpen] = useState(false);
  // dream description
  const [dreamDescription, setDreamDescription] = useState("");

  const handleOpen = (description) => {
    setDreamDescription(description);

    setOpen(true);
  };
  console.log(dreamwall);
  // useEffect(() => {
  //   axios.get(`/dreams`).then((res) => {
  //     const dreams = res.data;

  //     setDreamWall(dreams.slice(0, 5));
  //   });
  // }, []);

  console.log(dreamwall);
  const dreams = dreamwall.map((dream) => {
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

  //map dreams with Post
  return (
    <>
      <div className="post-container">{dreams} </div>

      <DreamDescriptionModal
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        dreamDescription={dreamDescription}
      />
    </>
  );
};

export default DreamWall;
