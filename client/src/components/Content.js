import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import DreamWall from "./Content/DreamWall";
import Error from "./Content/Error";
export default function Content() {
  return (
    <Routes>
      <Route path="/" element={<DreamWall />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
