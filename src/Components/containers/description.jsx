import React from "react";
import { Typography, Stack } from "@mui/material";
import PaperInformation from "../PaperInformation";
import LocationInformation from "../LocationInformation";

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;
  return (
    <React.Fragment>
      <Stack sx={{justifyContent:"center"}}>
        {bio != null ? (
          <Typography variant="body1">{bio}</Typography>
        ) : (
          <Typography variant="body1">Este usuario no tiene una descripción :D</Typography>
        )}
      </Stack>
      <PaperInformation  userState={userState} />
      <LocationInformation userState={userState} />
    </React.Fragment>
  );
};

export default Description;
