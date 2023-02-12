function keisanrule1(){
    
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
    let a = 0;
    let p = 0;
    let pb = 0;
    let q = 0;
    let r = 0;
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
        a = 0;
        p = 0;
        pb = 0;
        q = 0;
        r = 0;
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
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            n1 = getRandom(20, 39);
            n2 = getRandom(11, n1 - 9);
            a = n1 - n2;
            if (p == 1){
                n3 = getRandom(2, n2 - 2);
                n4 = n2 - n3;
                $mondai.innerText = n1 + `－(` + n3 + `＋` + n4 + `)＝`;
            } else {
                n3 = getRandom(n2 + 2, n1 - 2);
                n4 = n3 - n2;
                $mondai.innerText = n1 + `－(` + n3 + `－` + n4 + `)＝`;
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 4);
            while (p == pb){
                p = getRandom(1, 4);
            };
            n2 = getRandom(2, 9);
            n3 = getRandom(2, 9);
            switch(p){
                case 1:
                    n1 = getRandom(11, 30);
                    a = n1 + n2 * n3;
                    $mondai.innerText = n1 + `＋` + n2 + `×` + n3 +`＝`;
                    break;
                case 2:
                    n1 = getRandom(n2 * n3 + 2, 90);
                    a = n1 - n2 * n3;
                    $mondai.innerText = n1 + `－` + n2 + `×` + n3 +`＝`;
                    break;
                case 3:
                    n1 = getRandom(11, 30);
                    n4 = n2 * n3;
                    a = n1 + n2;
                    $mondai.innerText = n1 + `＋` + n4 + `÷` + n3 +`＝`;
                    break;
                case 4:
                    n4 = n2 * n3;
                    n1 = getRandom(n2 + 2, 30);
                    a = n1 - n2;
                    $mondai.innerText = n1 + `－` + n4 + `÷` + n3 +`＝`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step3Setup(){
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 6);
            while (p == pb){
                p = getRandom(1, 6);
            };
            n1 = getRandom(2, 9);
            n2 = getRandom(2, 9);
            n3 = getRandom(2, 9);
            n4 = getRandom(2, 9);
            switch(p){
                case 1:
                    a = n1 * n2 + n3 * n4;
                    $mondai.innerText = n1 + `×` + n2 + `＋` + n3 + `×` + n4 +`＝`;
                    break;
                case 2:
                    a = n1 * n2 + n3;
                    q = getRandom(1, 2);
                    if (q == 1){
                        $mondai.innerText = n1 + `×` + n2 + `＋` + n3 * n4 + `÷` + n4 +`＝`;
                    } else {
                        $mondai.innerText = n3 * n4 + `÷` + n4 + `＋` + n1 + `×` + n2 +`＝`;
                    };
                    break;
                case 3:
                    a = n1 + n3;
                    $mondai.innerText = n1 * n2 + `÷` + n2 + `＋` + n3 * n4 + `÷` + n4 +`＝`;
                    break;
                case 4:
                    while (n1 <= n3){
                        n1 = getRandom(3, 9);
                        n3 = getRandom(2, 8);
                    };
                    a = n1 - n3;
                    $mondai.innerText = n1 * n2 + `÷` + n2 + `－` + n3 * n4 + `÷` + n4 +`＝`;
                    break;
                case 5:
                    while ((n1 * n2) <= n3){
                        n1 = getRandom(2, 9);
                        n2 = getRandom(2, 9);
                        n3 = getRandom(2, 9);
                    };
                    a = n1 * n2 - n3;
                    $mondai.innerText = n1 + `×` + n2 + `－` + n3 * n4 + `÷` + n4 +`＝`;
                    break;
                case 6:
                    while ((n1 * n2) <= (n3 * n4)){
                        n1 = getRandom(4, 9);
                        n2 = getRandom(4, 9);
                        n3 = getRandom(2, 7);
                        n4 = getRandom(2, 7);
                    };
                        a = n1 * n2 - n3 * n4;
                        $mondai.innerText = n1 + `×` + n2 + `－` + n3 + `×` + n4 +`＝`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step4Setup(){
        if (count < mondaiNum){
            if (count < mondaiNum){
                pb = p;
                p = getRandom(1, 4);
                while (p == pb){
                    p = getRandom(1, 4);
                };
                n1 = getRandom(2, 9);
                switch(p){
                    case 1:
                        n2 = getRandom(2, 9);
                        n3 = getRandom(2, 9);
                        a = n1 * (n2 + n3);
                        $mondai.innerText = n1 + `×(` + n2 + `＋` + n3 +`)＝`;
                        break;
                    case 2:
                        n2 = getRandom(4, 11);
                        n3 = getRandom(2, n2 - 2);
                        a = n1 * (n2 - n3);
                        $mondai.innerText = n1 + `×(` + n2 + `－` + n3 +`)＝`;
                        break;
                    case 3:
                        n2 = getRandom(2, 9);
                        n3 = getRandom(2, 9);
                        a = n1;
                        $mondai.innerText = n1 * (n2 + n3) + `÷(` + n2 + `＋` + n3 +`)＝`;
                        break;
                    case 4:
                        n2 = getRandom(4, 11);
                        n3 = getRandom(2, n2 - 2);
                        a = n1;
                        $mondai.innerText = n1 * (n2 - n3) + `÷(` + n2 + `－` + n3 +`)＝`;
                        break;
                    default:
                        alert(`リロードして下さい`);
                };
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step5Setup(){
        if (count < mondaiNum){
            if (count < mondaiNum){
                pb = p;
                p = getRandom(1, 2);
                while (p == pb){
                    p = getRandom(1, 2);
                };
                switch(p){
                    case 1:
                        q = getRandom(1, 4);
                        n1 = getRandom(11, 29);
                        switch(q){
                            case 1:
                                n2 = getRandom(2, 9);
                                n3 = getRandom(2, 9);
                                n4 = getRandom(2, 9);
                                r = getRandom(1, 2);
                                if (r == 1){
                                    a = n1 + n2;
                                    $mondai.innerText = n1 + `＋` + n2 * (n3 + n4) + `÷(` + n3 + `＋` + n4 + `)＝`;
                                } else {
                                    a = n1 - n2;
                                    $mondai.innerText = n1 + `－` + n2 * (n3 + n4) + `÷(` + n3 + `＋` + n4 + `)＝`;
                                };
                                break;
                            case 2:
                                n2 = getRandom(2, 9);
                                n3 = getRandom(4, 11);
                                n4 = getRandom(2, n3 - 2);
                                r = getRandom(1, 2);
                                if (r == 1){
                                    a = n1 + n2;
                                    $mondai.innerText = n1 + `＋` + n2 * (n3 - n4) + `÷(` + n3 + `－` + n4 + `)＝`;
                                } else {
                                    a = n1 - n2;
                                    $mondai.innerText = n1 + `－` + n2 * (n3 - n4) + `÷(` + n3 + `－` + n4 + `)＝`;
                                };
                                break;
                            case 3:
                                n2 = getRandom(2, 9);
                                n3 = getRandom(2, 5);
                                n4 = getRandom(2, 5);
                                r = getRandom(1, 2);
                                if (r == 1){
                                    a = n1 + n2 * (n3 + n4);
                                    $mondai.innerText = n1 + `＋` + n2 + `×(` + n3 + `＋` + n4 + `)＝`;
                                } else {
                                    n1 = n2 * (n3 + n4) + getRandom(2, 19);
                                    a = n1 - n2 * (n3 + n4);
                                    $mondai.innerText = n1 + `－` + n2 + `×(` + n3 + `＋` + n4 + `)＝`;
                                };
                                break;
                            case 4:
                                n2 = getRandom(2, 9);
                                n3 = getRandom(4, 11);
                                n4 = getRandom(2, n3 - 2);
                                r = getRandom(1, 2);
                                if (r == 1){
                                    a = n1 + n2 * (n3 - n4);
                                    $mondai.innerText = n1 + `＋` + n2 + `×(` + n3 + `－` + n4 + `)＝`;
                                } else {
                                    a = getRandom(2, 19);
                                    n1 = n2 * (n3 - n4) + a;
                                    $mondai.innerText = n1 + `－` + n2  + `×(` + n3 + `－` + n4 + `)＝`;
                                };
                                break;
                            default:
                                alert(`リロードして下さい`);
                        };
                        break;
                    case 2:
                        q = getRandom(1, 5);
                        switch(q){
                            case 1:
                                n1 = getRandom(2, 8);
                                n2 = getRandom(2, 8);
                                n3 = getRandom(2, 8);
                                n4 = getRandom(2, 8);
                                a = (n1 + n2) * (n3 + n4);
                                $mondai.innerText = `(` + n1 + `＋` + n2 + `)×(`+ n3 + `＋` + n4 + `)＝`;
                                break;
                            case 2:
                                n1 = getRandom(4, 11);
                                n2 = getRandom(2, n1 - 2);
                                n3 = getRandom(2, 9);
                                n4 = getRandom(2, 9);
                                a = (n1 - n2) * (n3 + n4);
                                r = getRandom(1, 2);
                                if (r == 1){
                                    $mondai.innerText = `(` + n1 + `－` + n2 + `)×(`+ n3 + `＋` + n4 + `)＝`;
                                } else {
                                    $mondai.innerText = `(` + n3 + `＋` + n4 + `)×(`+ n1 + `－` + n2 + `)＝`;
                                };
                                break;
                            case 3:
                                n1 = getRandom(4, 11);
                                n2 = getRandom(2, n1 - 2);
                                n3 = getRandom(4, 11);
                                n4 = getRandom(2, n3 - 2);
                                a = (n1 - n2) * (n3 - n4);
                                $mondai.innerText = `(` + n1 + `－` + n2 + `)×(`+ n3 + `－` + n4 + `)＝`;
                                break;
                            case 4:
                                n1 = getRandom(3, 9);
                                n3 = getRandom(4, 9);
                                n1 = n1 * n3;
                                n4 = getRandom(2, n3 - 2);
                                n3 = n3 - n4
                                r = getRandom(1, 2);
                                if (r == 1){
                                    n2 = getRandom(2, n1 - 2);
                                    n1 = n1 - n2;
                                    a = (n1 + n2) / (n3 + n4);
                                    $mondai.innerText = `(` + n1 + `＋` + n2 + `)÷(`+ n3 + `＋` + n4 + `)＝`;
                                } else {
                                    n2 = getRandom(2, 9);
                                    n1 = n1 + n2;
                                    a = (n1 - n2) / (n3 + n4);
                                    $mondai.innerText = `(` + n1 + `－` + n2 + `)÷(`+ n3 + `＋` + n4 + `)＝`;
                                };
                                break;
                            case 5:
                                n1 = getRandom(3, 9);
                                n3 = getRandom(4, 9);
                                n1 = n1 * n3;
                                n4 = getRandom(2, 9);
                                n3 = n3 + n4;
                                r = getRandom(1, 2);
                                if (r == 1){
                                    n2 = getRandom(2, n1 - 2);
                                    n1 = n1 - n2;
                                    a = (n1 + n2) / (n3 - n4);
                                    $mondai.innerText = `(` + n1 + `＋` + n2 + `)÷(`+ n3 + `－` + n4 + `)＝`;
                                } else {
                                    n2 = getRandom(2, 9);
                                    n1 = n1 + n2;
                                    a = (n1 - n2) / (n3 - n4);
                                    $mondai.innerText = `(` + n1 + `－` + n2 + `)÷(`+ n3 + `－` + n4 + `)＝`;
                                };
                                break;
                            default:
                                alert(`リロードして下さい`);
                        };
                        break;
                    default:
                        alert(`リロードして下さい`);
                };
            };
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
    
keisanrule1();