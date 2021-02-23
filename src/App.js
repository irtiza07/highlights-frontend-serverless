import React, { useState } from "react";

import SplashScreen from "./SplashScreen";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {isLoggedIn && <Dashboard />}

      {!isLoggedIn && (
        <SplashScreen
          setLoggedStatus={setIsLoggedIn}
          setUser={setUser}
          isLoggedIn={isLoggedIn}
        />
      )}
    </div>
  );
}

export default App;
