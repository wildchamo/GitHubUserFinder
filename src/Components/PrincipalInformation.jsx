import { Typography, Stack } from "@mui/material";
import React from "react";

const PrincipalInformation = (props) => {
  const { userState } = props;

  const { name, login, created_at } = userState;

  return (
    <React.Fragment>
      <Stack>
        <Typography>{name}</Typography>
        <Typography>{created_at}</Typography>
      </Stack>
      <Typography>{login}</Typography>
    </React.Fragment>
  );
};

export default PrincipalInformation;
