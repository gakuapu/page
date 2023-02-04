function tani5(){
    
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
    let kg = 0;
    let g = 0;
    let t = 0;
    let mg = 0;
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
        kg = 0;
        g = 0;
        t = 0;
        mg = 0;
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
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            switch(p){
                case 1:
                    kg = getRandom(2, 15);
                    a1 = kg * 1000;
                    $mondai.innerText = kg + `kg ＝`;
                    $unit1.innerText = `g`;
                    break;
                case 2:
                    g = getRandom(2, 15) * 1000;
                    a1 = g / 1000;
                    $mondai.innerText = g + `g ＝`;
                    $unit1.innerText = `kg`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        a2 = "";
        $hintBtn.style.display = "block";
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 4);
            while (p == pb){
                p = getRandom(1, 4);
            };
            switch(p){
                case 1:
                    $kotae2.style.display = "none";
                    kg = getRandom(1, 9);
                    g = getRandom(1, 9) * 100;
                    a1 = kg * 1000 + g;
                    $mondai.innerText = kg + `kg ` + g + `g ＝`;
                    $unit1.innerText = `g`;
                    $unit2.innerText = ``;
                    break;
                case 2:
                    $kotae2.style.display = "none";
                    kg = getRandom(1, 9);
                    g = getRandom(1, 99);
                    a1 = kg * 1000 + g;
                    $mondai.innerText = kg + `kg ` + g + `g ＝`;
                    $unit1.innerText = `g`;
                    $unit2.innerText = ``;
                    break;
                case 3:
                    $kotae2.style.display = "inline-block";
                    kg = getRandom(1, 9);
                    g = getRandom(1, 9) * 100;
                    a1 = kg;
                    a2 = g;
                    $mondai.innerText = kg * 1000 + g + `g ＝`
                    $unit1.innerText = `kg`;
                    $unit2.innerText = `g`;
                    break;
                case 4:
                    $kotae2.style.display = "inline-block";
                    kg = getRandom(1, 9);
                    g = getRandom(1, 99);
                    a1 = kg;
                    a2 = g;
                    $mondai.innerText = kg * 1000 + g + `g ＝`
                    $unit1.innerText = `kg`;
                    $unit2.innerText = `g`;
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
        $hintBtn.style.display = "none";
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            switch(p){
                case 1:
                    a1 = getRandom(2, 9);
                    a2 = getRandom(2, 9);
                    kg = getRandom(1, a1 - 1);
                    g = getRandom(1, a2 - 1);
                    a2 = a2 * 100;
                    g = g * 100;
                    $mondai.innerText = kg + `kg ` + g + `g ＋ ` + (a1 - kg) + `kg ` + (a2 - g) + `g ＝`;
                    break;
                case 2:
                    kg = getRandom(2, 9);
                    g = getRandom(2, 9);
                    a1 = getRandom(1, kg - 1);
                    a2 = getRandom(1, g - 1);
                    a2 = a2 * 100;
                    g = g * 100;
                    $mondai.innerText = kg + `kg ` + g + `g － ` + (kg - a1) + `kg ` + (g - a2) + `g ＝`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            $unit1.innerText = `kg`;
            $unit2.innerText = `g`;
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
                    a2 = getRandom(1, 8);
                    g = getRandom(a2 + 1, 9);
                    a1 = getRandom(3, 9);
                    kg = getRandom(1, a1 - 2);
                    a2 = a2 * 100;
                    g = g * 100;
                    $mondai.innerText = kg + `kg ` + g + `g ＋ ` + (a1 - kg - 1) + `kg ` + (a2 + 1000 - g) + `g ＝`;
                    break;
                case 2:
                    a2 = getRandom(1, 8);
                    g = getRandom(a2 + 1, 9);
                    a1 = getRandom(2, 9);
                    a2 = a2 * 100;
                    g = g * 100;
                    $mondai.innerText = (a1 - 1) + `kg ` + g + `g ＋ ` + (a2 + 1000 - g) + `g ＝`;
                    break;
                case 3:
                    a2 = getRandom(2, 9);
                    g = getRandom(1, a2 - 1,);
                    a1 = getRandom(1, 7);
                    kg = getRandom(a1 + 2, 9);
                    a2 = a2 * 100;
                    g = g * 100;
                    $mondai.innerText = kg + `kg ` + g + `g － ` + (kg - a1 - 1) + `kg ` + (g + 1000 - a2) + `g ＝`;
                    break;
                case 4:
                    a2 = getRandom(2, 9);
                    g = getRandom(1, a2 - 1);
                    a1 = getRandom(1, 9);
                    a2 = a2 * 100;
                    g = g * 100;
                    $mondai.innerText = (a1 + 1) + `kg ` + g + `g － ` + (g + 1000 - a2) + `g ＝`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            $unit1.innerText = `kg`;
            $unit2.innerText = `g`;
        } else if (count == mondaiNum){
            closing();
        };
    };  

    function step5Setup(){
        $kotae2.style.display = "none";
        $hintBtn.style.display = "block";
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            switch(p){
                case 1:
                    t = getRandom(2, 15);
                    a1 = t * 1000;
                    $mondai.innerText = t + `t ＝`;
                    $unit1.innerText = `kg`;
                    break;
                case 2:
                    kg = getRandom(2, 15) * 1000;
                    a1 = kg / 1000;
                    $mondai.innerText = kg + `kg ＝`;
                    $unit1.innerText = `t`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    }; 

    function step6Setup(){
        $kotae2.style.display = "none";
        $hintBtn.style.display = "block";
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            switch(p){
                case 1:
                    g = getRandom(2, 15);
                    a1 = g * 1000;
                    $mondai.innerText = g + `g ＝`;
                    $unit1.innerText = `mg`;
                    break;
                case 2:
                    mg = getRandom(2, 15) * 1000;
                    a1 = mg / 1000;
                    $mondai.innerText = mg + `mg ＝`;
                    $unit1.innerText = `g`;
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
            $hint.innerText = "";
            $kotae1.value = "";
            $kotae2.value = ""
            setTimeout(() => {
                audio1.play();
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
        switch($step.value){
            case "1":
                $hint.innerText = `1kg=1000g`;
                break;
            case "2":
                $hint.innerText = `1kg=1000g`;
                break;
            case "3":
                $hint.innerText = "";
                break;
            case "4":
                $hint.innerText = "";
                break;
            case "5":
                $hint.innerText = `1t=1000kg`;
                break;
            case "6":
                $hint.innerText = `1g=1000mg`;
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
        $kotae1.value = "";
        $kotae2.value = "";
    });
    
    $resetBtn.addEventListener("click", () => {
        defaultdisplay();
        defaultlet();
        $progress.value = 0;
    });
    
};
    
tani5();