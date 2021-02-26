import React from "react";
import IndividualHighlight from "./IndividualHighlight";

export default function Tags({ highlights }) {
  const listHighlights = highlights.map((highlight, index) => {
    return (
      <IndividualHighlight
        key={index}
        highlight={highlight}
      ></IndividualHighlight>
    );
  });
  if (highlights.length == 0) {
    return null;
  }
  return <ul>{listHighlights}</ul>;
}
