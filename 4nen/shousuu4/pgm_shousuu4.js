function shousuu4(){
    
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
    let a1 = 0;
    let a2 = 0;
    let k2v = ""; //0xとxを区別
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
        n3 = 0;
        a1 = 0;
        a2 = "";
        k2v = ""; //0xとxを区別
        p = 0;
        pb = 0;
        q = 0;
        $kotae1.value = "";
        $kotae2.value = "";
        $mondai.innerText = "";
    };

    function switchdisplay(){
        $kotae1.style.display = "inline-block";    
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
            case "4":
                step4Setup();
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
            pb = n2;
            n2 = getRandom(2, 9);
            while (n2 == pb){
                n2 = getRandom(2, 9);
            };
            q = getRandom(1, 3);
            switch(q){
                case 1:
                    n1 = getRandom(2, 9);
                    break;
                case 2:
                    n1 = getRandom(1, 4) * 10 + getRandom(1, 9);
                    break;
                case 3:
                    n1 = getRandom(1, 4) * 10 + 5;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            n3 = n1 * n2;
            if (n3 % 10 == 0){
                $kotae2.style.display = "none";
                $dot.innerText = "";
                a2 = "";
                a1 = n3 / 10;
            } else {
                $kotae2.style.display = "inline-block";
                $dot.innerText = ".";
                a1 = Math.floor(n3 / 10);
                a2 = n3 - a1 * 10;
                a2 = a2 + 10; //0xとxを区別
            };
            n1 = n1 / 10;
            $mondai.innerText = n1 + `×` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        if (count < mondaiNum){
            pb = n2;
            n2 = getRandom(11, 30);
            while (n2 == pb){
                n2 = getRandom(11, 30);
            };
            q = getRandom(1, 3);
            switch(q){
                case 1:
                    n1 = getRandom(2, 9);
                    break;
                case 2:
                    n1 = getRandom(1, 4) * 10 + getRandom(1, 9);
                    break;
                case 3:
                    n1 = getRandom(1, 4) * 10 + 5;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            n3 = n1 * n2;
            if (n3 % 10 == 0){
                $kotae2.style.display = "none";
                $dot.innerText = "";
                a2 = "";
                a1 = n3 / 10;
            } else {
                $kotae2.style.display = "inline-block";
                $dot.innerText = ".";
                a1 = Math.floor(n3 / 10);
                a2 = n3 - a1 * 10;
                a2 = a2 + 10; //0xとxを区別
            };
            n1 = n1 / 10;
            $mondai.innerText = n1 + `×` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step3Setup(){
        if (count < mondaiNum){
            pb = n2;
            n2 = getRandom(2, 9);
            while (n2 == pb){
                n2 = getRandom(2, 9);
            };
            q = getRandom(1, 3);
            switch(q){
                case 1:
                    n1 = getRandom(0, 9) * 10 + getRandom(2, 9);
                    break;
                case 2:
                    n1 = getRandom(1, 4) * 100 + getRandom(0, 9) * 10 + getRandom(1, 9);
                    break;
                case 3:
                    n1 = getRandom(0, 4) * 100 + getRandom(0, 9) * 10 + 5;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            n3 = n1 * n2;
            if (n3 % 100 == 0){
                $kotae2.style.display = "none";
                $dot.innerText = "";
                a2 = "";
                a1 = n3 / 100;
            } else {
                $kotae2.style.display = "inline-block";
                $dot.innerText = ".";
                if (n3 % 10 == 0){
                    a1 = Math.floor(n3 / 100);
                    a2 = (n3 - a1 * 100) / 10;
                    a2 = a2 + 10; //0xとxを区別
                } else {
                    a1 = Math.floor(n3 / 100);
                    a2 = n3 - a1 * 100;
                    a2 = a2 + 100; //0xとxを区別
                };
            };
            n1 = n1 / 100;
            $mondai.innerText = n1 + `×` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step4Setup(){
        if (count < mondaiNum){
            pb = n2;
            n2 = getRandom(11, 30);
            while (n2 == pb){
                n2 = getRandom(11, 30);
            };
            q = getRandom(1, 3);
            switch(q){
                case 1:
                    n1 = getRandom(0, 9) * 10 + getRandom(2, 9);
                    break;
                case 2:
                    n1 = getRandom(1, 4) * 100 + getRandom(0, 9) * 10 + getRandom(1, 9);
                    break;
                case 3:
                    n1 = getRandom(0, 4) * 100 + getRandom(0, 9) * 10 + 5;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            n3 = n1 * n2;
            if (n3 % 100 == 0){
                $kotae2.style.display = "none";
                $dot.innerText = "";
                a2 = "";
                a1 = n3 / 100;
            } else {
                $kotae2.style.display = "inline-block";
                $dot.innerText = ".";
                if (n3 % 10 == 0){
                    a1 = Math.floor(n3 / 100);
                    a2 = (n3 - a1 * 100) / 10;
                    a2 = a2 + 10; //0xとxを区別
                } else {
                    a1 = Math.floor(n3 / 100);
                    a2 = n3 - a1 * 100;
                    a2 = a2 + 100; //0xとxを区別
                };
            };
            n1 = n1 / 100;
            $mondai.innerText = n1 + `×` + n2 + `＝`;
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
    
shousuu4();