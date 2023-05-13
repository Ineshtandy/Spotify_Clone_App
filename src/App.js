import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  //const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    //this removes the access token from the url for security reasons but we have it stored in hash
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
  }, []);

  console.log("person", user);
  console.log("toke -> ", token);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
