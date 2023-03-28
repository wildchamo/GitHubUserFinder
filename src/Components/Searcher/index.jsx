import React, { useState } from "react";
import { Stack, TextField, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Searcher(props) {

  const { inputUser, setInputUser } = props;
  
  const handleSubmit = () => {};
  return (
    <Stack
      sx={{
        direction: "row",
        marginTop: "30px",
        width: "80%",
      }}
    >
      <TextField
        id="outlined-basic"
        label="GitHub User"
        placeholder="Introduce the github user u wanna search"
        sx={{
          width: "90%",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSubmit}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
}

export { Searcher };
