import React from "react";
import { Avatar, Grid, Paper, Stack, Typography } from "@mui/material";

import logo from "../../../assets/images/avatar.jpg";

export const ExperienceCard = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        width: "90%",
        padding: "0.5rem",
        borderRadius: "10px",
      }}
    >
      <Grid container>
        <Grid item marginBottom={1}>
          <Stack direction={"row"} alignItems={"center"}>
            <Avatar
              alt="Remy Sharp"
              src={logo}
              sx={{ width: "3rem", height: "3rem" }}
            />
            <Stack marginLeft={7.5}>
              <Typography sx={{ fontWeight: "bold" }}>Laboured</Typography>
              <Typography>6 meses</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item marginBottom={1}>
          <Stack
            direction={{ xs: "column" }}
            justifyContent={"center"}
            marginLeft={"0.5rem"}
            width={"100%"}
          >
            <Typography sx={{ fontWeight: "bold" }}>Buiness</Typography>
            <Typography>Sena (fabrica de software)</Typography>
          </Stack>
          <Stack
            direction={{ xs: "column" }}
            justifyContent={"center"}
            marginLeft={"0.5rem"}
            width={"100%"}
          >
            <Typography sx={{ fontWeight: "bold" }}>Position</Typography>
            <Typography>Software developer</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};
