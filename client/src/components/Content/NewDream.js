import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
export default function NewDream({
  user,
  dreamwall,
  setDreamWall,
  handleSubmit,
  onClose,
}) {
  return (
    <Container component="main" maxWidth="xs" sx={{ p: 1 }}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Dream title"
            name="title"
            autoComplete="title"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="description"
            label="Description"
            id="description"
            multiline
            rows={6}
          />

          <Box sx={{ display: "flex", justifyContent: "space-even" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="time"
              type="time"
              id="time"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="date"
              type="date"
              id="date"
            />
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Dream
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
