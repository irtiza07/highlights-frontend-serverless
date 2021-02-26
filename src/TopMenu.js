import React from "react";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

export default function TopMenu() {
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
    <Box textAlign="end" padding="16px">
      <Button
        color="primary"
        variant="contained"
        size="large"
        onClick={onSignOut}
      >
        Sign Out
      </Button>
    </Box>
  );
}
