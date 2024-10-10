function enWord() {

    function isIOS () {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    };

    $script1 = document.getElementById("script1");
    $sound1 = document.getElementById("sound1");
    $translation1a = document.getElementById("translation1a");
    $translation1b = document.getElementById("translation1b");
    $answer1 = document.getElementById("answer1");
    
    $sound1.addEventListener("click", () => {
        let utterance = new SpeechSynthesisUtterance ($script1.innerText);
        function setVoiceAndSpeak () {
            const voices = window.speechSynthesis.getVoices();
            if (voices.length > 0) {
                utterance.voice = voices.find(voice => voice.lang === "en-US") || voices[0];
                if (isIOS()) {
                    utterance.voice = voices.find(voice => voice.name === "Samantha");
                };
                window.speechSynthesis.speak(utterance);
            } else {
                setTimeout(setVoiceAndSpeak, 100);
            };
        };
        setVoiceAndSpeak();
    });

    $translation1a.addEventListener("click", () => {
        $translation1a.style.display = "none";
        $translation1b.style.display = "block";
    });

    $answer1.addEventListener("click", () => {
        $answer1.innerText = $answer1.getAttribute("data-alttxt");
    });

    $script2 = document.getElementById("script2");
    $sound2 = document.getElementById("sound2");
    $translation2a = document.getElementById("translation2a");
    $translation2b = document.getElementById("translation2b");
    $answer2 = document.getElementById("answer2");
    
    $sound2.addEventListener("click", () => {
        let utterance = new SpeechSynthesisUtterance ($script2.innerText);
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
    });

    $translation2a.addEventListener("click", () => {
        $translation2a.style.display = "none";
        $translation2b.style.display = "block";
    });

    $answer2.addEventListener("click", () => {
        $answer2.innerText = $answer2.getAttribute("data-alttxt");
    });

    $script3 = document.getElementById("script3");
    $sound3 = document.getElementById("sound3");
    $translation3a = document.getElementById("translation3a");
    $translation3b = document.getElementById("translation3b");
    $answer3 = document.getElementById("answer3");
    
    $sound3.addEventListener("click", () => {
        let utterance = new SpeechSynthesisUtterance ($script3.innerText);
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
    });

    $translation3a.addEventListener("click", () => {
        $translation3a.style.display = "none";
        $translation3b.style.display = "block";
    });

    $answer3.addEventListener("click", () => {
        $answer3.innerText = $answer3.getAttribute("data-alttxt");
    });

    $script4 = document.getElementById("script4");
    $sound4 = document.getElementById("sound4");
    $translation4a = document.getElementById("translation4a");
    $translation4b = document.getElementById("translation4b");
    $answer4 = document.getElementById("answer4");
    
    $sound4.addEventListener("click", () => {
        let utterance = new SpeechSynthesisUtterance ($script4.innerText);
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