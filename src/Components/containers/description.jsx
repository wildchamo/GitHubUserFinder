import React from "react";
import { Typography, Stack } from "@mui/material";
import PaperInformation from "../PaperInformation";

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;
  return (
    <React.Fragment>
      <Stack>
        {bio != null ? (
          <Typography>{bio}</Typography>
        ) : (
          <Typography>Este usuario no tiene una descripción :D</Typography>
        )}
      </Stack>
      <PaperInformation userState={userState} />
      {/* <LocationInformation></LocationInformation> */}
    </React.Fragment>
  );
};

export default Description;
