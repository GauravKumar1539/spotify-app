import React from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import { MoreHoriz, PlayCircleFilled } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  // console.log("achbd",discover_weekly);
  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        {/* Pulling image from API */}
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilled className="body_shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHoriz />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow  playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
