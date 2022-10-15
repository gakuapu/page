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
    let mnum = 0; //前に☆
    let mth = 0; //前から ⇒ mnum + 1
    let unum = 0; //後ろに☆
    let uth = 0; //後ろから ⇒ unum + 1
    let allnum = 0; //全部で ⇒ mnum + 1 + unum
    let a = 0; //答え
    let p = 0; //パターン
    let pb = 0; //前問のパターン
    let pstep4 = 0; //ステップ4のパターン
    let pstep4b = 0; //前問のステップ4のパターン
    let mondaiNum = 20;
    
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
        pstep4 = 0;
        pstep4b = 0;
        $kotae.value = "";
        $hint.innerText = "";
        $mondai.innerText = "";
    };

    function setlet(){
        mnum = getRandom (3, 6);
        unum = getRandom (3, 6);
        mth = mnum + 1;
        uth = unum + 1;
        allnum = mnum + 1 + unum;
    };

    function switchdisplay(){
        $hintBtn.style.display = "block";
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

    //全部で
    function step1Setup(){
        setlet();
        a = allnum;
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 4);
            while (p == pb){
                p = getRandom(1, 4);
            };
            switch(p){
                case 1:
                    $mondai.innerText = `あなたの前に` + mnum + `人、あなたの後ろに` + unum + `人います。`;
                    break;
                case 2:
                    $mondai.innerText = `あなたは前から` + mth + `番目、後ろから` + uth + `番目です。`;
                    break;
                case 3:
                    $mondai.innerText = `あなたは前から` + mth + `番目です。あなたの後ろに` + unum + `人います。`;
                    break;
                case 4:
                    $mondai.innerText = `あなたの前に` + mnum + `人います。あなたは後ろから` + uth + `番目です。`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            $mondai.innerText += `全部で何人いるでしょう？`;
        } else if (count = mondaiNum){
            closing();
        };
    };

    //前から・前に
    function step2Setup(){
        if (count < mondaiNum){
            pb = p;
            p = getRandom(5, 8);
            while (p == pb){
                p = getRandom(5, 8);
            };
            switch(p){
                case 5:
                    $mondai.innerText = `TBD5`;
                    break;
                case 6:
                    $mondai.innerText = `TBD6`;
                    break;
                case 7:
                    $mondai.innerText = `TBD7`;
                    break;
                case 8:
                    $mondai.innerText = `TBD8`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count = mondaiNum){
            closing();
        };
    };

    //後ろから・後ろに
    function step3Setup(){
        if (count < mondaiNum){
            pb = p;
            p = getRandom(9, 12);
            while (p == pb){
                p = getRandom(9, 12);
            };
            switch(p){
                case 9:
                    $mondai.innerText = `TBD9`;
                    break;
                case 10:
                    $mondai.innerText = `TBD10`;
                    break;
                case 11:
                    $mondai.innerText = `TBD11`;
                    break;
                case 12:
                    $mondai.innerText = `TBD12`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count = mondaiNum){
            closing();
        };
    };
    
    //全てのパターン
    function step4Setup(){
        $hintBtn.style.display = "none";
        if (count < mondaiNum){
            pstep4b = pstep4;
            pstep4 = getRandom(1, 3);
            while (pstep4 == pstep4b){
                pstep4 = getRandom(1, 3);
            };
            switch(pstep4){
                case 1:
                    step1Setup();
                    break;
                case 2:
                    step2Setup();
                    break;
                case 3:
                    step3Setup();
                    break;
                default:
                    alert(`リロードして下さい`);
            };
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
            switch($step.value){
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
    });
    
    $hintBtn.addEventListener("click", () => {
        for (let im = 0; im < mnum; im++){
            $hint.innerText += `〇`;
        }
        $hint.innerText += `●`;
        for (let iu = 0; iu < unum; iu++){
            $hint.innerText += `〇`;
        }
    });

    $startBtn.addEventListener("click", () => {
        switchdisplay();
        defaultlet();
        $progress.value = 0;
        switch($step.value){
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