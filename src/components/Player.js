import React from "react";
import "../Styles/Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player() {
  return (
    <div>
      <div className="player">
        <div className="player_body">
          <Sidebar />
          <Body />
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default Player;
