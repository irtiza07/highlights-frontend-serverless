import React from "react";
import Box from "@material-ui/core/Box";

export default function IndividualHighlight({ highlight }) {
  return (
    <Box>
      <img src={highlight.sourcePicture}></img>
      <p>{highlight.sourceTitle}</p>
      <p>{highlight.tag}</p>
      <p>{highlight.sourceDomain}</p>
      <a href={highlight.sourceURL}>Original URL</a>
      <p>{highlight.text}</p>
    </Box>
  );
}
