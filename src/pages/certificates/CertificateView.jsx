import React from "react";
import { Box, Grid, Paper, Stack } from "@mui/material";

import { CertificateCard } from "./components/CertificateCard";

export const CertificateView = ({ certificates, setSelected }) => {
  return (
    <Box
      className="bar-scroll-y"
      sx={{
        overflowY: "scroll",
        height: "calc(100vh - 2rem)",
        paddingRight: 0.5,
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
        <Stack
          direction={{ xs: "row" }}
          alignItems={{ xs: "center" }}
          justifyContent={"center"}
        >
          <Box component={"h2"} textAlign={"center"}>
            Certificates
          </Box>
        </Stack>
        <Box component={"hr"} marginBottom={2.5} />
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {certificates.map((cert, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Stack alignItems={"center"}>
                <CertificateCard item={cert} setSelected={setSelected} />
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};
