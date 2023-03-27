import React from "react";
import { Stack, TextField, IconButton } from "@mui/material";

function Searcher() {
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
        defaultValue="Hello World"
        sx={{
          width: "90%",
        }}
      />
      <IconButton></IconButton>
    </Stack>
  );
}

export { Searcher };
