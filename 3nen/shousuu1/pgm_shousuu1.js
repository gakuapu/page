function shousuu1(){
    
    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $kotae1 = document.getElementById("kotae1");
    const $kotae2 = document.getElementById("kotae2");
    const $dot = document.getElementById("dot");
    
    const $progress = document.getElementById("progress");
    
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
        $mondai.innerText = "";
    };

    function switchdisplay(){
        $kotae1.style.display = "inline-block";
        $dot.innerText = `.`;
        $kotae2.style.display = "inline-block";
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

    function checkAnswer(){
        if ($kotae1.value == a1 && $kotae2.value == a2){
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
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            switch(p){
                case 1:
                    a2 = getRandom(2, 9);
                    n1 = getRandom(1, a2 - 1);
                    n2 = (a2 - n1) / 10;
                    n1 = n1 / 10;
                    a1 = 0;
                    $mondai.innerText = n1 + `＋` + n2 + `＝`;
                    break;
                case 2:
                    n1 = getRandom(2, 9);
                    a2 = getRandom(1, n1 - 1);
                    n2 = (n1 - a2) / 10;
                    n1 = n1 / 10;
                    a1 = 0;
                    $mondai.innerText = n1 + `－` + n2 + `＝`;
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
                    a1 = getRandom(1, 9);
                    a2 = getRandom(2, 9);
                    n1 = getRandom(0, a1);
                    n3 = getRandom(1, a2);
                        while (n1 == a1 && n3 == a2){
                            n1 = getRandom(0, a1);
                            n3 = getRandom(1, a2);
                        };
                    n2 = (a1 * 10 + a2 - (n1 * 10 + n3)) / 10;
                    n1 = n1 + n3 / 10;
                    $mondai.innerText = n1 + `＋` + n2 + `＝`;
                    break;
                case 2:
                    n1 = getRandom(1, 9);
                    n3 = getRandom(2, 9);
                    a1 = getRandom(0, n1);
                    a2 = getRandom(1, n3 - 1);
                    n2 = (n1 * 10 + n3 - (a1 * 10 + a2)) / 10;
                    n1 = n1 + n3 / 10;
                    $mondai.innerText = n1 + `－` + n2 + `＝`;
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
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            switch(p){
                case 1:
                    n3 = getRandom(2, 9);
                    a2 = getRandom(1, n3 - 1);
                    a1 = getRandom(1, 9);
                    n1 = getRandom(0, a1 - 1);
                    n2 = (a1 * 10 + a2 - (n1 * 10 + n3)) / 10;
                    n1 = n1 + n3 / 10;
                    $mondai.innerText = n1 + `＋` + n2 + `＝`;
                    break;
                case 2:
                    a2 = getRandom(2, 9);
                    n3 = getRandom(0, a2 - 1);
                    a1 = getRandom(0, 8);
                    n1 = getRandom(a1 + 1, 9);
                    n2 = (n1 * 10 + n3 - (a1 * 10 + a2)) / 10;
                    n1 = n1 + n3 / 10;
                    $mondai.innerText = n1 + `－` + n2 + `＝`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
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
    
shousuu1();