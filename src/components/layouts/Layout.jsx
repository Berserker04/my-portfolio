import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { SomeSkill } from "../someSkills/SomeSkill";
import { Slider } from "./components/slider/Slider";

import "./styles.scss";

export const Layout = () => {
  return (
    <Grid container spacing={2} sx={{ marginTop: "0.5rem" }}>
      <Grid item xs={12} md={2}>
        <Slider />
      </Grid>
      <Grid item xs={12} md={8}>
        <Outlet />
      </Grid>
      <Grid item xs={12} md={2}>
        <SomeSkill />
      </Grid>
    </Grid>
  );
};
