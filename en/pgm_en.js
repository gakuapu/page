function en1() {
    
    const $topBtn = document.getElementById("top-btn");
    const $stopBtn = document.getElementById("stop-btn");
    const $lng = document.getElementById("lng");
    const $mode = document.getElementById("mode");
    const $startBtn = document.getElementById("start-btn");
    const $mainbox = document.getElementById("mainbox");
    const $mainflame = document.getElementById("mainflame");
    const $comp = document.getElementById("comp");
    const $okBtn = document.getElementById("ok-btn");
    const $againBtn = document.getElementById("again-btn");
    const $hideBtn = document.getElementById("hide-btn");
    const $appearBtn = document.getElementById("appear-btn");
    const $wordtable = document.getElementById("wordtable");

    let currentlng = 0; //EtoJなら0, JtoEなら1
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

    $topBtn.addEventListener("click", () => {
        window.location.href = "https://gakuapu.github.io/page/top_en.html";
    });

    function compdisplay () {
        defaultdisplay ();
        $comp.style.display = "block";
    };

    function defaultdisplay () {
        $mainflame.style.display = "none";
        $mainbox.style.display = "none";
        $stopBtn.style.display = "none";
        $topBtn.style.display = "block";
        $okBtn.style.display = "none";
        $againBtn.style.display = "none";
        $lng.style.display = "inline-block";
        $mode.style.display = "inline-block";
        $startBtn.style.display = "block";
        $comp.style.display = "none";
        currentlng = 0;
        mode = 0;
        cardnum = 0;
        cardnumMax = 0;
        tgttext = "";
        tgtnum = 0;
        worddata.length = 0;
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
        if (cardnum < cardnumMax) {
            setTimeout (modesetup2a, 3000 / mode);
        } else {
            setTimeout(() => compdisplay(), 3000 / mode);
        };
    };

    function modesetup () {
        if (mode != 0) {
            $againBtn.style.display = "inline-block"
            modesetup2a ();
        };
    };

    $mainbox.addEventListener("click", () => { //こっちを次に進むにする
        if (mode == 0) {
            $okBtn.style.display = "inline-block";
            $againBtn.style.display = "inline-block";
            if (currentlng == 0) {
                $mainbox.innerText = worddata[cardnum][1];
                currentlng = 1;
            } else {
                $mainbox.innerText = worddata[cardnum][0];
                currentlng = 0;
            };
        };
    });

    $startBtn.addEventListener("click", () => {
        gettable ();
        console.log(worddata);
        mode = $mode.value;
        $mainflame.style.display = "block";
        $mainbox.style.display = "block";
        $startBtn.style.display = "none";
        $topBtn.style.display = "none";
        $stopBtn.style.display = "block";
        $comp.style.display = "none";
        $okBtn.style.display = "none";
        $againBtn.style.display = "none";
        $lng.style.display = "none";
        $mode.style.display = "none";
        if ($lng.value == 0) {
            $mainbox.innerText = worddata[0][0];
        } else {
            $mainbox.innerText = worddata[0][1];
        };
        currentlng = $lng.value;
        cardnumMax = worddata.length;
        modesetup ();
    });

    $okBtn.addEventListener("click", () => {
        $okBtn.style.display = "none";
        $againBtn.style.display = "none";
        cardnum++;
        cardnumMax = worddata.length;
        if (cardnum == cardnumMax) {
            compdisplay ();
        } else {
            if ($lng.value == 0) {
                $mainbox.innerText = worddata[cardnum][0];
                currentlng = 0;
            } else {
                $mainbox.innerText = worddata[cardnum][1];
                currentlng = 1;
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
            $okBtn.style.display = "none";
            $againBtn.style.display = "none";
            if ($lng.value == 0) {
                $mainbox.innerText = worddata[cardnum][0];
                currentlng = 0;
            } else {
                $mainbox.innerText = worddata[cardnum][1];
                currentlng = 1;
            };
        } else {
            tgttext = $mainbox.innerText;
            console.log(tgttext);
            tgtnum = findRow (worddata, tgttext);
            console.log(tgtnum);
            worddata.push(worddata[tgtnum]);
            console.log(worddata);
            cardnumMax = worddata.length;
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