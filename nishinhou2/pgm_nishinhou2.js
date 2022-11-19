function nishinhou2(){
    
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
    let n0 = 0;
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let a = "";
    let n0b = 0;
    let ntxt = "";
    let mondaiNum = 10;
    
    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };
    
    function defaultlet(){
        count = 0;
        n0 = 0;
        n1 = 0;
        n2 = 0;
        n3 = 0;
        a = "";
        n0b = 0;
        $kotae.value = "";
        $hint.innerText = "";
        $mondai.innerText = "";
    };

    function switchdisplay(){
        $kotae.style.display = "block";
        $progress.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $step.style.display = "none";
        $startBtn.style.display = "none";
    };

    function defaultdisplay(){
        $hintBtn.style.display = "none";
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
            default:
                alert(`リロードして下さい`);
        };
    };

    function step1Setup(){
        if (count < mondaiNum){
            n0b = n0;
            a = 1;
            n0 = getRandom(3, 5);
            while (n0 == n0b){
                n0 = getRandom(3, 5);
            };
            n1 = getRandom(2, 4);
            for (let i1 = 0; i1 < n1; i1++){
                a = a * n0;
            };
            $mondai.innerText = n0 + `を` + n1 + `回かけるといくつ？`;
        } else if (count = mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        $hintBtn.style.display = "block";
        if (count < mondaiNum){
            n0b = n0;
            n0 = getRandom(3, 5);
            while (n0 == n0b){
                n0 = getRandom(3, 5);
            };
            n3 = getRandom(0, n0 - 1);
            n2 = getRandom(0, n0 - 1);
            n1 = getRandom(0, n0 - 1);
            a = n3 * n0 * n0 + n2 * n0 + n1;
            ntxt = "" + n3 + n2 + n1;
            $mondai.innerText = n0 + `進法で` + ntxt + `になる数を10進法で表すといくつ？`;
        } else if (count = mondaiNum){
            closing();
        };
    };

    function step3Setup(){
        $hintBtn.style.display = "block";
        if (count < mondaiNum){
            n0b = n0;
            n0 = getRandom(3, 5);
            while (n0 == n0b){
                n0 = getRandom(3, 5);
            };
            n3 = getRandom(0, n0 - 1);
            n2 = getRandom(0, n0 - 1);
            n1 = getRandom(0, n0 - 1);
            a = "" + n3 + n2 + n1;
            n1 = n3 * n0 * n0 + n2 * n0 + n1;
            $mondai.innerText = n1 + `(10進法)を3けたの` + n0 + `進法で表すといくつ？`;
        } else if (count = mondaiNum){
            closing();
        };
    };

    $kotae.addEventListener("input", () => {
        if ($kotae.value == a){
            setTimeout(() => {
                audio1.play();
                $hint.innerText = "";
                $kotae.value = "";
                $progress.value = count / mondaiNum;
            }, 500);
            count++;
            switchSetup($step.value);
        };
    });
    
    $hintBtn.addEventListener("click", () => {
        $hint.innerText = `「` + n0 + `×` + n0 + `の位」「` + n0 + `の位」「1の位」`;
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
    
nishinhou2();