import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Search from "../../../components/common/Search";
import { Stack } from "@mui/material";

export const AllProyectFilter = ({ handleSearch,  handleFilter}) => {
  const [age, setAge] = React.useState("allProyects");

  const handleChange = (event) => {
    setAge(event.target.value);
    handleFilter(event.target.value)
  };

  return (
    <Stack direction={"row"} marginBottom="2rem">
      <Search handleSearch={handleSearch} />
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Filter</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={age}
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem value={"allProyects"}>All proyects</MenuItem>
          <MenuItem value={"movil"}>App movil</MenuItem>
          <MenuItem value={"web"}>Web site</MenuItem>
          <MenuItem value={"desktop"}>App desktop</MenuItem>
          <MenuItem value={"backend"}>Banckend</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};
