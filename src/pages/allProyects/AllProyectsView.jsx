import React from "react";
import { Box, Grid, Paper, Stack } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { AllProyectsCard } from "./components/AllProyectsCard";
import Search from "../../components/common/Search";

export const AllProyectsView = ({ allProyects }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
            Proyects
          </Box>
        </Stack>
        <Box component={"hr"} marginBottom={2.5} />
        <Stack direction={"row"} marginBottom="2rem">
            <Search />
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Age</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
        </Stack>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {allProyects.map((proyect, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Stack alignItems={"center"}>
                <AllProyectsCard item={proyect} />
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};
