function shousuu7(){
    
    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $checkBtn = document.getElementById("check-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai0 = document.getElementById("mondai0");
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
    let a1 = 0;
    let a2 = 0;
    let k2v = ""; //0xとxを区別
    let p = 0;
    let pb = 0;
    let q = 0;
    let i = 0;
    let N1 = [4, 5, 8];
    let N2 = [3, 6, 7, 9];
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
        a1 = 0;
        a2 = "";
        k2v = ""; //0xとxを区別
        p = 0;
        pb = 0;
        q = 0;
        i = 0;
        $kotae1.value = "";
        $kotae2.value = "";
        $mondai0.innerText = "";
        $mondai.innerText = "";
    };

    function switchdisplay(){
        $kotae1.style.display = "inline-block"; 
        $dot.innerText = ".";
        $kotae2.style.display = "inline-block";
        $checkBtn.style.display = "block";
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
        $checkBtn.style.display = "none";
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
            i = 0;
            pb = p;
            p = getRandom(1, 3);
            while (p == pb){
                p = getRandom(1, 3);
            };
            n3 = getRandom(0, 2);
            n2 = N1[n3];
            if (p == 1){
                n1 = getRandom(1, 19);
                while (n1 % n2 == 0){
                    n1 = getRandom(1, 19);
                };
                n1 = n1 * 10;
                a1 = Math.floor((n1 * 1000 / n2) / 10000);
                a2 = n1 * 1000 / n2 - a1 * 10000;
            } else {
                n1 = getRandom(0, 49) * 10 + getRandom(1, 9);
                while (n1 % n2 == 0){
                    n1 = getRandom(0, 49) * 10 + getRandom(1, 9);
                };
                a1 = Math.floor((n1 * 1000 / n2) / 10000);
                a2 = n1 * 1000 / n2 - a1 * 10000;
            };
            while (a2 % 10 == 0){
                a2 = a2 / 10;
                i++;
            };
            n1 = n1 / 10;
            a2 = a2 + 10 ** (4 - i); //0xとxを区別
            $mondai0.innerText = `割り切れるまで割り進めると、商はいくつ?`;
            $mondai.innerText = n1 + `÷` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 3);
            while (p == pb){
                p = getRandom(1, 3);
            };
            n3 = getRandom(0, 3);
            n2 = N2[n3];
            if (p == 1){
                n1 = getRandom(1, 9);
                while (n1 % 3 == 0 || n1 % 7 == 0){
                    n1 = getRandom(1, 9);
                };
            } else {
                n1 = getRandom(1, 9) * 10 + getRandom(1, 9);
                while (n1 % 3 == 0 || n1 % 7 == 0){
                    n1 = getRandom(10, 99);
                };
            };
            a1 = Math.floor((n1 * 100 / n2) / 100);
            q = getRandom(1, 2);
            if (q == 1){
                a2 = Math.round(n1 * 100 / n2 - a1 * 100);
                a2 = a2 + 100; //0xとxを区別
                $mondai0.innerText = `小数第3位で四捨五入して小数第2位まで求めると、商はいくつ?`;
            } else {
                a2 = Math.round(n1 * 10 / n2 - a1 * 10);
                a2 = a2 + 10; //0xとxを区別
                $mondai0.innerText = `小数第2位で四捨五入して小数第1位まで求めると、商はいくつ?`;
            };
            $mondai.innerText = n1 + `÷` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    $checkBtn.addEventListener("click", () => {
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
    
shousuu7();