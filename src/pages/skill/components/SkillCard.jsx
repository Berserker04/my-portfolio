import React from "react";
import { Avatar, Paper, Stack, Typography } from "@mui/material";

import logo from "../../../assets/images/avatar.jpg";
import { ProgressiveBar } from "../../../components/progressiveBar/ProgressiveBar";

export const SkillCard = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        width: "60%",
        padding: "0.5rem",
        borderRadius: "10px",
      }}
    >
      <Stack
        direction={{ xs: "row" }}
        sx={{
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={logo}
          sx={{ width: "3rem", height: "3rem" }}
        />
        <Stack
          direction={{ xs: "column" }}
          justifyContent={"center"}
          marginLeft={"0.5rem"}
          width={"100%"}
        >
          <Typography sx={{ fontWeight: "bold" }}>Node Js</Typography>
          <ProgressiveBar percentage={70} />
        </Stack>
      </Stack>
    </Paper>
  );
};
