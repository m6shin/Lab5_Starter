// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  // create button variable
  const button = document.querySelector("button");
  // create img variable
  const img = document.querySelector("img");
  button.addEventListener('click', (event) => {
    // create variable of words to be spoken
    let textToSpeak = document.getElementById('text-to-speak').value;
    let utterThis = new SpeechSynthesisUtterance(textToSpeak);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption){
        utterThis.voice = voices[i];
      }
    }

    if (utterThis.textToSpeak != '') {
      img.src = "assets/images/smiling-open.png";
      synth.speak(utterThis);
    }

    utterThis.addEventListener('end', (event) => {
      img.src = "assets/images/smiling.png";
    });
  });
}