import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import PreviewOutlinedIcon from "@mui/icons-material/PreviewOutlined";
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

function Post({ dream, handleOpen, user, handleDelete }) {
  return (
    <Card
      sx={{
        my: 1,
        minWidth: 250,
        height: "90%",
        color: "white",
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        boxShadow: "0 12px 56px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(10px)",
      }}
    >
      <CardContent>
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: 10 }}>{dream.created_at}</Typography>

          <Typography
            variant="body2"
            component="div"
            sx={{ display: "flex", fontSize: 14 }}
          >
            {dream.user.username}

            <Avatar
              {...stringAvatar(
                `${dream.user.first_name} ${dream.user.last_name}`
              )}
              sx={{
                ml: 1,
                bgcolor: stringToColor(
                  `${dream.user.first_name} ${dream.user.last_name}`
                ),
              }}
            />
          </Typography>
        </Container>
        <Container>
          <Link
            underline="hover"
            onClick={() => {
              handleOpen(dream.description);
            }}
            sx={{ color: "white" }}
          >
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {dream.title}
            </Typography>
          </Link>
          {dream.user_id === user.id ? (
            <IconButton
              sx={{ color: "red" }}
              onClick={() => {
                handleDelete(dream.id);
              }}
            >
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          ) : (
            ""
          )}
        </Container>
      </CardContent>
    </Card>
  );
}
export default Post;
