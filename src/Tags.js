import React from "react";
import Box from "@material-ui/core/Box";
import IndividualTag from "./IndividualTag";

import Grid from "@material-ui/core/Grid";

export default function Tags({ tags }) {
  const listTags = tags.map((tag, index) => {
    return <IndividualTag key={index} tag={tag}></IndividualTag>;
  });
  if (tags.length == 0) {
    return null;
  }
  return (
    <Box alignSelf="center" style={{ width: "50vw" }}>
      <Grid container>{listTags}</Grid>;
    </Box>
  );
}
