import * as React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { FormControl, TextField } from "@mui/material";

export default function Search({ handleSearch }) {
  return (
    <FormControl sx={{ m: 1, width: "100%" }} size="small">
      {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <TextField
        size="small"
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ "aria-label": "search google maps" }}
        onChange={({ target }) => handleSearch(target.value)}
      />
      <IconButton
        type="button"
        sx={{ p: "10px", position: "absolute", right: 0 }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton> */}
    </FormControl>
  );
}
