import React from "react";
import "../Styles/Body.css";
import Header from "./Header";
import { useStateValue } from "../DataLayer";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from "./SongRow";

function Body(spotify) {
  const [{ discover_weekly }, dispatch] = useStateValue();

  // const playPlaylist = (id) => {
  //   spotify
  //     .play({
  //       context_uri: `spotify:playlist:37i9dQZEVXcEuRPSe4CIuN`,
  //     })
  //     .then((res) => {
  //       spotify.getMyCurrentPlayingTrack().then((r) => {
  //         dispatch({
  //           type: "SET_ITEM",
  //           item: r.item,
  //         });
  //         dispatch({
  //           type: "SET_PLAYING",
  //           playing: true,
  //         });
  //       });
  //     });
  // };

  const playPlaylist = () => {
    alert("Playing Playlist");
  };

  // const playSong = (id) => {
  //   spotify
  //     .play({
  //       uris: [`spotify:track:${id}`],
  //     })
  //     .then((res) => {
  //       spotify.getMyCurrentPlayingTrack().then((r) => {
  //         dispatch({
  //           type: "SET_ITEM",
  //           item: r.item,
  //         });
  //         dispatch({
  //           type: "SET_PLAYING",
  //           playing: true,
  //         });
  //       });
  //     });
  // };

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

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        <div className="body__background">
          {discover_weekly?.tracks.items.map((item) => (
            <SongRow trackInfo={item.track} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
