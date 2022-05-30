import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import NewDream from "./Content/NewDream";

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

  open,
  setOpen,
  handleOpen,
  user,
  handleSubmit,
}) {
  const handleClose = () => setOpen(false);
  console.log(dreamwall);

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
