import React from "react";
import "./Waves.css";
import Content from "./Content/Content";
import Box from "@mui/material/Box";
const Waves = () => {
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
        <Content />
      </div>
    </div>
  );
};

export default Waves;
