import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";
import { Grid, Stack, Typography, Link } from "@mui/material";

function LocationInformation(props) {
  const { userState } = props;
  const { location, twitter_username, blog, company } = userState;

  return (
    <Grid container spacing={2} sx={{ marginTop: "15px" }}>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <LocationOnIcon />
          {location != null ? (
            <Typography>{location}</Typography>
          ) : (
            <Typography>No disponible </Typography>
          )}{" "}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <TwitterIcon />
          {twitter_username != null ? (
            <Typography>{twitter_username}</Typography>
          ) : (
            <Typography>Este usuario no tiene @ en twitter :c </Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <LanguageIcon />
          {blog != null ? (
            <Link
              href={`https://${blog}`}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              <Typography>{blog}</Typography>
            </Link>
          ) : (
            <Typography>No disponible </Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <BusinessIcon />
          {company != null ? (
            <Typography>{company}</Typography>
          ) : (
            <Typography>No disponible </Typography>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
}

export default LocationInformation;
