function enWord() {

    function isIOS () {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    };

    $hideBtn = document.getElementById("hide");

    $speed = document.getElementById("speed");

    $script1a = document.getElementById("script1a");
    $script1b = document.getElementById("script1b");
    $sound1 = document.getElementById("sound1");
    $translation1a = document.getElementById("translation1a");
    $translation1b = document.getElementById("translation1b");
    $answer1 = document.getElementById("answer1");
    
    $hideBtn.addEventListener("click", () => {
        $script1a.style.display = "block";
        $script1b.style.display = "none";
        $translation1a.style.display = "block";
        $translation1b.style.display = "none";
        $script2a.style.display = "block";
        $script2b.style.display = "none";
        $translation2a.style.display = "block";
        $translation2b.style.display = "none";
        $script3a.style.display = "block";
        $script3b.style.display = "none";
        $translation3a.style.display = "block";
        $translation3b.style.display = "none";
        $script4a.style.display = "block";
        $script4b.style.display = "none";
        $translation4a.style.display = "block";
        $translation4b.style.display = "none";
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
                setTimeout(setVoiceAndSpeak, 500);
            };
        };
        setVoiceAndSpeak();
    };

    function pronounce1st () { //test
        window.speechSynthesis.cancel(); //added
        const utterance = new SpeechSynthesisUtterance ("");
        function setVoiceAndSpeak () {
            const voices = window.speechSynthesis.getVoices();
            if (voices.length > 0) {
                utterance.voice = voices.find(voice => voice.lang === "en-US") || voices[0];
                window.speechSynthesis.speak(utterance);
            } else {
                setTimeout(setVoiceAndSpeak, 100);
            };
        };
        setVoiceAndSpeak();
    };

    $sound1.addEventListener("click", () => {
        pronounce1st (); //test
        speakText ($script1b.innerText);
    });

    /*
    $sound1.addEventListener("click", () => {
        window.speechSynthesis.cancel();
        let utterance = new SpeechSynthesisUtterance ($script1b.innerText);
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
                setTimeout(setVoiceAndSpeak, 500);
            };
        };
        setVoiceAndSpeak();
    });
    */
    
    $script1a.addEventListener("click", () => {
        $script1a.style.display = "none";
        $script1b.style.display = "block";
    });

    $translation1a.addEventListener("click", () => {
        $translation1a.style.display = "none";
        $translation1b.style.display = "block";
    });

    $answer1.addEventListener("click", () => {
        $answer1.innerText = $answer1.getAttribute("data-alttxt");
    });

    $script2a = document.getElementById("script2a");
    $script2b = document.getElementById("script2b");
    $sound2 = document.getElementById("sound2");
    $translation2a = document.getElementById("translation2a");
    $translation2b = document.getElementById("translation2b");
    $answer2 = document.getElementById("answer2");
    
    $sound2.addEventListener("click", () => {
        pronounce1st (); //test
        speakText ($script2b.innerText);
    });

    $script2a.addEventListener("click", () => {
        $script2a.style.display = "none";
        $script2b.style.display = "block";
    });

    $translation2a.addEventListener("click", () => {
        $translation2a.style.display = "none";
        $translation2b.style.display = "block";
    });

    $answer2.addEventListener("click", () => {
        $answer2.innerText = $answer2.getAttribute("data-alttxt");
    });

    $script3a = document.getElementById("script3a");
    $script3b = document.getElementById("script3b");
    $sound3 = document.getElementById("sound3");
    $translation3a = document.getElementById("translation3a");
    $translation3b = document.getElementById("translation3b");
    $answer3 = document.getElementById("answer3");
    
    $sound3.addEventListener("click", () => {
        pronounce1st (); //test
        speakText ($script3b.innerText);
    });

    $script3a.addEventListener("click", () => {
        $script3a.style.display = "none";
        $script3b.style.display = "block";
    });

    $translation3a.addEventListener("click", () => {
        $translation3a.style.display = "none";
        $translation3b.style.display = "block";
    });

    $answer3.addEventListener("click", () => {
        $answer3.innerText = $answer3.getAttribute("data-alttxt");
    });

    $script4a = document.getElementById("script4a");
    $script4b = document.getElementById("script4b");
    $sound4 = document.getElementById("sound4");
    $translation4a = document.getElementById("translation4a");
    $translation4b = document.getElementById("translation4b");
    $answer4 = document.getElementById("answer4");
    
    $sound4.addEventListener("click", () => {
        pronounce1st (); //test
        speakText ($script4b.innerText);
    });

    $script4a.addEventListener("click", () => {
        $script4a.style.display = "none";
        $script4b.style.display = "block";
    });

    $translation4a.addEventListener("click", () => {
        $translation4a.style.display = "none";
        $translation4b.style.display = "block";
    });

    $answer4.addEventListener("click", () => {
        $answer4.innerText = $answer4.getAttribute("data-alttxt");
    });

};

enWord();