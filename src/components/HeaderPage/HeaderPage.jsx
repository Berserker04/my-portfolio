import { Box, Stack } from "@mui/material";
import React from "react";

export const HeaderPage = ({ title, titleColor = "black" }) => {
  return (
    <>
      <Stack
        direction={{ xs: "row" }}
        alignItems={{ xs: "center" }}
        justifyContent={"center"}
      >
        <Box component={"h2"} textAlign={"center"} color={titleColor}>
          {title}
        </Box>
      </Stack>
      <Box component={"hr"} marginBottom={2.5} />
    </>
  );
};
