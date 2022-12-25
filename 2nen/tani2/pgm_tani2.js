function tani2(){
    
    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $hintBtn = document.getElementById("hint-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $unit1 = document.getElementById("unit1");
    const $unit2 = document.getElementById("unit2");
    const $hint = document.getElementById("hint");
    const $kotae1 = document.getElementById("kotae1");
    const $kotae2 = document.getElementById("kotae2");
    const $checkBtn = document.getElementById("check-btn");
    
    const $progress = document.getElementById("progress");
    
    let count = 0;
    let L = 0;
    let dL = 0;
    let mL = 0;
    let a1 = 0;
    let a2 = 0;
    let p = 0; //パターン
    let pb = 0; //前問のパターン
    let mondaiNum = 10;
    
    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };
    
    function defaultlet(){
        count = 0;
        L = 0;
        dL = 0;
        mL = 0;
        a1 = 0;
        a2 = 0;
        p = 0;
        pb = 0;
        $kotae1.value = "";
        $kotae2.value = "";
        $hint.innerText = "";
        $mondai.innerText = "";
        $unit1.innerText = "";
        $unit2.innerText = "";
    };

    function switchdisplay(){
        $kotae1.style.display = "inline-block";
        $checkBtn.style.display = "block";
        $progress.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $step.style.display = "none";
        $startBtn.style.display = "none";
    };

    function defaultdisplay(){
        $hintBtn.style.display = "none";
        $kotae1.style.display = "none";
        $kotae2.style.display = "none";
        $checkBtn.style.display = "none";
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

    function step1Setup(){
        $kotae2.style.display = "none";
        $hintBtn.style.display = "block";
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 6);
            while (p == pb){
                p = getRandom(1, 6);
            };
            switch(p){
                case 1:
                    L = getRandom(2, 15);
                    a1 = L * 10;
                    $mondai.innerText = L + `L ＝`;
                    $unit1.innerText = `dL`;
                    break;
                case 2:
                    dL = getRandom(2, 15) * 10;
                    a1 = dL / 10;
                    $mondai.innerText = dL + `dL ＝`;
                    $unit1.innerText = `L`;
                    break;
                case 3:
                    dL = getRandom(2, 15);
                    a1 = dL * 100;
                    $mondai.innerText = dL + `dL ＝`
                    $unit1.innerText = `mL`;
                    break;
                case 4:
                    mL = getRandom(2, 15) * 100;
                    a1 = mL / 100;
                    $mondai.innerText = mL + `mL ＝`;
                    $unit1.innerText = `dL`;
                    break;
                case 5:
                    L = getRandom(2, 9);
                    a1 = L * 1000;
                    $mondai.innerText = L + `L ＝`;
                    $unit1.innerText = `mL`;
                    break;
                case 6:
                    mL = getRandom(2, 9) * 1000;
                    a1 = mL / 1000;
                    $mondai.innerText = mL + `mL ＝`;
                    $unit1.innerText = `L`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        $kotae2.style.display = "none";
        $hintBtn.style.display = "block";
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 3);
            while (p == pb){
                p = getRandom(1, 3);
            };
            switch(p){
                case 1:
                    L = getRandom(1, 9);
                    dL = getRandom(1, 9);
                    a1 = L * 10 + dL;
                    $mondai.innerText = L + `L ` + dL + `dL ＝`;
                    $unit1.innerText = `dL`;
                    break;
                case 2:
                    L = getRandom(1, 9);
                    mL = getRandom(1, 9) * 100;
                    a1 = L * 1000 + mL;
                    $mondai.innerText = L + `L ` + mL + `mL ＝`;
                    $unit1.innerText = `mL`;
                    break;
                case 3:
                    L = getRandom(1, 9);
                    mL = getRandom(1, 99);
                    a1 = L * 1000 + mL;
                    $mondai.innerText = L + `L ` + mL + `mL ＝`;
                    $unit1.innerText = `mL`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step3Setup(){
        $kotae2.style.display = "inline-block";
        $hintBtn.style.display = "block";
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 3);
            while (p == pb){
                p = getRandom(1, 3);
            };
            switch(p){
                case 1:
                    a1 = getRandom(1, 15);
                    a2 = getRandom(1, 9);
                    dL = a1 * 10 + a2;
                    $mondai.innerText = dL + `dL ＝`;
                    $unit1.innerText = `L`;
                    $unit2.innerText = `dL`;
                    break;
                case 2:
                    a1 = getRandom(1, 9);
                    a2 = getRandom(1, 9) * 100;
                    mL = a1 * 1000 + a2;
                    $mondai.innerText = mL + `mL ＝`;
                    $unit1.innerText = `L`;
                    $unit2.innerText = `mL`;
                    break;
                case 3:
                    a1 = getRandom(1, 9);
                    a2 = getRandom(1, 99);
                    mL = a1 * 1000 + a2;
                    $mondai.innerText = mL + `mL ＝`;
                    $unit1.innerText = `L`;
                    $unit2.innerText = `mL`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step4Setup(){
        $kotae2.style.display = "inline-block";
        $hintBtn.style.display = "none";
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 4);
            while (p == pb){
                p = getRandom(1, 4);
            };
            switch(p){
                case 1:
                    a1 = getRandom(2, 9);
                    a2 = getRandom(2, 9);
                    L = getRandom(1, a1 - 1);
                    dL = getRandom(1, a2 - 1);
                    $mondai.innerText = L + `L ` + dL + `dL ＋ ` + (a1 - L) + `L ` + (a2 - dL) + `dL ＝`;
                    $unit1.innerText = `L`;
                    $unit2.innerText = `dL`;
                    break;
                case 2:
                    L = getRandom(2, 9);
                    dL = getRandom(2, 9);
                    a1 = getRandom(1, L - 1);
                    a2 = getRandom(1, dL - 1);
                    $mondai.innerText = L + `L ` + dL + `dL － ` + (L - a1) + `L ` + (dL - a2) + `dL ＝`;
                    $unit1.innerText = `L`;
                    $unit2.innerText = `dL`;
                    break;
                case 3:
                    a1 = getRandom(2, 9);
                    a2 = getRandom(2, 9);
                    L = getRandom(1, a1 - 1);
                    mL = getRandom(1, a2 - 1);
                    a2 = a2 * 100;
                    mL = mL * 100;
                    $mondai.innerText = L + `L ` + mL + `mL ＋ ` + (a1 - L) + `L ` + (a2 - mL) + `mL ＝`;
                    $unit1.innerText = `L`;
                    $unit2.innerText = `mL`;
                    break;
                case 4:
                    L = getRandom(2, 9);
                    mL = getRandom(2, 9);
                    a1 = getRandom(1, L - 1);
                    a2 = getRandom(1, mL - 1);
                    a2 = a2 * 100;
                    mL = mL * 100;
                    $mondai.innerText = L + `L ` + mL + `mL － ` + (L - a1) + `L ` + (mL - a2) + `mL ＝`;
                    $unit1.innerText = `L`;
                    $unit2.innerText = `mL`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };  

    function step5Setup(){
        $kotae2.style.display = "inline-block";
        $hintBtn.style.display = "none";
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 4);
            while (p == pb){
                p = getRandom(1, 4);
            };
            switch(p){
                case 1:
                    a2 = getRandom(1, 8);
                    dL = getRandom(a2 + 1, 9);
                    a1 = getRandom(3, 9);
                    L = getRandom(1, a1 - 2);
                    $mondai.innerText = L + `L ` + dL + `dL ＋ ` + (a1 - L - 1) + `L ` + (a2 + 10 - dL) + `dL ＝`;
                    $unit1.innerText = `L`;
                    $unit2.innerText = `dL`;
                    break;
                case 2:
                    a2 = getRandom(1, 8);
                    mL = getRandom(a2 + 1, 9);
                    a1 = getRandom(3, 9);
                    L = getRandom(1, a1 - 2);
                    a2 = a2 * 100;
                    mL = mL * 100;
                    $mondai.innerText = L + `L ` + mL + `mL ＋ ` + (a1 - L - 1) + `L ` + (a2 + 1000 - mL) + `mL ＝`;
                    $unit1.innerText = `L`;
                    $unit2.innerText = `mL`;
                    break;
                case 3:
                    a2 = getRandom(1, 8);
                    dL = getRandom(a2 + 1, 9);
                    a1 = getRandom(2, 9);
                    $mondai.innerText = (a1 - 1) + `L ` + dL + `dL ＋ ` + (a2 + 10 - dL) + `dL ＝`;
                    $unit1.innerText = `L`;
                    $unit2.innerText = `dL`;
                    break;
                case 4:
                    a2 = getRandom(1, 8);
                    mL = getRandom(a2 + 1, 9);
                    a1 = getRandom(2, 9);
                    a2 = a2 * 100;
                    mL = mL * 100;
                    $mondai.innerText = (a1 - 1) + `L ` + mL + `mL ＋ ` + (a2 + 1000 - mL) + `mL ＝`;
                    $unit1.innerText = `L`;
                    $unit2.innerText = `mL`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };  

    function step6Setup(){
        $kotae2.style.display = "inline-block";
        $hintBtn.style.display = "none";
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 4);
            while (p == pb){
                p = getRandom(1, 4);
            };
            switch(p){
                case 1:
                    a2 = getRandom(2, 9);
                    dL = getRandom(1, a2 - 1);
                    a1 = getRandom(1, 7);
                    L = getRandom(a1 + 2, 9);
                    $mondai.innerText = L + `L ` + dL + `dL － ` + (L - a1 - 1) + `L ` + (dL + 10 - a2) + `dL ＝`;
                    $unit1.innerText = `L`;
                    $unit2.innerText = `dL`;
                    break;
                case 2:
                    a2 = getRandom(2, 9);
                    mL = getRandom(1, a2 - 1,);
                    a1 = getRandom(1, 7);
                    L = getRandom(a1 + 2, 9);
                    a2 = a2 * 100;
                    mL = mL * 100;
                    $mondai.innerText = L + `L ` + mL + `mL － ` + (L - a1 - 1) + `L ` + (mL + 1000 - a2) + `mL ＝`;
                    $unit1.innerText = `L`;
                    $unit2.innerText = `mL`;
                    break;
                case 3:
                    a2 = getRandom(2, 9);
                    dL = getRandom(1, a2 - 1);
                    a1 = getRandom(1, 8);
                    $mondai.innerText = (a1 + 1) + `L ` + dL + `dL － ` + (dL + 10 - a2) + `dL ＝`;
                    $unit1.innerText = `L`;
                    $unit2.innerText = `dL`;
                    break;
                case 4:
                    a2 = getRandom(2, 9);
                    mL = getRandom(1, a2 - 1);
                    a1 = getRandom(1, 8);
                    a2 = a2 * 100;
                    mL = mL * 100;
                    $mondai.innerText = (a1 + 1) + `L ` + mL + `mL － ` + (mL + 1000 - a2) + `mL ＝`;
                    $unit1.innerText = `L`;
                    $unit2.innerText = `mL`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };  

    $checkBtn.addEventListener("click", () => {
        if ($kotae1.value == a1 && $kotae2.value == a2){
            setTimeout(() => {
                audio1.play();
                $hint.innerText = "";
                $kotae1.value = "";
                $kotae2.value = "";
                $progress.value = count / mondaiNum;
            }, 500);
            count++;
            switchSetup($step.value);
        } else {
            setTimeout(() => {
                audio3.play();
            }, 500);
        };
    });

    $hintBtn.addEventListener("click", () => {
        $hint.innerText = `1L=10dL、1L=1000mL、1dL=100mL`;
        $hintBtn.style.display = "none";
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
    
tani2();