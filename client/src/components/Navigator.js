import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import SettingsSystemDaydreamRoundedIcon from "@mui/icons-material/SettingsSystemDaydreamRounded";
import PermMediaOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActual";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ModalEx from "./ModalEx";
const categories = [
  {
    id: "",
    children: [
      {
        id: "The Dream Wall",
        icon: <PublicRoundedIcon />,
        active: true,
        route: "/",
      },
      {
        id: "My Dreams",
        icon: <SettingsSystemDaydreamRoundedIcon />,
        route: "/my_dreams",
      },

      {
        id: "Dream Library",
        icon: <PermMediaOutlinedIcon />,
        route: "/dream_library",
      },
      {
        id: "Your Info",
        icon: <AccountCircleRoundedIcon />,
        route: "/account",
      },
    ],
  },
];

const item = {
  py: 3,
  grid: "flex-end",
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1,
  justifyContent: "flex-end",
};

export default function Navigator(props) {
  const { ...other } = props;
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleListItemClick = (event, index) => {
    props.setSelectedIndex(index);
  };

  return (
    <>
      <ModalEx open={open} setOpen={setOpen} handleOpen={handleOpen} />
      <Drawer variant="permanent" {...other} elevation={5}>
        <List disablePadding>
          <ListItem
            sx={{
              ...item,
              ...itemCategory,
              fontSize: 22,
              color: "#F8F0FB",
              align: "center",
            }}
          >
            Dream &nbsp;
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M248 16v32.24c-65 3.79-117.8 53.36-126.7 116.86-5-3.2-10.9-5.1-17.3-5.1-17.58 0-32 14.4-32 32 0 14.8 10.21 27.4 23.92 31l3.16 30.2c-.25 63.8 2.62 135.7-2.38 202.3-2.8-7.3-3.04-12.1-4.52-20.9l-12.22 2.2c2.2 13.7 4.98 27 13.12 38.9 23.92-9.3 30.22-60.9 36.62-93.9l-20.9-11.6 24.3-7c2.3-14.3 3.8-23.3 4.6-32.4l-19.5-15.2 20.2.2c0-3.9 0-8.1-.1-12.9-.4-13-11.8-42-23.3-48.2l-3.3-31.7c4.6-1.1 8.7-3.2 12.3-6.1 14.2 56.7 63.9 99.4 124 102.9v9.6c-9.3 3.3-16 12.2-16 22.6 0 11.6 8.3 21.3 19.3 23.5-12.5 3.6-25.2 19.2-23.8 26.2 8.3 41.6 14.9 88.6 30.8 93.1 19.6-19.7 21.6-59.3 25.5-97.1.5-4.8-11.6-18.8-23-22.2 10.9-2.3 19.2-12 19.2-23.5 0-10.4-6.7-19.3-16-22.6v-9.6c60.1-3.5 109.8-46.2 124-102.9 3.9 3.1 8.5 5.4 13.5 6.4l3.3 42.1c-11.6 5.4-21.7 20.6-22.1 32.1-.6 22.2.9 46.4 5.3 70.2l23.2 10.2-21.2-.3c.4 1.9.8 3.7 1.3 5.6l7.6 8.2-5.1 1.4c7.1 25.3 17.8 49 32.9 67.8 5.5-10.5 9.8-22.1 13.1-34.4l-12.2-1.9c-.6 7.8-1.3 15.6-2.1 23.3-5-58.5-4.6-127.2-4.8-183.6l-3.3-41.4c13.1-4.1 22.6-16.3 22.6-30.6 0-17.6-14.4-32-32-32-6.4 0-12.3 1.9-17.3 5.1C381.8 101.6 329 52.03 264 48.24V16h-16zm8 48c66.4 0 120 53.6 120 120s-53.6 120-120 120-120-53.6-120-120S189.6 64 256 64zm-4.8 15.01c-6.8.31-13.4 1.25-19.8 2.78-3.7 7.84-6.2 16.07-7.6 24.41-7-4.9-14.6-8.91-22.7-11.87-5.7 3.5-11 7.57-16 11.97 14.3 3.1 27.1 9.9 37.4 19.4.4 10.6 2.6 21.2 6.5 31.3-10.1-3.9-20.7-6.1-31.3-6.5-9.5-10.3-16.3-23.1-19.4-37.3-4.5 4.9-8.5 10.2-12 15.9 3 8.1 7.1 15.7 12 22.7-8.4 1.4-16.7 3.9-24.5 7.6-1.5 6.4-2.5 13-2.8 19.8 12.2-7.9 26.1-12.2 40.1-12.7 7.8 7.2 16.8 13.2 26.7 17.5-9.9 4.3-18.9 10.3-26.7 17.6-14-.6-27.9-4.8-40.1-12.7.3 6.8 1.3 13.3 2.8 19.7 7.8 3.7 16.1 6.2 24.5 7.6-4.9 7-9 14.6-12 22.7 3.5 5.7 7.5 11 12 15.9 3.1-14.2 9.9-27 19.4-37.3 10.6-.4 21.2-2.6 31.3-6.5-3.9 10.1-6.1 20.6-6.5 31.3-10.3 9.5-23.1 16.3-37.4 19.3 4.9 4.5 10.3 8.6 16 12.1 8.2-3 15.8-7 22.7-11.9 1.4 8.4 3.9 16.6 7.6 24.4 6.4 1.5 12.9 2.5 19.7 2.8-7.9-12.2-12.1-26-12.7-40.1 7.3-7.8 13.3-16.8 17.6-26.7 4.3 9.9 10.3 18.9 17.5 26.7-.5 14-4.8 27.9-12.7 40.1 6.8-.3 13.4-1.3 19.8-2.8 3.7-7.8 6.2-16 7.6-24.4 7 4.9 14.6 8.9 22.7 11.9 5.7-3.5 11.1-7.6 16-12.1-14.3-3-27.1-9.8-37.4-19.3-.4-10.6-2.5-21.2-6.5-31.3 10.1 4 20.7 6.1 31.3 6.5 9.5 10.3 16.3 23.1 19.4 37.3 4.5-4.9 8.5-10.2 12-15.9-3-8.1-7-15.7-11.9-22.7 8.4-1.4 16.6-3.9 24.4-7.6 1.5-6.4 2.5-13 2.8-19.8-12.2 7.9-26.1 12.2-40.1 12.7-7.8-7.2-16.8-13.2-26.7-17.5 9.9-4.3 18.9-10.3 26.7-17.6 14 .6 27.9 4.8 40.1 12.7-.3-6.8-1.3-13.3-2.8-19.7-7.8-3.7-16.1-6.2-24.5-7.6 4.9-7 9-14.6 12-22.7-3.5-5.7-7.6-11.1-12.1-16-3 14.3-9.8 27.1-19.3 37.4-10.7.4-21.2 2.6-31.3 6.5 3.9-10.1 6.1-20.7 6.5-31.3 10.3-9.5 23.1-16.4 37.4-19.4-5-4.5-10.3-8.47-16-11.97-8.1 2.96-15.7 6.97-22.7 11.87-1.4-8.34-3.9-16.57-7.6-24.41-6.4-1.53-13-2.47-19.8-2.78 8 12.2 12.2 26.09 12.8 40.09-7.3 7.8-13.3 16.8-17.6 26.7-4.3-9.9-10.3-18.9-17.6-26.7.6-14 4.8-27.89 12.8-40.09zM256 160c13.2 0 24 10.8 24 24s-10.8 24-24 24-24-10.8-24-24 10.8-24 24-24zm-152 16c8.9 0 16 7.1 16 16s-7.1 16-16 16c-8.93 0-16-7.1-16-16s7.07-16 16-16zm152 0c-4.5 0-8 3.5-8 8s3.5 8 8 8 8-3.5 8-8-3.5-8-8-8zm152 0c8.9 0 16 7.1 16 16s-7.1 16-16 16-16-7.1-16-16 7.1-16 16-16zM87.78 257.7c-10.12 5.9-18.62 15.3-18.82 22.9-2 42.8-.7 90.8 8.7 145.9l14.42 5.6c-3.8-58.4-3.7-116.3-4.3-174.4zM432 268c-.6 51.3-.5 102.5-4.3 154.1l14.4-5c7.6-31.7 9.6-67.4 9.3-103.2l-14.6-.3 14.4-8.4c0-5.7-.1-11.4-.4-17-.2-6.7-8.7-15-18.8-20.2zm-176 76c4.5 0 8 3.5 8 8s-3.5 8-8 8-8-3.5-8-8 3.5-8 8-8zm-4.2 31.6c1.4.3 2.8.4 4.2.4 1.3 0 2.5-.1 3.7-.3l-2.3 90.6-5.6-90.7z"></path>
            </svg>
          </ListItem>
          <ListItem disablePadding sx={{ bgcolor: "#101F33" }} sx={{ py: 1 }}>
            <ListItemButton sx={item} onClick={handleOpen}>
              <ListItemIcon>
                <AddCircleOutlineRoundedIcon />
              </ListItemIcon>
              <ListItemText>Add Dream</ListItemText>
            </ListItemButton>
          </ListItem>
          {categories.map(({ id, children }, index) => (
            <Box key={id} sx={{ bgcolor: "#101F33" }}>
              {children.map(({ id: childId, icon, route }, index) => (
                <ListItem disablePadding key={childId} sx={{ py: 1 }}>
                  <ListItemButton
                    selected={props.selectedIndex === index}
                    sx={item}
                    component={Link}
                    to={route}
                    onClick={(event) => {
                      handleListItemClick(event, index);
                      console.log(props.selectedIndex);
                    }}
                  >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}

              <Divider sx={{ mt: 2 }} />
            </Box>
          ))}
        </List>
      </Drawer>
    </>
  );
}
