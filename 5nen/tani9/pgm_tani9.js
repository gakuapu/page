function tani9() {

    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $unit = document.getElementById("unit");
    const $kotae = document.getElementById("kotae");
    const $checkBtn = document.getElementById("check-btn");

    const $progress = document.getElementById("progress");

    let count = 0;
    let kL = 0;
    let L = 0;
    let mL = 0;
    let m3 = 0;
    let cm3 = 0;
    let a = 0;
    let p = 0; //パターン
    let pb = 0; //前問のパターン
    let mondaiNum = 10;

    function getRandom(min, max) {
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };

    function defaultlet() {
        count = 0;
        kL = 0;
        L = 0;
        mL = 0;
        m3 = 0;
        cm3 = 0;
        a = 0;
        p = 0;
        pb = 0;
        $kotae.value = "";
        $mondai.innerText = "";
        $unit.innerText = "";
    };

    function switchdisplay() {
        $kotae.style.display = "inline-block";
        $checkBtn.style.display = "block";
        $progress.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $step.style.display = "none";
        $startBtn.style.display = "none";
    };

    function defaultdisplay() {
        $kotae.style.display = "none";
        $checkBtn.style.display = "none";
        $progress.style.display = "none";
        $eraseBtn.style.display = "none";
        $resetBtn.style.display = "none";
        $step.style.display = "block";
        $startBtn.style.display = "block";
    };

    function closing() {
        audio2.play();
        $progress.value = 1;
        defaultdisplay();
        defaultlet();
        alert(`クリアしました`);
    };

    function switchSetup(stepValue) {
        switch (stepValue) {
            case "1":
                step1Setup();
                break;
            case "2":
                step2Setup();
                break;
            case "3":
                step3Setup();
                break;
            default:
                alert(`リロードして下さい`);
        };
    };

    function step1Setup() {
        if (count < mondaiNum) {
            pb = p;
            p = getRandom(1, 4);
            while (p == pb) {
                p = getRandom(1, 4);
            };
            switch (p) {
                case 1:
                    L = getRandom(2, 15);
                    a = L * 1000;
                    $mondai.innerText = L + `L ＝`;
                    $unit.innerText = `㎤`;
                    break;
                case 2:
                    L = getRandom(2, 15);
                    a = L * 1000;
                    $mondai.innerText = L + `L ＝`;
                    $unit.innerText = `mL`;
                    break;
                case 3:
                    cm3 = getRandom(2, 15) * 1000;
                    a = cm3 / 1000;
                    $mondai.innerText = cm3 + `㎤ ＝`
                    $unit.innerText = `L`;
                    break;
                case 4:
                    mL = getRandom(2, 15) * 1000;
                    a = mL / 1000;
                    $mondai.innerText = mL + `mL ＝`
                    $unit.innerText = `L`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum) {
            closing();
        };
    };

    function step2Setup() {
        if (count < mondaiNum) {
            pb = p;
            p = getRandom(1, 8);
            while (p == pb) {
                p = getRandom(1, 8);
            };
            switch (p) {
                case 1:
                    m3 = getRandom(2, 15);
                    a = m3 * 1000000;
                    $mondai.innerText = m3 + `㎥ ＝`;
                    $unit.innerText = `㎤`;
                    break;
                case 2:
                    m3 = getRandom(2, 15);
                    a = m3 * 1000000;
                    $mondai.innerText = m3 + `㎥ ＝`;
                    $unit.innerText = `mL`;
                    break;
                case 3:
                    m3 = getRandom(2, 15);
                    a = m3 * 1000;
                    $mondai.innerText = m3 + `㎥ ＝`;
                    $unit.innerText = `L`;
                    break;
                case 4:
                    m3 = getRandom(2, 15);
                    a = m3;
                    $mondai.innerText = m3 + `㎥ ＝`;
                    $unit.innerText = `kL`;
                    break;
                case 5:
                    cm3 = getRandom(2, 15) * 1000000;
                    a = cm3 / 1000000;
                    $mondai.innerText = cm3 + `㎤ ＝`;
                    $unit.innerText = `㎥`;
                    break;
                case 6:
                    mL = getRandom(2, 15) * 1000000;
                    a = mL / 1000000;
                    $mondai.innerText = mL + `mL ＝`;
                    $unit.innerText = `㎥`;
                    break;
                case 7:
                    L = getRandom(2, 15) * 1000;
                    a = L / 1000;
                    $mondai.innerText = L + `L ＝`;
                    $unit.innerText = `㎥`;
                    break;
                case 8:
                    kL = getRandom(2, 15);
                    a = kL;
                    $mondai.innerText = kL + `kL ＝`;
                    $unit.innerText = `㎥`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum) {
            closing();
        };
    };

    function step3Setup() {
        if (count < mondaiNum) {
            pb = p;
            p = getRandom(1, 8);
            while (p == pb) {
                p = getRandom(1, 8);
            };
            switch (p) {
                case 1:
                    kL = getRandom(2, 15);
                    a = kL * 1000000;
                    $mondai.innerText = kL + `kL ＝`;
                    $unit.innerText = `㎤`;
                    break;
                case 2:
                    kL = getRandom(2, 15);
                    a = kL * 1000000;
                    $mondai.innerText = kL + `kL ＝`;
                    $unit.innerText = `mL`;
                    break;
                case 3:
                    kL = getRandom(2, 15);
                    a = kL * 1000;
                    $mondai.innerText = kL + `kL ＝`;
                    $unit.innerText = `L`;
                    break;
                case 4:
                    kL = getRandom(2, 15);
                    a = kL;
                    $mondai.innerText = kL + `kL ＝`;
                    $unit.innerText = `㎥`;
                    break;
                case 5:
                    cm3 = getRandom(2, 15) * 1000000;
                    a = cm3 / 1000000;
                    $mondai.innerText = cm3 + `㎤ ＝`;
                    $unit.innerText = `kL`;
                    break;
                case 6:
                    mL = getRandom(2, 15) * 1000000;
                    a = mL / 1000000;
                    $mondai.innerText = mL + `mL ＝`;
                    $unit.innerText = `kL`;
                    break;
                case 7:
                    L = getRandom(2, 15) * 1000;
                    a = L / 1000;
                    $mondai.innerText = L + `L ＝`;
                    $unit.innerText = `kL`;
                    break;
                case 8:
                    m3 = getRandom(2, 15);
                    a = m3;
                    $mondai.innerText = m3 + `㎥ ＝`;
                    $unit.innerText = `kL`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum) {
            closing();
        };
    };

    $checkBtn.addEventListener("click", () => {
        if ($kotae.value == a) {
            setTimeout(() => {
                audio1.play();
                $kotae.value = "";
                $progress.value = count / mondaiNum;
            }, 500);
            count++;
            switchSetup($step.value);
        } else {
            setTimeout(() => {
                audio3.play();
            }, 500);
        };
    });

    $startBtn.addEventListener("click", () => {
        switchdisplay();
        defaultlet();
        $progress.value = 0;
        switchSetup($step.value);
    });

    $eraseBtn.addEventListener("click", () => {
        $kotae.value = "";
    });

    $resetBtn.addEventListener("click", () => {
        defaultdisplay();
        defaultlet();
        $progress.value = 0;
    });

};

tani9();