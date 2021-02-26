import React from "react";

import Box from "@material-ui/core/Box";

import Highlights from "./Highlights";
import TopMenu from "./TopMenu";
import Tags from "./Tags";

export default function Dashboard({ highlights, tags }) {
  return (
    <Box display="flex" flexDirection="column">
      <TopMenu></TopMenu>
      <Box display="flex" flexDirection="row">
        <Tags tags={tags}></Tags>
        <Highlights highlights={highlights}></Highlights>
      </Box>
    </Box>
  );
}
