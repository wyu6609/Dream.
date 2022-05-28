import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard() {
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
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <Card
      sx={{
        my: 1,
        minWidth: 275,
        color: "white",
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        boxShadow: "0 12px 56px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(10px)",
      }}
    >
      <CardContent>
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: 10 }}>10:00:00 AM, 12/12/22</Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{ display: "flex", fontSize: 14 }}
          >
            user
            <Avatar {...stringAvatar("Kent Dodds")} sx={{ ml: 1 }} />
          </Typography>
        </Container>
        <Container>
          <Typography
            variant="body1"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            I was chased by monkeys man...
          </Typography>
        </Container>
      </CardContent>
    </Card>
  );
}

// <Accordion
//   disableGutters
//   false
//   elevation={5}
//   expanded={expanded === "panel1"}
//   onChange={handleChange("panel1")}
//   sx={{
//     backgroundColor: "rgba(255, 255, 255, 0.25)",
//     boxShadow: "0 12px 56px 0 rgba(31, 38, 135, 0.37)",
//     backdropFilter: "blur(4px)",
//     color: "white",
//     "&:hover": {
//       backgroundColor: "grey",
//     },
//   }}
// >
//   <AccordionSummary
//     className="fancy_card "
//     expandIcon={<ExpandMoreIcon />}
//     aria-controls="panel1bh-content"
//     id="panel1bh-header"
//   >
//     <Typography
//       variant="body2"
//       sx={{ width: "33%", flexShrink: 0, fontSize: "12px" }}
//     >
//       10:00:00 AM 05/12/22
//     </Typography>

//     <Typography variant="body1" sx={{ width: "95%", ml: 1 }}>
//       I was being chased by a monkey..
//     </Typography>
//     <Typography sx={{ flexShrink: 0, px: 1 }}>User</Typography>
//     <Avatar sx={{ width: 24, height: 24 }} />
//   </AccordionSummary>

//   <AccordionDetails onChange={handleChange("panel1")}>
//     <Typography>
//       Being chased by a monkey. In a tree house? Theres a floating cat. Oh
//       boy. Being chased by a monkey. In a tree house? Theres a floating cat.
//       Oh boy.Being chased by a monkey. In a tree house? Theres a floating
//       cat. Oh boy.Being chased by a monkey. In a tree house? Theres a
//       floating cat. Oh boy.
//     </Typography>
//   </AccordionDetails>
// </Accordion>
//   );
// }
