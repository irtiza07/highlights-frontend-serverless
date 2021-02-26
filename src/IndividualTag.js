import React from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";


export default function IndividualTag({ tag }) {
  return (
    <Grid item xs={2}>
      <Button variant="outlined" color="primary" style={{ margin: "4px" }}>
        {tag}
      </Button>
    </Grid>
  );
}
