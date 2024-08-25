function entest() {
    
    const $stopBtn = document.getElementById("stop-btn");
    const $soundBtn = document.getElementById("sound-btn");

    const $startBtn = document.getElementById("start-btn");

    const $mainbox = document.getElementById("mainbox");
    const $answerbox = document.getElementById("answerbox");

    const $char1 = document.getElementById("char1");
    const $char2 = document.getElementById("char2");
    const $char3 = document.getElementById("char3");
    const $char4 = document.getElementById("char4");
    const $char5 = document.getElementById("char5");
    const $char6 = document.getElementById("char6");

    const $a = document.getElementById("chara");
    const $e = document.getElementById("chare");
    const $i = document.getElementById("chari");
    const $o = document.getElementById("charo");
    const $u = document.getElementById("charu");

    const $eraseBtn = document.getElementById("erase-btn");
    const $checkBtn = document.getElementById("check-btn");

    const $progress = document.getElementById("progress");

    const $resultmsg = document.getElementById("resultmsg");
    const $wordtable = document.getElementById("wordtable");

    const mondainum = 10;
    let seikainum = 0;
    let count = 0;
    let answerText = "";
    let pronouncetext = "";

    let $originlist = [];
    let testdata = [];
    let splitword = [];
    let resultdata = [];

    function shuffle (array) {
        for (let ali = array.length - 1; ali > 0; ali--) {
            const alj = Math.floor(Math.random() * (ali + 1));
            [array[ali], array[alj]] =  [array[alj], array[ali]];
        };
        return array;
    };

    function getTestdata (arr, num) {
        const selectedElements = shuffle(arr.slice()).slice(0, num);
        return shuffle(selectedElements);
    }; 

    function defaultdisplay () {
        $startBtn.style.display = "block";
        $stopBtn.style.display = "none";
        $soundBtn.style.display = "none";
        $mainbox.style.display = "none";
        $answerbox.style.display = "none";
        $char1.style.display = "none";
        $char2.style.display = "none";
        $char3.style.display = "none";
        $char4.style.display = "none";
        $char5.style.display = "none";
        $char6.style.display = "none";
        $a.style.display = "none";
        $e.style.display = "none";
        $i.style.display = "none";
        $o.style.display = "none";
        $u.style.display = "none";
        $eraseBtn.style.display = "none";
        $checkBtn.style.display = "none";
        $progress.style.display = "none";
        $progress.value = 0;
        $originlist.length = 0;
        testdata.length = 0;
        splitword.length = 0;
        $char1.value = "";
        $char2.value = "";
        $char3.value = "";
        $char4.value = "";
        $char5.value = "";
        $char6.value = "";
        answerText = "";
        pronouncetext = "";
        $answerbox.innerText = "";
        $mainbox.innerText = "";
        count = 0;
    };
 
    function clearresult () {
        $resultmsg.style.display = "none";
        $wordtable.style.display = "none";
        resultdata.length = 0;
        while ($wordtable.rows.length > 0) {
            $wordtable.deleteRow(0);
        };
        seikainum = 0;
    };

    $soundBtn.addEventListener("click", () => {
        pronouncetext = testdata[count][0];
        const utterance = new SpeechSynthesisUtterance (pronouncetext);
        utterance.lang = "en-US";
        window.speechSynthesis.speak(utterance);
    });

    $stopBtn.addEventListener("click", () => {
        defaultdisplay ();
        clearresult ();
    });

    function split (word) {
        const vowels = ["a", "e", "i", "o", "u"];
        let characters = word.toLowerCase().split("");
        let seen = new Set();
        let result = [];
        for (let char of characters) {
            if (!vowels.includes(char) && !seen.has(char)) {
                result.push(char);
                seen.add(char);
            };
        };
        return result;
    };

    $checkBtn.addEventListener ("click", () => {
        if (testdata[count][0].toLowerCase() == answerText) {
            seikainum++;
        } else {
            resultdata.push([testdata[count][0], testdata[count][1]]);
        };
        count++;
        $progress.value = count / mondainum;
        $answerbox.innerText = "";
        answerText = "";
        setup();
    });

    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
        };

    function setup () {
        if (count < mondainum) {
            $mainbox.innerText = testdata[count][1];
            splitword = split (testdata[count][0]);
            if (splitword.length > 6) {
                seikainum++;
                count++;
                $progress.value = count / mondainum;
                setup();
            } else {
                if (splitword.length < 6) {
                    if (splitword.includes("l") && ! splitword.includes("r")) {
                        splitword.push("r");
                    };
                    if (splitword.includes("r") && ! splitword.includes("l")) {
                        splitword.push("l");
                    };
                };
                if (splitword.length < 6) {
                    if (splitword.includes("m") && ! splitword.includes("n")) {
                        splitword.push("n");
                    };
                    if (splitword.includes("n") && ! splitword.includes("m")) {
                        splitword.push("m");
                    };
                };
                if (splitword.length < 6) {
                    if (splitword.includes("c") && ! splitword.includes("s")) {
                        splitword.push("s");
                    };
                    if (splitword.includes("s") && ! splitword.includes("c")) {
                        splitword.push("c");
                    };
                };
                if (splitword.length < 6) {
                    if (splitword.includes("g") && ! splitword.includes("j")) {
                        splitword.push("j");
                    };
                    if (splitword.includes("j") && ! splitword.includes("j")) {
                        splitword.push("g");
                    };
                };
                if (splitword.length < 6) {
                    if (splitword.includes("q") && ! splitword.includes("k")) {
                        splitword.push("k");
                    };
                    if (splitword.includes("k") && ! splitword.includes("q")) {
                        splitword.push("q");
                    };
                };
                if (splitword.length < 6) {
                    if (splitword.includes("f") && ! splitword.includes("h")) {
                        splitword.push("h");
                    };
                    if (splitword.includes("h") && ! splitword.includes("f")) {
                        splitword.push("f");
                    };
                };
                if (splitword.length < 6) {
                    if (splitword.includes("b") && ! splitword.includes("v")) {
                        splitword.push("v");
                    };
                    if (splitword.includes("v") && ! splitword.includes("b")) {
                        splitword.push("b");
                    };
                };
                while (splitword.length < 6) {
                    let ram = getRandom (1, 7);
                    switch (ram) {
                        case 1:
                            if (! splitword.includes("b")) {
                                splitword.push("b");
                            };
                            break;
                        case 2:
                            if (! splitword.includes("c")) {
                                splitword.push("c");
                            };
                            break;
                        case 3:
                            if (! splitword.includes("d")) {
                                splitword.push("d");
                            };
                            break;
                        case 4:
                            if (! splitword.includes("f")) {
                                splitword.push("f");
                            };
                            break;
                        case 5:
                            if (! splitword.includes("g")) {
                                splitword.push("g");
                            };
                            break;
                        case 6:
                            if (! splitword.includes("h")) {
                                splitword.push("h");
                            };
                            break;
                        case 7:
                            if (! splitword.includes("j")) {
                                splitword.push("j");
                            };
                            break;
                        case 8:
                            if (! splitword.includes("k")) {
                                splitword.push("k");
                            };
                            break;
                        case 9:
                            if (! splitword.includes("l")) {
                                splitword.push("l");
                            };
                            break;
                        case 10:
                            if (! splitword.includes("m")) {
                                splitword.push("m");
                            };
                            break;
                        case 11:
                            if (! splitword.includes("n")) {
                                splitword.push("n");
                            };
                            break;
                        case 12:
                            if (! splitword.includes("p")) {
                                splitword.push("p");
                            };
                            break;     
                        case 13:
                            if (! splitword.includes("q")) {
                                splitword.push("q");
                            };
                            break;
                        case 14:
                            if (! splitword.includes("r")) {
                                splitword.push("r");
                            };
                            break;
                        case 15:
                            if (! splitword.includes("s")) {
                                splitword.push("s");
                            };
                            break;
                        case 16:
                            if (! splitword.includes("t")) {
                                splitword.push("t");
                            };
                            break;     
                        case 17:
                            if (! splitword.includes("v")) {
                                splitword.push("v");
                            };
                            break;
                        case 18:
                            if (! splitword.includes("w")) {
                                splitword.push("w");
                            };
                            break;
                        case 19:
                            if (! splitword.includes("x")) {
                                splitword.push("x");
                            };
                            break;
                        case 20:
                            if (! splitword.includes("y")) {
                                splitword.push("y");
                            };
                            break;
                        case 21:
                            if (! splitword.includes("z")) {
                                splitword.push("z");
                            };
                            break;         
                        default:
                            alert("リロードして下さい");
                    };
                };
                shuffle(splitword);
                $char1.value = splitword[0];
                $char2.value = splitword[1];
                $char3.value = splitword[2];
                $char4.value = splitword[3];
                $char5.value = splitword[4];
                $char6.value = splitword[5];
            };
        } else {
            $resultmsg.style.display = "block";
            defaultdisplay ();
            if (seikainum == mondainum) {
                $resultmsg.innerText = "全問正解！";
            } else {
                $resultmsg.innerText = "【今回間違えた英単語】";
                resultdata.forEach(rowData => {
                    const row = document.createElement("tr");
                    rowData.forEach(cellData => {
                        const cell = document.createElement("td");
                        cell.textContent = cellData;
                        row.appendChild(cell);
                    });
                $wordtable.appendChild(row);
                $wordtable.style.display = "block";
                });
            };
        };
    };

    $startBtn.addEventListener("click", () => {
        clearresult ();
        $originlist = $list.slice();
        testdata = getTestdata($originlist, mondainum);
        $startBtn.style.display = "none";
        $stopBtn.style.display = "inline-block";
        $soundBtn.style.display = "inline-block";
        $mainbox.style.display = "block";
        $answerbox.style.display = "block";
        $char1.style.display = "inline-block";
        $char2.style.display = "inline-block";
        $char3.style.display = "inline-block";
        $char4.style.display = "inline-block";
        $char5.style.display = "inline-block";
        $char6.style.display = "inline-block";
        $a.style.display = "inline-block";
        $e.style.display = "inline-block";
        $i.style.display = "inline-block";
        $o.style.display = "inline-block";
        $u.style.display = "inline-block";
        $eraseBtn.style.display = "inline-block";
        $checkBtn.style.display = "inline-block";
        $progress.style.display = "block";
        $progress.value = 0;
        $resultmsg.style.display = "none";
        $wordtable.style.display = "none";
        setup ();
    });

    $char1.addEventListener("click", () => {
        answerText = answerText + $char1.value;
        $answerbox.innerText = answerText;
    });

    $char2.addEventListener("click", () => {
        answerText = answerText + $char2.value;
        $answerbox.innerText = answerText;
    });

    $char3.addEventListener("click", () => {
        answerText = answerText + $char3.value;
        $answerbox.innerText = answerText;
    });

    $char4.addEventListener("click", () => {
        answerText = answerText + $char4.value;
        $answerbox.innerText = answerText;
    });

    $char5.addEventListener("click", () => {
        answerText = answerText + $char5.value;
        $answerbox.innerText = answerText;
    });

    $char6.addEventListener("click", () => {
        answerText = answerText + $char6.value;
        $answerbox.innerText = answerText;
    });

    $a.addEventListener("click", () => {
        answerText = answerText + $a.value;
        $answerbox.innerText = answerText;
    });

    $e.addEventListener("click", () => {
        answerText = answerText + $e.value;
        $answerbox.innerText = answerText;
    });

    $i.addEventListener("click", () => {
        answerText = answerText + $i.value;
        $answerbox.innerText = answerText;
    });

    $o.addEventListener("click", () => {
        answerText = answerText + $o.value;
        $answerbox.innerText = answerText;
    });

    $u.addEventListener("click", () => {
        answerText = answerText + $u.value;
        $answerbox.innerText = answerText;
    });

    $eraseBtn.addEventListener("click", () => {
        $answerbox.innerText = "";
        answerText = "";
    });

};

entest();