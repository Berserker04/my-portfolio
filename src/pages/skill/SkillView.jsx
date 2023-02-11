import React from "react";
import { Box, Grid, Paper, Stack } from "@mui/material";

import { SkillCard } from "./components/SkillCard";
import { HeaderPage } from "../../components/HeaderPage/HeaderPage";

export const SkillView = () => {
  return (
    <Box
      className="bar-scroll-y"
      sx={{
        overflowY: "scroll",
        height: "calc(100vh - 2rem)",
        padding: 0.5,
      }}
    >
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
        <HeaderPage title="Skills" />
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
    </Box>
  );
};
