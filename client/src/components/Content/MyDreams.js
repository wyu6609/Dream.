import React, { useState, useEffect } from "react";
import Post from "./Post";
import axios from "axios";
import AppPagination from "../pagination";
import DreamDescriptionModal from "../DreamDescriptionModal";
let pageSize = 5;
const MyDreams = ({
  user,
  dreamwall,

  handleDelete,
}) => {
  const [pagination, setPagination] = React.useState({
    count: 0,
    from: 0,
    to: pageSize,
  });
  const [open, setOpen] = useState(false);
  const [dreamDescription, setDreamDescription] = useState("");
  const handleOpen = (description) => {
    setDreamDescription(description);

    setOpen(true);
  };
  const dreams = dreamwall
    .filter((el) => el.user.id === user.id)
    .slice(pagination.from, pagination.to)
    .map((dream) => {
      return (
        <Post
          user={user}
          dream={dream}
          handleOpen={handleOpen}
          setDreamDescription={setDreamDescription}
          handleDelete={handleDelete}
          setDreamDescription={setDreamDescription}
        />
      );
    });

  useEffect(() => {
    setPagination({ ...pagination, count: dreams.length });
  }, []);
  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    <>
      <div className="post-container">{dreams}</div>
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

export default MyDreams;
