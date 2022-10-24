import React from "react";
import { Box, Grid, Paper, Stack } from "@mui/material";

import { CertificateCard } from "./components/CertificateCard";
import { CertificateModal } from "./components/CertificateModal";

export const CertificateView = () => {
  return (
    <Box
      className="bar-scroll-y"
      sx={{
        overflowY: "scroll",
        height: "calc(100vh - 2rem)",
        paddingRight: 0.5,
      }}
    >
        {/* <CertificateModal/> */}
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
          <Grid item xs={12} md={6}>
            <Stack alignItems={"center"}>
              <CertificateCard />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack alignItems={"center"}>
              <CertificateCard />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack alignItems={"center"}>
              <CertificateCard />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack alignItems={"center"}>
              <CertificateCard />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack alignItems={"center"}>
              <CertificateCard />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack alignItems={"center"}>
              <CertificateCard />
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
