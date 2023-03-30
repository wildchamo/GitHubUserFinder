import React, { useState } from "react";
import { Stack, TextField, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Searcher(props) {
  const { setInputUser } = props;
  const [valueInput, setValueInput] = useState("");

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
  };
  const onHandleSubmit = () => {
    setInputUser(valueInput);
  };


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
        value={valueInput}
        onChange={onSearchValueChange}
        sx={{
          width: "90%",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={onHandleSubmit }  >
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
