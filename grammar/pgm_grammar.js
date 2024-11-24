function grammarEN () {

    const $stopBtn = document.getElementById("stop-btn");
    const $startBtn = document.getElementById("start-btn");

    const $mondai = document.getElementById("mondai");
    const $spacer = document.getElementById("spacer");
    const $inputAnswer = document.getElementById("inputanswer");

    const $wordBtnContainer = document.getElementById("word-btn-container");
    const $word1Btn = document.getElementById("word1");
    const $word2Btn = document.getElementById("word2");
    const $word3Btn = document.getElementById("word3");
    const $word4Btn = document.getElementById("word4");
    const $word5Btn = document.getElementById("word5");
    const $word6Btn = document.getElementById("word6");
    const $word7Btn = document.getElementById("word7");
    const $word8Btn = document.getElementById("word8");
    const $checkBtn = document.getElementById("check-btn");

    const $retryBtn = document.getElementById("retry-btn");
    const $skipBtn = document.getElementById("skip-btn");

    const $progress = document.getElementById("progress");

    const $resultmsg = document.getElementById("resultmsg");
    const $missedListTable = document.getElementById("missed-list-table");

    let $originlist = [];
    let $listShuffled = [];
    let $listForButton = [];
    let $missedList = [];

    let answertext = "";
    let countmondaiNum = 0;
    const mondaiNumMax = 10;

    //最後の文字を抜き出す関数（./?用）
    function getLastCharacter (text) {
        return text[text.length - 1];
    };

    //配列をシャッフルして必要数抜き出す関数
    function shuffle (array) {
        for (let ali = array.length - 1; ali > 0; ali--) {
            const alj = Math.floor(Math.random() * (ali + 1));
            [array[ali], array[alj]] =  [array[alj], array[ali]];
        };
        array = array.slice(0, mondaiNumMax);
        return array;
    };

    //配列の最初の2つの要素を削る関数
    function removeFirstTwoElements (array) {
        return array.slice(2);
    };

    //一文字目を大文字にする関数
    function capitalizeFirstLetter (str) {
        return str[0].toUpperCase () + str.slice(1);
    };

    function resetBtn () {
        $word1Btn.style.color = "black";
        $word2Btn.style.color = "black";
        $word3Btn.style.color = "black";
        $word4Btn.style.color = "black";
        $word5Btn.style.color = "black";
        $word6Btn.style.color = "black";
        $word7Btn.style.color = "black";
        $word8Btn.style.color = "black";
        $word1Btn.disabled = null;
        $word2Btn.disabled = null;
        $word3Btn.disabled = null;
        $word4Btn.disabled = null;
        $word5Btn.disabled = null;
        $word6Btn.disabled = null;
        $word7Btn.disabled = null;
        $word8Btn.disabled = null;
     };

    function defaultdisplay1 () {
        resetBtn ();
        $startBtn.style.display = "block";
        $stopBtn.style.display = "none";
        $mondai.style.display = "none";
        $spacer.style.display = "none";
        $inputAnswer.style.display = "none";
        $wordBtnContainer.style.display = "none";
        $progress.style.display = "none";
        $retryBtn.style.display = "none";
        $skipBtn.style.display = "none";
        $listShuffled.length = 0;
        $listForButton.length = 0;
        countmondaiNum = 0;
        answertext = "";
        $mondai.innerText = "";
        $inputAnswer.innerText = "";
        $progress.value = 0;
    };

    function defaultdisplay2 () {
        $resultmsg.style.display = "none";
        $missedListTable.style.display = "none";
        $resultmsg.innerText = "";
        $missedList.length = 0;
        while ($missedListTable.rows.length > 0) {
            $missedListTable.deleteRow(0);
        };
    };

    function setOrderQuiz () {
        if (countmondaiNum < mondaiNumMax) {
            $mondai.innerText = $listShuffled[countmondaiNum][0];
            answertext = $listShuffled[countmondaiNum][1];
            $checkBtn.value = getLastCharacter($listShuffled[countmondaiNum][1]);
            $listForButton = removeFirstTwoElements($listShuffled[countmondaiNum]);
            $listForButton = shuffle($listForButton);
            $word1Btn.value = $listForButton[0];
            $word2Btn.value = $listForButton[1];
            $word3Btn.value = $listForButton[2];
            $word4Btn.value = $listForButton[3];
            $word5Btn.value = $listForButton[4];
            $word6Btn.value = $listForButton[5];
            $word7Btn.value = $listForButton[6];
            $word8Btn.value = $listForButton[7];
        } else {
            defaultdisplay1 ();
            $resultmsg.style.display = "block";
            if ($missedList.length == 0) {
                $resultmsg.innerText = "全問正解！";
            } else {
                $resultmsg.innerText = "今回間違えた問題：";
                $missedList.forEach(item => {
                    const row = document.createElement("tr");
                    const cell = document.createElement("td");
                    cell.textContent = item;
                    row.appendChild(cell);
                    $missedListTable.appendChild(row);
                    });
                $missedListTable.style.display = "block";
            };
        };
    };

    $checkBtn.addEventListener("click", () => {
        $inputAnswer.innerText += $checkBtn.value;
        if ($inputAnswer.innerText == answertext) {
            audio1.play();
        } else {
            audio2.play();
            $missedList.push($listShuffled[countmondaiNum][0]);
            $missedList.push($listShuffled[countmondaiNum][1]);
            $missedList.push("あなたの回答: " + $inputAnswer.innerText);
        };
        countmondaiNum++;
        setTimeout(() => {
            $progress.value = countmondaiNum / mondaiNumMax;
            $inputAnswer.innerText = "";
            resetBtn ();
            setOrderQuiz();
        }, 500);
     });
    
    $startBtn.addEventListener("click", () => {
        defaultdisplay2 ();
        $originlist = $list.slice();
        $listShuffled = shuffle ($originlist);
        console.log($listShuffled); //データのエラーチェック用
        $startBtn.style.display = "none";
        $stopBtn.style.display = "block";
        $mondai.style.display = "block";
        $spacer.style.display = "inline-block";
        $inputAnswer.style.display = "inline-block";
        $wordBtnContainer.style.display = "inline-block";
        $retryBtn.style.display = "inline-block";
        $skipBtn.style.display = "inline-block";
        $progress.style.display = "block";
        setOrderQuiz ();
    });

    $word1Btn.addEventListener("click", () => {
       if ($inputAnswer.innerText == "") {
        $inputAnswer.innerText = capitalizeFirstLetter($word1Btn.value);
       } else {
        $inputAnswer.innerText += " " + $word1Btn.value;
       };
       $word1Btn.style.color = "lightgray";
       $word1Btn.disabled = "disabled";
    });

    $word2Btn.addEventListener("click", () => {
        if ($inputAnswer.innerText == "") {
         $inputAnswer.innerText = capitalizeFirstLetter($word2Btn.value);
        } else {
         $inputAnswer.innerText += " " + $word2Btn.value;
        };
        $word2Btn.style.color = "lightgray";
        $word2Btn.disabled = "disabled";
     });

     $word3Btn.addEventListener("click", () => {
        if ($inputAnswer.innerText == "") {
         $inputAnswer.innerText = capitalizeFirstLetter($word3Btn.value);
        } else {
         $inputAnswer.innerText += " " + $word3Btn.value;
        };
        $word3Btn.style.color = "lightgray";
        $word3Btn.disabled = "disabled";
     });

     $word4Btn.addEventListener("click", () => {
        if ($inputAnswer.innerText == "") {
         $inputAnswer.innerText = capitalizeFirstLetter($word4Btn.value);
        } else {
         $inputAnswer.innerText += " " + $word4Btn.value;
        };
        $word4Btn.style.color = "lightgray";
        $word4Btn.disabled = "disabled";
     });

     $word5Btn.addEventListener("click", () => {
        if ($inputAnswer.innerText == "") {
         $inputAnswer.innerText = capitalizeFirstLetter($word5Btn.value);
        } else {
         $inputAnswer.innerText += " " + $word5Btn.value;
        };
        $word5Btn.style.color = "lightgray";
        $word5Btn.disabled = "disabled";
     });

     $word6Btn.addEventListener("click", () => {
        if ($inputAnswer.innerText == "") {
         $inputAnswer.innerText = capitalizeFirstLetter($word6Btn.value);
        } else {
         $inputAnswer.innerText += " " + $word6Btn.value;
        };
        $word6Btn.style.color = "lightgray";
        $word6Btn.disabled = "disabled";
     });

     $word7Btn.addEventListener("click", () => {
        if ($inputAnswer.innerText == "") {
         $inputAnswer.innerText = capitalizeFirstLetter($word7Btn.value);
        } else {
         $inputAnswer.innerText += " " + $word7Btn.value;
        };
        $word7Btn.style.color = "lightgray";
        $word7Btn.disabled = "disabled";
     });

     $word8Btn.addEventListener("click", () => {
        if ($inputAnswer.innerText == "") {
         $inputAnswer.innerText = capitalizeFirstLetter($word8Btn.value);
        } else {
         $inputAnswer.innerText += " " + $word8Btn.value;
        };
        $word8Btn.style.color = "lightgray";
        $word8Btn.disabled = "disabled";
     });

     $retryBtn.addEventListener("click", () => {
        $inputAnswer.innerText = "";
        resetBtn ();
     });

     $skipBtn.addEventListener("click", () => {
        audio2.play();
        $missedList.push($listShuffled[countmondaiNum][0]);
        $missedList.push($listShuffled[countmondaiNum][1]);
        $missedList.push("あなたの回答: (スキップ)");
        countmondaiNum++;
        $progress.value = countmondaiNum / mondaiNumMax;
        $inputAnswer.innerText = "";
        resetBtn ();
        setOrderQuiz();
     });

     $stopBtn.addEventListener("click", () => {
        defaultdisplay1 ();
        defaultdisplay2 ();
     });

};

grammarEN ();