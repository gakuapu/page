function baisuuyakusuu1(){
    
    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $hint = document.getElementById("hint");
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
    let nb = 0;
    let a = 0;
    let p = 0;
    let mondaiNum = 8;
    
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
        nb = 0;
        a = 0;
        p = 0;
        $kotae.value = "";
        $mondai.innerText = "";
        $hint.innerText = "";
    };

    function switchdisplay(){
        $kotae.style.display = "block";
        $progress.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $startBtn.style.display = "none";
        $step.style.display = "none";
    };

    function defaultdisplay(){
        $kotae.style.display = "none";
        $progress.style.display = "none";
        $eraseBtn.style.display = "none";
        $resetBtn.style.display = "none";
        $memoHyojiBtn.style.display = "none";//計算メモ
        $memoClearBtn.style.display = "none";//計算メモ
        $memoTable.style.display = "none";//計算メモ
        $startBtn.style.display = "block";
        $step.style.display = "block";
    };

    function closing(){
        audio2.play();
        $progress.value = 1;
        defaultdisplay();
        defaultlet();
        alert(`クリアしました`);
    };

    function step1Setup(){
        $memoHyojiBtn.style.display = "none"
        if (count < mondaiNum){
            nb = n1;
            n1 = getRandom(2, 9); 
            while (n1 == nb) {
                n1 = getRandom(2, 9); 
            };
            n2 = getRandom(3, 9);
            a = n1 * n2;
            $mondai.innerText = n1 + `の倍数のうち、小さい方から` + n2 + `番目の数は?`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        if (count < mondaiNum){
            nb = n1;
            n1 = getRandom(1, 3); 
            while (n1 == nb) {
                n1 = getRandom(1, 3); 
            };
            n2 = 2 + getRandom(0, 1);
            n3 = 3 + getRandom(0, 1) * 2;
            while (n3 == n2) {
                n3 = 3 + getRandom(0, 1) * 2;
            };
            p = getRandom(1, 3);
            if (p == 1) {
                n2 = n2 * n1;
            } else if (p == 2) {
                n3 = n3 * n1;
            } else {
                n2 = n2 * n1;
                n3 = n3 * n1;
            };
            $mondai.innerText = n2 + `と` + n3 + `の最小公倍数は?`;
            a = n2 * n3;
            n4 = 1;
            while (n2 % 2 == 0 && n3 % 2 == 0) {
                n4 = n4 * 2;
                n2 = n2 / 2;
                n3 = n3 / 2;
            };
            while (n2 % 3 == 0 && n3 % 3 == 0) {
                n4 = n4 * 3;
                n2 = n2 / 3;
                n3 = n3 / 3;
            };
            a = a / n4;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step3Setup(){
        $hint.innerText = `ヒント：まず最小公倍数を計算しよう`;
        if (count < mondaiNum){
            nb = n1;
            n1 = getRandom(1, 3); 
            while (n1 == nb) {
                n1 = getRandom(1, 3); 
            };
            n2 = 2 + getRandom(0, 1);
            n3 = 3 + getRandom(0, 1) * 2;
            while (n3 == n2) {
                n3 = 3 + getRandom(0, 1) * 2;
            };
            p = getRandom(1, 3);
            if (p == 1) {
                n2 = n2 * n1;
            } else if (p == 2) {
                n3 = n3 * n1;
            } else {
                n2 = n2 * n1;
                n3 = n3 * n1;
            };
            n5 = getRandom(2, 5);
            $mondai.innerText = n2 + `と` + n3 + `の公倍数のうち、小さい方から` + n5 + `番目の数は?`;
            a = n2 * n3;
            n4 = 1;
            while (n2 % 2 == 0 && n3 % 2 == 0) {
                n4 = n4 * 2;
                n2 = n2 / 2;
                n3 = n3 / 2;
            };
            while (n2 % 3 == 0 && n3 % 3 == 0) {
                n4 = n4 * 3;
                n2 = n2 / 3;
                n3 = n3 / 3;
            };
            a = a * n5 / n4;
        } else if (count == mondaiNum){
            closing();
        };
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

    $kotae.addEventListener("input", () => {
        if ($kotae.value == a){
            $memoClearBtn.style.display = "none";//計算メモ
            $memoTable.style.display = "none";//計算メモ
            setTimeout(() => {
                $kotae.value = "";
                audio1.play();
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
    
baisuuyakusuu1();