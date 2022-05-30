import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import DreamWall from "./DreamWall";
import MyDreams from "./MyDreams";
import DreamLibrary from "./DreamLibrary";
import Account from "./Account";
import Error from "./Error";
import ModalEx from "../ModalEx";
import axios from "axios";

export default function Content({ user, openModal, setOpenModal, handleOpen }) {
  const [dreamwall, setDreamWall] = React.useState([]);

  React.useEffect(() => {
    axios.get(`/dreams`).then((res) => {
      const dreams = res.data;
      setDreamWall(dreams.slice(0, 5));
    });
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let formObj = {
      user_id: user.id,
      title: data.get("title"),
      description: data.get("description"),
      date: `${data.get("time")} ${data.get("date")}`,
    };
    // axios post

    axios
      .post("/dreams", formObj)
      .then(function (res) {
        setDreamWall([...dreamwall, res.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
            />
          }
        />

        <Route path="/my_dreams" element={<MyDreams user={user} />} />
        <Route path="/dream_library" element={<DreamLibrary />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ModalEx
        dreamwall={dreamwall}
        setDreamWall={setDreamWall}
        open={openModal}
        setOpen={setOpenModal}
        handleOpen={handleOpen}
        user={user}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
