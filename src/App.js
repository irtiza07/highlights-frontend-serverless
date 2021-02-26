import React, { useState, useEffect } from "react";

import SplashScreen from "./SplashScreen";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const [tags, setTags] = useState([]);
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    if (!user) {
      return;
    }
    fetch(
      `https://iu8i1yjyu0.execute-api.us-east-1.amazonaws.com/users/${user.userId}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTags(data["tags"]);
        setHighlights(data["highlights"]);
      });
  }, [user]);

  return (
    <div className="App">
      {isLoggedIn && user && <Dashboard highlights={highlights} tags={tags} />}

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
