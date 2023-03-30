import { Typography, Stack } from "@mui/material";
import React from "react";

const PrincipalInformation = (props) => {
  const { userState } = props;

  const { name, login, created_at } = userState;

  return (
    <React.Fragment>
      <Stack direction="row" sx={{
        justifyContent:"space-between"
      }}>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle2">{created_at}</Typography>
      </Stack>
      <Typography variant="caption">@{login}</Typography>
    </React.Fragment>
  );
};

export default PrincipalInformation;
