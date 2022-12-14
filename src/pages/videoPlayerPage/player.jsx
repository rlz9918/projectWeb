import * as React from "react";
import ReactPlayer from "react-player";
import "../videoPlayerPage/player-style.css"
export default function Player(props) {
  return (
    <div class="main-player-container" id="new" ref={props.reference}>
      <div class="player-container">
        <ReactPlayer
          url= "https://www.youtube.com/watch?v=nCx8c53foBs"
          className="react-player"
          playing={false}
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
