function zukei4(){

    function getRandom(min, max){
    let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
    return randomNum;
    };

    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai0 = document.getElementById("mondai0");
    const $mondai = document.getElementById("mondai");
    const $kotae1 = document.getElementById("kotae1");
    const $kotae2 = document.getElementById("kotae2");
    const $dot = document.getElementById("dot");
    const $unit = document.getElementById("unit");

    const $progress = document.getElementById("progress");

    const $memoHyojiBtn = document.getElementById("memohyoji");//計算メモ
    const $memoClearBtn = document.getElementById("memoclear");//計算メモ
    const $memoTable = document.getElementById("memotable");//計算メモ
    
    let count = 0;
    let countMax = 8;
    let n = 0;
    let nb = 0;
    let r = 0;
    let r2 = 0;
    let a1 = 0;
    let a2 = 0;
    let p = 0;
    let k2v = ""; //0xとxを区別
    
    function defaultlet(){
        count = 0;
        n = 0;
        a1 = 0;
        a2 = 0;
        k2v = ""; //0xとxを区別
        $kotae1.value = "";
        $kotae2.value = "";
        $mondai.innerText = "";
    };

    function switchdisplay(){
        $mondai0.style.display = "block";
        $kotae1.style.display = "inline-block";
        $unit.style.display = "inline-block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $step.style.display = "none";
        $startBtn.style.display = "none";
        $progress.style.display = "block";
    };

    function defaultdisplay(){
        $mondai0.style.display = "none";
        $kotae1.style.display = "none";
        $dot.innerText = "";
        $kotae2.style.display = "none";
        $unit.style.display = "none";
        $eraseBtn.style.display = "none";
        $resetBtn.style.display = "none";
        $step.style.display = "block";
        $startBtn.style.display = "block";
        $progress.style.display = "none";
        $memoHyojiBtn.style.display = "none";//計算メモ
        $memoClearBtn.style.display = "none";//計算メモ
        $memoTable.style.display = "none";//計算メモ
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
            default:
                alert(`リロードして下さい`);
        };
    };

    function checkAnswer(){
        if ($kotae1.value == a1 && k2v == a2){ //0xとxを区別
            $memoClearBtn.style.display = "none";//計算メモ
            $memoTable.style.display = "none";//計算メモ
            k2v = ""; //0xとxを区別
            setTimeout(() => {
                audio1.play();
                $kotae1.value = "";
                $kotae2.value = "";
                $progress.value = count / countMax;
            }, 500);
            count++;
            switchSetup($step.value);
        };
    };

    function step1Setup(){
        if (count < countMax){
            $kotae2.style.display = "inline-block";
            $dot.innerText = ".";
            nb = r;
            r = getRandom(2, 5);
            while (r == nb) {
                r = getRandom(2, 5);
            };
            n = r * 2 * 3.14;
            a1 = Math.floor(n);
            a2 = Math.round((n - a1) * 100);
            if (a2 % 10 == 0){
                a2 = a2 / 10;
                a2 = a2 + 10 //0xとxを区別
            } else {
                a2 = a2 + 100; //0xとxを区別
            };
            p = getRandom(0, 1);
            if (p == 0) {
                $mondai.innerText = `半径` + r + `cmの円の円周の長さは?`;
            } else {
                $mondai.innerText = `直径` + r * 2 + `cmの円の円周の長さは?`;
            };
            console.log(a1);
            console.log(a2);
        } else if (count == countMax){
            closing();
        };
    };

    function step2Setup(){
        if (count < countMax){
            a2 = "";
            nb = a1;
            a1 = getRandom (2, 9);
            while (a1 == nb) {
                a1 = getRandom (2, 9);
            };
            r = a1 * 314 / 100;
            $mondai.innerText = `円周` + r + `cmの円の直径は?`;
        } else if (count == countMax){
            closing();
        };
    };

    function step3Setup(){
        if (count < countMax){
            $kotae2.style.display = "inline-block";
            $dot.innerText = ".";
            nb = r;
            r = getRandom(2, 5);
            while (r == nb) {
                r = getRandom(2, 5);
            };
            n = r * 2 * 3.14;
            a1 = Math.floor(n);
            a2 = Math.round((n - a1) * 100);
            if (a2 % 10 == 0){
                a2 = a2 / 10;
                a2 = a2 + 10 //0xとxを区別
            } else {
                a2 = a2 + 100; //0xとxを区別
            };
            r2 = getRandom (5, 9);
            p = getRandom(0, 1);
            if (p == 0) {
                $mondai.innerText = `半径` + (r + r2) + `cmの円と半径` + r2 + `cmの円の円周の長さの差は?`;
            } else {
                $mondai.innerText = `直径` + (r + r2) * 2 + `cmの円と直径` + r2 * 2 + `cmの円の円周の長さの差は?`;
            };
        } else if (count == countMax){
            closing();
        };
    };

    $kotae1.addEventListener("input", () => {
        if ($kotae2.value != ""){ //0xとxを区別
            k2v = "1" + $kotae2.value;
        };
        checkAnswer();
    });
    
    $kotae2.addEventListener("input", () => {
        if ($kotae2.value != ""){ //0xとxを区別
            k2v = "1" + $kotae2.value;
        };
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
        $kotae2.value = "";
    });
    
    $resetBtn.addEventListener("click", () => {
        defaultdisplay();
        defaultlet();
        $progress.value = 0;
    });
    
};
    
zukei4();