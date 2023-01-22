function tasuhiku9(){
    
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
    let n11 = 0;
    let n12 = 0;
    let n2 = 0;
    let a = 0;
    let ab = 0;
    let a1 = 0;
    let a2 = 0;
    let mondaiNum = 10;
    
    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };
    
    function defaultlet(){
        count = 0;
        n1 = 0;
        n11 = 0;
        n12 = 0;
        n2 = 0;
        a = 0;
        ab = 0;
        a1 = 0;
        a2 = 0;
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
            a1 = getRandom(2, 9);
            a2 = getRandom(1, 99);
            a = a1 * 100 + a2;
            while (a == ab){
                a1 = getRandom(2, 9);
                a2 = getRandom(1, 99);
                a = a1 * 100 + a2;
            };
            n11 = getRandom(1, a1 - 1);
            n12 = getRandom(0, a2 - 1);
            n1 = n11 * 100 + n12;
            n2 = a - n1;
            $mondai.innerText = n1 + `＋` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        if (count < mondaiNum){
            ab = a;
            a1 = getRandom(2, 9);
            a2 = getRandom(1, 98);
            a = a1 * 100 + a2;
            while (a == ab){
                a1 = getRandom(2, 9);
                a2 = getRandom(1, 98);
                a = a1 * 100 + a2;
            };
            n11 = getRandom(0, a1 - 1);
            n12 = getRandom(a2 + 1, 99);
            n1 = n11 * 100 + n12;
            n2 = a - n1;
            $mondai.innerText = n1 + `＋` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step3Setup(){
        if (count < mondaiNum){
            ab = a;
            a1 = getRandom(0, 9);
            a2 = getRandom(10, 98);
            a = 1000 + a1 * 100 + a2;
            while (a == ab){
                a1 = getRandom(0, 9);
                a2 = getRandom(1, 99);
                a = 1000 + a1 * 100 + a2;
            };
            n1 = getRandom(a - 1000 + 1, 999);
            n2 = a - n1;
            $mondai.innerText = n1 + `＋` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step4Setup(){
        if (count < mondaiNum){
            ab = a;
            n11 = getRandom(2, 9);
            n12 = getRandom(1, 99);
            n1 = n11 * 100 + n12;
            a1 = getRandom(1, n11 - 1);
            a2 = getRandom(0, n12);
            a = a1 * 100 + a2;
            while (a == ab){
                n11 = getRandom(2, 9);
                n12 = getRandom(1, 99);
                n1 = n11 * 100 + n12;
                a1 = getRandom(1, n11 - 1);
                a2 = getRandom(0, n12);
                a = a1 * 100 + a2;
            };
            n2 = n1 - a;
            $mondai.innerText = n1 + `－` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step5Setup(){
        if (count < mondaiNum){
            ab = a;
            n11 = getRandom(2, 9);
            n12 = getRandom(1, 98);
            n1 = n11 * 100 + n12;
            a1 = getRandom(0, n11 - 1);
            a2 = getRandom(n12 + 1, 99);
            a = a1 * 100 + a2;
            while (a == ab){
                n11 = getRandom(2, 9);
                n12 = getRandom(1, 98);
                n1 = n11 * 100 + n12;
                a1 = getRandom(0, n11 - 1);
                a2 = getRandom(n12 + 1, 99);
                a = a1 * 100 + a2;
            };
            n2 = n1 - a;
            $mondai.innerText = n1 + `－` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step6Setup(){
        if (count < mondaiNum){
            ab = a;
            n11 = getRandom(1, 988);
            a = getRandom (n11 + 10, 999);
            while (a == ab){
                n11 = getRandom(1, 988);
                a = getRandom (n11 + 10, 999);
            };
            n1 = 1000 + n11;
            n2 = n1 - a;
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
    
tasuhiku9();