function waru1(){
    
    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $kotae1 = document.getElementById("kotae1");
    const $kotae2 = document.getElementById("kotae2");
    const $amariTxt = document.getElementById("amaritxt");
    
    const $progress = document.getElementById("progress");
    
    let count = 0;
    let n1 = 0;
    let n2 = 0;
    let a1 = 0;
    let a2 = 0;
    let ab = 0;
    let mondaiNum = 15;
    
    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };
    
    function defaultlet(){
        count = 0;
        n1 = 0;
        n2 = 0;
        a1 = 0;
        a2 = 0;
        ab = 0;
        $kotae1.value = "";
        $kotae2.value = "";
        $amariTxt.innerText = "";
        $mondai.innerText = "";
    };

    function switchdisplay(){
        $kotae1.style.display = "inline-block";
        $progress.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $step.style.display = "none";
        $startBtn.style.display = "none";
    };

    function switchdisplay2(){
        $kotae2.style.display = "inline-block";
        $amariTxt.innerText = `あまり`;
    };

    function defaultdisplay(){
        $kotae1.style.display = "none";
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
            case "4":
                step4Setup();
                break;
            case "5":
                step5Setup();
                break;
            case "6":
                step6Setup();
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
            ab = a1;
            n1 = getRandom(2, 9);
            a1 = getRandom(2, 9);
            while (a1 == ab){
                n1 = getRandom(2, 9);
                a1 = getRandom(2, 9);
            };
            n2 = n1 * a1;
            $mondai.innerText = n1 + `×□＝` +  n2;
        } else if (count = mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        if (count < mondaiNum){
            ab = a1;
            n1 = getRandom(2, 9);
            a1 = getRandom(2, 9);
            while (a1 == ab){
                n1 = getRandom(2, 9);
                a1 = getRandom(2, 9);
            };
            n2 = n1 * a1;
            $mondai.innerText = n2 + `÷` + n1 + `＝`;
        } else if (count = mondaiNum){
            closing();
        };
    };

    function step3Setup(){
        if (count < mondaiNum){
            switchdisplay2();
            ab = a1;
            n1 = getRandom(2, 9);
            a1 = getRandom(2, 9);
            a2 = getRandom(1, n1 - 1);
            while (a1 == ab){
                n1 = getRandom(2, 9);
                a1 = getRandom(2, 9);
                a2 = getRandom(1, n1 - 1);
            };
            n2 = n1 * a1 + a2;
            $mondai.innerText = n2 + `÷` + n1 + `＝`;
        } else if (count = mondaiNum){
            closing();
        };
    };
    
    function step4Setup(){
        if (count < mondaiNum){
            ab = a1;
            n1 = getRandom(10, 19);
            a1 = getRandom(2, 9);
            while (a1 == ab){
                n1 = getRandom(10, 19);
                a1 = getRandom(2, 9);
            };
            n2 = n1 * a1;
            $mondai.innerText = n1 + `×□＝` + n2;
        } else if (count = mondaiNum){
            closing();
        };
    };

    function step5Setup(){
        if (count < mondaiNum){
            ab = a1;
            n1 = getRandom(2, 9);
            a1 = getRandom(10, 19);
            while (a1 == ab){
                n1 = getRandom(2, 9);
                a1 = getRandom(10, 19);
            };
            n2 = n1 * a1;
            $mondai.innerText = n2 + `÷` + n1 + `＝`;
        } else if (count = mondaiNum){
            closing();
        };
    };

    function step6Setup(){
        if (count < mondaiNum){
            switchdisplay2();
            ab = a1;
            n1 = getRandom(2, 9);
            a1 = getRandom(10, 19);
            a2 = getRandom(1, n1 - 1);
            while (a1 == ab){
                n1 = getRandom(2, 9);
                a1 = getRandom(10, 19);
                a2 = getRandom(1, n1 - 1);
            };
            n2 = n1 * a1 + a2;
            $mondai.innerText = n2 + `÷` + n1 + `＝`;
        } else if (count = mondaiNum){
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
    
waru1();