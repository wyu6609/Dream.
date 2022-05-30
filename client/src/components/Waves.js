import React from "react";
import "./Waves.css";
import Content from "./Content/Content";
import Box from "@mui/material/Box";
const Waves = ({ user, openModal, setOpenModal, handleOpen }) => {
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
          open={openModal}
          setOpen={setOpenModal}
          handleOpen={handleOpen}
        />
      </div>
    </div>
  );
};

export default Waves;
