import React from "react";
import { Box, Grid, Paper, Stack } from "@mui/material";

import { SkillCard } from "./components/skillCard/SkillCard";

export const SkillView = () => {
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
      <Stack
        direction={{ xs: "row" }}
        alignItems={{ xs: "center" }}
        justifyContent={"center"}
      >
        <Box component={"h2"} textAlign={"center"}>
          Skills
        </Box>
      </Stack>
      <Box component={"hr"} marginBottom={2.5}/>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        <Grid item xs={12} md={6}>
          <Stack alignItems={"center"}>
            <SkillCard />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack alignItems={"center"}>
            <SkillCard />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack alignItems={"center"}>
            <SkillCard />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack alignItems={"center"}>
            <SkillCard />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack alignItems={"center"}>
            <SkillCard />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack alignItems={"center"}>
            <SkillCard />
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};
