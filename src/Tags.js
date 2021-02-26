import React from "react";
import IndividualTag from "./IndividualTag";

export default function Tags({ tags }) {
  const listTags = tags.map((tag, index) => {
    return <IndividualTag key={index} tag={tag}></IndividualTag>;
  });
  if (tags.length == 0) {
    return null;
  }
  return <ul>{listTags}</ul>;
}
