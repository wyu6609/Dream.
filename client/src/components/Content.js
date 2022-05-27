import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import DreamWall from "./Content/DreamWall";
import YourDreams from "./YourDreams";
import Error from "./Content/Error";
export default function Content() {
  return (
    <Routes>
      <Route path="/" element={<DreamWall />} />

      <Route path="/" element={<YourDreams />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
