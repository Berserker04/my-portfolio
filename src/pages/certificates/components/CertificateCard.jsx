import React from "react";
import { Avatar, Box, Paper, Stack, Typography } from "@mui/material";

import logo from "../../../assets/images/avatar.jpg";
import image from "../../../assets/images/defaultImage.png";
import { ProgressiveBar } from "../../../components/progressiveBar/ProgressiveBar";

export const CertificateCard = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        width: "80%",
        padding: "0.5rem",
        borderRadius: "10px",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>Node Js</Typography>
      <Box
        component="img"
        sx={{
          width: "100%",
        }}
        alt="imagen de proyecto"
        src={image}
      />
      <Stack
        sx={{
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize:20 }}>Platzi</Typography>
        <Typography>2018-06-22</Typography>
      </Stack>
    </Paper>
  );
};
