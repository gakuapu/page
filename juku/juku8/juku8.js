function juku8() {

    const $startBtn = document.getElementById("start-btn");
    const $checkBtn = document.getElementById("check-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $kotae = document.getElementById("kotae");
    const $unit = document.getElementById("unit");

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
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;
    let a = 0;
    let p = 0;
    let pb = 0;
    let q = 0;
    let ut = "";

    let countMax = 8;

    let mistakes = [];
    let mistakesR = "";

    function getRandom(min, max) {
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };

    function defaultlet() {
        count = 0;
        seikaiNum = 0;
        n1 = 0;
        n2 = 0;
        n3 = 0;
        n4 = 0;
        a = 0;
        p = 0;
        pb = 0;
        q = 0;
        mistakes.length = 0;
        mistakesR = "";
        $kotae.value = "";
        $mondai.innerText = "";
        $unit.innerText = "";
        ut = "";
    };

    function defaultrecommend() {
        $kekka.innerText = "";
        $recommend.innerText = "";
        while ($recommendList.firstChild) {
            $recommendList.removeChild($recommendList.firstChild);
        };
    };

    function switchdisplay() {
        $kotae.style.display = "inline-block";
        $unit.style.display = "inline-block";
        $progress.style.display = "block";
        $checkBtn.style.display = "inline-block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $startBtn.style.display = "none";
        $backToStartBtn.style.display = "none";
    };

    function defaultdisplay() {
        $kotae.style.display = "none";
        $unit.style.display = "none";
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
        $kotae.style.display = "none";
        $unit.style.display = "none";
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
        p = getRandom(0, 1);
        while (p == pb) {
            p = getRandom(0, 1);
        };
        n1 = getRandom (2, 3);
        n2 = getRandom (1, 8);
        n3 = getRandom (n2 + 1, 9);
        n4 = getRandom (1, n3 - 1);
        n3 = n3 - n4;
        switch (p) {
            case 0:
                $unit.innerText = `dL`;
                ut = `dL`;
                    if (n3 = 9) {
                        q = 0;
                    } else {
                        q = getRandom (0, 1);
                    };
                n3 = n3 * 100 + q * 50;
                n4 = n4 * 100 + q * 50;
                a = n1 * 10 + n2 - (n3 + n4) / 100;
                $mondai.innerText = `はじめに水が` + n1 + `L ` + n2 + `dLありました。Aさんが` + n3 + `mL、Bさんが` + n4 + `mL飲みました。のこりは何dL?`; 
                break;
            case 1:
                $unit.innerText = `mL`;
                ut = `mL`;
                n2 = n2 * 100 + getRandom(0, 1) * 50;
                a = n1 * 1000 + n2 - (n3 + n4) * 100;
                $mondai.innerText = `はじめに水が` + n1 + `L ` + n2 + `mLありました。Aさんが` + n3 + `dL、Bさんが` + n4 + `dL飲みました。のこりは何mL?`; 
                break;
            default:
                alert(`リロードして下さい`);
        };
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
            mistakes.push($mondai.innerText + `　＜正解：` + a + ut + `＞`);
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

juku8();