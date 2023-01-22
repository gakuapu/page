function tasuhiku7(){
    
    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $kotae = document.getElementById("kotae");
    
    const $progress = document.getElementById("progress");
    
    const $memoHyojiBtn = document.getElementById("memohyoji");//計算メモ
    const $memoClearBtn = document.getElementById("memoclear");//計算メモ
    const $memoTable = document.getElementById("memotable");//計算メモ

    let count = 0;
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;
    let n5 = 0;
    let n6 = 0;
    let a = 0;
    let ab = 0;
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
        n5 = 0;
        n6 = 0;
        a = 0;
        ab = 0;
        p = 0;
        pb = 0;
        $kotae.value = "";
        $mondai.innerText = "";
    };

    function switchdisplay(){
        $kotae.style.display = "block";
        $progress.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $step.style.display = "none";
        $startBtn.style.display = "none";
    };

    function defaultdisplay(){
        $kotae.style.display = "none";
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
            case "5":
                step5Setup();
                break;
            case "6":
                step6Setup();
                break;
            default:
                alert(`リロードして下さい`);
        };
    };

    function step1Setup(){
        if (count < mondaiNum){
            ab = a;
            n5 = getRandom(1, 8);
            a = 100 + n5;
            while (a == ab){
                n5 = getRandom(1, 8);
                a = 100 + n5;
            };
            n2 = getRandom(n5 + 1, 9);
            n1 = a - n2;
            $mondai.innerText = n1 + `＋` + n2 + `＝`;
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
            if (p == 1){
                n5 = getRandom(2, 9);
                n3 = getRandom(1, 9);
                n6 = getRandom(0, n3 - 1);
                a = 100 + n6 * 10 + n5;
                n1 = n3 * 10 + getRandom(1, n5 - 1);
                n2 = a - n1;
            } else {
                n1 = getRandom(1, 9);
                n2 = getRandom(10 - n1, 9);
                n3 = getRandom(1, 9);
                n4 = getRandom(10 - n3, 9);
                n1 = n3 * 10 + n1;
                n2 = n4 * 10 + n2;
                a = n1 + n2;
            };
            $mondai.innerText = n1 + `＋` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step3Setup(){
        if (count < mondaiNum){
            ab = a;
            n5 = getRandom(1, 9);
            n6 = getRandom(1, 8);
            a = n6 * 10 + n5;
            while (a == ab){
                n5 = getRandom(1, 9);
                n6 = getRandom(1, 8);
                a = n6 * 10 + n5;
            };
            n1 = 100 - a;
            $mondai.innerText = n1 + `＋□＝` + 100;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step4Setup(){
        if (count < mondaiNum){
            ab = a;
            n3 = getRandom(12, 99);
            n2 = getRandom(11, n3 - 1);
            a = 100 + n3 - n2;
            while (a == ab){
                n3 = getRandom(12, 99);
                n2 = getRandom(11, n3 - 1);
                a = 100 + n3 - n2;
            };
            n1 = 100 + n3;
            $mondai.innerText = n1 + `－` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step5Setup(){
        if (count < mondaiNum){
            ab = a;
            n2 = getRandom(2, 9);
            n1 = getRandom(1, n2 - 1);
            n1 = n1 + 100;
            a = n1 - n2;
            while (a == ab){
                n2 = getRandom(2, 9);
                n1 = getRandom(1, n2 - 1);
                n1 = n1 + 100;
                a = n1 - n2;
            };
            $mondai.innerText = n1 + `－` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step6Setup(){
        $memoHyojiBtn.style.display = "block";//計算メモ
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 3);
            while (p == pb){
                p = getRandom(1, 3);
            };
            if (p == 1){
                n1 = getRandom(1, 9);
                n2 = getRandom(0, n1 - 1);
                n4 = getRandom(1, 9);
                n3 = getRandom(0, n4 - 1);
                n1 = 100 + n3 * 10 + n1;
                n2 = n4 * 10 + n2;
            } else {
                n2 = getRandom(2, 9);
                n1 = getRandom(1, n2 - 1);
                n4 = getRandom(1, 9);
                n3 = getRandom(0, n4 - 1);
                n1 = 100 + n3 * 10 + n1;
                n2 = n4 * 10 + n2;
            };
            a = n1 - n2;
            $mondai.innerText = n1 + `－` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    $kotae.addEventListener("input", () => {
        if ($kotae.value == a){
            $memoClearBtn.style.display = "none";//計算メモ
            $memoTable.style.display = "none";//計算メモ
            setTimeout(() => {
                audio1.play();
                $kotae.value = "";
                $progress.value = count / mondaiNum;
            }, 500);
            count++;
            switchSetup($step.value);
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
    
tasuhiku7();