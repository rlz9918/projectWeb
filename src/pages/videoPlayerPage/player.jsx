import * as React from "react";
import ReactPlayer from "react-player";
import "../videoPlayerPage/player-style.css"
export default function Player() {
  return (
    <div class="main-player-container" id="new">
      <div class="player-container">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ILND0weAVA8"
          className="react-player"
          playing
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
