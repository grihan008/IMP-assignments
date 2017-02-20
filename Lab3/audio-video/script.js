var aud = document.getElementById('audio');
var volume = document.getElementById('volume');

function startPlayer(){
  aud.play();
}

function stopPlayer(){
  aud.pause();
}

function changeVolume(){
  aud.volume=volume.value;
}

volume.addEventListener("input", changeVolume);
