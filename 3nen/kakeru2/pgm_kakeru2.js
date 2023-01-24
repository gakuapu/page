function kakeru2(){
    
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
    let a = 0;
    let ab = 0;
    let p = 0;
    let pb = 0;
    let q = 0;
    let mondaiNum = 10;
    
    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };
    
    function defaultlet(){
        count = 0;
        n1 = 0;
        n2 = 0;
        a = 0;
        ab = 0;
        p = 0;
        pb = 0;
        q = 0;
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
            case "5":
                step5Setup();
                break;
            default:
                alert(`リロードして下さい`);
        };
    };

    function step1Setup(){
        if (count < mondaiNum){
            ab = a;
            n1 = getRandom(2, 9) * 10;
            n2 = getRandom(2, 9) * 10;
            a = n1 * n2;
            while (a == ab){
                n1 = getRandom(2, 9) * 10;
                n2 = getRandom(2, 9) * 10;
                a = n1 * n2;
            };
            $mondai.innerText = n1 + `×` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        if (count < mondaiNum){
            ab = a;
            n1 = getRandom(11, 99);
            n2 = getRandom(11, 19);
            a = n1 * n2;
            while (a == ab){
                n1 = getRandom(11, 99);
                n2 = getRandom(11, 19);
                a = n1 * n2;
            };
            $mondai.innerText = n1 + `×` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step3Setup(){
        if (count < mondaiNum){
            ab = a;
            n1 = getRandom(21, 99);
            n2 = getRandom(21, 99);
            a = n1 * n2;
            while (a == ab){
                n1 = getRandom(21, 99);
                n2 = getRandom(21, 99);
                a = n1 * n2;
            };
            $mondai.innerText = n1 + `×` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step4Setup(){
        if (count < mondaiNum){
            ab = a;
            n1 = getRandom(101, 999);
            n2 = getRandom(2, 9) * 10;
            a = n1 * n2;
            while (a == ab){
                n1 = getRandom(101, 999);
                n2 = getRandom(2, 9) * 10;
                a = n1 * n2;
            };
            $mondai.innerText = n1 + `×` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step5Setup(){
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            if (p == 1){
                n1 = getRandom(101, 999);
            } else {
                q = getRandom(1, 2);
                if (q == 1){
                    n1 = getRandom(2, 9) * 100;
                } else {
                    n1 = getRandom(11, 99) * 10;
                };
            };
            n2 = getRandom(11, 99);
            a = n1 * n2;
            $mondai.innerText = n1 + `×` + n2 + `＝`;
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
    
kakeru2();