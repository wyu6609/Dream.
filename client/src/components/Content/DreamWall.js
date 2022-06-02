import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./DreamWall.css";
import AppPagination from "../pagination";
import DreamDescriptionModal from "../DreamDescriptionModal";
const DreamWall = ({
  user,
  dreamwall,
  setDreamWall,
  handleDelete,
  pagination,
  handlePageChange,
}) => {
  //map dreams to post

  // modal state
  const [open, setOpen] = useState(false);
  // dream description
  const [dreamDescription, setDreamDescription] = useState("");

  const handleOpen = (description) => {
    setDreamDescription(description);

    setOpen(true);
  };

  const dreams = dreamwall.map((dream) => {
    return (
      <Post
        key={dream.id}
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
      <AppPagination
        pagination={pagination}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default DreamWall;
