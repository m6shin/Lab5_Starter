// expose.js
var selectHonk = document.getElementById("horn-select");
var hornImg = document.querySelector('img[alt="No image selected"]');
var hornSound = document.getElementsByClassName("hidden");
var volumeImg = document.querySelector('img[alt="Volume level 2"]');
var controlVolume = document.getElementById("volume")
var playButton = document.querySelectorAll('button'); 
var partyHorn = false;

window.addEventListener('DOMContentLoaded', init);

function init() {
  selectHonk.addEventListener("change", setHonk);
  controlVolume.addEventListener("input", changeVolume);
  playButton[0].addEventListener("click", sound);
}

function setHonk(){
  if (selectHonk.options[selectHonk.selectedIndex].text == "Air Horn") {
    hornSound[0].src = "./assets/audio/air-horn.mp3";
    hornImg.src = "./assets/images/air-horn.svg";
    partyHorn = false;
  }
  else if (selectHonk.options[selectHonk.selectedIndex].text == "Car Horn") {
    hornSound[0].src = "./assets/audio/car-horn.mp3";
    hornImg.src = "./assets/images/car-horn.svg";
    partyHorn = false;
  }
  else {
    hornSound[0].src = "./assets/audio/party-horn.mp3";
    hornImg.src = "./assets/images/party-horn.svg";
    partyHorn = true;
  }
}

function changeVolume(){
  if(controlVolume.value == 0){
    volumeImg.src = "./assets/icons/volume-level-0.svg";
  }
  else if(controlVolume.value >= 1 && controlVolume.value < 33){
    volumeImg.src = "./assets/icons/volume-level-1.svg";
  }
  else if(controlVolume.value >= 33 && controlVolume.value < 67){
    volumeImg.src = "./assets/icons/volume-level-2.svg";
  }
  else if(controlVolume.value >= 67){
    volumeImg.src = "./assets/icons/volume-level-3.svg";
  }
}

function sound(){
  hornSound[0].play();
  if(partyHorn){
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }
}