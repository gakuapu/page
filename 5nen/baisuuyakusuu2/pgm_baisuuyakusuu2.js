function baisuuyakusuu2(){
    
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
    let n11 = 0;
    let n12 = 0;
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n5 = 0;
    let n21 = 0;
    let n31 = 0;
    let n51 = 0;
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
        n11 = 0;
        n12 = 0;
        n1 = 0;
        n2 = 0;
        n3 = 0;
        n5 = 0;
        n21 = 0;
        n31 = 0;
        n51 = 0;
        nb = 0;
        a = 0;
        p = 0;
        $kotae.value = "";
        $mondai.innerText = "";
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

    function generateNum(){
        n2 = getRandom(0, 2);
        switch (n2) {
            case 2:
                n3 = getRandom(0, 1);
                n5 = getRandom(0, 1 - n3);
                break;
            case 1:
                n3 = getRandom(0, 2);
                if (n3 == 0) {
                    n5 = 1;
                } else {
                    n5 = getRandom(0, 2 - n3);
                };
                break;
            case 0:
                n3 = getRandom(0, 2);
                if (n3 == 0) {
                    n5 = 2;
                } else {
                    n5 = getRandom(2 - n3, 1);
                };
                break;
            default:
                alert(`リロードして下さい`);
        };
    };

    function step1Setup(){
        if (count < mondaiNum){
            nb = n11;
            generateNum();
            n11 = (2 ** n2) * (3 ** n3) * (5 ** n5);
            while (n11 == nb) {
                generateNum();
                n11 = (2 ** n2) * (3 ** n3) * (5 ** n5);
            };
            a = (n2 + 1) * (n3 + 1) * (n5 + 1);
            $mondai.innerText = n11 + `の約数は何個?`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        if (count < mondaiNum){
            nb = p;
            p = getRandom(0, 1);
            while (p == nb) {
                p = getRandom(0, 1);
            };
            generateNum();
            n11 = (2 ** n2) * (3 ** n3) * (5 ** n5);
            n21 = n2;
            n31 = n3;
            n51 = n5;
            generateNum();
            n12 = (2 ** n2) * (3 ** n3) * (5 ** n5);
            while (n12 == n11) {
                generateNum();
                n12 = (2 ** n2) * (3 ** n3) * (5 ** n5);
            };
            n2 = Math.min(n2, n21);
            n3 = Math.min(n3, n31);
            n5 = Math.min(n5, n51);
            if (n12 < n11) {
                n1 = n11;
                n11 = n12;
                n12 = n1;
            };
            if (p == 0) {
                $mondai.innerText = `(` + n11 + `, ` + n12 + `)の最大公約数はいくつ?`;
                a = (2 ** n2) * (3 ** n3) * (5 ** n5);
            } else {
                $mondai.innerText = `(` + n11 + `, ` + n12 + `)の公約数は何個?`;
                a = (n2 + 1) * (n3 + 1) * (n5 + 1);
            };
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
    
baisuuyakusuu2();