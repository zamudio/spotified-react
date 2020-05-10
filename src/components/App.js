import React, { Component } from "react";
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes } from "./ConfigApp";
import hash from "./Hash";
import Player from "./Player";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      item: {
        album: {
          images: [{ url: "" }],
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms: 0,
        id: "",
        // popularity: 0,
      },
      is_playing: "Paused",
      progress_ms: 0,
    };
    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
  }

  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token,
      });
      this.getCurrentlyPlaying(_token);
      // this.getStatsOnCurrentlyPlaying(_token);
    }
  }

  getCurrentlyPlaying(token) {
    // Make a call using the token
    $.ajax({
      url: "https://api.spotify.com/v1/me/player",
      type: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: (data) => {
        this.setState({
          item: data.item,
          is_playing: data.is_playing,
          progress_ms: data.progress_ms,
          id: data.item.id,
          // popularity: data.item.popularity,
        });
      },
    });
  }

  // getStatsOnCurrentlyPlaying(token, _track_id) {
  //   // Make a call using the token
  //   $.ajax({
  //     // url: `https://api.spotify.com/v1/audio-features/${_track_id}`,
  //     // url: "https://api.spotify.com/v1/audio-features/11dFghVXANMlKmJXsNCbNl",
  //     type: "GET",
  //     beforeSend: (xhr) => {
  //       xhr.setRequestHeader("Authorization", "Bearer " + token);
  //     },
  //     success: (d) => {
  //       this.setState({
  //         danceability: d.danceability,
  //       });
  //     },
  //   });
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*  */}
          <h1>Spotified React</h1>
          <p className="descrip">Spot what I'm currently listening to!</p>
          {!this.state.token && (
            <a
              className="btn btn--loginApp-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Log into Spotify
            </a>
          )}
          {this.state.token && (
            <Player
              item={this.state.item}
              is_playing={this.state.is_playing}
              progress_ms={this.progress_ms}
              id={this.state.id}
              // popularity={this.state.popularity}
            />
          )}
        </header>
      </div>
    );
  }
}

export default App;
