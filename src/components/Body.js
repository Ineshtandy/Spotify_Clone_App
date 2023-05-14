import React from "react";
import "../Styles/Body.css";
import Header from "./Header";
import { useStateValue } from "../DataLayer";

function Body(spotify) {
  const [{ discover_weekly }, dispatch] = useStateValue();
  console.log(discover_weekly);

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0]?.url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
