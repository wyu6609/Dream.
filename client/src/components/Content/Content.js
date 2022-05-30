import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import DreamWall from "./DreamWall";
import MyDreams from "./MyDreams";
import DreamLibrary from "./DreamLibrary";
import Account from "./Account";
import Error from "./Error";

export default function Content() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DreamWall />} />

        <Route path="/my_dreams" element={<MyDreams />} />
        <Route path="/dream_library" element={<DreamLibrary />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
