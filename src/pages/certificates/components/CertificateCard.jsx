import React from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";

export const CertificateCard = ({ item, setSelected }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        width: "80%",
        padding: "0.5rem",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "all 0.3s ease-out",
        ":hover": {
          boxShadow: "0px 1px 1px 1px #01C3CE",
        },
      }}
      onClick={() => setSelected(item)}
    >
      <Typography sx={{ fontWeight: "bold" }}>{item.title}</Typography>
      <Box
        component="img"
        sx={{
          width: "100%",
        }}
        alt="imagen de proyecto"
        src={item.img}
      />
      <Stack
        sx={{
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
          {item.by}
        </Typography>
        <Typography>{item.date}</Typography>
      </Stack>
    </Paper>
  );
};
