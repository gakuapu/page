function juku7() {

    const $startBtn = document.getElementById("start-btn");
    const $checkBtn = document.getElementById("check-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $kotae1 = document.getElementById("kotae1");
    const $kotae2 = document.getElementById("kotae2");
    const $unit1 = document.getElementById("unit1");
    const $unit2 = document.getElementById("unit2");

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
    let n11 = 0;
    let n11b = 0;
    let n12 = 0;
    let n13 = 0;
    let n14 = 0;
    let n21 = 0;
    let n22 = 0;
    let n23 = 0;
    let n24 = 0;
    let a1 = 0;
    let a2 = 0;

    let countMax = 5;

    let mistakes = [];
    let mistakesR = "";

    function getRandom(min, max) {
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };

    function defaultlet() {
        count = 0;
        seikaiNum = 0;
        n11 = 0;
        n11b = 0;
        n12 = 0;
        n13 = 0;
        n14 = 0;
        n21 = 0;
        n22 = 0;
        n23 = 0;
        n24 = 0;
        a1 = 0;
        a2 = 0;
        mistakes.length = 0;
        mistakesR = "";
        $kotae1.value = "";
        $kotae2.value = "";
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
        $kotae1.style.display = "inline-block";
        $unit1.style.display = "inline-block";
        $kotae2.style.display = "inline-block";
        $unit2.style.display = "inline-block";
        $progress.style.display = "block";
        $checkBtn.style.display = "inline-block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $startBtn.style.display = "none";
        $backToStartBtn.style.display = "none";
    };

    function defaultdisplay() {
        $kotae1.style.display = "none";
        $unit1.style.display = "none";
        $kotae2.style.display = "none";
        $unit2.style.display = "none";
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
        $kotae1.style.display = "none";
        $unit1.style.display = "none";
        $kotae2.style.display = "none";
        $unit2.style.display = "none";
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
        n11b = n11;
        n11 = getRandom(3, 6);
        while (n11 == n11b) {
            n11 = getRandom(3, 6);
        };
        n12 = getRandom(1, 8);
        n13 = getRandom(1, n11 - 2);
        n14 = getRandom(n12 + 1, 9);
        n21 = getRandom(3, 6);
        while (n21 == n11) {
            n21 = getRandom(3, 6);
        };
        n22 = getRandom(1, 8);
        n23 = getRandom(1, n21 - 2);
        n24 = getRandom(n22 + 1, 9);
        while ((n12 + n22 - n14 - n24) % 10 == 0) {
            n22 = getRandom(1, 8);
            n24 = getRandom(n22 + 1, 9);
        };
        n12 = n12 * 10;
        n14 = n14 * 10;
        n22 = n22 * 10;
        n24 = n24 * 10;
        a1 = (n11 + n21) * 100 + (n12 + n22) - (n13 + n23) * 100 - (n14 + n24);
        a2 = (a1 % 100);
        a1 = (a1 - a2) / 100;
        $mondai.innerText = `Aさんは` + n11 + `m` + n12 + `cm、Bさんは` + n21 + `m` + n22 + `cmテープを持っています。Aさんは` + n13 + `m` + n14 + `cm、Bさんは` + n23 + `m` + n24 + `cm使いました。のこりのテープの長さの合計は?`;
    };

    function checkAnswer() {
        $memoClearBtn.style.display = "none";//計算メモ
        $memoTable.style.display = "none";//計算メモ
        setTimeout(() => {
            audio1.play();
            $kotae1.value = "";
            $kotae2.value = "";
            $progress.value = count / countMax;
        }, 500);
        if ($kotae1.value == a1 && $kotae2.value == a2) {
            seikaiNum++;
        } else {
            mistakes.push($mondai.innerText + `　＜正解：` + a1 + `m` + a2 + `cm＞`);
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
        $kotae1.value = "";
        $kotae2.value = "";
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

juku7();