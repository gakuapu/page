function puzzle3() {

    function getRandom(min, max) {
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };

    const $level = document.getElementById("level");
    const $startBtn = document.getElementById("start-btn");

    const $mondai = document.getElementById("mondai");
    const $shikiSpace = document.getElementById("shikispace");
    const $shiki = document.getElementById("shiki");

    const $2Btn = document.getElementById("2-btn");
    const $3Btn = document.getElementById("3-btn");
    const $5Btn = document.getElementById("5-btn");
    const $7Btn = document.getElementById("7-btn");
    const $11Btn = document.getElementById("11-btn");
    const $13Btn = document.getElementById("13-btn");

    const $checkBtn = document.getElementById("check-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $stopBtn = document.getElementById("stop-btn");

    const $timerBar = document.getElementById("timer-bar");
    const $seikaisuu = document.getElementById("seikaisuu");

    let prime = [];
    let seikaiNum = 0;
    let primeNum = 0;
    let numPushed = 0;
    let n = 1;
    let nb = 0;
    let a = 1;
    let tb = 1;

    //timerBar↓
    let timer1;

    function insideTimer1() {
        tb = tb - 2000 / 60000;
        $timerBar.value = tb;
        if (tb < 0) {
            closing();
        };
    };

    function moveTimerBar() {
        tb = 1;
        $timerBar.value = tb;
        timer1 = setInterval(insideTimer1, 2000);
    };
    //timerBar↑

    function defaultlet() {
        prime.length = 0;
        primeNum = 0;
        numPushed = 0;
        n = 1;
        a = 1;
        tb = 1;
        $mondai.innerText = "";
        $shiki.innerText = "";
    };

    function switchdisplay() {
        $level.style.display = "none";
        $startBtn.style.display = "none";
        $mondai.style.display = "block";
        $shikiSpace.style.display = "inline-block";
        $2Btn.style.display = "inline-block";
        $3Btn.style.display = "inline-block";
        $5Btn.style.display = "inline-block";
        $checkBtn.style.display = "inline-block";
        $eraseBtn.style.display = "inline-block";
        $stopBtn.style.display = "inline-block";
        $timerBar.style.display = "block";
    };

    function defaultdisplay() {
        $level.style.display = "block";
        $startBtn.style.display = "block";
        $mondai.style.display = "none";
        $shikiSpace.style.display = "none";
        $2Btn.style.display = "none";
        $3Btn.style.display = "none";
        $5Btn.style.display = "none";
        $7Btn.style.display = "none";
        $11Btn.style.display = "none";
        $13Btn.style.display = "none";
        $checkBtn.style.display = "none";
        $eraseBtn.style.display = "none";
        $stopBtn.style.display = "none";
        $timerBar.style.display = "none";
        clearInterval(timer1);
    };

    function closing() {
        audio3.play();
        alert(`タイムアップ！ ` + seikaiNum + `問クリア`);
        clearInterval(timer1);
        defaultdisplay();
        defaultlet();
        $seikaisuu.innerText = "";
    };

    function switchSetup(levelValue) {
        moveTimerBar();
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

    function generateMondai(prime, seikaiNum) {
        primeNum = Math.floor(seikaiNum / 5) + 2;
        for (let i = 0; i < primeNum; i++) {
            n = n * prime[getRandom(0, prime.length - 1)];
        };
        while (n == nb) {
            n = 1;
            for (let i = 0; i < primeNum; i++) {
                n = n * prime[getRandom(0, prime.length - 1)];
            };
        };
        $mondai.innerText = n + `＝`
        nb = n;
    };

    function step1Setup() {
        prime = [2, 3, 5];
        generateMondai(prime, seikaiNum);
    };

    function step2Setup() {
        $7Btn.style.display = "inline-block";
        prime = [2, 3, 5, 7];
        generateMondai(prime, seikaiNum);
    };

    function step3Setup() {
        $7Btn.style.display = "inline-block";
        $11Btn.style.display = "inline-block";
        prime = [2, 3, 5, 7, 11];
        generateMondai(prime, seikaiNum);
    };

    function step4Setup() {
        $7Btn.style.display = "inline-block";
        $11Btn.style.display = "inline-block";
        $13Btn.style.display = "inline-block";
        prime = [2, 3, 5, 7, 11, 13];
        generateMondai(prime, seikaiNum);
    };

    function numBtnPushed(NumPushed) {
        if ($shiki.innerText == "") {
            $shiki.innerText = NumPushed;
        } else {
            $shiki.innerText += `×` + NumPushed;
        };
        a = a * NumPushed;
    };

    $2Btn.addEventListener("click", () => {
        numPushed = 2;
        numBtnPushed(numPushed);
    });

    $3Btn.addEventListener("click", () => {
        numPushed = 3;
        numBtnPushed(numPushed);
    });

    $5Btn.addEventListener("click", () => {
        numPushed = 5;
        numBtnPushed(numPushed);
    });

    $7Btn.addEventListener("click", () => {
        numPushed = 7;
        numBtnPushed(numPushed);
    });

    $11Btn.addEventListener("click", () => {
        numPushed = 11;
        numBtnPushed(numPushed);
    });

    $13Btn.addEventListener("click", () => {
        numPushed = 13;
        numBtnPushed(numPushed);
    });

    $checkBtn.addEventListener("click", () => {
        if (n == a) {
            setTimeout(() => {
                audio1.play();
            }, 500);
            seikaiNum++;
            $seikaisuu.innerText = `【` + seikaiNum + `問正解】`;
            defaultlet();
            clearInterval(timer1);
            switchSetup($level.value);
        } else {
            audio3.play();
        };
    });

    $startBtn.addEventListener("click", () => {
        seikaiNum = 0;
        switchdisplay();
        defaultlet();
        switchSetup($level.value);
    });

    $eraseBtn.addEventListener("click", () => {
        $shiki.innerText = "";
        a = 1;
    });

    $stopBtn.addEventListener("click", () => {
        defaultdisplay();
        defaultlet();
        seikaiNum = 0;
        $seikaisuu.innerText = "";
    });

};

puzzle3();