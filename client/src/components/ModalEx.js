import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import NewDream from "./Content/NewDream";
import axios from "axios";
const style = {
  position: "absolute",
  top: "48%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  elevation: 10,
  borderRadius: 2,

  p: { xs: 2 },
};

export default function ModalEx({
  dreamwall,
  setDreamWall,
  open,
  setOpen,
  handleOpen,
  user,
}) {
  const handleClose = () => setOpen(false);
  console.log(dreamwall);

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
    console.log(dreamwall);
    axios
      .post("/dreams", formObj)
      .then(function (response) {
        console.log(response);

        setDreamWall([...dreamwall, formObj]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Modal
        className="accordian"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <NewDream user={user} handleSubmit={handleSubmit} />
        </Box>
      </Modal>
    </div>
  );
}
