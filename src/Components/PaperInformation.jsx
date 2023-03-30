import React from "react";
import { Paper, Stack, Typography } from "@mui/material";

function PaperInformation(props) {
  const { userState } = props;
  const { public_repos, followers, following } = userState;

  return (
    <React.Fragment>
      <Paper elevation={3}>
        <Stack>
          <Stack>
            <Typography>Repos</Typography>
            <Typography>{public_repos}</Typography>
          </Stack>
          <Stack>
            <Typography>Followers</Typography>
            <Typography>{followers}</Typography>
          </Stack>
          <Stack>
            <Typography>Following</Typography>
            <Typography>{following}</Typography>
          </Stack>
        </Stack>
      </Paper>
    </React.Fragment>
  );
}

export default PaperInformation;
