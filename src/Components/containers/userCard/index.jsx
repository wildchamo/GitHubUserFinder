import { CardMedia, Grid } from "@mui/material";
import React from "react";
import PrincipalInformation from "../../PrincipalInformation";
import Description from "../description";

const UserCard = (props) => {
    const { userState } = props;
    const { avatar_url } = userState;

  return (
    <Grid container>
      <Grid item xs={3}>
        <CardMedia component="img" image={avatar_url} alt="GitHub User" />
      </Grid>
      <Grid item xs={9}>
        <PrincipalInformation userState={userState} />
      </Grid>
      <Description userState={userState} />
    </Grid>
  );
};

export default UserCard;
