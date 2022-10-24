import { Avatar, Box, Paper, Stack } from "@mui/material";
import React from "react";

import logo from "../../../../assets/images/avatar.jpg";
import image from "../../../../assets/images/defaultImage.png";

export const HomeCard = () => {
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
          Title
        </Box>
      </Stack>
      <Box component={"p"}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos debitis
        laborum, necessitatibus sed quaerat mollitia! Aliquam necessitatibus
        nisi incidunt atque rem ratione, perspiciatis quia ab enim, nostrum
        aliquid obcaecati ea!
      </Box>
      <Box
        component="img"
        sx={{
          width: "100%",
        }}
        alt="imagen de proyecto"
        src={image}
      />
      <Stack direction={{ xs: "row" }} marginTop={"0.5rem"}>
        <Avatar alt="Remy Sharp" src={logo} sx={{marginRight: "1rem"}} />
        <Avatar alt="Remy Sharp" src={logo} />
      </Stack>
    </Paper>
  );
};
