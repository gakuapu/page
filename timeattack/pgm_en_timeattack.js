function enta() {

    const $startBtn = document.getElementById("start-btn");
    const $stopBtn = document.getElementById("stop-btn");
    const $lng = document.getElementById("lng");

    const $mainbox = document.getElementById("mainbox");
    const $answerbox1 = document.getElementById("answerbox1");
    const $answerbox2 = document.getElementById("answerbox2");
    const $answerbox3 = document.getElementById("answerbox3");

    const $mondaiCount = document.getElementById("mondaicount")
    const $timerBar = document.getElementById("timer-bar");

    const $resultmsg = document.getElementById("resultmsg");
    const $wrongwordtable = document.getElementById("wrongwordtable");

    const mondainumMax = 30;
    const timeMax = 60;
    let count = 0;
    let seikainum = 0;

    let $originlist = [];
    let testdata = [];
    let resultdata = [];
    let testdatalength = 0;
    let l1 = 0;
    let l2 = 1;

    let n1 = 0;
    let n2 = 0;
    let p1 = 0;

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

//timerBar↓
let timer1;

function insideTimer1 () {
    tb = tb - 500 / (timeMax * 1000);
    $timerBar.value = tb;
    if (tb < 0) {
        clearInterval(timer1);
        resultdata.push([testdata[count][0], testdata[count][1]]);
        count++;
        closing();
    };
};

function moveTimerBar () {
    tb = 1;
    $timerBar.value = tb;
    timer1 = setInterval(insideTimer1, 500);
};
//timerBar↑

    function defaultdisplay () {
        clearInterval(timer1);
        $startBtn.style.display = "block";
        $lng.style.display = "block";
        $stopBtn.style.display = "none";
        $timerBar.style.display = "none";
        $mainbox.style.display = "none";
        $answerbox1.style.display = "none";
        $answerbox2.style.display = "none";
        $answerbox3.style.display = "none";
        $originlist.length = 0;
        testdata.length = 0;
        testdatalength = 0;
        l1 = 0;
        l2 = 1;
        $mainbox.innerText = "";
        $answerbox1.innerText = "";
        $answerbox2.innerText = "";
        $answerbox3.innerText = "";
    };
 
    function clearresult () {
        $mondaiCount.style.display = "none";
        $resultmsg.style.display = "none";
        $wrongwordtable.style.display = "none";
        resultdata.length = 0;
        while ($wrongwordtable.rows.length > 0) {
            $wrongwordtable.deleteRow(0);
        };
        count = 0;
        seikainum = 0;
        n1 = 0;
        n2 = 0;
        p1 = 0;
        pb = 0;
        $resultmsg.innerText = "";
    };

    $stopBtn.addEventListener("click", () => {
        defaultdisplay ();
        clearresult ();
    });

    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
        };

    function closing () {
        clearInterval(timer1);
        $mondaiCount.innerText = "正解数：" + seikainum + "問/" + count + "問";
        $resultmsg.style.display = "block";
        defaultdisplay ();
        if (seikainum == mondainumMax) {
            $resultmsg.innerText = "完走＆全問正解！";
        } else {
            if (count < mondainumMax) {
                $resultmsg.innerText = "時間切れ...｜";
            };
            if (resultdata.length > 0) {
                console.log(resultdata);
                $resultmsg.innerText += "今回間違えた英単語：";
                resultdata.forEach(rowData => {
                    const row = document.createElement("tr");
                    rowData.forEach(cellData => {
                        const cell = document.createElement("td");
                        cell.textContent = cellData;
                        row.appendChild(cell);
                    });
                $wrongwordtable.appendChild(row);
                $wrongwordtable.style.display = "block";
                });
            };
        };
    };
 
    function setup () {
        n1 = getRandom(0, testdatalength - 1);
            while (n1 == count) {
                n1 = getRandom(0, testdatalength - 1);
            };
        n2 = getRandom(0, testdatalength - 1);
            while (n2 == count || n2 == n1) {
                n2 = getRandom(0, testdatalength - 1);
            };
        p1 = getRandom(1, 3);
        $mondaiCount.innerText = "正解数：" + seikainum + "問/" + count + "問";
        if (count < mondainumMax) {
            $mainbox.innerText = testdata[count][l2];
            switch (p1) {
                case 1:
                    $answerbox1.innerText = testdata[count][l1];
                    $answerbox2.innerText = testdata[n1][l1];
                    $answerbox3.innerText = testdata[n2][l1];
                    break;
                case 2:
                    $answerbox1.innerText = testdata[n1][l1];
                    $answerbox2.innerText = testdata[count][l1];
                    $answerbox3.innerText = testdata[n2][l1];
                    break;
                case 3:
                    $answerbox1.innerText = testdata[n1][l1];
                    $answerbox2.innerText = testdata[n2][l1];
                    $answerbox3.innerText = testdata[count][l1];
                    break;
                default:
                    alert("リロードして下さい");
            };
        } else {
            closing();
        };
    };

    $answerbox1.addEventListener("click", () => {
        if ($answerbox1.innerText == testdata[count][l1]) {
            seikainum++;
        } else {
            audio2.play();
            resultdata.push([testdata[count][0], testdata[count][1]]);
        };
        count++;
        setup ();
    });

    $answerbox2.addEventListener("click", () => {
        if ($answerbox2.innerText == testdata[count][l1]) {
            seikainum++;
        } else {
            audio2.play();
            resultdata.push([testdata[count][0], testdata[count][1]]);
        };
        count++;
        setup ();
    });

    $answerbox3.addEventListener("click", () => {
        if ($answerbox3.innerText == testdata[count][l1]) {
            seikainum++;
        } else {
            audio2.play();
            resultdata.push([testdata[count][0], testdata[count][1]]);
        };
        count++;
        setup ();
    });

    $startBtn.addEventListener("click", () => {
        clearresult ();
        $originlist = $list.slice();
        testdata = getTestdata($originlist, $originlist.length);
        testdatalength = testdata.length;
        if ($lng.value == 0) {
            l1 = 0;
            l2 = 1;
        } else {
            l1 = 1;
            l2 = 0;
        };
        $startBtn.style.display = "none";
        $lng.style.display = "none";
        $stopBtn.style.display = "block";
        $mainbox.style.display = "block";
        $answerbox1.style.display = "block";
        $answerbox2.style.display = "block";
        $answerbox3.style.display = "block";
        $timerBar.style.display = "block";
        $mondaiCount.style.display = "block";
        $resultmsg.style.display = "none";
        $wrongwordtable.style.display = "none";
        moveTimerBar();
        setup ();
    });

};

enta();