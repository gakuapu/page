function enAuto() {
    
    const $stopBtn = document.getElementById("stop-btn");
    const $sound = document.getElementById("sound");
    const $speed = document.getElementById("speed");
    const $lng = document.getElementById("lng");
    const $order = document.getElementById("order");
    const $startBtn = document.getElementById("start-btn");
    const $mainbox = document.getElementById("mainbox");
    const $comp = document.getElementById("comp");
    const $againBtn = document.getElementById("again-btn");
    const $progress = document.getElementById("progress");
    const $wordtable = document.getElementById("wordtable");

    let startlng = 0;
    let currentlng = 0;
    let sound = 0;
    let speed = 0;
    let order = 0;
    let cardnum = 0;
    let cardnumMax = 0;
    let tgttext = "";
    let pronouncetext = "";
    let tgtnum = 0;

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
        $againBtn.style.display = "none";
        $progress.style.display = "none";
        $sound.style.display = "inline-block";
        $speed.style.display = "inline-block";
        $lng.style.display = "inline-block";
        $order.style.display = "inline-block";
        $startBtn.style.display = "block";
        $comp.style.display = "none";
        startlng = 0;
        currentlng = 0;
        sound = 0;
        speed = 0;
        order = 0;
        cardnum = 0;
        cardnumMax = 0;
        tgttext = "";
        pronouncetext = "";
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

    $stopBtn.addEventListener("click", () => {
        defaultdisplay ();
    });

    function setup1 () {
        if ($lng.value == 0) {
            $mainbox.innerText = worddata[cardnum][0];
            if (sound == 0) {
                pronounce ();
            };
        } else {
            $mainbox.innerText = worddata[cardnum][1];
        };
        setTimeout (setup2, 2000 / speed);
    };

    function setup2 () {
        if ($lng.value == 0) {
            $mainbox.innerText = worddata[cardnum][1];
        } else {
            $mainbox.innerText = worddata[cardnum][0];
            if (sound == 0) {
                pronounce ();
            };
        };
        cardnum++;
        $progress.value = cardnum / cardnumMax;
        if (cardnum < cardnumMax) {
            setTimeout (setup1, 2000 / speed);
        } else {
            setTimeout(() => compdisplay(), 2000 / speed);
        };
    };

    $startBtn.addEventListener("click", () => {
        gettable ();
        order = $order.value;
        if (order == 1) {
            worddata = shuffleArray (worddata);
        };
        cardnumMax = worddata.length;
        sound = $sound.value;
        if ($speed.value == 1) {
            speed = 1;
        } else {
            speed = 1.5;
        };
        startlng = $lng.value;
        currentlng = startlng;
        $mainbox.style.display = "block";
        $startBtn.style.display = "none";
        $stopBtn.style.display = "inline-block";
        $comp.style.display = "none";
        $againBtn.style.display = "block";
        $progress.style.display = "block";
        $sound.style.display = "none";
        $speed.style.display = "none";
        $lng.style.display = "none";
        $order.style.display = "none";
        $mainbox.innerText = worddata[0][startlng];
        $progress.value = 0;
        setup1 ();
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
        tgttext = $mainbox.innerText;
        tgtnum = findRow (worddata, tgttext);
        worddata.push(worddata[tgtnum]);
        cardnumMax = worddata.length;
        $progress.value = cardnum / cardnumMax;
    });

};

enAuto();