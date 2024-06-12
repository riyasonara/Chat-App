import { Grid, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={12}>
        <Typography variant="h2" color="error">
          404 - Page Not Found
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">
          Sorry, the page you are looking for does not exist.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NotFound;
