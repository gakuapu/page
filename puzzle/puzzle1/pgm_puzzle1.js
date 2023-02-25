function puzzle1() {

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

    const $level = document.getElementById("level");
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
    const $stopBtn = document.getElementById("stop-btn");

    let n = [];
    //let n1 = 0;
    //let n2 = 0;
    //let n3 = 0;
    //let n4 = 0;
    //let a = "";
    let p = 0;
    let q = 0;
    let r = 0;
    let shikiInput = "";
    let numclick = 0;

    function switchdisplay() {
        $level.style.display = "none";
        $startBtn.style.display = "none";
        $mondai.style.display = "block";
        $shikiSpace.style.display = "inline-block";
        $num1Btn.style.display = "inline-block";
        $num2Btn.style.display = "inline-block";
        $num3Btn.style.display = "inline-block";
        $num4Btn.style.display = "inline-block";
        $tasuBtn.style.display = "inline-block";
        $hikuBtn.style.display = "inline-block";
        $checkBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $passBtn.style.display = "inline-block";
        $stopBtn.style.display = "inline-block";
    };

    function defaultlet() {
        randoms.length = 0;
        n.length = 0;
        resetShiki();
    };

    function defaultdisplay() {
        $level.style.display = "block";
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
        $stopBtn.style.display = "none";
    };

    function switchSetup(levelValue) {
        switch (levelValue) {
            case "1":
                step1Setup();
                break;
            case "2":
                step2Setup();
                break;
            case "3":
                step3Setup();
                break;
            case "4":
                step4Setup();
                break;
            default:
                alert(`リロードして下さい`);
        };
    };

    //ここから中身

    function step1contents() {
        n[0] = getRandom(1, 9);
        n[1] = getRandom(1, 9);
        n[2] = getRandom(1, 9);
        if (n[0] + n[1] + n[2] < 20) {
            n[3] = Math.abs(n[0] + n[1] + n[2] - 10);
        } else {
            n[3] = Math.abs(n[0] + n[1] - n[2] - 10);
        };
        while (n[3] == 0 || n[0] + n[1] + n[2] + n[3] == 10) {
            n[2] = getRandom(1, 9);
            if (n[0] + n[1] + n[2] < 20) {
                n[3] = Math.abs(n[0] + n[1] + n[2] - 10);
            } else {
                n[3] = Math.abs(n[0] + n[1] - n[2] - 10);
            };
        };
    };

    function step2case2contents() {
        let nstep2case2 = [
            [1, 1, 2, 5], [1, 1, 3, 3], [1, 2, 2, 4], [1, 2, 2, 6], [1, 2, 6, 8], [1, 2, 8, 9], [1, 3, 5, 5], [1, 4, 4, 6], [2, 2, 2, 2], [2, 2, 2, 3], [2, 2, 2, 7], [2, 2, 3, 8], [2, 2, 4, 9], [2, 3, 4, 4], [2, 3, 4, 6]
        ];
        n = nstep2case2[getRandom(0, (nstep2case2.length - 1))];
    };

    function step2case3contents() {
        q = getRandom(0, 9);
        r = getRandom(1, 2);
        n[0] = getRandom(1, 9);
        while (n[0] == q) {
            n[0] = getRandom(1, 9);
        };
        n[1] = Math.abs(q - n[0]);
        switch (q) {
            case 0:
                n[2] = 2;
                n[3] = 5;
                break;
            case 1:
                if (r == 1) {
                    n[2] = 1;
                    n[3] = 9;
                } else {
                    n[2] = 3;
                    n[3] = 3;
                };
                break;
            case 2:
                if (r == 1) {
                    n[2] = 1;
                    n[3] = 8;
                } else {
                    n[2] = 2;
                    n[3] = 4;
                };
                break;
            case 3:
                n[2] = 1;
                n[3] = 7;
                break;
            case 4:
                if (r == 1) {
                    n[2] = 1;
                    n[3] = 6;
                } else {
                    n[2] = 2;
                    n[3] = 3;
                };
                break;
            case 5:
                n[2] = 1;
                n[3] = 5;
                break;
            case 6:
                if (r == 1) {
                    n[2] = 1;
                    n[3] = 4;
                } else {
                    n[2] = 2;
                    n[3] = 2;
                };
                break;
            case 7:
                n[2] = 1;
                n[3] = 3;
                break;
            case 8:
                n[2] = 1;
                n[3] = 2;
                break;
            case 9:
                n[2] = 1;
                n[3] = 1;
                break;
            default:
                alert(`リロードして下さい`);
        };
    };

    function step2case4contents() {
        q = getRandom(1, 4);
        r = getRandom(1, 2);
        n[0] = getRandom(1, 9);
        while (n[0] == q * 2) {
            n[0] = getRandom(1, 9);
        };
        n[1] = Math.abs(q * 2 - n[0]);
        switch (q) {
            case 1:
                if (r == 1) {
                    n[2] = 2;
                    n[3] = 6;
                } else {
                    n[2] = 3;
                    n[3] = 4;
                };
                break;
            case 2:
                if (r == 1) {
                    n[2] = 2;
                    n[3] = 7;
                } else {
                    n[0] = getRandom(1, 9);
                    while (n[0] == 5) {
                        n[0] = getRandom(1, 9);
                    };
                    n[1] = Math.abs(5 - n[0]);
                    n[2] = 3;
                    n[3] = 5;
                };
                break;
            case 3:
                if (r == 1) {
                    n[2] = 2;
                    n[3] = 8;
                } else {
                    n[2] = 4;
                    n[3] = 4;
                };
                break;
            case 4:
                if (r == 1) {
                    n[2] = 2;
                    n[3] = 9;
                } else {
                    n[2] = 3;
                    n[3] = 6;
                };
                break;
            default:
                alert(`リロードして下さい`);
        };
    };

    function step3case5contents() {
        let nstep3case5 = [
            [1, 2, 4, 8], [1, 3, 5, 6], [1, 3, 7, 9], [1, 4, 8, 8], [2, 2, 4, 4], [2, 2, 5, 8], [2, 2, 7, 8], [2, 3, 6, 6], [2, 4, 4, 7], [2, 4, 6, 8], [2, 4, 8, 9], [2, 5, 5, 6], [3, 4, 4, 8], [3, 4, 6, 7], [3, 5, 5, 9], [3, 6, 6, 8], [4, 4, 7, 8], [4, 8, 8, 9]
        ];
        n = nstep3case5[getRandom(0, (nstep3case5.length - 1))];
    };

    function step3case6contents() {
        q = getRandom(1, 3);
        r = getRandom(2, 4);
        switch (q) {
            case 1:
                n[0] = getRandom(1, 10 - r - 1);
                n[1] = 10 - r - n[0];
                break;
            case 2:
                n[0] = getRandom(10 - r + 1, 9);
                n[1] = n[0] + r - 10;
                break;
            case 3:
                n[0] = getRandom(r + 1, 9);
                n[1] = 10 + r - n[0];
                break;
            default:
                alert(`リロードして下さい`);
        };
        if (r == 2) {
            let s = getRandom(1, 3);
            if (s == 1) {
                n[2] = 4;
                n[3] = 2;
            } else if (s == 2) {
                n[2] = 6;
                n[3] = 3;
            } else {
                n[2] = 8;
                n[3] = 4;
            };
        } else if (r == 3) {
            n[2] = 9;
            n[3] = 3;
        } else {
            n[2] = 8;
            n[3] = 2;
        };
    };

    function step4case7contents() {
        n[0] = getRandom(1, 9);
        n[1] = 10 - n[0];
        n[2] = getRandom(2, 9);
        n[3] = n[2] - 1;
    };

    function step4case8contents() {
        n[0] = getRandom(1, 9);
        while (n[0] == 5) {
            n[0] = getRandom(1, 9);
        };
        if (n[0] < 5) {
            n[1] = 5 - n[0];
        } else {
            n[1] = n[0] - 5;
        };
        n[2] = getRandom(3, 9);
        n[3] = n[2] - 2;
    };

    function step4case9contents() {
        n[0] = 2;
        n[1] = getRandom(7, 9);
        n[2] = getRandom(4, 9);
        n[3] = 20 - n[1] - n[2];
    };

    function step4case10contents() {
        let nstep4case10 = [
            [1, 1, 1, 4], [1, 1, 1, 5], [1, 1, 1, 6], [1, 1, 2, 3], [1, 1, 4, 9],
            [1, 2, 2, 3], [1, 5, 5, 5], [1, 5, 6, 6], [1, 2, 2, 2], [1, 4, 4, 5],
            [1, 5, 5, 6], [2, 2, 2, 6], [2, 2, 3, 5], [2, 3, 3, 4], [3, 3, 3, 5]
        ];
        n = nstep4case10[getRandom(0, (nstep4case10.length - 1))];
    };

    //

    function step1Setup() {
        step1contents();
        generateRandoms(); //数字ボタンのシャッフル
        $num1Btn.value = n[randoms[0]];
        $num2Btn.value = n[randoms[1]];
        $num3Btn.value = n[randoms[2]];
        $num4Btn.value = n[randoms[3]];
    };

    function step2Setup() {
        $kakeruBtn.style.display = "inline-block";
        p = getRandom(1, 4);
        switch (p) {
            case 1:
                step1contents();
                break;
            case 2:
                step2case2contents();
                break;
            case 3:
                step2case3contents();
                break;
            case 4:
                step2case4contents();
                break;
            default:
                alert(`リロードして下さい`);
        };
        generateRandoms(); //数字ボタンのシャッフル
        $num1Btn.value = n[randoms[0]];
        $num2Btn.value = n[randoms[1]];
        $num3Btn.value = n[randoms[2]];
        $num4Btn.value = n[randoms[3]];
    };

    function step3Setup() {
        $kakeruBtn.style.display = "inline-block";
        $waruBtn.style.display = "inline-block";
        p = getRandom(1, 6);
        switch (p) {
            case 1:
                step1contents();
                break;
            case 2:
                step2case2contents();
                break;
            case 3:
                step2case3contents();
                break;
            case 4:
                step2case4contents();
                break;
            case 5:
                step3case5contents();
                break;
            case 6:
                step3case6contents();
                break;
            default:
                alert(`リロードして下さい`);
        };
        generateRandoms(); //数字ボタンのシャッフル
        $num1Btn.value = n[randoms[0]];
        $num2Btn.value = n[randoms[1]];
        $num3Btn.value = n[randoms[2]];
        $num4Btn.value = n[randoms[3]];
    };

    function step4Setup() {
        $kakeruBtn.style.display = "inline-block";
        $waruBtn.style.display = "inline-block";
        $kakko1Btn.style.display = "inline-block";
        $kakko2Btn.style.display = "inline-block";
        p = getRandom(1, 10);
        switch (p) {
            case 1:
                step1contents();
                break;
            case 2:
                step2case2contents();
                break;
            case 3:
                step2case3contents();
                break;
            case 4:
                step2case4contents();
                break;
            case 5:
                step3case5contents();
                break;
            case 6:
                step3case6contents();
                break;
            case 7:
                step4case7contents();
                break;
            case 8:
                step4case8contents();
                break;
            case 9:
                step4case9contents();
                break;
            case 10:
                step4case10contents();
                break;
            default:
                alert(`リロードして下さい`);
        };
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
                switchSetup($level.value);
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
        switchSetup($level.value);
    });

    $resetBtn.addEventListener("click", () => {
        resetShiki();
    });

    $passBtn.addEventListener("click", () => {
        defaultlet();
        switchSetup($level.value);
    });

    $stopBtn.addEventListener("click", () => {
        defaultlet();
        defaultdisplay();
    });

};

puzzle1();