function shousuu3(){
    
    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $kotae1 = document.getElementById("kotae1");
    const $kotae2 = document.getElementById("kotae2");
    const $dot = document.getElementById("dot");
    
    const $progress = document.getElementById("progress");

    const $memoHyojiBtn = document.getElementById("memohyoji");//計算メモ
    const $memoClearBtn = document.getElementById("memoclear");//計算メモ
    const $memoTable = document.getElementById("memotable");//計算メモ
    
    let count = 0;
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;
    let a1 = 0;
    let a2 = 0;
    let k2v = ""; //0xとxを区別
    let p = 0;
    let pb = 0;
    let mondaiNum = 10;
    
    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };
    
    function defaultlet(){
        count = 0;
        n1 = 0;
        n2 = 0;
        n3 = 0;
        n4 = 0;
        a1 = 0;
        a2 = "";
        k2v = ""; //0xとxを区別
        p = 0;
        pb = 0;
        $kotae1.value = "";
        $kotae2.value = "";
        $mondai.innerText = "";
    };

    function switchdisplay(){
        $kotae1.style.display = "inline-block";
        $dot.innerText = `.`;
        $kotae2.style.display = "inline-block";    
        $progress.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $step.style.display = "none";
        $startBtn.style.display = "none";
    };

    function defaultdisplay(){
        $kotae1.style.display = "none";
        $dot.innerText = "";
        $kotae2.style.display = "none";
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
                $progress.value = count / mondaiNum;
            }, 500);
            count++;
            switchSetup($step.value);
        };
    };

    function step1Setup(){
        if (count < mondaiNum){
            pb = n1;
            n1 = getRandom(1, 99);
            while (n1 == pb){
                n1 = getRandom(1, 99);
            };
            n2 = getRandom(0, n1 - 1);
            n3 = getRandom(1, 9);
            n4 = getRandom(1, 9);
            while (n3 == n4){
                n4 = getRandom(1, 9);
            };
            n1 = n1 * 10 + n3;
            n2 = n2 * 10 + n4;
            a1 = Math.floor((n1 - n2) / 100);
            a2 = (n1 - n2) - a1 * 100;
            a2 = a2 + 100; //0xとxを区別
            n1 = n1 / 100;
            n2 = n2 / 100; 
            $mondai.innerText = n1 + `－` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        if (count < mondaiNum){
            pb = n1;
            n1 = getRandom(1, 99);
            while (n1 == pb){
                n1 = getRandom(1, 99);
            };
            n2 = getRandom(0, n1 - 1);
            n3 = getRandom(1, 9);
            n4 = n3;
            n1 = n1 * 10 + n3;
            n2 = n2 * 10 + n4;
            a1 = Math.floor((n1 - n2) / 100);
            a2 = (n1 - n2) - a1 * 100;
            a2 = a2 / 10;
            a2 = a2 + 10; //0xとxを区別
            n1 = n1 / 100;
            n2 = n2 / 100; 
            $mondai.innerText = n1 + `－` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step3Setup(){
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 3);
            while (p == pb){
                p = getRandom(1, 3);
            };
            switch(p){
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
                    while (n2 % 10 == 0){
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
        } else if (count == mondaiNum){
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
    
shousuu3();