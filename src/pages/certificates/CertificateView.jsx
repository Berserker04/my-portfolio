import React from "react";
import { Box, Grid, Paper, Stack } from "@mui/material";

import { CertificateCard } from "./components/CertificateCard";
import { HeaderPage } from "../../components/HeaderPage/HeaderPage";

export const CertificateView = ({ certificates, setSelected }) => {
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
        <HeaderPage title="Certificates" />
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
