function tani8(){
    
    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $kotae1 = document.getElementById("kotae1");
    const $unit1 = document.getElementById("unit1");
    const $unit2 = document.getElementById("unit2");
    
    const $progress = document.getElementById("progress");

    const $memoHyojiBtn = document.getElementById("memohyoji");//計算メモ
    const $memoClearBtn = document.getElementById("memoclear");//計算メモ
    const $memoTable = document.getElementById("memotable");//計算メモ
    
    let count = 0;
    let s = 0;
    let t = 0;
    let d = 0;
    let a1 = 0;
    let p = 0;
    let pb = 0;
    let mondaiNum = 8;
    
    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };
    
    function defaultlet(){
        count = 0;
        s = 0;
        t = 0;
        d = 0;
        a1 = 0;
        p = 0;
        pb = 0;
        $kotae1.value = "";
        $unit1.innerText = "";
        $unit2.innerText = "";
        $mondai.innerText = "";
    };

    function switchdisplay(){
        $kotae1.style.display = "inline-block"; 
        $unit1.innerText = "";
        $unit2.innerText = "";
        $progress.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $step.style.display = "none";
        $startBtn.style.display = "none";
    };

    function defaultdisplay(){
        $kotae1.style.display = "none";
        $unit1.innerText = "";
        $unit2.innerText = "";
        $progress.style.display = "none";
        $eraseBtn.style.display = "none";
        $resetBtn.style.display = "none";
        $memoHyojiBtn.style.display = "none";//計算メモ
        $memoClearBtn.style.display = "none";//計算メモ
        $memoTable.style.display = "none";//計算メモ
        $step.style.display = "block";
        $startBtn.style.display = "block";
    };

    function closing(){
        audio2.play();
        $progress.value = 1;
        defaultdisplay();
        defaultlet();
        alert(`クリアしました`);
    };

    function switchSetup(stepValue){
        $memoHyojiBtn.style.display = "block";//計算メモ
        switch(stepValue){
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

    function checkAnswer(){
        if ($kotae1.value == a1) {
            $memoClearBtn.style.display = "none";//計算メモ
            $memoTable.style.display = "none";//計算メモ
            setTimeout(() => {
                audio1.play();
                $kotae1.value = "";
                $progress.value = count / mondaiNum;
            }, 500);
            count++;
            switchSetup($step.value);
        };
    };

    function step1Setup(){
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 3);
            while (p == pb) {
                p = getRandom(1, 3);
            };
            switch (p) {
                case 1:
                    $unit1.innerText = "秒速";
                    $unit2.innerText = "ｍ";
                    a1 = getRandom(3, 9);
                    t = getRandom(2, 5) * 10;
                    d = a1 * t;
                    $mondai.innerText = t + `秒で` + d + `ｍ走る自転車の速さは?`;
                    break;
                case 2:
                    $unit1.innerText = "分速";
                    $unit2.innerText = "ｍ";
                    a1 = getRandom(3, 9) * 10;
                    t = getRandom(2, 5) * 10;
                    d = a1 * t;
                    $mondai.innerText = t + `分で` + d + `ｍ走る人の速さは?`;
                    break;
                case 3:
                    $unit1.innerText = "時速";
                    $unit2.innerText = "km";
                    a1 = getRandom(3, 9) * 10;
                    t = getRandom(2, 5);
                    d = a1 * t;
                    $mondai.innerText = t + `時間で` + d + `km走る自動車の速さは?`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        if (count < mondaiNum){
            $unit1.innerText = "";
            pb = p;
            p = getRandom(1, 3);
            while (p == pb) {
                p = getRandom(1, 3);
            };
            switch (p) {
                case 1:
                    $unit2.innerText = "ｍ";
                    s = getRandom(3, 9);
                    t = getRandom(2, 5) * 10;
                    a1 = s * t;
                    $mondai.innerText = `秒速` + s + `ｍで走る自転車が` + t + `秒間に進むきょりは?`;
                    break;
                case 2:
                    $unit2.innerText = "ｍ";
                    s = getRandom(3, 9) * 10;
                    t = getRandom(2, 5) * 10;
                    a1 = s * t;
                    $mondai.innerText = `分速` + s + `ｍで走る人が` + t + `分間に進むきょりは?`;
                    break;
                case 3:
                    $unit2.innerText = "km";
                    s = getRandom(3, 9) * 10;
                    t = getRandom(2, 5);
                    a1 = s * t;
                    $mondai.innerText = `時速` + s + `kmで走る自動車が` + t + `時間に進むきょりは?`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step3Setup(){
        if (count < mondaiNum){
            $unit1.innerText = "";
            pb = p;
            p = getRandom(1, 3);
            while (p == pb) {
                p = getRandom(1, 3);
            };
            switch (p) {
                case 1:
                    $unit2.innerText = "秒";
                    s = getRandom(3, 9);
                    a1 = getRandom(2, 5) * 10;
                    d = s * a1;
                    $mondai.innerText = `秒速` + s + `ｍで走る自転車が` + d + `ｍ進むのにかかる時間は?`;
                    break;
                case 2:
                    $unit2.innerText = "分";
                    s = getRandom(3, 9) * 10;
                    a1 = getRandom(2, 5) * 10;
                    d = s * a1;
                    $mondai.innerText = `分速` + s + `ｍで走る人が` + d + `ｍ進むのにかかる時間は?`;
                    break;
                case 3:
                    $unit2.innerText = "時間";
                    s = getRandom(3, 9) * 10;
                    a1 = getRandom(2, 5);
                    d = s * a1;
                    $mondai.innerText = `時速` + s + `kmで走る自動車が` + d + `km進むのにかかる時間は?`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step4Setup(){
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 6);
            while (p == pb) {
                p = getRandom(1, 6);
            };
            switch (p) {
                case 1:
                    $unit1.innerText = "分速";
                    $unit2.innerText = "ｍ";
                    s = getRandom(3, 9);
                    a1 = s * 60;
                    $mondai.innerText = `秒速` + s + `ｍ＝`;
                    break;
                case 2:
                    $unit1.innerText = "秒速";
                    $unit2.innerText = "ｍ";
                    s = getRandom(3, 9) * 60;
                    a1 = s / 60;
                    $mondai.innerText = `分速` + s + `ｍ＝`;
                    break; 
                case 3:
                    $unit1.innerText = "時速";
                    $unit2.innerText = "km";
                    s = getRandom(1, 5) * 10;
                    a1 = s * 60 * 60 / 1000;
                    $mondai.innerText = `秒速` + s + `ｍ＝`;
                    break;
                case 4:
                    $unit1.innerText = "秒速";
                    $unit2.innerText = "ｍ";
                    s = getRandom(1, 5) * 18;
                    a1 = s * 1000 / 60 / 60;;
                    $mondai.innerText = `時速` + s + `km＝`;
                    break;
                case 5:
                    $unit1.innerText = "時速";
                    $unit2.innerText = "km";
                    s = getRandom(1, 5) * 100;
                    a1 = s * 60 / 1000;
                    $mondai.innerText = `分速` + s + `ｍ＝`;
                    break;
                case 6:
                    $unit1.innerText = "分速";
                    $unit2.innerText = "ｍ";
                    s = getRandom(3, 9) * 6;
                    a1 = s * 1000 / 60;
                    $mondai.innerText = `時速` + s + `km＝`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    $kotae1.addEventListener("input", () => {
        checkAnswer();
    });

    $startBtn.addEventListener("click", () => {
        switchdisplay();
        defaultlet();
        $progress.value = 0;
        switchSetup($step.value);
    });
    
    $eraseBtn.addEventListener("click", () => {
        $kotae1.value = "";
    });
    
    $resetBtn.addEventListener("click", () => {
        defaultdisplay();
        defaultlet();
        $progress.value = 0;
    });
    
};
    
tani8();