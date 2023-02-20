function retsu1(){
    
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
    let mnum = 0;
    let mth = 0;
    let unum = 0;
    let uth = 0;
    let allnum = 0;
    let a = 0;
    let p = 0;
    let pb = 0;
    let mondaiNum = 10;
    
    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };
    
    function defaultlet(){
        count = 0;
        mnum = 0;
        mth = 0;
        unum = 0;
        uth = 0;
        allnum = 0;
        a = 0;
        p = 0;
        pb = 0;
        $kotae.value = "";
        $hint.innerText = "";
        $mondai.innerText = "";
    };

    function setlet(){
        mnum = getRandom(2, 5);
        unum = getRandom(2, 5);
        mth = mnum + 1;
        uth = unum + 1;
        allnum = mnum + 1 + unum;
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
            $hint.innerText = "";
            $hintBtn.style.display = "block";
            setlet();
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            switch(p){
                case 1:
                    a = mth;
                    $mondai.innerText = `ぜんぶで` + allnum + `にんいます。あなたのまえには` + mnum + `にんいます。あなたは「まえ」からなんばんめ?`;
                    break;
                case 2:
                    a = uth;
                    $mondai.innerText = `ぜんぶで` + allnum + `にんいます。あなたのまえには` + mnum + `にんいます。あなたは「うしろ」からなんばんめ?`;
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
            $hint.innerText = "";
            $hintBtn.style.display = "block";
            setlet();
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            switch(p){
                case 1:
                    a = mnum;
                    $mondai.innerText = `ぜんぶで` + allnum + `にんいます。あなたはまえから` + mth + `ばんめです。あなたの「まえ」にはなんにんいるでしょう?`;
                    break;
                case 2:
                    a = unum;
                    $mondai.innerText = `ぜんぶで` + allnum + `にんいます。あなたはまえから` + mth + `ばんめです。あなたの「うしろ」にはなんにんいるでしょう?`;
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
            $hint.innerText = "";
            $hintBtn.style.display = "block";
            setlet();
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            switch(p){
                case 1:
                    a = allnum;
                    $mondai.innerText = `あなたはまえから` + mth + `ばんめ、うしろから` + uth + `ばんめです。ぜんぶでなんにんいるでしょう?`;
                    break;
                case 2:
                    a = allnum;
                    $mondai.innerText = `あなたのまえには` + mnum + `にん、うしろには` + unum + `にんいます。ぜんぶでなんにんいるでしょう?`;
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
    
    $hintBtn.addEventListener("click", () => {
        for (let i = 0; i < mnum; i++){
            $hint.innerText += `〇`;
        }
        $hint.innerText += `●`;
        for (let i = 0; i < unum; i++){
            $hint.innerText += `〇`;
        }
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
    
retsu1();