import React from "react";
import AuthenticationForm from "./AuthenticationForm";

export default function SplashScreen({ setLoggedStatus, setUser }) {
  return (
    <AuthenticationForm setLoggedStatus={setLoggedStatus} setUser={setUser} />
  );
}
