import { CardMedia, Grid } from "@mui/material";
import React from "react";

const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;

  return (
    <Grid contenedor>
      <Grid item xs={3}>
        <CardMedia component="img" image={avatar_url} alt="GitHub User" />
      </Grid>
      <Grid item xs={9}></Grid>
    </Grid>
  );
};

export default UserCard;
