function juku15() {

    const $startBtn = document.getElementById("start-btn");
    const $checkBtn = document.getElementById("check-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai0 = document.getElementById("mondai0");
    const $mondai = document.getElementById("mondai");
    const $kotae = document.getElementById("kotae");

    const $progress = document.getElementById("progress");

    const $kekka = document.getElementById("kekka");
    const $recommend = document.getElementById("recommend");
    const $recommendList = document.getElementById("recommend-list");

    const $backToStartBtn = document.getElementById("back-to-start-btn");

    const $memoHyojiBtn = document.getElementById("memohyoji");//計算メモ
    const $memoClearBtn = document.getElementById("memoclear");//計算メモ
    const $memoTable = document.getElementById("memotable");//計算メモ

    let count = 0;
    let seikaiNum = 0;
    let n = [];
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let a = 0;
    let p = 0;
    let pb = 0;

    let countMax = 8;

    let mistakes = [];
    let mistakesR = "";

    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };

    function defaultlet() {
        count = 0;
        seikaiNum = 0;
        n.length = 0;
        n1 = 0;
        n2 = 0;
        n3 = 0;
        a = 0;
        p = 0;
        pb = 0;
        mistakes.length = 0;
        mistakesR = "";
        $kotae.value = "";
        $mondai.innerText = "";
    };

    function defaultrecommend() {
        $kekka.innerText = "";
        $recommend.innerText = "";
        while ($recommendList.firstChild) {
            $recommendList.removeChild($recommendList.firstChild);
        };
    };

    function switchdisplay() {
        $mondai0.style.display = "block";
        $kotae.style.display = "block";
        $progress.style.display = "block";
        $checkBtn.style.display = "inline-block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $startBtn.style.display = "none";
        $backToStartBtn.style.display = "none";
    };

    function defaultdisplay() {
        $mondai0.style.display = "none";
        $kotae.style.display = "none";
        $memoHyojiBtn.style.display = "none";//計算メモ
        $memoClearBtn.style.display = "none";//計算メモ
        $memoTable.style.display = "none";//計算メモ
        $progress.style.display = "none";
        $checkBtn.style.display = "none";
        $eraseBtn.style.display = "none";
        $resetBtn.style.display = "none";
        $startBtn.style.display = "block";
        $backToStartBtn.style.display = "none";
    };

    function recommenddisplay() {
        $mondai0.style.display = "none";
        $kotae.style.display = "none";
        $memoHyojiBtn.style.display = "none";//計算メモ
        $memoClearBtn.style.display = "none";//計算メモ
        $memoTable.style.display = "none";//計算メモ
        $progress.style.display = "none";
        $checkBtn.style.display = "none";
        $eraseBtn.style.display = "none";
        $resetBtn.style.display = "none";
        $startBtn.style.display = "none";
        $backToStartBtn.style.display = "block";
    };

    function displayrecommend(mt) {
        if (mt.length == 0) {
            $recommend.innerText = `全問正解！`;
        } else {
            $recommend.innerText = `今回まちがえた問題`;
            for (let j = 0; j < mt.length; j++) {
                mistakesR = document.createElement(`li`);
                mistakesR.textContent = mt[j];
                $recommendList.appendChild(mistakesR);
            };
        };
    };

    function closing() {
        audio1.play();
        $progress.value = 1;
        $kekka.innerText = `【正解数：` + seikaiNum + `問/` + countMax + `問】`;
        displayrecommend(mistakes);
        recommenddisplay();
        defaultlet();
    };

    function setup() {
        $memoHyojiBtn.style.display = "block";//計算メモ
        pb = p;
        p = getRandom(0, 3);
        while (p == pb) {
            p = getRandom(0, 3);
        };
        switch (p) {
            case 0: //等差
                n[0] = getRandom(1, 9);
                n1 = getRandom(2, 9);
                for (let i = 1; i < 8; i++) {
                    n[i] = n[i - 1] + n1;
                };
                break;
            case 1: //等倍を追加
                n[0] = getRandom(1, 9);
                n1 = getRandom(1, 3);
                n2 = getRandom(0, 1);
                for (let i = 1; i < 8; i++) {
                    n3 = n1 * (i + n2);
                    n[i] = n[i - 1] + n3;
                };
                break;
            case 2: //奇数を追加
                n[0] = getRandom(1, 9);
                n1 = 2;
                n2 = getRandom(0, 1);
                for (let i = 1; i < 8; i++) {
                    n3 = n1 * (i - 1 + n2) + 1;
                    n[i] = n[i - 1] + n3;
                };
                break;
            case 3: //フィボナッチ
                n[0] = getRandom(1, 3);
                n[1] = getRandom(n[0], 5);
                for (let i = 2; i < 8; i++) {
                    n[i] = n[i - 2] + n[i - 1];
                };
                break;
            default:
                alert(`リロードして下さい`);
        };
        a = n[6];
        $mondai.innerText = n[0] + `, ` + n[1] + `, ` + n[2] + `, ` + n[3] + `, ` + n[4] + `, ` + n[5] + `, □, ` + n[7] +`, ...`;
    };

    function checkAnswer() {
        $memoClearBtn.style.display = "none";//計算メモ
        $memoTable.style.display = "none";//計算メモ
        setTimeout(() => {
            audio1.play();
            $kotae.value = "";
            $progress.value = count / countMax;
        }, 500);
        if ($kotae.value == a) {
            seikaiNum++;
        } else {
            if (p == 1) {
                mistakes.push($mondai.innerText + `　＜正解：` + a + `＞`);
            } else {
                mistakes.push($mondai.innerText + `　＜正解：` + a + `＞`);
            };
        };
        count++;
        if (count < countMax) {
            setup();
        } else {
            closing();
        };
    };

    $checkBtn.addEventListener("click", () => {
        checkAnswer();
    });

    $startBtn.addEventListener("click", () => {
        switchdisplay();
        defaultlet();
        $progress.value = 0;
        setup();
    });

    $eraseBtn.addEventListener("click", () => {
        $kotae.value = "";
    });

    $resetBtn.addEventListener("click", () => {
        defaultdisplay();
        defaultlet();
        defaultrecommend();
        $progress.value = 0;
    });

    $backToStartBtn.addEventListener("click", () => {
        defaultdisplay();
        defaultlet();
        defaultrecommend();
        $progress.value = 0;
    });

};

juku15();