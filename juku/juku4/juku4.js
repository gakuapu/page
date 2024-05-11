function juku4() {

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
        pb = p;
        p = getRandom(0, 1);
        while (p == pb) {
            p = getRandom(0, 1);
        };
        switch (p) {
            case 0:
                n1 = getRandom(1, 2) * 100;
                n2 = getRandom(1, 8) * 10 + getRandom(1, 9);
                n1 = n1 - n2;
                n3 = getRandom(1, 8) * 10 + getRandom(1, 9);
                while (n3 == n2) {
                    n3 = getRandom(1, 8) * 10 + getRandom(1, 9);
                };
                a = n1 + n2 + n3;
                q = getRandom(0, 1);
                if (q == 0) {
                $mondai.innerText = n1 + `＋` + n3 + `＋` + n2 + `＝`;
                } else {
                $mondai.innerText = n3 + `＋` + n1 + `＋` + n2 + `＝`;
                };
                break;
            case 1:
                n1 = getRandom(1, 3);
                n2 = getRandom(0, n1 - 1);
                n1 = n1 * 100;
                n3 = getRandom(1, 3);
                n4 = getRandom(0, n3 - 1);
                n3 = n3 * 100;
                a = n1 + n3;
                n2 = n2 * 100 + getRandom(1, 8) * 10 + getRandom(1, 9);
                n1 = n1 - n2;
                n4 = n4 * 100 + getRandom(1, 8) * 10 + getRandom(1, 9);
                n3 = n3 - n4;
                q = getRandom(0, 1);
                if (q == 0) {
                    $mondai.innerText = n1 + `＋` + n3 + `＋` + n2 + `＋` + n4 + `＝`;
                } else {
                    $mondai.innerText = n1 + `＋` + n3 + `＋` + n4 + `＋` + n2 + `＝`;
                };
                break;
            default:
                alert(`リロードして下さい`);
        };
    };

    function checkAnswer() {
        setTimeout(() => {
            audio1.play();
            $kotae.value = "";
            $progress.value = count / countMax;
        }, 500);
        if ($kotae.value == a) {
            seikaiNum++;
        } else {
            mistakes.push($mondai.innerText + `　＜正解：` + a + `＞`);
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

juku4();