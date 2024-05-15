function juku10() {

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
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;
    let n5 = 0;
    let n6 = 0;
    let n7 = 0;
    let a1 = 0;
    let a2 = 0;
    let p = 0;
    let pb = 0;

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
        n5 = 0;
        n6 = 0;
        n7 = 0;
        a1 = 0;
        a2 = 0;
        p = 0;
        pb = 0;
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
        pb = p;
        p = getRandom(0, 1);
        while (p == pb) {
            p = getRandom(0, 1);
        };
        n1 = getRandom(1, 3);
        n3 = getRandom(1, 3);
        switch (p) {
            case 0:
                n2 = getRandom(2, 11);
                n4 = getRandom(13 - n2, 11);
                n2 = n2 * 5;
                n4 = n4 * 5;
                a1 = n1 + n3 + 1;
                a2 = n2 + n4 - 60;
                $mondai.innerText = `午前中に` + n1 + `時間` + n2 + `分、午後に` + n3 + `時間` + n4 + `分、本を読みました。本を読んだ時間は合わせて何時間何分?`;
                break;
            case 1:
                n5 = getRandom(3, 11);
                n6 = getRandom(1, n5 - 1);
                n7 = n5 - n6;
                while (n6 == n7) {
                    n6 = getRandom(1, n5 - 1);
                    n7 = n5 - n6;
                };
                if (n6 > n7) {
                    n2 = n6;
                    n4 = n7;
                } else {
                    n2 = n7;
                    n4 = n6;
                };
                n2 = n2 * 5;
                n4 = n4 * 5;
                a1 = n1 + n3;
                a2 = n2 + n4;
                n1 = 12 - n1 - 1;
                n2 = 60 - n2;
                $mondai.innerText = `午前` + n1 + `時` + n2 + `分から午後` + n3 + `時` + n4 + `分まで本を読みました。本を読んだ時間は何時間何分?`;
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
            $kotae1.value = "";
            $kotae2.value = "";
            $progress.value = count / countMax;
        }, 500);
        if ($kotae1.value == a1 && $kotae2.value == a2) {
            seikaiNum++;
        } else {
            mistakes.push($mondai.innerText + `　＜正解：` + a1 + `時間` + a2 + `分＞`);
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

juku10();