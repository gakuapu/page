function mainichi3() {

    //1～countMaxまでのランダム配列（randoms）の生成
    let countMax = 8;
    let randoms = [];

    function getRandom(min, max) {
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };

    function generateRandoms() {
        for (let i = 0; i < countMax; i++) {
            while (true) {
                let rtmp = getRandom(0, countMax - 1);
                if (!randoms.includes(rtmp)) {
                    randoms.push(rtmp);
                    break;
                }
            }
        };
    };

    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $kotae1 = document.getElementById("kotae1");
    const $kotae2 = document.getElementById("kotae2");
    const $k2k = document.getElementById("k2k");

    const $progress = document.getElementById("progress");
    const $timerBar = document.getElementById("timer-bar");

    const $memoHyojiBtn = document.getElementById("memohyoji");//計算メモ
    const $memoClearBtn = document.getElementById("memoclear");//計算メモ
    const $memoTable = document.getElementById("memotable");//計算メモ

    const $kekka = document.getElementById("kekka");
    const $recommend = document.getElementById("recommend");
    const $recommendList = document.getElementById("recommend-list");

    const $backToStartBtn = document.getElementById("back-to-start-btn");

    let count = 0;
    let seikaiNum = 0;
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let a1 = 0;
    let a2 = "";
    let k2v = ""; //0xとxを区別
    let p = 0;
    let q = 0;
    let tb = 1;

    let mistakes = [];

    //timerBar↓
    let timer1;

    function insideTimer1() {
        tb = tb - 2000 / 20000; //6
        $timerBar.value = tb;
        if (tb < 0) {
            mistakes.push(randoms[count]);
            clearInterval(timer1);
            $kotae1.value = "";
            $kotae2.value = "";
            k2v = ""; //0xとxを区別
            $memoClearBtn.style.display = "none";//計算メモ
            $memoTable.style.display = "none";//計算メモ
            count++;
            $progress.value = count / countMax;
            if (count < countMax) {
                switchSetup(randoms[count]);
            } else {
                closing();
            };
        };
    };

    function moveTimerBar() {
        tb = 1;
        $timerBar.value = tb;
        timer1 = setInterval(insideTimer1, 2000);
    };
    //timerBar↑

    function defaultlet() {
        count = 0;
        seikaiNum = 0;
        n1 = 0;
        n2 = 0;
        n3 = 0;
        a1 = 0;
        a2 = "";
        k2v = ""; //0xとxを区別
        p = 0;
        q = 0;
        randoms.length = 0;
        mistakes.length = 0;
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
        $progress.style.display = "block";
        $timerBar.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $startBtn.style.display = "none";
        $backToStartBtn.style.display = "none";
    };

    function defaultdisplay() {
        $kotae1.style.display = "none";
        $kotae2.style.display = "none";
        $k2k.innerText = "";
        $progress.style.display = "none";
        $timerBar.style.display = "none";
        $eraseBtn.style.display = "none";
        $resetBtn.style.display = "none";
        $memoHyojiBtn.style.display = "none";//計算メモ
        $memoClearBtn.style.display = "none";//計算メモ
        $memoTable.style.display = "none";//計算メモ
        $startBtn.style.display = "block";
        $backToStartBtn.style.display = "none";
        clearInterval(timer1);
    };

    function recommenddisplay() {
        $kotae1.style.display = "none";
        $kotae2.style.display = "none";
        $k2k.innerText = "";
        $progress.style.display = "none";
        $timerBar.style.display = "none";
        $eraseBtn.style.display = "none";
        $resetBtn.style.display = "none";
        $memoHyojiBtn.style.display = "none";//計算メモ
        $memoClearBtn.style.display = "none";//計算メモ
        $memoTable.style.display = "none";//計算メモ
        $startBtn.style.display = "none";
        $backToStartBtn.style.display = "block";
        clearInterval(timer1);
    };

    function asc(a, b) { //昇順に並べ替え
        return (a - b);
    };

    function displayrecommend(mt) {
        if (mt.length == 0) {
            $recommend.innerText = `全問正解！`;
        } else {
            $recommend.innerText = `まちがえた問題の練習ドリル`;
            mt.sort(asc); //昇順に並べ替え
            for (let j = 0; j < mt.length; j++) {
                if (mt[j] == 0) {
                    let li0 = document.createElement(`li`);
                    li0.classList.add(`recommend-li`);
                    li0.innerHTML = `<a href="waru4.html">割り切れる整数の割り算</a>`;
                    $recommendList.appendChild(li0);
                };
                if (mt[j] == 1) {
                    let li1 = document.createElement(`li`);
                    li1.classList.add(`recommend-li`);
                    li1.innerHTML = `<a href="waru4.html">あまりのある整数の割り算</a>`;
                    $recommendList.appendChild(li1);
                };
                if (mt[j] == 2) {
                    let li2 = document.createElement(`li`);
                    li2.classList.add(`recommend-li`);
                    li2.innerHTML = `<a href="shousuu2.html">小数の足し算</a>`;
                    $recommendList.appendChild(li2);
                };
                if (mt[j] == 3) {
                    let li3 = document.createElement(`li`);
                    li3.classList.add(`recommend-li`);
                    li3.innerHTML = `<a href="shousuu3.html">小数の引き算</a>`;
                    $recommendList.appendChild(li3);
                };
                if (mt[j] == 4) {
                    let li4 = document.createElement(`li`);
                    li4.classList.add(`recommend-li`);
                    li4.innerHTML = `<a href="shousuu4.html">小数のかけ算</a>`;
                    $recommendList.appendChild(li4);
                };
                if (mt[j] == 5) {
                    let li5 = document.createElement(`li`);
                    li5.classList.add(`recommend-li`);
                    li5.innerHTML = `<a href="shousuu6.html">割り切れる小数の割り算</a>`;
                    $recommendList.appendChild(li5);
                };
                if (mt[j] == 6) {
                    let li6 = document.createElement(`li`);
                    li6.classList.add(`recommend-li`);
                    li6.innerHTML = `<a href="shousuu7.html">割り進める小数の割り算</a>`;
                    $recommendList.appendChild(li6);
                };
                if (mt[j] == 7) {
                    let li7 = document.createElement(`li`);
                    li7.classList.add(`recommend-li`);
                    li7.innerHTML = `<a href="keisanrule1.html">計算のルール</a>`;
                    $recommendList.appendChild(li7);
                };
            };
        };
    };

    function closing() {
        audio2.play();
        $progress.value = 1;
        $kekka.innerText = `【正解数：` + seikaiNum + `問/` + countMax + `問】`;
        displayrecommend(mistakes);
        recommenddisplay();
        defaultlet();
        clearInterval(timer1);
    };

    function switchSetup(setupValue) {
        moveTimerBar();
        $memoHyojiBtn.style.display = "block";//計算メモ
        switch (setupValue) {
            case 0:
                setup0();
                break;
            case 1:
                setup1();
                break;
            case 2:
                setup2();
                break;
            case 3:
                setup3();
                break;
            case 4:
                setup4();
                break;
            case 5:
                setup5();
                break;
            case 6:
                setup6();
                break;
            case 7:
                setup7();
                break;
            default:
                alert(`リロードして下さい`);
        };
    };

    function setup0() {
        $kotae2.style.display = "none";
        $k2k.innerText = "";
        a2 = ""
        p = getRandom(1, 5);
        n1 = p * 10 + getRandom(1, 9);
        if (n1 < 20) {
            a1 = getRandom(11, 52);
        } else if (n1 < 30) {
            a1 = getRandom(11, 34);
        } else if (n1 < 40) {
            a1 = getRandom(11, 25);
        } else if (n1 < 50) {
            a1 = getRandom(11, 20);
        } else {
            a1 = getRandom(11, 16);
        };
        n2 = n1 * a1;
        $mondai.innerText = n2 + `÷` + n1 + `＝`;
    };

    function setup1() {
        $kotae2.style.display = "inline-block";
        $k2k.innerText = "あまり";
        p = getRandom(1, 5);
        n1 = p * 10 + getRandom(1, 9);
        if (n1 < 20) {
            a1 = getRandom(11, 52);
        } else if (n1 < 30) {
            a1 = getRandom(11, 34);
        } else if (n1 < 40) {
            a1 = getRandom(11, 25);
        } else if (n1 < 50) {
            a1 = getRandom(11, 20);
        } else {
            a1 = getRandom(11, 16);
        };
        n3 = Math.min(999 - n1 * a1, n1 - 1);
        a2 = getRandom(1, n3);
        n2 = n1 * a1 + a2;
        $mondai.innerText = n2 + `÷` + n1 + `＝`;
        if (a2 < 10) { //0xとxを区別
            a2 = a2 + 10;
        } else {
            a2 = a2 + 100;
        };
    };

    function setup2() {
        $kotae2.style.display = "inline-block";
        $k2k.innerText = ".";
        p = getRandom(1, 2);
        n1 = getRandom(0, 9) * 10 + getRandom(1, 9);
        n2 = getRandom(0, 99) * 10 + getRandom(1, 9);
        a1 = Math.floor(((n1 * 10) + n2) / 100);
        a2 = (n1 * 10) + n2 - a1 * 100;
        a2 = a2 + 100; //0xとxを区別
        n1 = n1 / 10;
        n2 = n2 / 100;
        if (p == 1) {
            $mondai.innerText = n1 + `＋` + n2 + `＝`;
        } else {
            $mondai.innerText = n2 + `＋` + n1 + `＝`;
        };
    };

    function setup3() {
        $kotae2.style.display = "inline-block";
        $k2k.innerText = ".";
        p = getRandom(1, 3);
        switch (p) {
            case 1:
                n1 = getRandom(1, 9);
                n2 = getRandom(0, n1 - 1);
                n1 = n1 * 100;
                n2 = n2 * 100 + getRandom(0, 9) * 10 + getRandom(1, 9);
                break;
            case 2:
                n1 = getRandom(1, 99);
                n2 = getRandom(0, n1 - 1);
                n1 = n1 * 10;
                n2 = n2 * 10 + getRandom(1, 9);
                break;
            case 3:
                n1 = getRandom(2, 99);
                n2 = getRandom(1, n1 - 1);
                while (n2 % 10 == 0) {
                    n2 = getRandom(0, n1 - 1);
                };
                n1 = n1 * 10 + getRandom(1, 9);
                n2 = n2 * 10;
                break;
            default:
                alert(`リロードして下さい`);
        };
        a1 = Math.floor((n1 - n2) / 100);
        a2 = (n1 - n2) - a1 * 100;
        a2 = a2 + 100; //0xとxを区別
        n1 = n1 / 100;
        n2 = n2 / 100;
        $mondai.innerText = n1 + `－` + n2 + `＝`;
    };

    function setup4() {
        n2 = getRandom(11, 30);
        p = getRandom(1, 2);
        switch (p) {
            case 1:
                n1 = getRandom(0, 9) * 10 + getRandom(2, 9);
                break;
            case 2:
                n1 = getRandom(1, 4) * 100 + getRandom(0, 9) * 10 + getRandom(1, 9);
                break;
            default:
                alert(`リロードして下さい`);
        };
        n3 = n1 * n2;
        if (n3 % 100 == 0) {
            $kotae2.style.display = "none";
            $k2k.innerText = "";
            a2 = "";
            a1 = n3 / 100;
        } else {
            $kotae2.style.display = "inline-block";
            $k2k.innerText = ".";
            if (n3 % 10 == 0) {
                a1 = Math.floor(n3 / 100);
                a2 = (n3 - a1 * 100) / 10;
                a2 = a2 + 10; //0xとxを区別
            } else {
                a1 = Math.floor(n3 / 100);
                a2 = n3 - a1 * 100;
                a2 = a2 + 100; //0xとxを区別
            };
        };
        n1 = n1 / 100;
        $mondai.innerText = n1 + `×` + n2 + `＝`;
    };

    function setup5() {
        $kotae2.style.display = "inline-block";
        $k2k.innerText = ".";
        p = getRandom(1, 2);
        n2 = getRandom(1, 2) * 10 + getRandom(1, 9);
        switch (p) {
            case 1:
                a2 = getRandom(2, 9);
                n1 = n2 * a2;
                while (n1 % 10 == 0) {
                    a2 = getRandom(2, 9);
                    n1 = n2 * a2;
                };
                a1 = 0;
                break;
            case 2:
                n3 = getRandom(1, 4) * 10 + getRandom(1, 9);
                n1 = n2 * n3;
                while (n1 % 10 == 0) {
                    n3 = getRandom(1, 4) * 10 + getRandom(1, 9);
                    n1 = n2 * n3;
                };
                a1 = Math.floor(n3 / 100);
                a2 = n3 - (a1 * 100);
                break;
            default:
                alert(`リロードして下さい`);
        };
        a2 = a2 + 100; //0xとxを区別
        n1 = n1 / 100;
        $mondai.innerText = n1 + `÷` + n2 + `＝`;
    };

    function setup6() {
        let istep6 = 0;
        $kotae2.style.display = "inline-block";
        $k2k.innerText = ".";
        n2 = getRandom(0, 1) + 4;
        n1 = getRandom(0, 9) * 10 + getRandom(1, 9);
        while (n1 % n2 == 0) {
            n1 = getRandom(0, 9) * 10 + getRandom(1, 9);
        };
        a1 = Math.floor((n1 / n2) / 10);
        a2 = n1 * 100 / n2 - a1 * 1000;
        while (a2 % 10 == 0) {
            a2 = a2 / 10;
            istep6++;
        };
        n1 = n1 / 10;
        a2 = a2 + 10 ** (3 - istep6); //0xとxを区別
        $mondai.innerText = n1 + `÷` + n2 + `＝`;
    };

    function setup7() {
        let n4 = 0;
        $kotae2.style.display = "none";
        $k2k.innerText = "";
        a2 = "";
        p = getRandom(1, 4);
        n1 = getRandom(11, 29);
        switch (p) {
            case 1:
                n2 = getRandom(2, 9);
                n3 = getRandom(2, 9);
                n4 = getRandom(2, 9);
                q = getRandom(1, 2);
                if (q == 1) {
                    a1 = n1 + n2;
                    $mondai.innerText = n1 + `＋` + n2 * (n3 + n4) + `÷(` + n3 + `＋` + n4 + `)＝`;
                } else {
                    a1 = n1 - n2;
                    $mondai.innerText = n1 + `－` + n2 * (n3 + n4) + `÷(` + n3 + `＋` + n4 + `)＝`;
                };
                break;
            case 2:
                n2 = getRandom(2, 9);
                n3 = getRandom(4, 11);
                n4 = getRandom(2, n3 - 2);
                q = getRandom(1, 2);
                if (q == 1) {
                    a1 = n1 + n2;
                    $mondai.innerText = n1 + `＋` + n2 * (n3 - n4) + `÷(` + n3 + `－` + n4 + `)＝`;
                } else {
                    a1 = n1 - n2;
                    $mondai.innerText = n1 + `－` + n2 * (n3 - n4) + `÷(` + n3 + `－` + n4 + `)＝`;
                };
                break;
            case 3:
                n2 = getRandom(2, 9);
                n3 = getRandom(2, 5);
                n4 = getRandom(2, 5);
                q = getRandom(1, 2);
                if (q == 1) {
                    a1 = n1 + n2 * (n3 + n4);
                    $mondai.innerText = n1 + `＋` + n2 + `×(` + n3 + `＋` + n4 + `)＝`;
                } else {
                    n1 = n2 * (n3 + n4) + getRandom(2, 19);
                    a1 = n1 - n2 * (n3 + n4);
                    $mondai.innerText = n1 + `－` + n2 + `×(` + n3 + `＋` + n4 + `)＝`;
                };
                break;
            case 4:
                n2 = getRandom(2, 9);
                n3 = getRandom(4, 11);
                n4 = getRandom(2, n3 - 2);
                q = getRandom(1, 2);
                if (q == 1) {
                    a1 = n1 + n2 * (n3 - n4);
                    $mondai.innerText = n1 + `＋` + n2 + `×(` + n3 + `－` + n4 + `)＝`;
                } else {
                    a1 = getRandom(2, 19);
                    n1 = n2 * (n3 - n4) + a1;
                    $mondai.innerText = n1 + `－` + n2 + `×(` + n3 + `－` + n4 + `)＝`;
                };
                break;
            default:
                alert(`リロードして下さい`);
        };
    };

    function checkAnswer() {
        if ($kotae1.value == a1 && k2v == a2) { //0xとxを区別
            k2v = ""; //0xとxを区別
            $memoClearBtn.style.display = "none";//計算メモ
            $memoTable.style.display = "none";//計算メモ
            $kotae1.value = "";
            $kotae2.value = "";
            setTimeout(() => {
                audio1.play();
                $progress.value = count / countMax;
            }, 500);
            count++;
            seikaiNum++;
            clearInterval(timer1);
            if (count < countMax) {
                switchSetup(randoms[count]);
            } else {
                closing();
            };
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
        generateRandoms();
        switchSetup(randoms[0]);
    });

    $eraseBtn.addEventListener("click", () => {
        $kotae1.value = "";
        $kotae2.value = "";
        k2v = "";
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

mainichi3();