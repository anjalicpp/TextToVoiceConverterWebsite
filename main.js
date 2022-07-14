const myText = document.getElementById('text');
const voice_options = document.getElementById('voice_list');
const volume_up_down = document.getElementById('volume_up_down');
const rate_up_down = document.getElementById('rate_up_down');
const pitch_up_down = document.getElementById('pitch_up_down');

var voiceList = [];

function listOfVoice(){
    var voices = speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++){
        var voice = voices[i];
        var option = document.createElement('option');
        option.value = voice.name;
        option.innerHTML = voice.name;
        voice_options.appendChild(option);
        voiceList[voice.name] = voice;
    }
}
window.speechSynthesis.onvoiceschanged = function(e){
    //console.log(e);
    listOfVoice()
}
function speak(){
    var message = new SpeechSynthesisUtterance();
    message.volume = volume_up_down.value;
    message.voice = voiceList[voice_options.value];
    message.rate = rate_up_down.value;
    message.pitch = pitch_up_down.value;
    message.text = myText.value;
    window.speechSynthesis.speak(message);
}