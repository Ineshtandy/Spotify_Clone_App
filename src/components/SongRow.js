import React from "react";
import "../Styles/SongRow.css";

function SongRow(trackInfo) {
  const playSong = (trackName) => {
    alert(`Now Playing ${trackName}`);
  };

  return (
    <div
      className="songRow"
      onClick={() => {
        playSong(trackInfo.trackInfo.name);
      }}
    >
      <img
        className="songRow__album"
        src={trackInfo.trackInfo.album.images[0].url}
        alt=""
      />
      <div className="songRow__info">
        <h1>{trackInfo.name}</h1>
        <p>
          {trackInfo.trackInfo.artists.map((artist) => artist.name).join(", ")}{" "}
          - {trackInfo.trackInfo.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
