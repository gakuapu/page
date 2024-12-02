function fukisokuEN () {
    
    function isIOS () {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    };

    const $stopBtn = document.getElementById("stop-btn");
    const $soundBtn = document.getElementById("sound-btn");
    const $hanni = document.getElementById("hanni");
    const $mode = document.getElementById("mode");
    const $startBtn = document.getElementById("start-btn");
    const $katachi1 = document.getElementById("katachi1");
    const $katachi2 = document.getElementById("katachi2");
    const $katachi3 = document.getElementById("katachi3");
    const $mainbox = document.getElementById("mainbox");
    const $comp = document.getElementById("comp");
    const $turnBtn = document.getElementById("turn-btn");
    const $againBtn = document.getElementById("again-btn");
    const $progress = document.getElementById("progress");
    const $hideBtn = document.getElementById("hide-btn");
    const $appearBtn = document.getElementById("appear-btn");
    const $wordtable = document.getElementById("wordtable");

    let hanni = 0;
    let currentkatachi = 0;
    let mode = 0;
    let speed = 0;
    let cardnum = 0;
    let cardnumMax = 0;
    let tgttext = "";
    let tgtnum = 0;
    let tgtnum2 = 0;
    let soundonoff = 0;
    let stopbtnpushed = 0;

    let worddata = [];
    let worddataENonly = [];

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
        $katachi1.style.display = "none";
        $katachi2.style.display = "none";
        $katachi3.style.display = "none";
        $stopBtn.style.display = "none";
        $soundBtn.style.display = "none";
        $soundBtn.style.color = "black";
        $turnBtn.style.visibility = "hidden";
        $againBtn.style.visibility = "hidden";
        $progress.style.display = "none";
        $hanni.style.display = "inline-block";
        $mode.style.display = "inline-block";
        $startBtn.style.display = "block";
        $comp.style.display = "none";
        hanni = 0;
        currentkatachi = 0;
        speed = 0;
        cardnum = 0;
        cardnumMax = 0;
        tgttext = "";
        soundonoff = 0;
        tgtnum = 0;
        tgtnum2 = 0;
        worddata.length = 0;
        worddataENonly.length = 0;
        $progress.value = 0;
    };
 
    function pronounce (text) {
        window.speechSynthesis.cancel(); //added
        const utterance = new SpeechSynthesisUtterance (text);
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
    };

    $soundBtn.addEventListener("click", () => {
        if (mode == 0) {
            pronounce (worddataENonly[cardnum][currentkatachi]);
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
        stopbtnpushed = 1;
        defaultdisplay ();
    });

    function katachiDisplay (katachiNum) {
        switch (katachiNum) {
            case 0:
                $katachi1.style.display = "block";
                $katachi2.style.display = "none";
                $katachi3.style.display = "none";
                $againBtn.style.visibility = "hidden";
                break;
            case 1:
                $katachi1.style.display = "none";
                $katachi2.style.display = "block";
                $katachi3.style.display = "none";
                if (hanni == 1 && mode == 0) {
                    $againBtn.style.visibility = "hidden";
                } else {
                    $againBtn.style.visibility = "visible";
                };
                break;
            case 2:
                $katachi1.style.display = "none";
                $katachi2.style.display = "none";
                $katachi3.style.display = "block";
                $againBtn.style.visibility = "visible";
                break;
            default:
                alert ("リロードして下さい");
        };
    };

    function modesetup2a () {
        if (stopbtnpushed == 0) {
            currentkatachi = 0;
            katachiDisplay (currentkatachi);
            $mainbox.innerText = worddata[cardnum][currentkatachi];
            if (soundonoff == 0) {
                pronounce (worddataENonly[cardnum][currentkatachi]);
            };
            setTimeout (modesetup2b, 2000 / speed);
        };
    };

    function modesetup2b () {
        if (stopbtnpushed == 0) {
            currentkatachi = 1;
            katachiDisplay (currentkatachi);
            $mainbox.innerText = worddata[cardnum][currentkatachi];
            if (soundonoff == 0) {
                pronounce (worddataENonly[cardnum][currentkatachi]);
            };
            cardnum++;
            $progress.value = cardnum / cardnumMax;
            if (cardnum < cardnumMax) {
                setTimeout (modesetup2a, 2000 / speed);
            } else {
                setTimeout(() => compdisplay(), 2000 / speed);
            };
        };
    };

    function modesetup3a () {
        if (stopbtnpushed == 0) {
            currentkatachi = 0;
            katachiDisplay (currentkatachi);
            $mainbox.innerText = worddata[cardnum][currentkatachi];
            if (soundonoff == 0) {
                pronounce (worddataENonly[cardnum][currentkatachi]);
            };
            setTimeout (modesetup3b, 2000 / speed);
        };
    };

    function modesetup3b () {
        if (stopbtnpushed == 0) {
            currentkatachi = 1;
            katachiDisplay (currentkatachi);
            
            $mainbox.innerText = worddata[cardnum][currentkatachi];
            if (soundonoff == 0) {
                pronounce (worddataENonly[cardnum][currentkatachi]);
            };
            setTimeout (modesetup3c, 2000 / speed); 
        };
    };

    function modesetup3c () {
        if (stopbtnpushed == 0) {
            currentkatachi = 2;
            katachiDisplay (currentkatachi);
            $mainbox.innerText = worddata[cardnum][currentkatachi];
            if (soundonoff == 0) {
                pronounce (worddataENonly[cardnum][currentkatachi]);
            };
            cardnum++;
            $progress.value = cardnum / cardnumMax;
            if (cardnum < cardnumMax) {
                setTimeout (modesetup3a, 2000 / speed);
            } else {
                setTimeout(() => compdisplay(), 2000 / speed);
            };
        };
    };

    function modesetup () {
        if (mode != 0) {
            $againBtn.style.visibility = "visible"
            $soundBtn.style.color = "black";
            soundonoff = 0;
            if (hanni == 0) {
                modesetup2a ();
            } else {
                modesetup3a ();
            };
        };
    };

    $turnBtn.addEventListener("click", () => {
        currentkatachi--;
        katachiDisplay (currentkatachi);
        $mainbox.innerText = worddata[cardnum][currentkatachi];
    });

    $startBtn.addEventListener("click", () => {
        gettable ();
        worddata = worddata.slice(1);
        worddata = shuffleArray (worddata);
        worddataENonly = worddata.map(innerArray => innerArray.map(item => item.split(`\n`)[0]));
        tgtnum2 = findRow (worddataENonly, "read");
        worddataENonly.splice(tgtnum2, 1, ["read", "red", "red"]);
        tgtnum2 = findRow (worddataENonly, "forget");
        worddataENonly.splice(tgtnum2, 1, ["forget", "forgot", "forgotten"]);
        cardnumMax = worddata.length;
        hanni = $hanni.value;
        mode = $mode.value;
        if (mode == 1) {
            speed = 1;
        } else if (mode == 2) {
            speed = 1.5;
        };
        stopbtnpushed = 0;
        currentkatachi = 0;
        katachiDisplay (currentkatachi);
        $mainbox.style.display = "block";
        $startBtn.style.display = "none";
        $stopBtn.style.display = "inline-block";
        $soundBtn.style.display = "inline-block";
        $comp.style.display = "none";
        $turnBtn.style.visibility = "hidden";
        $againBtn.style.visibility = "hidden";
        $progress.style.display = "block";
        $hanni.style.display = "none";
        $mode.style.display = "none";
        $mainbox.innerText = worddata[0][0];
        $progress.value = 0;
        pronounce(""); //test
        window.setTimeout(modesetup, 500);
    });

    $mainbox.addEventListener("click", () => {
        if (mode == 0) {
            if (hanni == 0) {
                if (currentkatachi == 0) {
                    currentkatachi = 1;
                    katachiDisplay (currentkatachi);
                    $turnBtn.style.visibility = "visible";
                    $mainbox.innerText = worddata[cardnum][currentkatachi];
                } else {
                    currentkatachi = 0;
                    katachiDisplay (currentkatachi);
                    $turnBtn.style.visibility = "hidden";
                    cardnum++;
                    cardnumMax = worddata.length;
                    $progress.value = cardnum / cardnumMax;
                    if (cardnum == cardnumMax) {
                        compdisplay ();
                    } else {
                        $mainbox.innerText = worddata[cardnum][currentkatachi];
                    };
                };
            } else {
                if (currentkatachi == 0) {
                    currentkatachi = 1;
                    katachiDisplay (currentkatachi);
                    $turnBtn.style.visibility = "visible";
                    $mainbox.innerText = worddata[cardnum][currentkatachi];
                } else if (currentkatachi == 1) {
                    currentkatachi = 2;
                    katachiDisplay (currentkatachi);
                    $turnBtn.style.visibility = "visible";
                    $mainbox.innerText = worddata[cardnum][currentkatachi];
                } else {
                    currentkatachi = 0;
                    katachiDisplay (currentkatachi);
                    $turnBtn.style.visibility = "hidden";
                    cardnum++;
                    cardnumMax = worddata.length;
                    $progress.value = cardnum / cardnumMax;
                    if (cardnum == cardnumMax) {
                        compdisplay ();
                    } else {
                        $mainbox.innerText = worddata[cardnum][currentkatachi];
                    };
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
            worddataENonly.push(worddataENonly[cardnum]);
            currentkatachi = 0;
            katachiDisplay (currentkatachi);
            cardnum++;
            cardnumMax = worddata.length;
            $progress.value = cardnum / cardnumMax;
            $mainbox.innerText = worddata[cardnum][currentkatachi];
        } else {
            tgttext = $mainbox.innerText;
            tgtnum = findRow (worddata, tgttext);
            worddata.push(worddata[tgtnum]);
            worddataENonly.push(worddataENonly[tgtnum]);
            cardnumMax = worddata.length;
            $progress.value = cardnum / cardnumMax;
        };
    });

    $hideBtn.addEventListener("click", () => {
        $wordtable.style.visibility = "hidden";
        $hideBtn.style.display = "none";
        $appearBtn.style.display = "inline-block";
    });

    $appearBtn.addEventListener("click", () => {
        $wordtable.style.visibility = "visible";
        $hideBtn.style.display = "inline-block";
        $appearBtn.style.display = "none";
    });

};

fukisokuEN ();