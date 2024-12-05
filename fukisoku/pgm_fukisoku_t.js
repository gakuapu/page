function fukisokutest() {

    const $stopBtn = document.getElementById("stop-btn");
    const $startBtn = document.getElementById("start-btn");
    const $hanni = document.getElementById("hanni");
    const $kaisuu = document.getElementById("kaisuu");

    const $katachilabel0 = document.getElementById("katachilabel0");
    const $katachilabel1 = document.getElementById("katachilabel1");
    const $katachilabel2 = document.getElementById("katachilabel2");
    const $entxtbox0 = document.getElementById("entxtbox0");
    const $entxtbox1 = document.getElementById("entxtbox1");
    const $entxtbox2 = document.getElementById("entxtbox2");

    const $char1 = document.getElementById("char1");
    const $char2 = document.getElementById("char2");
    const $char3 = document.getElementById("char3");
    const $char4 = document.getElementById("char4");
    const $char5 = document.getElementById("char5");

    const $d = document.getElementById("chard");
    const $t = document.getElementById("chart");
    const $a = document.getElementById("chara");
    const $e = document.getElementById("chare");
    const $i = document.getElementById("chari");
    const $o = document.getElementById("charo");
    const $u = document.getElementById("charu");

    const $sameBtn1 = document.getElementById("same-btn1");
    const $sameBtn2 = document.getElementById("same-btn2");

    const $eraseBtn = document.getElementById("erase-btn");
    const $checkBtn = document.getElementById("check-btn");

    const $progress = document.getElementById("progress");

    const $resultmsg = document.getElementById("resultmsg");
    const $resultmsg2 = document.getElementById("resultmsg2");
    const $wordtable = document.getElementById("wordtable");
    const $wordtable2 = document.getElementById("wordtable2");

    let seikainum = 0;
    let count = 0;
    let mondainum = 0;
    let currentkatachi = 0;
    let katachi1seikaiflag = 0;
    let inputText = "";

    let $originlist = [];
    let testdata = [];
    let splitword = [];
    let resultdata = [];
    let resultdata2 = [];

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
        $kaisuu.style.display = "inline-block"
        $hanni.style.display = "inline-block"
        $startBtn.style.display = "inline-block";
        $stopBtn.style.display = "none";
        $katachilabel0.style.display = "none";
        $katachilabel1.style.display = "none";
        $katachilabel2.style.display = "none";
        $entxtbox0.style.display = "none";
        $entxtbox1.style.display = "none";
        $entxtbox2.style.display = "none";
        $char1.style.display = "none";
        $char2.style.display = "none";
        $char3.style.display = "none";
        $char4.style.display = "none";
        $char5.style.display = "none";
        $d.style.display = "none";
        $t.style.display = "none";
        $a.style.display = "none";
        $e.style.display = "none";
        $i.style.display = "none";
        $o.style.display = "none";
        $u.style.display = "none";
        $sameBtn1.style.display = "none";
        $sameBtn2.style.display = "none";
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
        $entxtbox0.innerText = "";
        $entxtbox1.innerText = "";
        $entxtbox2.innerText = "";
        inputText = "";
        count = 0;
        currentkatachi = 0;
        $entxtbox1.style.borderColor = "dimgray";
        $entxtbox2.style.borderColor = "dimgray";
        katachi1seikaiflag = 0;
    };
 
    function clearresult () {
        $resultmsg.style.display = "none";
        $wordtable.style.display = "none";
        resultdata.length = 0;
        while ($wordtable.rows.length > 0) {
            $wordtable.deleteRow(0);
        };
        $resultmsg2.style.display = "none";
        $wordtable2.style.display = "none";
        resultdata2.length = 0;
        while ($wordtable2.rows.length > 0) {
            $wordtable2.deleteRow(0);
        };
        seikainum = 0;
        mondainum = 0;
    };

    $stopBtn.addEventListener("click", () => {
        defaultdisplay ();
        clearresult ();
    });

    function split (word) {
        const vowels = ["d", "t", "a", "e", "i", "o", "u"];
        let characters = word.split("");
        let seen = new Set();
        let result = [];
        let resultR = [];
        for (let char of characters) {
            if (!vowels.includes(char) && !seen.has(char)) {
                result.push(char);
                seen.add(char);
            };
        };
        resultR = result.filter(char => char >= "a" && char <="z");
        return resultR;
    };

    $checkBtn.addEventListener ("click", () => {
        if ($hanni.value == "0") {
            if (testdata[count][1] == inputText) {
                audio1.play();
                resultdata2.push(testdata[count]);
                seikainum++;
            } else {
                audio2.play();
                resultdata.push(testdata[count]);
            };
            count++;
            $progress.value = count / mondainum;
            $entxtbox1.innerText = "";
            inputText = "";
            setup();
        } else {
            if (currentkatachi == 1) {
                if (testdata[count][1] == inputText) {
                    audio1.play();
                    katachi1seikaiflag = 1;
                } else {
                    audio2.play();
                };
                inputText = "";
                currentkatachi = 2;
                $entxtbox1.style.borderColor = "dimgray";
                $entxtbox2.style.borderColor = "darkorange";
            } else {
                if (testdata[count][2] == inputText) {
                    audio1.play();
                    if (katachi1seikaiflag == 1) {
                        resultdata2.push(testdata[count]);
                        seikainum++;
                    } else {
                        resultdata.push(testdata[count]);
                    };
                } else if (testdata[count][0] == `forget`) {
                    if (inputText == `forgot` || inputText == `forgotten`) {
                        audio1.play();
                        if (katachi1seikaiflag == 1) {
                            resultdata2.push(testdata[count]);
                            seikainum++;
                        } else {
                            resultdata.push(testdata[count]);
                        };
                    } else {
                        audio2.play();
                        resultdata.push(testdata[count]);
                    };
                } else {
                    audio2.play();
                    resultdata.push(testdata[count]);
                };
                count++;
                $progress.value = count / mondainum;
                $entxtbox1.innerText = "";
                $entxtbox2.innerText = "";
                inputText = "";
                currentkatachi = 1;
                $entxtbox1.style.borderColor = "darkorange";
                $entxtbox2.style.borderColor = "dimgray";
                setup();
            };
        };
    });

    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
        };

    function setup () {
        if (count < mondainum) {
            $entxtbox0.innerText = testdata[count][0];
            splitword = split (testdata[count][0] + testdata[count][1] + testdata[count][2]);
            if (splitword.length > 5) {
                console.log(splitword);
                seikainum++;
                count++;
                $progress.value = count / mondainum;
                setup();
            } else {
                while (splitword.length < 5) {
                    let ram = getRandom (1, 5);
                    switch (ram) {
                        case 1:
                            if (! splitword.includes("n")) {
                                splitword.push("n");
                            };
                            break;
                        case 2:
                            if (! splitword.includes("w")) {
                                splitword.push("w");
                            };
                            break;
                        case 3:
                            if (! splitword.includes("g")) {
                                splitword.push("g");
                            };
                            break;
                        case 4:
                            if (! splitword.includes("h")) {
                                splitword.push("h");
                            };
                            break;
                        case 5:
                            if (! splitword.includes("f")) {
                                splitword.push("f");
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
            };
        } else {
            $resultmsg.style.display = "block";
            defaultdisplay ();
            if (seikainum == mondainum) {
                $resultmsg.innerText = "全問正解！";
            } else {
                $resultmsg.innerText = "【今回間違えた不規則動詞】";
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
            if (seikainum > 0) {
                $resultmsg2.style.display = "block";
                $resultmsg2.innerText = "【今回正解した不規則動詞】";
            };
            resultdata2.forEach(rowData2 => {
                const row2 = document.createElement("tr");
                rowData2.forEach(cellData2 => {
                    const cell2 = document.createElement("td");
                    cell2.textContent = cellData2;
                    row2.appendChild(cell2);
                });
                $wordtable2.appendChild(row2);
                $wordtable2.style.display = "block";
            });
        };
    };

    $startBtn.addEventListener("click", () => {
        clearresult ();
        switch ($kaisuu.value) {
            case "1":
                $originlist = $list1.slice();
                break;
            case "2":
                $originlist = $list2.slice();
                break;
            case "3":
                $originlist = $list3.slice();
                break;
            case "4":
                $originlist = $list4.slice();
                break;
            default:
                alert (`リロードして下さい`);
        };
        mondainum = $originlist.length;
        testdata = getTestdata($originlist, mondainum);
        $kaisuu.style.display = "none";
        $hanni.style.display = "none";
        $startBtn.style.display = "none";
        $stopBtn.style.display = "inline-block";
        $katachilabel0.style.display = "inline-block";
        $entxtbox0.style.display = "inline-block";
        $katachilabel1.style.display = "inline-block";
        $entxtbox1.style.display = "inline-block";
        $sameBtn1.style.display = "inline-block";
        if ($hanni.value == "1") {
            $katachilabel2.style.display = "inline-block";
            $entxtbox2.style.display = "inline-block";
            $sameBtn2.style.display = "inline-block";
        };
        $char1.style.display = "inline-block";
        $char2.style.display = "inline-block";
        $char3.style.display = "inline-block";
        $char4.style.display = "inline-block";
        $char5.style.display = "inline-block";
        $d.style.display = "inline-block";
        $t.style.display = "inline-block";
        $a.style.display = "inline-block";
        $e.style.display = "inline-block";
        $i.style.display = "inline-block";
        $o.style.display = "inline-block";
        $u.style.display = "inline-block";
        $eraseBtn.style.display = "inline-block";
        $checkBtn.style.display = "inline-block";
        $progress.style.display = "block";
        $progress.value = 0;
        resultdata.push([`現在形`, `過去形`, `過去分詞`]);
        resultdata2.push([`現在形`, `過去形`, `過去分詞`]);
        currentkatachi = 1;
        if ($hanni.value == 1) {
            $entxtbox1.style.borderColor = "darkorange";
        };
        setup ();
    });

    function writetxtbox (currentkatachi) {
        if (currentkatachi == 1) {
            $entxtbox1.innerText = inputText;
        } else {
            $entxtbox2.innerText = inputText;
        };
    };

    $char1.addEventListener("click", () => {
        inputText = inputText + $char1.value;
        writetxtbox (currentkatachi);
    });

    $char2.addEventListener("click", () => {
        inputText = inputText + $char2.value;
        writetxtbox (currentkatachi);
    });

    $char3.addEventListener("click", () => {
        inputText = inputText + $char3.value;
        writetxtbox (currentkatachi);
    });

    $char4.addEventListener("click", () => {
        inputText = inputText + $char4.value;
        writetxtbox (currentkatachi);
    });

    $char5.addEventListener("click", () => {
        inputText = inputText + $char5.value;
        writetxtbox (currentkatachi);
    });

    $d.addEventListener("click", () => {
        inputText = inputText + $d.value;
        writetxtbox (currentkatachi);
    });

    $t.addEventListener("click", () => {
        inputText = inputText + $t.value;
        writetxtbox (currentkatachi);
    });

    $a.addEventListener("click", () => {
        inputText = inputText + $a.value;
        writetxtbox (currentkatachi);
    });

    $e.addEventListener("click", () => {
        inputText = inputText + $e.value;
        writetxtbox (currentkatachi);
    });

    $i.addEventListener("click", () => {
        inputText = inputText + $i.value;
        writetxtbox (currentkatachi);
    });

    $o.addEventListener("click", () => {
        inputText = inputText + $o.value;
        writetxtbox (currentkatachi);
    });

    $u.addEventListener("click", () => {
        inputText = inputText + $u.value;
        writetxtbox (currentkatachi);
    });

    $sameBtn1.addEventListener("click", () => {
        inputText = testdata[count][0];
        writetxtbox (currentkatachi);
    });

    $sameBtn2.addEventListener("click", () => {
        inputText = $entxtbox1.innerText;
        writetxtbox (currentkatachi);
    });

    $eraseBtn.addEventListener("click", () => {
        inputText = "";
        writetxtbox (currentkatachi);
    });

};

fukisokutest();