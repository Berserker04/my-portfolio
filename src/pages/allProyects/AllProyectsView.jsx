import React from "react";
import { Box, Grid, Paper, Stack } from "@mui/material";

import { AllProyectsCard } from "./components/AllProyectsCard";
import { AllProyectFilter } from "./components/AllProyectFilter";
import { HeaderPage } from "../../components/HeaderPage/HeaderPage";

export const AllProyectsView = ({ allProyects, handleSearch, handleFilter }) => {
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
          borderRadius: "15px",
        }}
      >
        <HeaderPage title="Proyects" />
        <AllProyectFilter handleSearch={handleSearch} handleFilter={handleFilter} />
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {allProyects.map((proyect, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Stack alignItems={"center"}>
                <AllProyectsCard item={proyect} />
              </Stack>
            </Grid>
          ))}
          {allProyects.length === 0 && (
            <Grid item xs={12}>
              <Box
                component={"p"}
                textAlign="center"
              >
                No projects found.
              </Box>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Box>
  );
};
