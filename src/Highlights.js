import React from "react";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import IndividualHighlight from "./IndividualHighlight";

export default function Tags({ highlights, activeFilter }) {
  const listHighlights = highlights.map((highlight, index) => {
    if (activeFilter === "all" || highlight.tag === activeFilter) {
      return (
        <IndividualHighlight
          key={index}
          highlight={highlight}
        ></IndividualHighlight>
      );
    }
  });
  if (highlights.length == 0) {
    return null;
  }

  return (
    <Box alignSelf="center">
      <Grid container>{listHighlights}</Grid>
    </Box>
  );
}
