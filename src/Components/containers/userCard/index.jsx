import { CardMedia, Grid, Stack } from "@mui/material";
import React from "react";
import PrincipalInformation from "../../PrincipalInformation";
import Description from "../description";

const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;

  return (
    <Grid
      sx={{
        marginTop: "15px",
      }}
      spacing={2}
      container
    >
      <Grid item xs={3}>
        <CardMedia
          sx={{ borderRadius: "50%", marginLeft: "5px" }}
          component="img"
          image={avatar_url}
          alt="GitHub User"
        />
      </Grid>
      <Grid item xs={9}>
        <Stack direction="column" spacing={1} sx={{
          margin:"23px"
        }}>
          <PrincipalInformation userState={userState} />
          <Description userState={userState} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default UserCard;
