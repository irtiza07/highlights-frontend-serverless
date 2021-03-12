import React from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export default function IndividualTag({ tag, activeFilter, setActiveFilter }) {
  const onTagClick = () => {
    if (tag === activeFilter) {
      setActiveFilter("all");
    } else {
      setActiveFilter(tag);
    }
  };
  return (
    <Grid item xs={2}>
      <Button
        variant={tag === activeFilter ? "contained" : "outlined"}
        color="primary"
        style={{ margin: "4px" }}
        onClick={() => onTagClick()}
      >
        {tag}
      </Button>
    </Grid>
  );
}
