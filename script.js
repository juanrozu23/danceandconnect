

var myVideo = document.getElementById("video1");

function playPause() {
  if (myVideo.paused)
    myVideo.play();
  else
    myVideo.pause();
}

function buttonHandler(){
  console.log("clicked")
  const video = document.getElementById("popupvid")
  if (video.style.display==="block"){
    video.style.display="none";}
  else{
    video.style.display="block";}
}
