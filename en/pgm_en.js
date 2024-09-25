function en1() {
    
    const $stopBtn = document.getElementById("stop-btn");
    const $soundBtn = document.getElementById("sound-btn");
    const $lng = document.getElementById("lng");
    const $mode = document.getElementById("mode");
    const $startBtn = document.getElementById("start-btn");
    const $mainbox = document.getElementById("mainbox");
    const $comp = document.getElementById("comp");
    const $turnBtn = document.getElementById("turn-btn");
    const $againBtn = document.getElementById("again-btn");
    const $progress = document.getElementById("progress");
    const $hideBtn = document.getElementById("hide-btn");
    const $appearBtn = document.getElementById("appear-btn");
    const $wordtable = document.getElementById("wordtable");

    let startlng = 0;
    let currentlng = 0;
    let mode = 0;
    let speed = 0;
    let cardnum = 0;
    let cardnumMax = 0;
    let tgttext = "";
    let pronouncetext = "";
    let tgtnum = 0;
    let soundonoff = 0;

    let worddata = [];

    function gettable () {
        for (let row of $wordtable.rows) {
        worddata.push(row.innerText.split('\t'));
        };
    };

    function shuffleArray (array) {
        for (let ali = array.length - 1; ali > 0; ali--) {
            const alj = Math.floor(Math.random() * (ali + 1));
            [array[ali], array[alj]] =  [array[alj], array[ali]];
        };
        return array;
    };

    function compdisplay () {
        defaultdisplay ();
        $comp.style.display = "block";
    };

    function defaultdisplay () {
        $mainbox.style.display = "none";
        $stopBtn.style.display = "none";
        $soundBtn.style.display = "none";
        $soundBtn.style.color = "black";
        $turnBtn.style.visibility = "hidden";
        $againBtn.style.visibility = "hidden";
        $progress.style.display = "none";
        $lng.style.display = "inline-block";
        $mode.style.display = "inline-block";
        $startBtn.style.display = "block";
        $comp.style.display = "none";
        startlng = 0;
        currentlng = 0;
        mode = 0;
        speed = 0;
        cardnum = 0;
        cardnumMax = 0;
        tgttext = "";
        pronouncetext = "";
        soundonoff = 0;
        tgtnum = 0;
        worddata.length = 0;
        $progress.value = 0;
    };
 
    function pronounce () {
        pronouncetext = worddata[cardnum][0];
        const utterance = new SpeechSynthesisUtterance (pronouncetext);
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

    $soundBtn.addEventListener("click", () => {
        if (mode == 0) {
            pronounce ();
        } else {
            if (soundonoff == 1) {
                soundonoff = 0;
                $soundBtn.style.color = "black";
            } else {
                soundonoff = 1;
                $soundBtn.style.color = "lightgray";
            };
        };
    });

    $stopBtn.addEventListener("click", () => {
        defaultdisplay ();
    });

    function modesetup2a () {
        if ($lng.value == 0) {
            $mainbox.innerText = worddata[cardnum][0];
            if (soundonoff == 0) {
                pronounce ();
            };
        } else {
            $mainbox.innerText = worddata[cardnum][1];
        };
        setTimeout (modesetup2b, 2000 / speed);
    };

    function modesetup2b () {
        if ($lng.value == 0) {
            $mainbox.innerText = worddata[cardnum][1];
        } else {
            $mainbox.innerText = worddata[cardnum][0];
            if (soundonoff == 0) {
                pronounce ();
            };
        };
        cardnum++;
        $progress.value = cardnum / cardnumMax;
        if (cardnum < cardnumMax) {
            setTimeout (modesetup2a, 2000 / speed);
        } else {
            setTimeout(() => compdisplay(), 2000 / speed);
        };
    };

    function modesetup () {
        if (mode != 0) {
            $againBtn.style.visibility = "visible"
            $soundBtn.style.color = "black";
            soundonoff = 0;
            modesetup2a ();
        };
    };

    $turnBtn.addEventListener("click", () => {
        if (currentlng == 0) {
            $mainbox.innerText = worddata[cardnum][1];
            currentlng = 1;
        } else {
            $mainbox.innerText = worddata[cardnum][0];
            currentlng = 0;
        };
    });

    $startBtn.addEventListener("click", () => {
        gettable ();
        worddata = shuffleArray (worddata);
        cardnumMax = worddata.length;
        mode = $mode.value;
        if (mode == 1) {
            speed = 1;
        } else if (mode == 2) {
            speed = 1.5;
        };
        startlng = $lng.value;
        currentlng = startlng;
        $mainbox.style.display = "block";
        $startBtn.style.display = "none";
        $stopBtn.style.display = "inline-block";
        $soundBtn.style.display = "inline-block";
        $comp.style.display = "none";
        $turnBtn.style.visibility = "hidden";
        $againBtn.style.visibility = "hidden";
        $progress.style.display = "block";
        $lng.style.display = "none";
        $mode.style.display = "none";
        $mainbox.innerText = worddata[0][startlng];
        $progress.value = 0;
        modesetup ();
    });

    $mainbox.addEventListener("click", () => {
        if (mode == 0) {
            if (currentlng == startlng) {
                $turnBtn.style.visibility = "visible";
                $againBtn.style.visibility = "visible";
                if (startlng == 0) {
                    $mainbox.innerText = worddata[cardnum][1];
                    currentlng = 1;
                } else {
                    $mainbox.innerText = worddata[cardnum][0];
                    currentlng = 0;
                };
            } else {
                $turnBtn.style.visibility = "hidden";
                $againBtn.style.visibility = "hidden";
                if (startlng == 0) {
                };
                cardnum++;
                cardnumMax = worddata.length;
                $progress.value = cardnum / cardnumMax;
                if (cardnum == cardnumMax) {
                    compdisplay ();
                } else {
                    $mainbox.innerText = worddata[cardnum][startlng];
                    currentlng = startlng;
                };
            };
        };
    });

    function findRow (worddata, tgttext) {
        for (let tgtrow = 0; tgtrow < worddata.length; tgtrow++) {
            for (let tgtcol = 0; tgtcol < worddata[tgtrow].length; tgtcol++) {
                if (worddata[tgtrow][tgtcol] === tgttext) {
                    return tgtrow;
                };
            };
        };
    };

    $againBtn.addEventListener("click", () => {
        if (mode == 0) {
            worddata.push(worddata[cardnum]);
            cardnum++;
            cardnumMax = worddata.length;
            $progress.value = cardnum / cardnumMax;
            $turnBtn.style.visibility = "hidden";
            $againBtn.style.visibility = "hidden";
            $mainbox.innerText = worddata[cardnum][startlng];
            currentlng = startlng;
        } else {
            tgttext = $mainbox.innerText;
            tgtnum = findRow (worddata, tgttext);
            worddata.push(worddata[tgtnum]);
            cardnumMax = worddata.length;
            $progress.value = cardnum / cardnumMax;
        };
    });

    $hideBtn.addEventListener("click", () => {
        $wordtable.style.opacity = 0;
        $hideBtn.style.display = "none";
        $appearBtn.style.display = "inline-block";
    });

    $appearBtn.addEventListener("click", () => {
        $wordtable.style.opacity = 1;
        $hideBtn.style.display = "inline-block";
        $appearBtn.style.display = "none";
    });

};

en1();