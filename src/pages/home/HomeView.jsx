import { Grid } from "@mui/material";
import React from "react";
import { HomeCard } from "./components/HomeCard/HomeCard";

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
        paddingRight: "0.3rem",
      }}
      className="home-container"
    >
      {proyectsList.map((proyect) => (
        <Grid item sx={{ padding: 0 }}>
          <HomeCard />
        </Grid>
      ))}
    </Grid>
  );
};
