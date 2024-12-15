function basicSentence() {

    function isIOS () {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    };

    $hideBtn = document.getElementById("hide-btn");
    $speed = document.getElementById("speed");

    $sound1 = document.getElementById("sound1");
    $eng1a = document.getElementById("eng-1a");
    $eng1b = document.getElementById("eng-1b");
    $jpn1a = document.getElementById("jpn-1a");
    $jpn1b = document.getElementById("jpn-1b");

    $sound2 = document.getElementById("sound2");
    $eng2a = document.getElementById("eng-2a");
    $eng2b = document.getElementById("eng-2b");
    $jpn2a = document.getElementById("jpn-2a");
    $jpn2b = document.getElementById("jpn-2b");

    $sound3 = document.getElementById("sound3");
    $eng3a = document.getElementById("eng-3a");
    $eng3b = document.getElementById("eng-3b");
    $jpn3a = document.getElementById("jpn-3a");
    $jpn3b = document.getElementById("jpn-3b");

    $sound4 = document.getElementById("sound4");
    $eng4a = document.getElementById("eng-4a");
    $eng4b = document.getElementById("eng-4b");
    $jpn4a = document.getElementById("jpn-4a");
    $jpn4b = document.getElementById("jpn-4b");

    $sound5 = document.getElementById("sound5");
    $eng5a = document.getElementById("eng-5a");
    $eng5b = document.getElementById("eng-5b");
    $jpn5a = document.getElementById("jpn-5a");
    $jpn5b = document.getElementById("jpn-5b");

    $sound6 = document.getElementById("sound6");
    $eng6a = document.getElementById("eng-6a");
    $eng6b = document.getElementById("eng-6b");
    $jpn6a = document.getElementById("jpn-6a");
    $jpn6b = document.getElementById("jpn-6b");

    $sound7 = document.getElementById("sound7");
    $eng7a = document.getElementById("eng-7a");
    $eng7b = document.getElementById("eng-7b");
    $jpn7a = document.getElementById("jpn-7a");
    $jpn7b = document.getElementById("jpn-7b");
    
    $sound8 = document.getElementById("sound8");
    $eng8a = document.getElementById("eng-8a");
    $eng8b = document.getElementById("eng-8b");
    $jpn8a = document.getElementById("jpn-8a");
    $jpn8b = document.getElementById("jpn-8b");

    $sound9 = document.getElementById("sound9");
    $eng9a = document.getElementById("eng-9a");
    $eng9b = document.getElementById("eng-9b");
    $jpn9a = document.getElementById("jpn-9a");
    $jpn9b = document.getElementById("jpn-9b");

    $sound10 = document.getElementById("sound10");
    $eng10a = document.getElementById("eng-10a");
    $eng10b = document.getElementById("eng-10b");
    $jpn10a = document.getElementById("jpn-10a");
    $jpn10b = document.getElementById("jpn-10b");
    
    $hideBtn.addEventListener("click", () => {
        $eng1a.style.display = "inline-block";
        $eng1b.style.display = "none";
        $jpn1a.style.display = "inline-block";
        $jpn1b.style.display = "none";
        $eng2a.style.display = "inline-block";
        $eng2b.style.display = "none";
        $jpn2a.style.display = "inline-block";
        $jpn2b.style.display = "none";
        $eng3a.style.display = "inline-block";
        $eng3b.style.display = "none";
        $jpn3a.style.display = "inline-block";
        $jpn3b.style.display = "none";
        $eng4a.style.display = "inline-block";
        $eng4b.style.display = "none";
        $jpn4a.style.display = "inline-block";
        $jpn4b.style.display = "none";
        $eng5a.style.display = "inline-block";
        $eng5b.style.display = "none";
        $jpn5a.style.display = "inline-block";
        $jpn5b.style.display = "none";
        $eng6a.style.display = "inline-block";
        $eng6b.style.display = "none";
        $jpn6a.style.display = "inline-block";
        $jpn6b.style.display = "none";
        $eng7a.style.display = "inline-block";
        $eng7b.style.display = "none";
        $jpn7a.style.display = "inline-block";
        $jpn7b.style.display = "none";
        $eng8a.style.display = "inline-block";
        $eng8b.style.display = "none";
        $jpn8a.style.display = "inline-block";
        $jpn8b.style.display = "none";
        $eng9a.style.display = "inline-block";
        $eng9b.style.display = "none";
        $jpn9a.style.display = "inline-block";
        $jpn9b.style.display = "none";
        $eng10a.style.display = "inline-block";
        $eng10b.style.display = "none";
        $jpn10a.style.display = "inline-block";
        $jpn10b.style.display = "none";
    });

    function speakText (text) {
        window.speechSynthesis.cancel(); //added
        let utterance = new SpeechSynthesisUtterance (text);
        function setVoiceAndSpeak () {
            const voices = window.speechSynthesis.getVoices();
            if (voices.length > 0) {
                utterance.voice = voices.find(voice => voice.lang === "en-US") || voices[0];
                if (isIOS()) {
                    utterance.voice = voices.find(voice => voice.name === "Samantha");
                };
                utterance.rate = $speed.value;
                window.speechSynthesis.speak(utterance);      
            } else {
                setTimeout(setVoiceAndSpeak, 100);
            };
        };
        setVoiceAndSpeak();
    };

    function speakText1 () {
        speakText ($eng1b.innerText);
    };
  
    $sound1.addEventListener("click", () => {
        speakText (""); //test
        window.setTimeout(speakText1, 500);
    });
    
    $eng1a.addEventListener("click", () => {
        $eng1a.style.display = "none";
        $eng1b.style.display = "block";
    });

    $jpn1a.addEventListener("click", () => {
        $jpn1a.style.display = "none";
        $jpn1b.style.display = "block";
    });

    function speakText2 () {
        speakText ($eng2b.innerText);
    };
  
    $sound2.addEventListener("click", () => {
        speakText (""); //test
        window.setTimeout(speakText2, 500);
    });
    
    $eng2a.addEventListener("click", () => {
        $eng2a.style.display = "none";
        $eng2b.style.display = "block";
    });

    $jpn2a.addEventListener("click", () => {
        $jpn2a.style.display = "none";
        $jpn2b.style.display = "block";
    });

    function speakText3 () {
        speakText ($eng3b.innerText);
    };
  
    $sound3.addEventListener("click", () => {
        speakText (""); //test
        window.setTimeout(speakText3, 500);
    });
    
    $eng3a.addEventListener("click", () => {
        $eng3a.style.display = "none";
        $eng3b.style.display = "block";
    });

    $jpn3a.addEventListener("click", () => {
        $jpn3a.style.display = "none";
        $jpn3b.style.display = "block";
    });

    function speakText4 () {
        speakText ($eng4b.innerText);
    };
  
    $sound4.addEventListener("click", () => {
        speakText (""); //test
        window.setTimeout(speakText4, 500);
    });
    
    $eng4a.addEventListener("click", () => {
        $eng4a.style.display = "none";
        $eng4b.style.display = "block";
    });

    $jpn4a.addEventListener("click", () => {
        $jpn4a.style.display = "none";
        $jpn4b.style.display = "block";
    });

    function speakText5 () {
        speakText ($eng5b.innerText);
    };
  
    $sound5.addEventListener("click", () => {
        speakText (""); //test
        window.setTimeout(speakText5, 500);
    });
    
    $eng5a.addEventListener("click", () => {
        $eng5a.style.display = "none";
        $eng5b.style.display = "block";
    });

    $jpn5a.addEventListener("click", () => {
        $jpn5a.style.display = "none";
        $jpn5b.style.display = "block";
    });

    function speakText6 () {
        speakText ($eng6b.innerText);
    };
  
    $sound6.addEventListener("click", () => {
        speakText (""); //test
        window.setTimeout(speakText6, 500);
    });
    
    $eng6a.addEventListener("click", () => {
        $eng6a.style.display = "none";
        $eng6b.style.display = "block";
    });

    $jpn6a.addEventListener("click", () => {
        $jpn6a.style.display = "none";
        $jpn6b.style.display = "block";
    });

    function speakText7 () {
        speakText ($eng7b.innerText);
    };
  
    $sound7.addEventListener("click", () => {
        speakText (""); //test
        window.setTimeout(speakText7, 500);
    });
    
    $eng7a.addEventListener("click", () => {
        $eng7a.style.display = "none";
        $eng7b.style.display = "block";
    });

    $jpn7a.addEventListener("click", () => {
        $jpn7a.style.display = "none";
        $jpn7b.style.display = "block";
    });

    function speakText8 () {
        speakText ($eng8b.innerText);
    };
  
    $sound8.addEventListener("click", () => {
        speakText (""); //test
        window.setTimeout(speakText8, 500);
    });
    
    $eng8a.addEventListener("click", () => {
        $eng8a.style.display = "none";
        $eng8b.style.display = "block";
    });

    $jpn8a.addEventListener("click", () => {
        $jpn8a.style.display = "none";
        $jpn8b.style.display = "block";
    });

    function speakText9 () {
        speakText ($eng9b.innerText);
    };
  
    $sound9.addEventListener("click", () => {
        speakText (""); //test
        window.setTimeout(speakText9, 500);
    });
    
    $eng9a.addEventListener("click", () => {
        $eng9a.style.display = "none";
        $eng9b.style.display = "block";
    });

    $jpn9a.addEventListener("click", () => {
        $jpn9a.style.display = "none";
        $jpn9b.style.display = "block";
    });

    function speakText10 () {
        speakText ($eng10b.innerText);
    };
  
    $sound10.addEventListener("click", () => {
        speakText (""); //test
        window.setTimeout(speakText10, 500);
    });
    
    $eng10a.addEventListener("click", () => {
        $eng10a.style.display = "none";
        $eng10b.style.display = "block";
    });

    $jpn10a.addEventListener("click", () => {
        $jpn10a.style.display = "none";
        $jpn10b.style.display = "block";
    });

};

basicSentence();