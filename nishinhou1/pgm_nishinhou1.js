function nishinhou1(){
    
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
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;
    let n5 = 0;
    let a = "";
    let ab = 0;
    let n1b = 0;
    let ntxt = "";
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
        n5 = 0;
        a = "";
        ab = 0;
        n1b = 0;
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
            n1b = n1;
            a = 1;
            n1 = getRandom(2, 10);
            while (n1 == n1b){
                n1 = getRandom(2, 10);
            };
            for (let i1 = 0; i1 < n1; i1++){
                a = a * 2;
            };
            $mondai.innerText = `2を` + n1 + `回かけるといくつ？`;
        } else if (count = mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        $hintBtn.style.display = "block";
        if (count < mondaiNum){
            ab = a;
            n3 = getRandom(0, 1);
            n2 = getRandom(0, 1);
            n1 = getRandom(0, 1);
            a = n3 * 4 + n2 * 2 + n1;
            while (a == ab){
                n3 = getRandom(0, 1);
                n2 = getRandom(0, 1);
                n1 = getRandom(0, 1);
                a = n3 * 4 + n2 * 2 + n1;
            };
            ntxt = "" + n3 + n2 + n1;
            $mondai.innerText = `2進法で` + ntxt + `を10進法で表すといくつ？`;
        } else if (count = mondaiNum){
            closing();
        };
    };
    
    function step3Setup(){
        $hintBtn.style.display = "block";
        if (count < mondaiNum){
            ab = a;
            n5 = getRandom(0, 1);
            n4 = getRandom(0, 1);
            n3 = getRandom(0, 1);
            n2 = getRandom(0, 1);
            n1 = getRandom(0, 1);
            a = n5 * 16 + n4 * 8 + n3 * 4 + n2 * 2 + n1;
            while (a == ab){
                ab = a;
                n5 = getRandom(0, 1);
                n4 = getRandom(0, 1);
                n3 = getRandom(0, 1);
                n2 = getRandom(0, 1);
                n1 = getRandom(0, 1);
                a = n5 * 16 + n4 * 8 + n3 * 4 + n2 * 2 + n1;
            };
            ntxt = "" + n5 + n4 + n3 + n2 + n1;
            $mondai.innerText = `2進法で` + ntxt + `を10進法で表すといくつ？`;
        } else if (count = mondaiNum){
            closing();
        };
    };

    function step4Setup(){
        $hintBtn.style.display = "block";
        if (count < mondaiNum){
            ab = a;
            n3 = getRandom(0, 1);
            n2 = getRandom(0, 1);
            n1 = getRandom(0, 1);
            a = "" + n3 + n2 + n1;
            n1 = n3 * 4 + n2 * 2 + n1;
            while (a == ab){
                n3 = getRandom(0, 1);
                n2 = getRandom(0, 1);
                n1 = getRandom(0, 1);
                a = "" + n3 + n2 + n1;
                n1 = n3 * 4 + n2 * 2 + n1;
            };
            $mondai.innerText = n1 + `(10進法)を3けたの2進法で表すといくつ？`;
        } else if (count = mondaiNum){
            closing();
        };
    };

    function step5Setup(){
        $hintBtn.style.display = "block";
        if (count < mondaiNum){
            ab = a;
            n5 = getRandom(0, 1);
            n4 = getRandom(0, 1);
            n3 = getRandom(0, 1);
            n2 = getRandom(0, 1);
            n1 = getRandom(0, 1);
            a = "" + n5 + n4 + n3 + n2 + n1;
            n1 = n5 * 16 + n4 * 8 + n3 * 4 + n2 * 2 + n1;
            while (a == ab){
                n5 = getRandom(0, 1);
                n4 = getRandom(0, 1);
                n3 = getRandom(0, 1);
                n2 = getRandom(0, 1);
                n1 = getRandom(0, 1);
                a = "" + n5 + n4 + n3 + n2 + n1;
                n1 = n5 * 16 + n4 * 8 + n3 * 4 + n2 * 2 + n1;
            };
            $mondai.innerText = n1 + `(10進法)を5けたの2進法で表すといくつ？`;
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
        switch($step.value){
            case "2":
                $hint.innerText = "「4の位」「2の位」「1の位」"
                break;
            case "3":
                $hint.innerText = "「16の位」「8の位」「4の位」「2の位」「1の位」"
                break;
            case "4":
                $hint.innerText = "「4の位」「2の位」「1の位」"
                break;
            case "5":
                $hint.innerText = "「16の位」「8の位」「4の位」「2の位」「1の位」"
                break;
            default:
                alert(`リロードして下さい`);
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
    
nishinhou1();