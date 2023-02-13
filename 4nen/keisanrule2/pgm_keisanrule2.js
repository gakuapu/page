function keisanrule2(){
    
    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai0 = document.getElementById("mondai0");
    const $mondai = document.getElementById("mondai");
    const $kotae = document.getElementById("kotae");
    
    const $progress = document.getElementById("progress");

    let count = 0;
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;
    let t11 = "";
    let t12 = "";
    let t21 = "";
    let t22 = "";
    let a = 0;
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
        n4 = 0;
        t11 = "";
        t12 = "";
        t21 = "";
        t22 = "";
        a = 0;
        p = 0;
        pb = 0;
        q = 0;
        $kotae.value = "";
        $mondai.innerText = "";
    };

    function switchdisplay(){
        $mondai0.style.display = "block";
        $kotae.style.display = "block";
        $progress.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $step.style.display = "none";
        $startBtn.style.display = "none";
    };

    function defaultdisplay(){
        $mondai0.style.display = "none";
        $kotae.style.display = "none";
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
            case "5":
                step5Setup();
                break;    
            default:
                alert(`リロードして下さい`);
        };
    };

    function step1Setup(){
        if (count < mondaiNum){
            pb = n1;
            n1 = getRandom(2, 7) * 10 + getRandom(6, 9);
            while (n1 == pb){
                n1 = getRandom(2, 7) * 10 + getRandom(6, 9);
            };
            n2 = 100 - n1;
            n3 = getRandom(2, 7) * 10 + getRandom(5, 9);
            a = 100 + n3;
            p = getRandom(1, 2);
            switch(p){
                case 1:
                    $mondai.innerText = n1 + `＋` + n3 + `＋` + n2 + `＝`;
                    break;
                case 2:
                    $mondai.innerText = n3 + `＋` + n1 + `＋` + n2 + `＝`;
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
            pb = n1;
            n1 = getRandom(2, 7) * 10 + getRandom(6, 9);
            while (n1 == pb){
                n1 = getRandom(2, 7) * 10 + getRandom(6, 9);
            };
            n2 = getRandom(1, 5) * 100;
            n2 = n2 - n1;
            n3 = getRandom(0, 2) * 100 + getRandom(2, 7) * 10 + getRandom(5, 9);
            a = n1 + n2 + n3;
            p = getRandom(1, 4);
            switch(p){
                case 1:
                    $mondai.innerText = n1 + `＋` + n3 + `＋` + n2 + `＝`;
                    break;
                case 2:
                    $mondai.innerText = n3 + `＋` + n1 + `＋` + n2 + `＝`;
                    break;
                case 3:
                    $mondai.innerText = n2 + `＋` + n3 + `＋` + n1 + `＝`;
                    break;
                case 4:
                    $mondai.innerText = n3 + `＋` + n2 + `＋` + n1 + `＝`;
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
            p = getRandom(1, 3);
            while(p == pb){
                p = getRandom(1, 3);
            };
            switch(p){
                case 1:
                    n1 = 5;
                    n2 = getRandom(1, 3) * 2;
                    n3 = getRandom(0, 1) * 2 + 7;
                    break;
                case 2:
                    n1 = 15;
                    n2 = getRandom(1, 3) * 2;
                    n3 = getRandom(0, 1) * 2 + 7;
                    break;
                case 3:
                    n1 = 25;
                    n2 = 4;
                    n3 = getRandom(1, 4) * 2 + 1;
                    while(n3 % 5 == 0){
                        n3 = getRandom(1, 4) * 2 + 1;
                    };
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            a = n1 * n2 * n3;
            q = getRandom(1, 4);
            switch(q){
                case 1:
                    $mondai.innerText = n1 + `×` + n3 + `×` + n2 + `＝`;
                    break;
                case 2:
                    $mondai.innerText = n3 + `×` + n1 + `×` + n2 + `＝`;
                    break;
                case 3:
                    $mondai.innerText = n3 + `×` + n2 + `×` + n1 + `＝`;
                    break;
                case 4:
                    $mondai.innerText = n2 + `×` + n3 + `×` + n1 + `＝`;
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
            p = getRandom(1, 2);
            while(p == pb){
                p = getRandom(1, 2);
            };
            n1 = getRandom(1, 3) * 10;
            n2 = getRandom(2, 9);
            a = n1 * n2;
            switch(p){
                case 1:
                    n3 = getRandom(2, n1 - 2);
                    n4 = n1 - n3;
                    $mondai.innerText = n3 + `×` + n2 + `＋` + n4 + `×` + n2 + `＝`;
                    break;
                case 2:
                    n4 = getRandom(2, n1 - 2);
                    n3 = n1 + n4;
                    $mondai.innerText = n3 + `×` + n2 + `－` + n4 + `×` + n2 + `＝`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step5Setup(){
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
                    n3 = getRandom(2, n1 - 2);
                    n4 = n1 - n3;
                    t11 = n3 + `×` + n2;
                    t12 = n2 + `×` + n3;
                    t21 = n4 + `×` + n2;
                    t22 = n2 + `×` + n4;
                        switch(q){
                            case 1:
                                $mondai.innerText = t11 + `＋` + t21 + `＝`;
                                break;
                            case 2:
                                $mondai.innerText = t12 + `＋` + t21 + `＝`;
                                break;
                            case 3:
                                $mondai.innerText = t11 + `＋` + t22 + `＝`;
                                break;
                            case 4:
                                $mondai.innerText = t12 + `＋` + t22 + `＝`;
                                break;
                            default:
                                alert(`リロードして下さい`);
                        };
                    break;
                case 2:
                    n4 = getRandom(2, n1 - 2);
                    n3 = n1 + n4;
                    t11 = n3 + `×` + n2;
                    t12 = n2 + `×` + n3;
                    t21 = n4 + `×` + n2;
                    t22 = n2 + `×` + n4;
                        switch(q){
                            case 1:
                                $mondai.innerText = t11 + `－` + t21 + `＝`;
                                break;
                            case 2:
                                $mondai.innerText = t12 + `－` + t21 + `＝`;
                                break;
                            case 3:
                                $mondai.innerText = t11 + `－` + t22 + `＝`;
                                break;
                            case 4:
                                $mondai.innerText = t12 + `－` + t22 + `＝`;
                                break;
                            default:
                                alert(`リロードして下さい`);
                        };
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
    
keisanrule2();