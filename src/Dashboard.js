import React from "react";
import Button from "@material-ui/core/Button";

import fire from "./utils/fire";

export default function Dashboard() {
  const onSignOut = () => {
    fire
      .auth()
      .signOut()
      .then(() => {
        console.log("Successful sign out");
      })
      .catch((error) => {
        console.log(error.code);
        console.log("Problems with sign out");
      });
  };
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={onSignOut}
        style={{ margin: "10px" }}
      >
        Sign Out
      </Button>
    </div>
  );
}
