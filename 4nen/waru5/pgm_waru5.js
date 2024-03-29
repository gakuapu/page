function waru5(){
    
    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $kotae1 = document.getElementById("kotae1");
    const $kotae2 = document.getElementById("kotae2");
    const $amariTxt = document.getElementById("amaritxt");
    
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
        a1 = 0;
        a2 = 0;
        p = 0;
        pb = 0;
        $kotae1.value = "";
        $kotae2.value = "";
        $amariTxt.innerText = "";
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

    function switchdisplay2(){
        $kotae2.style.display = "inline-block";
        $amariTxt.innerText = `あまり`;
    };

    function defaultdisplay(){
        $kotae1.style.display = "none";
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
        switch(stepValue){
            case "1":
                step1Setup();
                break;
            case "2":
                $memoHyojiBtn.style.display = "block";//計算メモ
                step2Setup();
                break;
            case "3":
                $memoHyojiBtn.style.display = "block";//計算メモ
                step3Setup();
                break;
            default:
                alert(`リロードして下さい`);
        };
    };

    function checkAnswer(){
        if ($kotae1.value == a1 && $kotae2.value == a2){
            $memoClearBtn.style.display = "none";//計算メモ
            $memoTable.style.display = "none";//計算メモ
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
            pb = p;
            p = getRandom(1, 3);
            while (p == pb){
                p = getRandom(1, 3);
            };
            n1 = getRandom(2, 9);
            n3 = getRandom(2, 9);
            q = getRandom(1, 3);
            if (q == 1){
                n2 = n1 * n3;
                $mondai.innerText = n2 * (10 ** p) + `÷` + n1 * (10 ** p) + `＝` + n2 + `÷□`;
                a1 = n1;
            } else if (q == 2){
                n2 = n1 * n3;
                $mondai.innerText = n2 * (10 ** p) + `÷` + n1 * (10 ** p) + `＝□÷` + n1;
                a1 = n2;
            } else {
                n3 = n3 * 10;
                n2 = n1 * n3;
                $mondai.innerText = n2 * (10 ** p) + `÷` + n1 * (10 ** p) + `＝□÷` + n1;
                a1 = n2;
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        if (count < mondaiNum){
            a1 = pb;
            a1 = getRandom(2, 9);
            while (a1 == pb){
                a1 = getRandom(2, 9);
            };
            p = getRandom(1, 3);
            n1 = getRandom(2, 9) * (10 ** p);
            q = getRandom(1, 2);
            if (q == 1){
                a1 = a1 * 10;
            } else if (q == 2){
                a1 = a1 * 100;
            };
            n2 = n1 * a1;
            $mondai.innerText = n2 + `÷` + n1 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step3Setup(){
        if (count < mondaiNum){
            switchdisplay2();
            a1 = pb;
            a1 = getRandom(2, 9);
            while (a1 == pb){
                a1 = getRandom(2, 9);
            };
            n1 = getRandom(2, 10);
            a2 = getRandom(1, n1 - 1);
            p = getRandom(1, 3);
            n1 = n1 * (10 ** p);
            a2 = a2 * (10 ** p)
            n2 = n1 * a1 + a2;
            $mondai.innerText = n2 + `÷` + n1 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    $kotae1.addEventListener("input", () => {
        checkAnswer();
    });
    
    $kotae2.addEventListener("input", () => {
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
    
waru5();