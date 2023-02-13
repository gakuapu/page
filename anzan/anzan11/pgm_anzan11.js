function anzan11(){
    
    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $hintBtn = document.getElementById("hint-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $hint = document.getElementById("hint");
    const $kotae = document.getElementById("kotae");
    
    const $progress = document.getElementById("progress");
    
    let count = 0;
    let n1 = 0;
    let n12 = 0;
    let n2 = 0;
    let n22 = 0;
    let a = 0;
    let ab = 0;
    let p = 0;
    let pb = 0;
    let p2 = 0;
    let p2b = 0;
    let mondaiNum = 10;
    
    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };
    
    function defaultlet(){
        count = 0;
        n1 = 0;
        n12 = 0;
        n2 = 0;
        n22 = 0;
        a = 0;
        ab = 0;
        p = 0;
        pb = 0;
        p2 = 0;
        p2b = 0;
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
        $hintBtn.style.display = "block";
    };

    function defaultdisplay(){
        $kotae.style.display = "none";
        $progress.style.display = "none";
        $eraseBtn.style.display = "none";
        $resetBtn.style.display = "none";
        $startBtn.style.display = "block";
        $step.style.display = "block";
        $hintBtn.style.display = "none";
    };

    function closing(){
        audio2.play();
        $progress.value = 1;
        defaultdisplay();
        defaultlet();
        alert(`クリアしました`);
    };

    function switchSetup(stepValue){
        $hintBtn.style.display = "block";
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
            ab = n1;
            n1 = getRandom(3, 9) * (10 ** getRandom(1, 2));
            while (n1 == ab){
                n1 = getRandom(3, 9) * (10 ** getRandom(1, 2));
            };
            n12 = getRandom(1, 2);
            n2 = getRandom(10, 49) * 10 + getRandom(4, 6);
            a = n1 - n12 + n2;
            $mondai.innerText = (n1 - n12) + `＋` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        if (count < mondaiNum){
            ab = a;
            n1 = getRandom(2, 5) * 100;
            n12 = getRandom(1, 3);
            n2 = getRandom(2, 5) * 100;
            n22 = getRandom(1, 3);
            a = n1 - n12 + n2 - n22;
            while (a == ab){
                n1 = getRandom(1, 5) * 10;
                n12 = getRandom(1, 3);
                n2 = getRandom(1, 5) * 10;
                n22 = getRandom(1, 3);
                a = n1 - n12 + n2 - n22;
            };
            $mondai.innerText = (n1 - n12) + `＋` + (n2 - n22) + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step3Setup(){
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            n2 = getRandom(3, 9);
            n1 = getRandom(1, 2) * 100 + getRandom(1, n2 - 2) * 10;
            n2 = n2 * 10;
            n22 = getRandom(1, 3);
            switch(p){
                case 1:
                    a = n1 - (n2 - n22);
                    $mondai.innerText = n1 + `－` + (n2 - n22) + `＝`;
                    break;
                case 2:
                    a = n1 - (n2 + n22);
                    $mondai.innerText = n1 + `－` + (n2 + n22) + `＝`;
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
            pb = p;
            p = getRandom(1, 4);
            while (p == pb){
                p = getRandom(1, 4);
            };
            n1 = getRandom(5, 9);
            n2 = getRandom(3, n1 - 2);
            n1 = n1 * 100;
            n2 = n2 * 100;
            n22 = getRandom(1, 3);
            if (p == 1){
                a = n1 - (n2 - n22);
                $mondai.innerText = n1 + `－` + (n2 - n22) + `＝`;
            } else if (p == 2){
                a = n1 - (n2 + n22);
                $mondai.innerText = n1 + `－` + (n2 + n22) + `＝`;
            } else {
                n12 = getRandom(1, 3);
                a = (n1 + n12) - (n2 - n22);
                $mondai.innerText = (n1 + n12) + `－` + (n2 - n22) + `＝`;
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step5Setup(){
        if (count < mondaiNum){
            $hintBtn.style.display = "none";
            $hint.innerText = "工夫して暗算で解こう"
            p2b = p2;
            p2 = getRandom(1, 4);
            while (p2 == p2b){
                p2 = getRandom(1, 4);
            };
            switch(p2){
                case 1:
                    step1Setup();
                    break;
                case 2:
                    step2Setup();
                    break;
                case 3:
                    step3Setup();
                    break;
                case 4:
                    step4Setup();
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
            $hint.innerText = "";
            setTimeout(() => {
                audio1.play();
                $kotae.value = "";
                $progress.value = count / mondaiNum;
            }, 500);
            count++;
            switchSetup($step.value);
        };
    });
    
    $hintBtn.addEventListener("click", () => {
        switch($step.value){
            case "1":
                $hint.innerText = n1 + `＋` + n2 + `は... そこから` + n12 + `少ない`;
                break;
            case "2":
                $hint.innerText = n1 + `＋` + n2 + `は... そこから` + n12 + `と` + n22 + `少ない`;
                break;
            case "3":
                $hint.innerText = n1 + `－` + n2 + `は... そこから` + n22 + `の`;
                break;
            case "4":
                if (p == 3){
                    $hint.innerText = n1 + `－` + n2 + `は... そこから` + n12 + `と` + n22 + `多くなる`;
                } else {
                    $hint.innerText = n1 + `－` + n2 + `は... そこから` + n22 + `の`;
                };
                break;
            default:
                alert(`リロードして下さい`);
        };
        $hint.innerText += `分を調整するには...`;
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
    
anzan11();