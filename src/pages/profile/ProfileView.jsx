import React from "react";
import { Avatar, Box, Grid, Paper, Stack, Typography } from "@mui/material";

import logo from "../../assets/images/avatar.jpg";
import gif from "../../assets/images/developGif.gif";

export const ProfileView = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        padding: "1rem 1.5rem",
        boxSizing: "border-box",
        marginBottom: "1rem",
        borderRadius: "15px",
      }}
    >
      <Stack direction={{ xs: "row" }} alignItems={{ xs: "center" }}>
        <Avatar
          alt="Remy Sharp"
          src={logo}
          sx={{ width: "4rem", height: "4rem" }}
        />
        <Box component={"h2"} marginLeft={{ xs: "0.8rem" }}>
          Carlos A. Hernández C.
        </Box>
      </Stack>
      <Box component={"hr"} />
      <Grid container spacing={{ xs: 2, md: 2 }}>
        <Grid item xs={12} md={6}>
          <Stack direction={{ xs: "column" }} marginTop={"0.5rem"}>
            <Typography sx={{ fontWeight: "bold" }}>Profession</Typography>
            <Typography>Desarrollo de software</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction={{ xs: "column" }} marginTop={"0.5rem"}>
            <Typography sx={{ fontWeight: "bold" }}>Area</Typography>
            <Typography>Full Stack</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction={{ xs: "column" }} marginTop={"0.5rem"}>
            <Typography sx={{ fontWeight: "bold" }}>Mejoring in</Typography>
            <Typography>BackEnd</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction={{ xs: "column" }} marginTop={"0.5rem"}>
            <Typography sx={{ fontWeight: "bold" }}>
              Number of certificates
            </Typography>
            <Typography>
              50{" "}
              <Box component={"a"} href="google.com">
                show
              </Box>
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction={{ xs: "column" }} marginTop={"0.5rem"}>
            <Typography sx={{ fontWeight: "bold" }}>English level</Typography>
            <Typography>A2</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction={{ xs: "column" }} marginTop={"0.5rem"}>
            <Typography sx={{ fontWeight: "bold" }}>E-mail</Typography>
            <Typography>chernandezcopete@gmail.com</Typography>
          </Stack>
        </Grid>
      </Grid>
      {/* <Box component={"hr"} /> */}
      <Box
        component="img"
        sx={{
          width: "100%",
          marginTop: 3
        }}
        alt="git progammer"
        src={gif}
      />
    </Paper>
  );
};
