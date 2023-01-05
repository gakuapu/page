function anzan13(){
    
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
    let n = 0;
    let nb = 0;
    let n1 = [];
    let p = 0;
    let a = 0;
    let mondaiNum = 10;
    
    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };
    
    function defaultlet(){
        count = 0;
        n = 0;
        nb = 0;
        n1.length = 0;
        p = 0;
        a = 0;
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
        $hintBtn.style.display = "block";
    };

    function defaultdisplay(){
        $kotae.style.display = "none";
        $progress.style.display = "none";
        $eraseBtn.style.display = "none";
        $resetBtn.style.display = "none";
        $startBtn.style.display = "block";
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

    function step1Setup(){
        if (count < mondaiNum){
            nb = n;
            n = getRandom(1, 3) * 10;
            while (n == nb){
                n = getRandom(1, 3) * 10;
            };
            a = n * 3;
            for (let i = 0; i < 3; i++){
                p = Math.random(0, 1);
                if (p > 0.5){
                    p = 1;
                } else {
                    p = -1;
                };
                n1[i] = p * getRandom(1, 3);
                a = a + n1[i];
            };
            $mondai.innerText = (n + n1[0]) + `＋` + (n + n1[1]) + `＋` + (n + n1[2]) + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        if (count < mondaiNum){
            nb = n;
            n = getRandom(5, 10) * 10;
            while (n == nb){
                n = getRandom(5, 10) * 10;
            };
            a = n * 5;
            for (let i = 0; i < 5; i++){
                p = Math.random(0, 1);
                if (p > 0.5){
                    p = 1;
                } else {
                    p = -1;
                };
                n1[i] = p * getRandom(1, 9);
                a = a + n1[i];
            };
            $mondai.innerText = (n + n1[0]) + `＋` + (n + n1[1]) + `＋` + (n + n1[2]) + `＋` + (n + n1[3]) + `＋` + (n + n1[4]) + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    $kotae.addEventListener("input", () => {
        if ($kotae.value == a){
            setTimeout(() => {
                audio1.play();
                $kotae.value = "";
                $hint.innerText = "";
                $progress.value = count / mondaiNum;
            }, 500);
            count++;
            switchSetup($step.value);
        };
    });
    
    $hintBtn.addEventListener("click", () => {
        $hint.innerText = n + `を基準にすると...`;
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
    
anzan13();