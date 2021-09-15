import { useState, useEffect } from "react";
import Player from "./components/Player/Player";

function App() {
  //array com os sons e seus atributos.
  const [songs] = useState([
    {
      title: "Stay",
      artist: "Justin Bieber",
      img_src: "./images/song-1.jpg",
      src: "./music/Stay.mp3",
    },
    {
      title: "Industry Baby",
      artist: "Lil Nas X",
      img_src: "./images/song-2.png",
      src: "./music/Lil-Nas-X.mp3",
    },
    {
      title: "Bakermat",
      artist: "Baianá",
      img_src: "./images/song-3.jpg",
      src: "./music/Baiana.mp3",
    },
    {
      title: "Welcome Home",
      artist: "Radical Face",
      img_src: "./images/song-4.jfif",
      src: "./music/WelcomeHome.mp3",
    },
    {
      title: "Money For Nothing",
      artist: "Dire Straits",
      img_src: "./images/song-5.jpg",
      src: "./music/MoneyForNothing.mp3",
    },
  ]);
  //consts que setam o som tocado e o próximo som
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  //O useEffect é um método importado que só é chamado quando o array [currentSongIndex]
  //sofre alguma alteração. Caso vazio, ele é chamado quando houver qualquer alteração.
  //Funçao que passa o som, ou reseta para o primeiro audio caso o currentSongIndex
  //seja maior do que songs.length - 1.
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  //animations function
  window.onload = function () {
    const card = document.querySelector(".c-player");
    const container = document.querySelector(".App");
    const playingNow = document.querySelector(".c-player > h4");
    const nextSongTitle = document.querySelector(".c-player > p ");
    const img = document.querySelector(".details-img");
    const title = document.querySelector(".details-title");
    const artist = document.querySelector(".details-artist");
    const buttons = document.querySelector(".c-player--controls");
    const volume = document.querySelector(".volume");

    container.addEventListener("mousemove", (e) => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 40;

      card.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
    });

    container.addEventListener("mouseenter", (e) => {
      card.style.transition = "none";
      img.style.transform = "translateZ(100px)";
      title.style.transform = "translateZ(100px)";
      artist.style.transform = "translateZ(100px)";
      buttons.style.transform = "translateZ(80px)";
      playingNow.style.transform = "translateZ(80px)";
      nextSongTitle.style.transform = "translateZ(80px)";
      volume.style.transform = "translateZ(100px)";
    });

    container.addEventListener("mouseleave", (e) => {
      card.style.transition = "all 0.5s ease";
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      img.style.transform = "translateZ(0px)";
      title.style.transform = "translateZ(0px)";
      artist.style.transform = "translateZ(0px)";
      buttons.style.transform = "translateZ(0px)";
      playingNow.style.transform = "translateZ(0px)";
      nextSongTitle.style.transform = "translateZ(0px)";
      volume.style.transform = "translateZ(0px)";
    });
  };

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
