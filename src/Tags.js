import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import IndividualTag from "./IndividualTag";

import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";

import "./Tags.scss";

const INVALID_SEARCH_TERMS = ["", null, " "];

export default function Tags({ tags, activeFilter, setActiveFilter }) {
  const [searchTag, setSearchTag] = useState(null);
  console.log(searchTag);
  const listTags = tags.map((tag, index) => {
    if (!INVALID_SEARCH_TERMS.includes(searchTag)) {
      if (tag.includes(searchTag)) {
        return (
          <IndividualTag
            key={index}
            tag={tag}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          ></IndividualTag>
        );
      }
    } else {
      return (
        <IndividualTag
          key={index}
          tag={tag}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        ></IndividualTag>
      );
    }
  });

  if (tags.length == 0) {
    return null;
  }
  return (
    <Box alignSelf="center" style={{ width: "50vw" }}>
      <Input
        placeholder="Search Tag"
        onChange={(e) => setSearchTag(e.target.value)}
      ></Input>
      <Grid container>{listTags}</Grid>
    </Box>
  );
}
