let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-Gb";
    window.speechSynthesis.speak(text_speak);
}

function wish() {
    let day = new Date();
    let hours = day.getHours();

    if(hours<12){
        speak("Good Morning Sir");
        
    }
    else if(hours<16){
        speak("Good Afternoon Sir");
    }   
    else{
        speak("Good Evening Sir");
    }
}

btn.addEventListener('click',() =>{
    wish(); 
})

let voiceRecord = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new voiceRecord();
recognition.onresult = (event)=>{
    let CurrentIndex = event.resultIndex;
    let transcript = event.results[CurrentIndex][0].transcript;
    content.innerText = transcript;

    takeCommand(transcript.toLowerCase());
}

btn.addEventListener("click",()=>{
    recognition.start();
    btn.style.display ="none";
    voice.style.display="block";
})

function takeCommand(message){
    btn.style.display ="flex";
    voice.style.display="none";
    if(message.includes("hello") || message.includes("hey tuf")){
        speak("Hello , I am tuf What i can help you");
    }
    else if(message.includes("who are you")||message.includes("hu r u")){
        speak("I am Virtual Assistant and i'm created by Dhairya Makwana    ");
    }
    else if(message.includes("open youtube")){
        speak("opening Youtube...");  
        window.open("https://www.youtube.com/");  
    }
    else if(message.includes("open google")){
        speak("opening google...");  
        window.open("https://www.google.com/");  
    }
    
    else if(message.includes("open instagram")){
        speak("opening instagram...");  
        window.open("https://www.instagram.com/");  
    }
    
    else if(message.includes("open facebook")){
        speak("opening facebook...");  
        window.open("https://www.facebook.com/");  
    }

    else if(message.includes("open whatsapp")){
        speak("opening whatsapp...");  
        window.open("whatsapp://");  
    }
    else if(message.includes("open calculator")){
        speak("opening calculator...");  
        window.open("calculator://");  
    }
        else if(message.includes("happy birthday")){
        speak("calling Dhairya...");  
        window.open("contact://9773244867");  
    }
    
    else if(message.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"});
        speak(time);
    }

    else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"});
        speak(date);
    }

    else{
        speak(`this is What i found on internet regarding ${message}`);
        window.open(`https://www.google.com/search?q=${message}`);
    }


   
}
