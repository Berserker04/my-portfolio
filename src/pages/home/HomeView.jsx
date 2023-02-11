import { Grid } from "@mui/material";
import React from "react";
import { HomeCard } from "./components/HomeCard";

import "./styles.scss";

const proyectsList = [1, 2, 3, 4, 5];

export const HomeView = () => {
  return (
    <Grid
      container
      // spacing={{xs: 1, md: 2}}
      sx={{
        overflowY: "scroll",
        height: "calc(100vh - 1.5rem)",
        padding: "0.5rem",
      }}
      className="bar-scroll-y"
    >
      {proyectsList.map((proyect, i) => (
        <Grid item sx={{ padding: 0 }} key={i}>
          <HomeCard />
        </Grid>
      ))}
    </Grid>
  );
};
