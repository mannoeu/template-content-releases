var trailer = document.querySelector(".trailer");
var watchTrailer = document.querySelector("#play");
var closeTrailer = document.querySelector("#close");
var video = document.querySelector("video");

function toggle() {
  trailer.classList.toggle("active");
  video.currentTime = 0;
  video.pause();
}

watchTrailer.addEventListener("click", toggle);
closeTrailer.addEventListener("click", toggle);
