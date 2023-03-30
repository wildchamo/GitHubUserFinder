import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";
import { Grid, Stack,Typography } from "@mui/material";

function LocationInformation(props) {
  const { userState } = props;
  const { location, twitter_username, blog, company } = userState;

  return (
    <Grid container>
      <Grid item xs={6}>
        <Stack>
          <LocationOnIcon />
          <Typography>{location}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <TwitterIcon />
          <Typography>{twitter_username}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <LanguageIcon />
          <Typography>{blog}</Typography>

        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <BusinessIcon />
          <Typography>{company}</Typography>

        </Stack>
      </Grid>
    </Grid>
  );
}

export default LocationInformation;
