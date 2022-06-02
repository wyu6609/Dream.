import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import DreamWall from "./DreamWall";
import MyDreams from "./MyDreams";
import DreamLibrary from "./DreamLibrary";
import Account from "./Account";
import Error from "./Error";
import ModalEx from "../ModalEx";
import axios from "axios";

export default function Content({
  pagination,
  user,
  dreamwall,
  setDreamWall,
  handleDelete,
  handlePageChange,
}) {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <DreamWall
              user={user}
              dreamwall={dreamwall}
              setDreamWall={setDreamWall}
              handleDelete={handleDelete}
              pagination={pagination}
              handlePageChange={handlePageChange}
            />
          }
        />

        <Route
          path="/my_dreams"
          element={
            <MyDreams
              user={user}
              dreamwall={dreamwall}
              setDreamWall={setDreamWall}
              handleDelete={handleDelete}
            />
          }
        />
        <Route path="/dream_library" element={<DreamLibrary />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <ModalEx
        dreamwall={dreamwall}
        setDreamWall={setDreamWall}
        open={openModal}
        setOpen={setOpenModal}
        handleOpen={handleOpen}
        user={user}
        handleSubmit={handleSubmit}
      /> */}
    </>
  );
}
