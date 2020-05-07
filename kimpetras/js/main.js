const playButton = document.querySelector(".playControl");
const songAnimation = document.querySelector(".songAnimation");
const controlAnimation = document.querySelector(".menu");
const bgvideo = document.querySelector("video");
const api_key = "AIzaSyB9XbWGYorHaSfR4wbf89EkIzoKxiFo_ck";

let player;
let bg_animation = true;
let done = false;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "100",
    width: "240",
    events: {
      onReady: onPlayerReady,
    },
  });
}
function onPlayerReady() {
  player.cuePlaylist({
    listType: "playlist",
    list: "PLlNDMqtCvrc7psq6sjxRQQfDPtxM-mtv0",
    suggestedQuality: "small",
  });
}

function getStatusPlay() {
  player.getPlayerState() === 1
    ? (player.pauseVideo(),
      playButton.classList.toggle("play"),
      (songAnimation.style.visibility = "hidden"),
      (songAnimation.style.opacity = "0"))
    : (player.playVideo(),
      playButton.classList.toggle("play"),
      (songAnimation.style.visibility = "visible"),
      (songAnimation.style.opacity = "1"));
}

function backgroundAnimated() {
  bg_animation === true ? bgvideo.pause() : bgvideo.play();
  controlAnimation.classList.toggle("playing");
  bg_animation = !bg_animation;
}

playButton.addEventListener("click", getStatusPlay);
controlAnimation.addEventListener("click", backgroundAnimated);
