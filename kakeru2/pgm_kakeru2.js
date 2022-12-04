function kakeru2(){
    
    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $kotae1 = document.getElementById("kotae1");
    const $kotae2 = document.getElementById("kotae2");
    const $dot = document.getElementById("dot");
    
    let count = 0;
    let n1 = 0;
    let a1 = 0;
    let a2 = 0;
    
    function defaultlet(){
        count = 0;
        n1 = 0;
        a1 = 0;
        a2 = 0;
        $kotae1.value = "";
        $kotae2.value = "";
        $mondai.innerText = "";
    };

    function switchdisplay(){
        $kotae1.style.display = "inline-block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $step.style.display = "none";
        $startBtn.style.display = "none";
    };

    function defaultdisplay(){
        $kotae1.style.display = "none";
        $dot.innerText = "";
        $kotae2.style.display = "none";
        $eraseBtn.style.display = "none";
        $resetBtn.style.display = "none";
        $step.style.display = "block";
        $startBtn.style.display = "block";
    };

    function closing(){
        audio2.play();
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
            }, 500);
            count++;
            switchSetup($step.value);
        };
    };

    function step1Setup(){
        $kotae2.style.display = "none";
        if (count < 9){
            a1 = 180 * (count + 1);
            $mondai.innerText = 180 + `×` + (count + 1) + `＝`;
        } else if (count = 9){
            closing();
        };
    };

    function step2Setup(){
        $kotae2.style.display = "inline-block";
        $dot.innerText = `.`;
        if (count < 9){
            n1 = 3.14 * (count + 1);
            a1 = Math.floor(n1);
            a2 = Math.round((n1 - a1) * 100);
            if (a2 % 10 == 0){
                a2 = a2 / 10;
            };
            $mondai.innerText = 3.14 + `×` + (count + 1) + `＝`;
        } else if (count = 9){
            closing();
        };
    };

    function step3Setup(){
        $kotae2.style.display = "none";
        if (count < 10){
            n1 = count + 11;
            a1 = n1 * n1;
            $mondai.innerText = n1 + `×` + n1 + `＝`;
        } else if (count = 10){
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
        switchSetup($step.value);
    });
    
    $eraseBtn.addEventListener("click", () => {
        $kotae1.value = "";
        $kotae2.value = "";
    });
    
    $resetBtn.addEventListener("click", () => {
        defaultdisplay();
        defaultlet();
    });
    
};
    
kakeru2();