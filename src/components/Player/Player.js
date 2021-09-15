import React, { useState, useRef, useEffect } from "react";
import Controls from "./Controls";
import Details from "./Details";

function getRandomInt(temp, max) {
  let result = Math.floor(Math.random() * max);

  while (result === temp) {
    result = Math.floor(Math.random() * max);
  }

  return result;
}

function Player(props) {
  //o método useRef é essencial pra pausar e continuar a música de onde parou, pois ele recebe um argumento
  //e retorna uma key reference, no qual, a referência é um objeto.
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  //sempre que algo mudar, ele vai checar se isPlaying é false ou true.
  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  //uma funçao básica pra passar a música, caso forward true, passa a música pra
  //frente, caso false, volta pra música anterior.
  //E também uma validação caso temp seja maior ou menor do que o tamanho da lista de músicas.
  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;
        //console.log(temp);
        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  //reiniciando o Som, setando currentTime do som pra zero.
  const retrySong = () => {
    audioEl.current.currentTime = 0;
  };

  //sons aleatórios
  const randomSongs = (randomBtn = true) => {
    if (randomBtn === true) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp = getRandomInt(temp, props.songs.length - 1);

        return temp;
      });
    }
  };

  return (
    <div className="c-player">
      <audio
        src={props.songs[props.currentSongIndex].src}
        ref={audioEl}
      ></audio>
      <h4>Playing now</h4>
      <Details song={props.songs[props.currentSongIndex]} />
      <Controls
        randomSongs={randomSongs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
        retrySong={retrySong}
      />
      <p>
        Next music:{" "}
        <span>
          {props.songs[props.nextSongIndex].title} by{" "}
          {props.songs[props.nextSongIndex].artist}
        </span>
      </p>
    </div>
  );
}

export default Player;
