import React, { useEffect, useState } from 'react';
import { getToken } from './spotify';
import Login from './Login';
import './App.css';
import Player from './Player';
import SpotifyWebApi from "spotify-web-api-js"
import { useDataLayerValue } from './DataLayer';

// make a instance of spotify object
const spotify=new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] =useDataLayerValue(); 
  useEffect(()=>{
    const hash = getToken();
     window.location.hash="";
     // token is inside the returned object
     const temp_token=hash.access_token;

    // console.log("gaurav",temp_token);

    if(temp_token){
      dispatch({
        type:"SET-TOKEN",
        token: temp_token,
      })

      // set access token 
      spotify.setAccessToken(temp_token);

      // getMe return user
      spotify.getMe().then(_user => {
        dispatch({
          type: 'SET-USER',
          user: _user,
        });
      })
      
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists:playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcFfUDrWJ8VBB").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
        
      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
    }
  },[token,dispatch]); // renders only once

  // console.log("hi",user);
  // console.log("alien",token);

  return (
    <div className="app"> 
      {
        token ? (
          <Player />
        ):(
          <Login />
        )
      }
    </div>
  );
}

export default App;
