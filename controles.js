let cover = document.getElementById("image");
let audio = document.getElementById("audio");
let play_btn = document.getElementById("play");
let icon = document.getElementById("icon");
let circle = document.getElementById("circle-back");
let image_container = document.getElementById("logo");
let barra = document.getElementById("barra");
let duracion = document.getElementById("duracion");
let a_adelante = document.getElementById("a adelante");
let a_atras = document.getElementById("a atras");

let is_playing = false;

const setMusic = (i) => {
    barra.value = 0;
    let song = songs[i];
    currentMusic= i;
    setMusic.src= song.path;
    duracion.innerHTML = '00:00';
    setTimeout(()=>{
        barra.max = music.duration;
        musicduration.innerHTML = music.duration;
    }, 300)
}
const formatTime = (time) =>{
    let min = Math.floor(time/60);
    if(min<10)
    {
        min='0${min}';
    }
    let sec= Math.floor(time % 60);
    if(sec<10)
    {
        sec='0${sec}';
    }
    return '${min} : ${sec}';
}
const play_effects = () => {
  icon.classList.add("fa-pause");
  icon.classList.remove("fa-play");
  cover.style.animationPlayState = "running";
  circle.style.animationPlayState = "running";
  image_container.style.boxShadow = "0px 0px 20px #fff";
};

const pause_effects = () => {
  icon.classList.add("fa-play");
  icon.classList.remove("fa-pause");
  cover.style.animationPlayState = "paused";
  circle.style.animationPlayState = "paused";
  image_container.style.boxShadow = "0px 0px 0px #fff";
};

play_btn.addEventListener("click", () => {
  if (is_playing) {
    audio.pause();
    is_playing = false;
    pause_effects();
  } else {
    audio.play();
    is_playing = true;
    play_effects();
  }
});
let volumen = audio.volume;

const volumen_effects = () => {
  let volumen_bar = document.getElementById("volumen");
  volumen_bar.style.display = "block";

  let volume_status = document.getElementById("barra");

  volume_status.style.height = volumen * 100 + "%";

  setTimeout(() => {
    volumen_bar.style.display = "none";
  }, 2000);
};

document.addEventListener("keyup", (event) => {
  if (event.key == " ") {
    if (is_playing) {
      audio.pause();
      is_playing = false;
      pause_effects();
    } else {
      audio.play();
      is_playing = true;
      play_effects();
    }
  } else if (event.key == "ArrowUp") {
    volumen_effects();
    if (volumen < 1) {
      volumen = volumen + 0.1;
      audio.volume = volumen;
    }
  } else if (event.key == "ArrowDown") {
    volumen_effects();
    if (volumen > 0.1) {
      volumen = volumen - 0.1;
      audio.volume = volumen;
    }
  }
});
