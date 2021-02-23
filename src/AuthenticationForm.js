import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";

import fire from "./utils/fire";

const useStyles = makeStyles((theme) => ({
  input: {
    margin: theme.spacing(4),
  },
  spacing: {
    margin: theme.spacing(4),
    width: theme.spacing(200),
    backgroundColor: "blue",
  },
}));

export default function AuthenticationForm({ setLoggedStatus, setUser }) {
  const classes = useStyles();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user_id"]);

  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setLoggedStatus(true);
      setUser({
        email: user.email,
        displayName: user.displayName,
        userId: user.uid,
      });
      setCookie("user_id", user.uid, {
        path: "/",
      });
    } else {
      setLoggedStatus(false);
      setUser(user);
      removeCookie("user_id");
    }
  });

  const onSignIn = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        console.log("Sign in successful");
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        console.log("Problems when signing in");
      });
  };

  const onSignUp = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("Sign up successful");
        console.log(`Assigned user_id for new user ${userCredential.user.uid}`);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };
  return (
    <div>
      <FormControl className={classes.input}>
        <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
        <Input
          id="input-with-icon-adornment"
          type="email"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl className={classes.input}>
        <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
        <Input
          id="input-with-icon-adornment"
          type="password"
          startAdornment={
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          }
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <div>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "16px" }}
          onClick={onSignIn}
        >
          Sign In
        </Button>
        <Button variant="contained" color="secondary" onClick={onSignUp}>
          Sign Up
        </Button>
      </div>
    </div>
  );
}
