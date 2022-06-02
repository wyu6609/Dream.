import React from "react";
import "./Waves.css";
import Content from "./Content/Content";
import Box from "@mui/material/Box";
const Waves = ({
  user,
  dreamwall,
  setDreamWall,
  handleDelete,
  pagination,
  handlePageChange,
}) => {
  return (
    <div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Content
          user={user}
          dreamwall={dreamwall}
          setDreamWall={setDreamWall}
          handleDelete={handleDelete}
          pagination={pagination}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Waves;
