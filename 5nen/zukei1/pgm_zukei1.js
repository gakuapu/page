function zukei1(){
    
    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $kotae1 = document.getElementById("kotae1");
    const $unit = document.getElementById("unit");
    
    const $progress = document.getElementById("progress");

    const $memoHyojiBtn = document.getElementById("memohyoji");//計算メモ
    const $memoClearBtn = document.getElementById("memoclear");//計算メモ
    const $memoTable = document.getElementById("memotable");//計算メモ
    
    let count = 0;
    let n = 0;
    let nb = 0;
    let a1 = 0;
    let mondaiNum = 5;
    
    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };
    
    function defaultlet(){
        count = 0;
        n = 0;
        nb = 0;
        a1 = 0;
        $kotae1.value = "";
        $unit.innerText = "";
        $mondai.innerText = "";
    };

    function switchdisplay(){
        $kotae1.style.display = "inline-block"; 
        $unit.innerText = "";
        $progress.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $step.style.display = "none";
        $startBtn.style.display = "none";
    };

    function defaultdisplay(){
        $kotae1.style.display = "none";
        $unit.innerText = "";
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

    function nConvertText(n){
        switch(n){
            case 5:
                nt = "五";
                break;
            case 6:
                nt = "六";
                break;
            case 7:
                nt = "七";
                break;
            case 8:
                nt = "八";
                break;
            case 9:
                nt = "九";
                break;
            case 10:
                nt = "十";
                break;
            default:
                alert(`リロードして下さい`);
        };
    };

    function step1Setup(){
        if (count < mondaiNum){
            $unit.innerText = "°";
            nb = n;
            n = getRandom(5, 10);
            while (n == nb){
                n = getRandom(5, 10);
            };
            nConvertText(n);
            a1 = (n - 2) * 180;
            $mondai.innerText = nt + `角形の内角の和は?`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        if (count < mondaiNum){
            $unit.innerText = "°";
            nb = n;
            n = getRandom(5, 10);
            while (n == nb || 360 % n != 0) {
                n = getRandom(5, 10);
            };
            nConvertText(n);
            a1 = (n - 2) * 180 / n;
            $mondai.innerText = `正` + nt + `角形の1つの頂点の内角の大きさは?`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step3Setup(){
        if (count < mondaiNum){
            $unit.innerText = "°";
            nb = n;
            n = getRandom(5, 10);
            while (n == nb || 360 % n != 0) {
                n = getRandom(5, 10);
            };
            nConvertText(n);
            a1 = 360 / n;
            $mondai.innerText = `正` + nt + `角形の1つの頂点の外角の大きさは?`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step4Setup(){
        if (count < mondaiNum){
            $unit.innerText = "本";
            nb = n;
            n = getRandom(5, 10);
            while (n == nb){
                n = getRandom(5, 10);
            };
            nConvertText(n);
            a1 = (n - 3) * n / 2;
            $mondai.innerText = nt + `角形の対角線の総数は?`;
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
    
zukei1();