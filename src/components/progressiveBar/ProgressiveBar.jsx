import { Box } from "@mui/material";
import React from "react";

export const ProgressiveBar = ({ percentage }) => {
  return (
    <Box
      sx={{
        height: "0.7rem",
        width: "100%",
        backgroundColor: "#E8E8E4",
        borderRadius: 15,
      }}
    >
      <Box
        sx={{
          height: "0.7rem",
          width: percentage + "%",
          backgroundColor: "#01C3CE",
          borderRadius: 15,
        }}
      />
    </Box>
  );
};
