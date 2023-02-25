function puzzle2() {

    //0～3までのランダム配列（randoms）の生成
    let randoms = [];

    function getRandom(min, max) {
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };

    function generateRandoms() {
        for (let i = 0; i < 4; i++) {
            while (true) {
                let rtmp = getRandom(0, 3);
                if (!randoms.includes(rtmp)) {
                    randoms.push(rtmp);
                    break;
                }
            }
        };
    };

    const $startBtn = document.getElementById("start-btn");

    const $mondai = document.getElementById("mondai");
    const $shikiSpace = document.getElementById("shikispace");
    const $shiki = document.getElementById("shiki");

    const $num1Btn = document.getElementById("num1-btn");
    const $num2Btn = document.getElementById("num2-btn");
    const $num3Btn = document.getElementById("num3-btn");
    const $num4Btn = document.getElementById("num4-btn");

    const $tasuBtn = document.getElementById("tasu-btn");
    const $hikuBtn = document.getElementById("hiku-btn");
    const $kakeruBtn = document.getElementById("kakeru-btn");
    const $waruBtn = document.getElementById("waru-btn");
    const $kakko1Btn = document.getElementById("kakko1-btn");
    const $kakko2Btn = document.getElementById("kakko2-btn");

    const $checkBtn = document.getElementById("check-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $passBtn = document.getElementById("pass-btn");

    let n = [];
    let shikiInput = "";
    let numclick = 0;

    function switchdisplay() {
        $startBtn.style.display = "none";
        $mondai.style.display = "block";
        $shikiSpace.style.display = "inline-block";
        $num1Btn.style.display = "inline-block";
        $num2Btn.style.display = "inline-block";
        $num3Btn.style.display = "inline-block";
        $num4Btn.style.display = "inline-block";
        $tasuBtn.style.display = "inline-block";
        $hikuBtn.style.display = "inline-block";
        $kakeruBtn.style.display = "inline-block";
        $waruBtn.style.display = "inline-block";
        $kakko1Btn.style.display = "inline-block";
        $kakko2Btn.style.display = "inline-block";
        $checkBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $passBtn.style.display = "inline-block";
    };

    function defaultlet() {
        randoms.length = 0;
        n.length = 0;
        resetShiki();
    };

    /*
    function defaultdisplay() {
        $startBtn.style.display = "block";
        $mondai.style.display = "none";
        $shikiSpace.style.display = "none";
        $num1Btn.style.display = "none";
        $num2Btn.style.display = "none";
        $num3Btn.style.display = "none";
        $num4Btn.style.display = "none";
        $tasuBtn.style.display = "none";
        $hikuBtn.style.display = "none";
        $kakeruBtn.style.display = "none";
        $waruBtn.style.display = "none";
        $kakko1Btn.style.display = "none";
        $kakko2Btn.style.display = "none";
        $checkBtn.style.display = "none";
        $resetBtn.style.display = "none";
        $passBtn.style.display = "none";
    };
    */

    function setup() {
        let ncase = [
            [1, 1, 8, 9], [1, 1, 6, 8], [1, 2, 8, 8], [1, 3, 4, 6], [1, 3, 4, 7],
            [1, 3, 8, 8], [1, 4, 5, 5], [1, 4, 5, 6], [2, 2, 6, 6], [2, 4, 5, 6], 
            [1, 3, 7, 8], [2, 6, 8, 9], [4, 7, 7, 9], [4, 5, 6, 9], [5, 5, 5, 9],
            [1, 3, 3, 6], [1, 2, 6, 9], [1, 3, 4, 7], [2, 3, 6, 7], [6, 7, 9, 9],
            [6, 6, 8, 9], [4, 4, 6, 7], [5, 8, 8, 9], [6, 7, 7, 9], [6, 6, 7, 8],
            [3, 3, 5, 7], [3, 3, 6, 8], [4, 5, 6, 8], [5, 5, 5, 8], [7, 8, 9, 9],
            [6, 7, 8, 9], [6, 6, 8, 8], [5, 7, 8, 9], [5, 5, 6, 9], [4, 5, 5, 9],
            [2, 3, 5, 5], [1, 1, 6, 7], [1, 5, 8, 9], [4, 4, 8, 9], [1, 5, 5, 7],
            [1, 5, 9, 9], [2, 4, 7, 7], [2, 4, 9, 9], [3, 5, 7, 7], [3, 5, 8, 8],
            [6, 6, 6, 9], [4, 4, 4, 9], [3, 4, 6, 6], [3, 3, 3, 9], [6, 7, 8, 8],
            [9, 9, 9, 9], [8, 8, 8, 9], [7, 7, 7, 9], [4, 8, 8, 8], [4, 4, 6, 6],
            [2, 2, 7, 9], [1, 2, 5, 9], [2, 2, 8, 9], [2, 6, 6, 6]
        ];
        n = ncase[getRandom(0, (ncase.length - 1))];
        generateRandoms(); //数字ボタンのシャッフル
        $num1Btn.value = n[randoms[0]];
        $num2Btn.value = n[randoms[1]];
        $num3Btn.value = n[randoms[2]];
        $num4Btn.value = n[randoms[3]];
    };

    function Eval(val) { //文字列を数式化
        return Function(`"use strict"; return (` + val + `)`)();
    };

    function numBtnSelected(NumBtn) { //数字ボタンが押された時の処理
        shikiInput += NumBtn.value;
        $shiki.innerText += NumBtn.value;
        NumBtn.style.color = "lightgray";
        NumBtn.disabled = "disabled";
    }

    function numBtnUnselected(NumBtn) { //数字ボタンを戻す処理
        NumBtn.style.color = "black";
        NumBtn.disabled = null;
    };

    function resetShiki() {
        shikiInput = "";
        $shiki.innerText = "";
        a = "";
        numclick = 0;
        numBtnUnselected($num1Btn);
        numBtnUnselected($num2Btn);
        numBtnUnselected($num3Btn);
        numBtnUnselected($num4Btn);
    };

    $num1Btn.addEventListener("click", () => {
        if (numclick == 0) {
            numBtnSelected($num1Btn);
            numclick = 1;
        } else {
            alert(`数字は続けて入れられません`);
        };
    });

    $num2Btn.addEventListener("click", () => {
        if (numclick == 0) {
            numBtnSelected($num2Btn);
            numclick = 1;
        } else {
            alert(`数字は続けて入れられません`);
        };
    });

    $num3Btn.addEventListener("click", () => {
        if (numclick == 0) {
            numBtnSelected($num3Btn);
            numclick = 1;
        } else {
            alert(`数字は続けて入れられません`);
        };
    });

    $num4Btn.addEventListener("click", () => {
        if (numclick == 0) {
            numBtnSelected($num4Btn);
            numclick = 1;
        } else {
            alert(`数字は続けて入れられません`);
        };
    });

    $tasuBtn.addEventListener("click", () => {
        shikiInput += `+`;
        $shiki.innerText += `＋`;
        numclick = 0;
    });

    $hikuBtn.addEventListener("click", () => {
        shikiInput += `-`;
        $shiki.innerText += `－`;
        numclick = 0;
    });

    $kakeruBtn.addEventListener("click", () => {
        shikiInput += `*`;
        $shiki.innerText += `×`;
        numclick = 0;
    });

    $waruBtn.addEventListener("click", () => {
        shikiInput += `/`;
        $shiki.innerText += `÷`;
        numclick = 0;
    });

    $kakko1Btn.addEventListener("click", () => {
        shikiInput += `(`;
        $shiki.innerText += `(`;
        numclick = 0;
    });

    $kakko2Btn.addEventListener("click", () => {
        shikiInput += `)`;
        $shiki.innerText += `)`;
        numclick = 0;
    });

    $checkBtn.addEventListener("click", () => {
        try {
            a = Eval(shikiInput);
        } catch (e) {
            audio3.play();
            alert(`正しい式になっていません`);
        };
        a = Eval(shikiInput);
        if (a == 10) {
            setTimeout(() => {
                audio1.play();
                defaultlet();
                setup();
            }, 500);
        } else {
            setTimeout(() => {
                audio3.play();
                alert(`10になっていません`);
            }, 500);
        };
    });

    $startBtn.addEventListener("click", () => {
        switchdisplay();
        setup();
    });

    $resetBtn.addEventListener("click", () => {
        resetShiki();
    });

    $passBtn.addEventListener("click", () => {
        defaultlet();
        setup();
    });

};

puzzle2();