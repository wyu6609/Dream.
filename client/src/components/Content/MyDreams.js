import React, { useState, useEffect } from "react";
import Post from "./Post";
import axios from "axios";
import AppPagination from "../pagination";
let pageSize = 5;
const MyDreams = ({
  user,
  dreamwall,

  handleDelete,
  setDreamDescription,
  handleOpen,
}) => {
  const [pagination, setPagination] = React.useState({
    count: 0,
    from: 0,
    to: pageSize,
  });
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
      <AppPagination
        pagination={pagination}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default MyDreams;
