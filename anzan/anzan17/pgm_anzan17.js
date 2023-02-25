function anzan17(){
    
    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $hint = document.getElementById("hint");
    const $kotae = document.getElementById("kotae");
    
    const $progress = document.getElementById("progress");
    
    let count = 0;
    let n1 = 0;
    let n11 = 0;
    let n12 = 0;
    let n2 = 0;
    let n21 = 0;
    let n22 = 0;
    let a = 0;
    let p = 0;
    let pb = 0;
    let q = 0;
    let t11 = "";
    let t12 = "";
    let t21 = "";
    let t22 = "";
    let t31 = "";
    let t32 = "";
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
        n21 = 0;
        n22 = 0;
        a = 0;
        p = 0;
        pb = 0;
        q = 0;
        t11 = "";
        t12 = "";
        t21 = "";
        t22 = "";
        t31 = "";
        t32 = "";
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
        $hint.style.display = "block";
    };

    function defaultdisplay(){
        $kotae.style.display = "none";
        $progress.style.display = "none";
        $eraseBtn.style.display = "none";
        $resetBtn.style.display = "none";
        $startBtn.style.display = "block";
        $step.style.display = "block";
        $hint.style.display = "none";
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
            while(p == pb){
                p = getRandom(1, 2);
            };
            n1 = getRandom(1, 3) * 10;
            n2 = getRandom(2, 9);
            a = n1 * n2;
            switch(p){
                case 1:
                    n11 = getRandom(2, n1 - 2);
                    n12 = n1 - n11;
                    $mondai.innerText = n11 + `×` + n2 + `＋` + n12 + `×` + n2 + `＝`;
                    break;
                case 2:
                    n12 = getRandom(2, n1 - 2);
                    n11 = n1 + n12;
                    $mondai.innerText = n11 + `×` + n2 + `－` + n12 + `×` + n2 + `＝`;
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
            while(p == pb){
                p = getRandom(1, 2);
            };
            n1 = getRandom(1, 3) * 10;
            n2 = getRandom(2, 9);
            a = n1 * n2;
            q = getRandom(1, 4);
            switch(p){
                case 1:
                    n11 = getRandom(2, n1 - 2);
                    n12 = n1 - n11;
                    t11 = n11 + `×` + n2;
                    t12 = n2 + `×` + n11;
                    t21 = n12 + `×` + n2;
                    t22 = n2 + `×` + n12;
                        switch(q){
                            case 1:
                                $mondai.innerText = t11 + `＋` + t21;
                                break;
                            case 2:
                                $mondai.innerText = t12 + `＋` + t21;
                                break;
                            case 3:
                                $mondai.innerText = t11 + `＋` + t22;
                                break;
                            case 4:
                                $mondai.innerText = t12 + `＋` + t22;
                                break;
                            default:
                                alert(`リロードして下さい`);
                        };
                    break;
                case 2:
                    n12 = getRandom(2, n1 - 2);
                    n11 = n1 + n12;
                    t11 = n11 + `×` + n2;
                    t12 = n2 + `×` + n11;
                    t21 = n12 + `×` + n2;
                    t22 = n2 + `×` + n12;
                        switch(q){
                            case 1:
                                $mondai.innerText = t11 + `－` + t21;
                                break;
                            case 2:
                                $mondai.innerText = t12 + `－` + t21;
                                break;
                            case 3:
                                $mondai.innerText = t11 + `－` + t22;
                                break;
                            case 4:
                                $mondai.innerText = t12 + `－` + t22;
                                break;
                            default:
                                alert(`リロードして下さい`);
                        };
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            $mondai.innerText += `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step3Setup(){
        if (count < mondaiNum){
            pb = n1;
            n1 = getRandom(2, 5) * 10;
            while(n1 == pb){
                n1 = getRandom(2, 5) * 10;
            };
            n1 = getRandom(2, 5) * 10;
            n2 = getRandom(6, 15);
            n11 = getRandom(2, n1 - 2);
            n12 = n1 - n11;
            n21 = getRandom(2, n2 - 2);
            n22 = n2 - n21;
            a = n1 * n2;
            $mondai.innerText = n11 + `×` + n21 + `＋` + n11 + `×` + n22 + `＋` + n12 + `×` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step4Setup(){
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 3);
            while(p == pb){
                p = getRandom(1, 3);
            };
            n1 = getRandom(2, 5) * 10;
            n2 = getRandom(6, 15);
            n11 = getRandom(2, n1 - 2);
            n12 = n1 - n11;
            n21 = getRandom(2, n2 - 2);
            n22 = n2 - n21;
            a = n1 * n2;
            t11 = n11 + `×` + n21;
            t12 = n21 + `×` + n11;
            t21 = n11 + `×` + n22;
            t22 = n22 + `×` + n11;
            t31 = n12 + `×` + n2;
            t32 = n2 + `×` + n12;
            switch(p){
                case 1:
                    q = getRandom(1, 2);
                    if(q == 1){
                        $mondai.innerText = t11;
                    } else {
                        $mondai.innerText = t12;
                    };
                    q = getRandom(1, 2);
                    if(q == 1){
                        $mondai.innerText += `＋` + t21;
                    } else {
                        $mondai.innerText += `＋` + t22;
                    };
                    q = getRandom(1, 2);
                    if(q == 1){
                        $mondai.innerText += `＋` + t31;
                    } else {
                        $mondai.innerText += `＋` + t32;
                    };
                    break;
                case 2:
                    q = getRandom(1, 2);
                    if(q == 1){
                        $mondai.innerText = t11;
                    } else {
                        $mondai.innerText = t12;
                    };
                    q = getRandom(1, 2);
                    if(q == 1){
                        $mondai.innerText += `＋` + t31;
                    } else {
                        $mondai.innerText += `＋` + t32;
                    };
                    q = getRandom(1, 2);
                    if(q == 1){
                        $mondai.innerText += `＋` + t21;
                    } else {
                        $mondai.innerText += `＋` + t22;
                    };
                    break;
                case 3:
                    q = getRandom(1, 2);
                    if(q == 1){
                        $mondai.innerText = t31;
                    } else {
                        $mondai.innerText = t32;
                    };
                    q = getRandom(1, 2);
                    if(q == 1){
                        $mondai.innerText += `＋` + t11;
                    } else {
                        $mondai.innerText += `＋` + t12;
                    };
                    q = getRandom(1, 2);
                    if(q == 1){
                        $mondai.innerText += `＋` + t21;
                    } else {
                        $mondai.innerText += `＋` + t22;
                    };
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            $mondai.innerText += `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    $kotae.addEventListener("input", () => {
        if ($kotae.value == a){
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
    
anzan17();