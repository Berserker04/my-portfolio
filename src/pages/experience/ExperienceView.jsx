import React from "react";
import { Box, Grid, Paper, Stack } from "@mui/material";
import { ExperienceCard } from "./components/ExperienceCard";

export const ExperienceView = () => {
  return (
    <Box
      className="bar-scroll-y"
      sx={{
        overflowY: "scroll",
        height: "calc(100vh - 2rem)",
        paddingRight: 0.5,
      }}
    >
      {/* <Paper
        elevation={3}
        sx={{
          width: "100%",
          padding: "1rem 1.5rem",
          boxSizing: "border-box",
          marginBottom: "1rem",
          borderRadius: "15px",
        }}
      > */}
      <Stack
        direction={{ xs: "row" }}
        alignItems={{ xs: "center" }}
        justifyContent={"center"}
      >
        <Box component={"h2"} textAlign={"center"} color="white">
          Experiences
        </Box>
      </Stack>
      <Box component={"hr"} marginBottom={2.5} />
      <Grid container spacing={{ xs: 2, md: 4 }}>
        <Grid item xs={12} md={6}>
          <Stack alignItems={"center"}>
            <ExperienceCard />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack height="100%">
            <Stack height="100%" justifyContent={"flex-end"}>
              <Box
                bgcolor={"#fff"}
                sx={{
                  width: "52.2%",
                  height: "1rem",
                }}
              />
            </Stack>
            <Stack height="100%" alignItems={"center"}>
              <Box
                bgcolor={"#fff"}
                sx={{
                  width: "1rem",
                  height: "100%",
                }}
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack height="100%">
            <Stack
              height="100%"
              justifyContent={"flex-end"}
              alignItems="flex-end"
            >
              <Box
                bgcolor={"#fff"}
                sx={{
                  width: "52.2%",
                  height: "1rem",
                }}
              />
            </Stack>
            <Stack height="100%" alignItems={"center"}>
              <Box
                bgcolor={"#fff"}
                sx={{
                  width: "1rem",
                  height: "100%",
                }}
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack alignItems={"center"}>
            <ExperienceCard />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack alignItems={"center"}>
            <ExperienceCard />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack height="100%">
            <Stack height="100%" justifyContent={"flex-end"}>
              <Box
                bgcolor={"#fff"}
                sx={{
                  width: "52.2%",
                  height: "1rem",
                }}
              />
            </Stack>
            <Stack height="100%" alignItems={"center"}>
              <Box
                bgcolor={"#fff"}
                sx={{
                  width: "1rem",
                  height: "100%",
                }}
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack height="100%">
            <Stack
              height="100%"
              justifyContent={"flex-end"}
              alignItems="flex-end"
            >
              <Box
                bgcolor={"#fff"}
                sx={{
                  width: "52.2%",
                  height: "1rem",
                }}
              />
            </Stack>
            <Stack height="100%" alignItems={"center"}>
              <Box
                bgcolor={"#fff"}
                sx={{
                  width: "1rem",
                  height: "100%",
                }}
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack alignItems={"center"}>
            <ExperienceCard />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack alignItems={"center"}>
            <ExperienceCard />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack height="100%">
            <Stack height="100%" justifyContent={"flex-end"}>
              <Box
                bgcolor={"#fff"}
                sx={{
                  width: "52.2%",
                  height: "1rem",
                }}
              />
            </Stack>
            <Stack height="100%" alignItems={"center"}>
              <Box
                bgcolor={"#fff"}
                sx={{
                  width: "1rem",
                  height: "100%",
                }}
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack height="100%">
            <Stack
              height="100%"
              justifyContent={"flex-end"}
              alignItems="flex-end"
            >
              <Box
                bgcolor={"#fff"}
                sx={{
                  width: "52.2%",
                  height: "1rem",
                }}
              />
            </Stack>
            <Stack height="100%" alignItems={"center"}>
              <Box
                bgcolor={"#fff"}
                sx={{
                  width: "1rem",
                  height: "100%",
                }}
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack alignItems={"center"}>
            <ExperienceCard />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack alignItems={"center"}>
            <ExperienceCard />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack height="100%">
            <Stack height="100%" justifyContent={"flex-end"}>
              <Box
                bgcolor={"#fff"}
                sx={{
                  width: "52.2%",
                  height: "1rem",
                }}
              />
            </Stack>
            <Stack height="100%" alignItems={"center"}>
              <Box
                bgcolor={"#fff"}
                sx={{
                  width: "1rem",
                  height: "100%",
                }}
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <Stack alignItems={"center"}>
            <ExperienceCard />
          </Stack> */}
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack alignItems={"center"}>
            <ExperienceCard />
          </Stack>
        </Grid>
      </Grid>
      {/* </Paper> */}
    </Box>
  );
};
