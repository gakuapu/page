function menseki2(){
    
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
        $kotae.value = "";
        $hint.innerText = "";
        $mondai.innerText = "";
        $unit.innerText = "";
    };

    function switchdisplay(){
        $kotae.style.display = "inline-block";
        $checkBtn.style.display = "block";
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
            default:
                alert(`リロードして下さい`);
        };
    };

    function step1Setup(){
        if (count < mondaiNum){
            $hintBtn.style.display = "block";
            pb = p;
            p = getRandom(1, 8);
            while (p == pb){
                p = getRandom(1, 8);
            };
            switch(p){
                case 1:
                    n1 = getRandom(1, 8) * 500;
                    a = n1 / 100;
                    $mondai.innerText = n1 + `㎡ ＝`;
                    $unit.innerText = `a`;
                    break;
                case 2:
                    n1 = getRandom(1, 8) * 5;
                    a = n1 * 100;
                    $mondai.innerText = n1 + `a ＝`;
                    $unit.innerText = `㎡`;
                    break;
                case 3:
                    n1 = getRandom(1, 8) * 50000;
                    a = n1 / 10000;
                    $mondai.innerText = n1 + `㎡ ＝`;
                    $unit.innerText = `ha`;
                    break;
                case 4:
                    n1 = getRandom(1, 8) * 5;
                    a = n1 * 10000;
                    $mondai.innerText = n1 + `ha ＝`;
                    $unit.innerText = `㎡`;
                    break;
                case 5:
                    n1 = getRandom(1, 8) * 5;
                    a = n1 * 100;
                    $mondai.innerText = n1 + `㎢ ＝`;
                    $unit.innerText = `ha`;
                    break;
                case 6:
                    n1 = getRandom(1, 8) * 500;
                    a = n1 / 100;
                    $mondai.innerText = n1 + `ha ＝`;
                    $unit.innerText = `㎢`;
                    break;
                case 7:
                    n1 = getRandom(1, 8) * 500;
                    a = n1 / 100;
                    $mondai.innerText = n1 + `a ＝`;
                    $unit.innerText = `ha`;
                    break;
                case 8:
                    n1 = getRandom(1, 8) * 5;
                    a = n1 * 100;
                    $mondai.innerText = n1 + `ha ＝`;
                    $unit.innerText = `a`;
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
            $hintBtn.style.display = "block";
            pb = p;
            p = getRandom(1, 6);
            while (p == pb){
                p = getRandom(1, 6);
            };
            switch(p){
                case 1:
                    n1 = getRandom(2, 9) * (10 ** getRandom(1, 2));
                    n2 = getRandom(2, 9) * (10 ** getRandom(1, 2));
                        while (n1 == n2){
                            n2 = getRandom(2, 10) * (10 ** getRandom(1, 2));
                        };
                    a = n1 * n2 / 100;
                    $mondai.innerText = `たて` + n1 + `m、横` + n2 + `mの長方形の土地の面積は?`;
                    $unit.innerText = `a`;
                    break;
                case 2:
                    n1 = getRandom(2, 9) * (10 ** getRandom(2, 3));
                    n2 = getRandom(2, 9) * (10 ** getRandom(2, 3));
                        while (n1 == n2){
                            n2 = getRandom(2, 9) * (10 ** getRandom(2, 3));
                        };
                    a = n1 * n2 / 10000;
                    $mondai.innerText = `たて` + n1 + `m、横` + n2 + `mの長方形の土地の面積は?`;
                    $unit.innerText = `ha`;
                    break;
                case 3:
                    n1 = getRandom(2, 9);
                    n2 = getRandom(2, 9);
                        while (n1 == n2){
                            n2 = getRandom(2, 9);
                        };
                    a = n1 * n2 * 100;
                    $mondai.innerText = `たて` + n1 + `km、横` + n2 + `kmの長方形の土地の面積は?`;
                    $unit.innerText = `ha`;
                    break;
                case 4:
                    n1 = getRandom(2, 9) * (10 ** getRandom(1, 2));
                    a = n1 * n1 / 100;
                    $mondai.innerText = `一辺が` + n1 + `mの正方形の土地の面積は?`;
                    $unit.innerText = `a`;
                    break;
                case 5:
                    n1 = getRandom(2, 9) * (10 ** getRandom(2, 3));
                    a = n1 * n1 / 10000;
                    $mondai.innerText = `一辺が` + n1 + `mの正方形の土地の面積は?`;
                    $unit.innerText = `ha`;
                    break;
                case 6:
                    n1 = getRandom(2, 10);
                    a = n1 * n1 * 100;
                    $mondai.innerText = `一辺が` + n1 + `kmの正方形の土地の面積は?`;
                    $unit.innerText = `ha`;
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
            $hintBtn.style.display = "block";
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            n1 = getRandom(2, 9);
            n2 = getRandom(2, 9) * (10 ** getRandom(1, 2));
            switch(p){
                case 1:
                    a = n1 * n2 * 1000 / 100;
                    $unit.innerText = `a`;
                    break;
                case 2:
                    a = n1 * n2 * 1000 / 10000;
                    $unit.innerText = `ha`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };    
            q = getRandom(1, 2);
            if (q == 1){
                $mondai.innerText = `たて` + n1 + `km、横` + n2 + `mの長方形の土地の面積は?`;
            } else {
                $mondai.innerText = `たて` + n2 + `m、横` + n1 + `kmの長方形の土地の面積は?`;
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

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
        $hint.innerText = `1a=10m×10m=100㎡、1ha=100m×100m=10000㎡`;
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
    
menseki2();