function en1() {
    
    const $topBtn = document.getElementById("top-btn");
    const $nextBtn = document.getElementById("next-btn");
    const $stopBtn = document.getElementById("stop-btn");
    const $lng = document.getElementById("lng");
    const $mode = document.getElementById("mode");
    const $startBtn = document.getElementById("start-btn");
    const $testBtn = document.getElementById("test-btn");
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
    let cardnum = 0;
    let cardnumMax = 0;
    let tgttext = "";
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

    $topBtn.addEventListener("click", () => {
        //window.location.href = "https://gakuapu.github.io/page/top_en.html";
        window.location.href = "top_en.html";
    });

    function compdisplay () {
        defaultdisplay ();
        $comp.style.display = "block";
    };

    function defaultdisplay () {
        $mainbox.style.display = "none";
        $stopBtn.style.display = "none";
        $topBtn.style.display = "inline-block";
        $nextBtn.style.display = "inline-block";
        $turnBtn.style.visibility = "hidden";
        $againBtn.style.visibility = "hidden";
        $progress.style.display = "none";
        $lng.style.display = "inline-block";
        $mode.style.display = "inline-block";
        $startBtn.style.display = "block";
        $testBtn.style.display = "block";
        $comp.style.display = "none";
        startlng = 0;
        currentlng = 0;
        mode = 0;
        cardnum = 0;
        cardnumMax = 0;
        tgttext = "";
        tgtnum = 0;
        worddata.length = 0;
        $progress.value = 0;
    };
 
    $stopBtn.addEventListener("click", () => {
        defaultdisplay ();
    });

    function modesetup2a () {
        if ($lng.value == 0) {
            $mainbox.innerText = worddata[cardnum][0];
        } else {
            $mainbox.innerText = worddata[cardnum][1];
        };
        setTimeout (modesetup2b, 3000 / mode);
    };

    function modesetup2b () {
        if ($lng.value == 0) {
            $mainbox.innerText = worddata[cardnum][1];
        } else {
            $mainbox.innerText = worddata[cardnum][0];
        };
        cardnum++;
        $progress.value = cardnum / cardnumMax;
        if (cardnum < cardnumMax) {
            setTimeout (modesetup2a, 2000 / mode);
        } else {
            setTimeout(() => compdisplay(), 2000 / mode);
        };
    };

    function modesetup () {
        if (mode != 0) {
            $againBtn.style.visibility = "visible"
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
        startlng = $lng.value;
        currentlng = startlng;
        $mainbox.style.display = "block";
        $startBtn.style.display = "none";
        $testBtn.style.display = "none";
        $topBtn.style.display = "none";
        $nextBtn.style.display = "none";
        $stopBtn.style.display = "block";
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