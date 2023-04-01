function zukei5(){
    
    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $kotae = document.getElementById("kotae");
    
    const $progress = document.getElementById("progress");
    
    let count = 0;
    let n = 0;
    let nb = 0;
    let a = 0;
    let nt = "";
    let mondaiNum = 8;
    
    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };
    
    function defaultlet(){
        count = 0;
        n = 0;
        nb = 0;
        a = 0;
        p = 0;
        $kotae.value = "";
        $mondai.innerText = "";
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
            default:
                alert(`リロードして下さい`);
        };
    };

    function checkAnswer(){
        if ($kotae.value == a) {
            setTimeout(() => {
                audio1.play();
                $kotae.value = "";
                $progress.value = count / mondaiNum;
            }, 500);
            count++;
            switchSetup($step.value);
        };
    };

    function nConvertText(n){
        switch(n){
            case 3:
                nt = "三";
                break;
            case 4:
                nt = "四";
                break;
            case 5:
                nt = "五";
                break;
            case 6:
                nt = "六";
                break;
            case 7:
                nt = "七";
                break;
            case 8:
                nt = "八";
                break;
            case 9:
                nt = "九";
                break;
            default:
                alert(`リロードして下さい`);
        };
    };

    function step1Setup(){
        if (count < mondaiNum){
            nb = n;
            n = getRandom(3, 9);
            while (n == nb){
                n = getRandom(3, 9);
            };
            nConvertText(n);
            a = n + 2;
            $mondai.innerText = nt + `角柱の面の数は?`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        if (count < mondaiNum){
            nb = n;
            n = getRandom(3, 9);
            while (n == nb){
                n = getRandom(3, 9);
            };
            nConvertText(n);
            a = n * 2;
            $mondai.innerText = nt + `角柱の頂点の数は?`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step3Setup(){
        if (count < mondaiNum){
            nb = n;
            n = getRandom(3, 9);
            while (n == nb){
                n = getRandom(3, 9);
            };
            nConvertText(n);
            a = n * 3;
            $mondai.innerText = nt + `角柱の辺の数は?`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step4Setup(){
        if (count < mondaiNum){
            nb = p;
            p = getRandom(1, 3);
            while (p == nb){
                p = getRandom(1, 3);
            };
            n = getRandom(3, 9);
            nConvertText(n);
            switch (p) {
                case 1:
                    a = n + 2;
                    $mondai.innerText = nt + `角柱の面の数は?`;
                    break;
                case 2:
                    a = n * 2;
                    $mondai.innerText = nt + `角柱の頂点の数は?`;
                    break;
                case 3:
                    a = n * 3;
                    $mondai.innerText = nt + `角柱の辺の数は?`;
                    break;
                default:
                    alert (`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    $kotae.addEventListener("input", () => {
        checkAnswer();
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
    
zukei5();