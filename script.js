let speech = new SpeechSynthesisUtterance();

document.querySelector('.js-btn').addEventListener( 'click' , () => {
  speech.text = document.querySelector('.js-textarea').value;
  window.speechSynthesis.speak(speech);
});

let voices = [];
let voiceSelected = document.querySelector('.js-select');
async function initSpeech() {  
  
  // 1.get the voices after await(bring promise) 
  let voices = await loadSpeech();  
  // 2.set the default voice
  speech.voice = voices[0];
  // 3.show the voices in the page 
  voices.forEach( ( voice , i) => {
    voiceSelected.options[i] = new Option( voice.name , i);
    voices[i] = voiceSelected.options[i];
  });
  console.log(voices);
  console.log('2');
};

initSpeech().then( () => {
  console.log('3');
});

function loadSpeech() {  
  const returnValue = new Promise( (resolve) => {
    window.speechSynthesis.onvoiceschanged = () => {
      voices = window.speechSynthesis.getVoices();
      resolve(voices)
      console.log('1');
    };
  });
  return returnValue;
};






//---->this alone is enough to read the text but to choose different we need more code so yeah
// let speech = new SpeechSynthesisUtterance();
// document.querySelector('.js-btn').addEventListener( 'click' , () => {
//   speech.text = document.querySelector('.js-textarea').value;
//   window.speechSynthesis.speak(speech);
// });



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
