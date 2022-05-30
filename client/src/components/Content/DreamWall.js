import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./DreamWall.css";
import axios from "axios";
import DreamDescriptionModal from "../DreamDescriptionModal";
const DreamWall = ({ user }) => {
  console.log(user);
  //map dreams to post
  const [dreamwall, setDreamWall] = useState([]);
  // modal state
  const [open, setOpen] = useState(false);
  // dream description
  const [dreamDescription, setDreamDescription] = useState("");

  const handleOpen = (description) => {
    setDreamDescription(description);

    setOpen(true);
  };

  useEffect(() => {
    axios.get(`/dreams`).then((res) => {
      const dreams = res.data;

      setDreamWall(dreams.slice(0, 5));
    });
  }, []);

  const fetchDreams = () => {
    fetch("/dreams")
      .then((resp) => resp.json())
      .then((data) => setDreamWall(dreams.slice(0, 4)));
  };

  console.log(dreamwall);
  const dreams = dreamwall.map((dream) => {
    return (
      <Post
        dream={dream}
        handleOpen={handleOpen}
        setDreamDescription={setDreamDescription}
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
