var btnTranslate = document.querySelector(".btn-translate");
var inputText = document.querySelector("#text-input")
var outputArea = document.querySelector('#output')
var serverURL = "https://api.funtranslations.com/translate/sindarin.json"


function getTranslationURL(text){
    return serverURL + '?' + "text=" + text;
}



function clickEventHandler() {
    var transText = inputText.value;
   fetch(getTranslationURL(transText))
   .then(response => response.json())
   .then(json => {
       var translatedText = json.contents.translated;
       outputArea.innerHTML = "<h2>"+translatedText+"</h2>";
       console.log(json.contents.translated)
   }
       )
   .catch()


}

btnTranslate.addEventListener('click', clickEventHandler)