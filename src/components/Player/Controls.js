import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
  faUndoAlt,
  faRandom,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

function Controls(props) {
  return (
    <>
      <div className="c-player--controls">
        <button className="random-btn" onClick={() => props.randomSongs()}>
          <FontAwesomeIcon icon={faRandom} />
        </button>
        <button className="skip-btn" onClick={() => props.SkipSong(false)}>
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button
          className="play-btn"
          onClick={() => props.setIsPlaying(!props.isPlaying)}
        >
          <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
        </button>
        <button className="skip-btn" onClick={() => props.SkipSong()}>
          <FontAwesomeIcon icon={faForward} />
        </button>
        <button className="retry-btn" onClick={() => props.retrySong()}>
          <FontAwesomeIcon icon={faUndoAlt} />
        </button>
      </div>
      <div className="volume">
        <button className="lowerVol" onClick={() => props.lowerVol()}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <button className="upperVol" onClick={() => props.upperVol()}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </>
  );
}

export default Controls;
