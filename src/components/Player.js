import React from "react";
import "../Styles/Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player(spotify) {
  return (
    <div>
      <div className="player">
        <div className="player_body">
          <Sidebar />
          <Body spotify={spotify} />
        </div>

        <Footer spotify={spotify} />
      </div>
    </div>
  );
}

export default Player;
