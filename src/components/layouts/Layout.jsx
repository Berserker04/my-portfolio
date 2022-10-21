import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { SomeSkill } from "../someSkills/SomeSkill";
import { Slider } from "./components/slider/Slider";

import "./styles.scss";

export const Layout = () => {
  return (
    <Grid className="container" container spacing={2}>
      <Grid
        item
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        xs={12}
        md={3}
      >
        <Slider />
      </Grid>
      <Grid item xs={12} md={6}>
        {/* <Outlet /> */}
        <p>2</p>
      </Grid>
      <Grid item xs={12} md={3}>
        {/* <SomeSkill /> */}
        <p>3</p>
      </Grid>
    </Grid>
    // <div className="container">
    //   <div>
    //     <Slider />
    //   </div>
    //   <div className="main">
    //     <Outlet />
    //   </div>
    //   <div>
    //     <SomeSkill />
    //   </div>
    // </div>
  );
};
