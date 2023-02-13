function anzan12(){
    
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
    let a = 0;
    let ab = 0;
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
        a = 0;
        ab = 0;
        $kotae.value = "";
        $mondai.innerText = "";
        $hint.innerText = "";
    };

    function switchdisplay(){
        $kotae.style.display = "block";
        $progress.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $step.style.display = "none";
        $startBtn.style.display = "none";
        $hintBtn.style.display = "block";
    };

    function defaultdisplay(){
        $kotae.style.display = "none";
        $progress.style.display = "none";
        $eraseBtn.style.display = "none";
        $resetBtn.style.display = "none";
        $step.style.display = "block";
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
            $hintBtn.style.display = "block";
            ab = a;
            n1 = getRandom(3, 9) * 10;
            n2 = getRandom(3, 9);
            a = (n1 - 1) * n2;
            while (a == ab){
                n1 = getRandom(3, 9) * 10;
                n2 = getRandom(3, 9);
                a = (n1 - 1) * n2;
            };
            $mondai.innerText = (n1 - 1) + `×` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        if (count < mondaiNum){
            $hintBtn.style.display = "block";
            ab = a;
            n1 = getRandom(2, 9) * 100;
            n12 = getRandom(1, 2);
            n2 = getRandom(3, 9);
            a = (n1 - n12) * n2;
            while (a == ab){
                n1 = getRandom(2, 9) * 100;
                n12 = getRandom(1, 2);
                n2 = getRandom(3, 9);
                a = (n1 - n12) * n2;
            };
            $mondai.innerText = (n1 - n12) + `×` + n2 + `＝`;
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
                $hint.innerText = n1 + `×` + n2 + `は... そこから` + n2 + `を調整するには...`;
                break;
            case "2":
                $hint.innerText = n1 + `×` + n2 + `は... そこから` + n12 + `×` + n2 + `を調整するには...`;
                break;
            default:
                alert(`リロードして下さい`);
        };
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
    
anzan12();