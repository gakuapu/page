function shousuu9() {

    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai0 = document.getElementById("mondai0");
    const $mondai = document.getElementById("mondai");
    const $kotae1 = document.getElementById("kotae1");
    const $kotae2 = document.getElementById("kotae2");
    const $dot = document.getElementById("dot");

    const $progress = document.getElementById("progress");

    let count = 0;
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let a1 = 0;
    let a2 = 0;
    let k2v = ""; //0xとxを区別
    let p = 0;
    let pb = 0;
    let q = 0;
    let r = 0;
    let mondaiNum = 10;

    function getRandom(min, max) {
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };

    function defaultlet() {
        count = 0;
        n1 = 0;
        n2 = 0;
        n3 = 0;
        a1 = 0;
        a2 = "";
        k2v = ""; //0xとxを区別
        p = 0;
        pb = 0;
        q = 0;
        r = 0;
        $kotae1.value = "";
        $kotae2.value = "";
        $mondai.innerText = "";
    };

    function switchdisplay() {
        $mondai0.style.display = "block";
        $kotae1.style.display = "inline-block";
        $progress.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $startBtn.style.display = "none";
    };

    function defaultdisplay() {
        $mondai0.style.display = "none";
        $kotae1.style.display = "none";
        $dot.innerText = "";
        $kotae2.style.display = "none";
        $progress.style.display = "none";
        $eraseBtn.style.display = "none";
        $resetBtn.style.display = "none";
        $startBtn.style.display = "block";
    };

    function closing() {
        audio2.play();
        $progress.value = 1;
        defaultdisplay();
        defaultlet();
        alert(`クリアしました`);
    };

    function checkAnswer() {
        if ($kotae1.value == a1 && k2v == a2) { //0xとxを区別
            k2v = ""; //0xとxを区別
            setTimeout(() => {
                audio1.play();
                $kotae1.value = "";
                $kotae2.value = "";
                $progress.value = count / mondaiNum;
            }, 500);
            count++;
            setup();
        };
    };

    function setup() {
        if (count < mondaiNum) {
            pb = p;
            p = getRandom(1, 5);
            while (p == pb) {
                p = getRandom(1, 5);
            };
            switch (p) {
                case 1:
                    $kotae2.style.display = "none";
                    $dot.innerText = "";
                    a2 = "";
                    n1 = getRandom(1, 4) * 10 + 5;
                    n2 = getRandom(1, 4) * 2;
                    a1 = n1 * n2 / 10;
                    n1 = n1 / 10;
                    $mondai.innerText = n1 + `×` + n2 + `＝`;
                    break;
                case 2:
                    $kotae2.style.display = "none";
                    $dot.innerText = "";
                    a2 = "";
                    n1 = getRandom(0, 9) * 10 + getRandom(1, 9);
                    n2 = 100 - n1;
                    n3 = getRandom(0, 9) * 10 + getRandom(1, 9);
                    a1 = n3;
                    n1 = n1 / 10;
                    n2 = n2 / 10;
                    n3 = n3 / 10;
                    q = getRandom(1, 2);
                    if (q == 1) {
                        $mondai.innerText = n3 + `×` + n1 + `＋` + n3 + `×` + n2 + `＝`;
                    } else {
                        $mondai.innerText = n1 + `×` + n3 + `＋` + n2 + `×` + n3 + `＝`;
                    };
                    break;
                case 3:
                    $kotae2.style.display = "inline-block";
                    $dot.innerText = ".";
                    n1 = getRandom(1, 9);
                    n2 = 10 - n1;
                    n3 = getRandom(0, 9) * 10 + getRandom(1, 9);
                    a1 = Math.floor(n3 / 10);
                    a2 = n3 - a1 * 10;
                    a2 = a2 + 10; //0xとxを区別
                    n1 = n1 / 10;
                    n2 = n2 / 10;
                    n3 = n3 / 10;
                    q = getRandom(1, 2);
                    if (q == 1) {
                        $mondai.innerText = n3 + `×` + n1 + `＋` + n3 + `×` + n2 + `＝`;
                    } else {
                        $mondai.innerText = n1 + `×` + n3 + `＋` + n2 + `×` + n3 + `＝`;
                    };
                    break;
                case 4:
                    $kotae2.style.display = "none";
                    $dot.innerText = "";
                    a2 = "";
                    n1 = 4;
                    n2 = 2.5;
                    n3 = getRandom(0, 9) * 10 + getRandom(1, 9);
                    a1 = n3;
                    n3 = n3 / 10;
                    q = getRandom(1, 4);
                    switch (q) {
                        case 1:
                            $mondai.innerText = n1 + `×` + n3 + `×` + n2 + `＝`;
                            break;
                        case 2:
                            $mondai.innerText = n2 + `×` + n3 + `×` + n1 + `＝`;
                            break;
                        case 3:
                            $mondai.innerText = n3 + `×` + n1 + `×` + n2 + `＝`;
                            break;
                        case 4:
                            $mondai.innerText = n3 + `×` + n2 + `×` + n1 + `＝`;
                            break;
                        default:
                            alert(`リロードして下さい`);
                    };
                    break;
                case 5:
                    $kotae2.style.display = "inline-block";
                    $dot.innerText = ".";
                    q = getRandom(1, 3);
                    switch (q) {
                        case 1:
                            n1 = 5;
                            n2 = getRandom(1, 4) * 2;
                            break;
                        case 2:
                            n1 = 15;
                            n2 = getRandom(1, 3) * 2;
                            break;
                        case 3:
                            n1 = getRandom(3, 4) * 10 + 5;
                            n2 = 2;
                            break;
                        default:
                            alert(`リロードして下さい`);
                    };
                    n3 = getRandom(1, 9);
                    a1 = Math.floor(n1 * n2 * n3 / 100);
                    a2 = (n1 * n2 * n3 - a1 * 100) / 10;
                    a2 = a2 + 10; //0xとxを区別
                    n1 = n1 / 10;
                    n3 = n3 / 10;
                    r = getRandom(1, 4);
                    switch (r) {
                        case 1:
                            $mondai.innerText = n1 + `×` + n3 + `×` + n2 + `＝`;
                            break;
                        case 2:
                            $mondai.innerText = n2 + `×` + n3 + `×` + n1 + `＝`;
                            break;
                        case 3:
                            $mondai.innerText = n3 + `×` + n1 + `×` + n2 + `＝`;
                            break;
                        case 4:
                            $mondai.innerText = n3 + `×` + n2 + `×` + n1 + `＝`;
                            break;
                        default:
                            alert(`リロードして下さい`);
                    };
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum) {
            closing();
        };
    };

    $kotae1.addEventListener("input", () => {
        if ($kotae2.value != "") { //0xとxを区別
            k2v = "1" + $kotae2.value;
        };
        checkAnswer();
    });

    $kotae2.addEventListener("input", () => {
        if ($kotae2.value != "") { //0xとxを区別
            k2v = "1" + $kotae2.value;
        };
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
        $progress.value = 0;
    });

};

shousuu9();