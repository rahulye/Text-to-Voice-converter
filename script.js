let speech = new SpeechSynthesisUtterance();

//to select the language and speak
let voices = [];  //creating an array to get all voices and to store 
let voiceSelected = document.querySelector('.js-select');

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0]; // default is stored here

  voices.forEach( (voice,i) => {
    (voiceSelected.options[i]) = new Option( voice.name , i );
  });
};

// to speak
document.querySelector('.js-btn').addEventListener( 'click' , () => {
  speech.text = document.querySelector('.js-textarea').value;
  window.speechSynthesis.speak(speech);  
})


// let speech = new SpeechSynthesisUtterance();
// let voices = [];
// let voiceSelected = document.querySelector('.js-select');

// // Helper function to wait until voices are loaded
// function getVoicesAsync() {
//   return new Promise((resolve) => {
//     let voices = window.speechSynthesis.getVoices();
//     if (voices.length) {
//       resolve(voices);
//     } else {
//       // wait for voices to be loaded
//       window.speechSynthesis.onvoiceschanged = () => {
//         voices = window.speechSynthesis.getVoices();
//         resolve(voices);
//       };
//     }
//   });
// }

// async function loadVoices() {
//   voices = await getVoicesAsync();
//   speech.voice = voices[0]; // default

//   voices.forEach((voice, i) => {
//     voiceSelected.options[i] = new Option(voice.name, i);
//   });
// }

// loadVoices();

// // To speak
// document.querySelector('.js-btn').addEventListener('click', () => {
//   speech.text = document.querySelector('.js-textarea').value;
//   let selectedIndex = voiceSelected.value;
//   speech.voice = voices[selectedIndex];
//   window.speechSynthesis.speak(speech);
// });
