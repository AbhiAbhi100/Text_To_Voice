//to create a new instance of speechsynthesisUtterance
//speech synthesis part hai web search api ka -> used to represent a speech request in the javascript


let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect  = document.querySelector("select");

//dropdown when the voice changed 

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();

    speech.voice = voices[0]

    //select element with the avaialble voices
  voices.forEach((voice,i)=>(voiceSelect.options[i]= new Option(voice.name,i)));
}; 






//voice select ko option mr dal deta hai ye next piece
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
  });
  


document.querySelector("button").addEventListener("click",()=>{
    //stop karo ongoing speech to start a new one

    window.speechSynthesis.cancel();

    //set karenge uss speech ko jisko bulwana hai

    speech.text = document.querySelector("textarea").value;

    //speak the text
    window.speechSynthesis.speak(speech)
})