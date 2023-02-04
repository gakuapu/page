function menseki1(){
    
    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $hintBtn = document.getElementById("hint-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $unit = document.getElementById("unit");
    const $hint = document.getElementById("hint");
    const $kotae = document.getElementById("kotae");
    const $checkBtn = document.getElementById("check-btn");
    
    const $progress = document.getElementById("progress");
    
    let count = 0;
    let n1 = 0;
    let n2 = 0;
    let a = 0;
    let p = 0; //パターン
    let pb = 0; //前問のパターン
    let q = 0;
    let u1 = "";
    let u2 = "";
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
        p = 0;
        pb = 0;
        q = 0;
        u1 = "";
        u2 = "";
        $kotae.value = "";
        $hint.innerText = "";
        $mondai.innerText = "";
        $unit.innerText = "";
    };

    function switchdisplay(){
        $kotae.style.display = "inline-block";
        $progress.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $step.style.display = "none";
        $startBtn.style.display = "none";
    };

    function defaultdisplay(){
        $hintBtn.style.display = "none";
        $kotae.style.display = "none";
        $checkBtn.style.display = "none";
        $progress.style.display = "none";
        $eraseBtn.style.display = "none";
        $resetBtn.style.display = "none";
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
            switch(p){
                case 1:
                    n1 = getRandom(2, 10);
                    n2 = getRandom(2, 10);
                    while (n1 == n2){
                        n2 = getRandom(2, 10);
                    };
                    a = n1 * n2;
                    q = getRandom(1, 3);
                    switch(q){
                        case 1:
                            u1 = `cm、横`;
                            u2 = `cmの長方形`;
                            $unit.innerText = `㎠`;
                            break;
                        case 2:
                            u1 = `m、横`;
                            u2 = `mの長方形の土地`;
                            $unit.innerText = `㎡`;
                            break;
                        case 3:
                            u1 = `km、横`;
                            u2 = `kmの長方形の土地`;
                            $unit.innerText = `㎢`;
                            break;
                        default:
                            alert(`リロードして下さい`);
                    };
                    $mondai.innerText = `たて` + n1 + u1 + n2 + u2 + `の面積は?`;
                    break;
                case 2:
                    n1 = getRandom(2, 10);
                    a = n1 * n1;
                    q = getRandom(1, 3);
                    switch(q){
                        case 1:
                            u1 = `cmの正方形`;
                            $unit.innerText = `㎠`;
                            break;
                        case 2:
                            u1 = `mの正方形の土地`;
                            $unit.innerText = `㎡`;
                            break;
                        case 3:
                            u1 = `kmの正方形の土地`;
                            $unit.innerText = `㎢`;
                            break;
                        default:
                            alert(`リロードして下さい`);
                    };
                    $mondai.innerText = `一辺が` + n1 + u1 + `の面積は?`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            switch(p){
                case 1:
                    n1 = getRandom(2, 10);
                    a = getRandom(2, 10);
                    while (n1 == a){
                        a = getRandom(2, 10);
                    };
                    n2 = n1 * a;
                    q = getRandom(1, 3);
                    switch(q){
                        case 1:
                            u1 = `cm`;
                            u2 = `㎠の長方形`;
                            $unit.innerText = `cm`;
                            break;
                        case 2:
                            u1 = `m`;
                            u2 = `㎡の長方形の土地`;
                            $unit.innerText = `m`;
                            break;
                        case 3:
                            u1 = `km`;
                            u2 = `㎢の長方形の土地`;
                            $unit.innerText = `km`;
                            break;
                        default:
                            alert(`リロードして下さい`);
                    };
                    $mondai.innerText = `横の長さが` + n1 + u1 +`で、面積が` + n2 + u2 + `のたての長さは?`;
                    break;
                case 2:
                    a = getRandom(2, 10);
                    n2 = a * a;
                    q = getRandom(1, 3);
                    switch(q){
                        case 1:
                            u1 = `㎠の正方形`;
                            $unit.innerText = `cm`;
                            break;
                        case 2:
                            u1 = `㎡の正方形の土地`;
                            $unit.innerText = `m`;
                            break;
                        case 3:
                            u1 = `㎢の正方形の土地`;
                            $unit.innerText = `km`;
                            break;
                        default:
                            alert(`リロードして下さい`);
                    };
                    $mondai.innerText = `面積が` + n2 + u1 + `の一辺の長さは?`;
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
            $checkBtn.style.display = "block";
            $hintBtn.style.display = "block";
            pb = p;
            p = getRandom(1, 4);
            while (p == pb){
                p = getRandom(1, 4);
            };
            switch(p){
                case 1:
                    n1 = getRandom(1, 8) * 50000;
                    a = n1 / 10000;
                    $mondai.innerText = n1 + `㎠ ＝`;
                    $unit.innerText = `㎡`;
                    break;
                case 2:
                    n1 = getRandom(1, 8) * 5;
                    a = n1 * 10000;
                    $mondai.innerText = n1 + `㎡ ＝`;
                    $unit.innerText = `㎠`;
                    break;
                case 3:
                    n1 = getRandom(1, 8) * 5 * 1000000;
                    a = n1 / 1000000;
                    $mondai.innerText = n1 + `㎡ ＝`;
                    $unit.innerText = `㎢`;
                    break;
                case 4:
                    n1 = getRandom(1, 8) * 5;
                    a = n1 * 1000000;
                    $mondai.innerText = n1 + `㎢ ＝`;
                    $unit.innerText = `㎡`;
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
            $checkBtn.style.display = "block";
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            switch(p){
                case 1:
                    n1 = getRandom(2, 9);
                    n2 = getRandom(2, 9) * 10;
                    a = n1 * n2 * 100;
                    q = getRandom(1, 2);
                    if (q == 1){
                        $mondai.innerText = `たて` + n1 + `m、横` + n2 + `cmの長方形の面積は?`;
                    } else {
                        $mondai.innerText = `たて` + n2 + `cm、横` + n1 + `mの長方形の面積は?`;
                    };
                    $unit.innerText = `㎠`;
                    break;
                case 2:
                    n1 = getRandom(2, 9);
                    n2 = getRandom(2, 9) * (10 ** getRandom(1, 2));
                    a = n1 * n2 * 1000;
                    q = getRandom(1, 2);
                    if (q == 1){
                        $mondai.innerText = `たて` + n1 + `km、横` + n2 + `mの長方形の土地の面積は?`;
                    } else {
                        $mondai.innerText = `たて` + n2 + `m、横` + n1 + `kmの長方形の土地の面積は?`;
                    };
                    $unit.innerText = `㎡`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    $kotae.addEventListener("input", () => {
        if ($kotae.value == a){
            if ($step.value == 1 || $step.value == 2){
                setTimeout(() => {
                    audio1.play();
                    $kotae.value = "";
                    $progress.value = count / mondaiNum;
                }, 500);
                count++;
                switchSetup($step.value);
            };
        };
    });

    $checkBtn.addEventListener("click", () => {
        if ($kotae.value == a){
            $hint.innerText = "";
            setTimeout(() => {
                audio1.play();
                $kotae.value = "";
                $progress.value = count / mondaiNum;
            }, 500);
            count++;
            switchSetup($step.value);
        } else {
            setTimeout(() => {
                audio3.play();
            }, 500);
        };
    });

    $hintBtn.addEventListener("click", () => {
        $hint.innerText = `1㎡=10000㎠、1㎢=1000000㎡`;
        $hintBtn.style.display = "none";
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
    
menseki1();