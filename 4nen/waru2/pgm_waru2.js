function waru2(){
    
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
    let n1b = 0;
    let n2 = 0;
    let a1 = 0;
    let a2 = 0;
    let mondaiNum = 10;
    
    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };
    
    function defaultlet(){
        count = 0;
        n1 = 0;
        n1b = 0;
        n2 = 0;
        a1 = 0;
        a2 = 0;
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
            n1b = n1;
            n1 = getRandom(2, 9);
            while (n1 == n1b){
                n1 = getRandom(2, 9);
            };
            if (n1 < 4){
                a1 = getRandom(11, 33);
                n2 = n1 * a1;
            } else {
                a1 = getRandom(11, 19);
                n2 = n1 * a1;
                while (n2 >= 100){
                    a1 = getRandom(11, 19);
                    n2 = n1 * a1;
                };
            }
            n2 = n1 * a1;
            $mondai.innerText = n2 + `÷` + n1 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        if (count < mondaiNum){
            switchdisplay2();
            n1b = n1;
            n1 = getRandom(2, 9);
            while (n1 == n1b){
                n1 = getRandom(2, 8);
            };
            a2 = getRandom(1, n1 - 1);
            if(n1 < 4){
                a1 = getRandom(11, 32);
                n2 = n1 * a1 + a2;
            } else {
                a1 = getRandom(11, 19);
                n2 = n1 * a1 + a2;
                while (n2 >= 100){
                    a1 = getRandom(11, 19);
                    n2 = n1 * a1 + a2;
                };
            };
            $mondai.innerText = n2 + `÷` + n1 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step3Setup(){
        if (count < mondaiNum){
            n1b = n1;
            n1 = getRandom(2, 9);
            while (n1 == n1b){
                n1 = getRandom(2, 9);
            };
            if (n1 < 4){
                a1 = getRandom(51, 299);
            } else if (n1 < 6){
                a1 = getRandom(26, 199);
            } else {
                a1 = getRandom(17, 111);
            };
            n2 = n1 * a1;
            $mondai.innerText = n2 + `÷` + n1 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step4Setup(){
        if (count < mondaiNum){
            switchdisplay2();
            n1b = n1;
            n1 = getRandom(2, 9);
            while (n1 == n1b){
                n1 = getRandom(2, 9);
            };
            if (n1 < 4){
                a1 = getRandom(51, 299);
            } else if (n1 < 6){
                a1 = getRandom(26, 198);
            } else {
                a1 = getRandom(17, 110);
            };
            a2 = getRandom(1, n1 - 1);
            n2 = n1 * a1 + a2;
            $mondai.innerText = n2 + `÷` + n1 + `＝`;
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
    
waru2();