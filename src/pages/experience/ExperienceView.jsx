import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import { ExperienceCard } from "./components/ExperienceCard";

import "./styles.scss";
import { HeaderPage } from "../../components/HeaderPage/HeaderPage";

export const ExperienceView = ({ experiences }) => {
  return (
    <Box
      className="bar-scroll-y"
      sx={{
        overflowY: "scroll",
        height: "calc(100vh - 2rem)",
        paddingRight: 0.5,
      }}
    >
      <HeaderPage title="Experiences" titleColor="white" />
      <Grid container spacing={{ xs: 2, md: 4 }}>
        {experiences.map((item) =>
          item.right ? (
            <Grid item xs={12} md={6}>
              <Stack height="100%">
                <Stack height="100%" justifyContent={"flex-end"}>
                  <Box
                    bgcolor={"#fff"}
                    sx={{
                      width: "52.2%",
                      height: "1rem",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      className="arrowX-1"
                      //   bgcolor={"red"}
                      sx={{
                        height: "1rem",
                      }}
                    />
                  </Box>
                </Stack>
                <Stack height="100%" alignItems={"center"}>
                  <Box
                    bgcolor={"#fff"}
                    sx={{
                      width: "1rem",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      //   bgcolor={"red"}
                      className="arrowY-1"
                      sx={{
                        height: "100%",
                      }}
                    />
                  </Box>
                </Stack>
              </Stack>
            </Grid>
          ) : item.left ? (
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
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      className="arrowX-2"
                      //   bgcolor="red"
                      sx={{
                        height: "1rem",
                      }}
                    />
                  </Box>
                </Stack>
                <Stack height="100%" alignItems={"center"}>
                  <Box
                    bgcolor={"#fff"}
                    sx={{
                      width: "1rem",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      className="arrowY-2"
                      //   bgcolor={"red"}
                      sx={{
                        width: "1rem",
                        height: "100%",
                      }}
                    />
                  </Box>
                </Stack>
              </Stack>
            </Grid>
          ) : item.null ? (
            <Grid item xs={12} md={6}></Grid>
          ) : (
            <Grid item xs={12} md={6}>
              <Stack alignItems={"center"}>
                <ExperienceCard />
              </Stack>
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
};
