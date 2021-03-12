import React, { useState } from "react";

import Box from "@material-ui/core/Box";

import Highlights from "./Highlights";
import TopMenu from "./TopMenu";
import Tags from "./Tags";

export default function Dashboard({ highlights, tags }) {
  const [activeFilter, setActiveFilter] = useState("all");
  return (
    <Box display="flex" flexDirection="column">
      <TopMenu></TopMenu>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        padding="3vw"
      >
        <Tags
          tags={tags}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        ></Tags>
        <Highlights
          highlights={highlights}
          activeFilter={activeFilter}
        ></Highlights>
      </Box>
    </Box>
  );
}
