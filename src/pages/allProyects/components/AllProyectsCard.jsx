import React from "react";
import { Avatar, Box, Paper, Stack, Typography } from "@mui/material";

import logo from "../../../assets/images/avatar.jpg";

export const AllProyectsCard = ({ item }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        width: "80%",
        padding: "0.5rem",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "all 0.3s ease-out",
        ":hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>{item.title}</Typography>
      <Box
        component="img"
        sx={{
          width: "100%",
        }}
        alt="imagen de proyecto"
        src={item.img}
      />
      <Stack
        sx={{
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        {/* <Typography>{item.date}</Typography> */}
      </Stack>
      <Stack direction={{ xs: "row" }} marginTop={"0.5rem"}>
        <Avatar
          alt="Remy Sharp"
          src={logo}
          sx={{
            marginRight: "1rem",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
        />
        <Avatar
          alt="Remy Sharp"
          src={logo}
          sx={{
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
        />
      </Stack>
    </Paper>
  );
};
