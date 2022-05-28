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
          <Typography variant="body2" component="div" sx={{ display: "flex" }}>
            user
            <Avatar sx={{ ml: 1, width: 24, height: 24 }} />
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
