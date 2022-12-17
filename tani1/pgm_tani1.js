function tani1(){
    
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
    let m = 0;
    let cm = 0;
    let mm = 0;
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
        m = 0;
        cm = 0;
        mm = 0;
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
            case "7":
                step7Setup();
                break;
            case "8":
                step8Setup();
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
                    cm = getRandom(2, 15);
                    a1 = cm * 10;
                    $mondai.innerText = cm + `cm ＝`
                    $unit1.innerText = `mm`;
                    break;
                case 2:
                    mm = getRandom(2, 15) * 10;
                    a1 = mm / 10;
                    $mondai.innerText = mm + `mm ＝`;
                    $unit1.innerText = `cm`;
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
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            cm = getRandom(1, 12);
            mm = getRandom(1, 9);
            switch(p){
                case 1:
                    $kotae2.style.display = "none";
                    a1 = cm * 10 + mm;
                    $mondai.innerText = cm + `cm ` + mm + `mm ＝`;
                    $unit1.innerText = `mm`;
                    $unit2.innerText = ``;
                    break;            
                case 2:
                    $kotae2.style.display = "inline-block";    
                    a1 = cm;
                    a2 = mm;
                    $mondai.innerText = cm * 10 + mm + `mm ＝`
                    $unit1.innerText = `cm`;
                    $unit2.innerText = `mm`;
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
                    cm = getRandom(1, a1 - 1);
                    mm = getRandom(1, a2 - 1);
                    $mondai.innerText = cm + `cm ` + mm + `mm ＋ ` + (a1 - cm) + `cm ` + (a2 - mm) + `mm ＝`;
                    break;
                case 2:
                    cm = getRandom(2, 9);
                    mm = getRandom(2, 9);
                    a1 = getRandom(1, cm - 1);
                    a2 = getRandom(1, mm - 1);
                    $mondai.innerText = cm + `cm ` + mm + `mm － ` + (cm - a1) + `cm ` + (mm - a2) + `mm ＝`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            $unit1.innerText = `cm`;
            $unit2.innerText = `mm`;
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
                    mm = getRandom(a2 + 1, 9);
                    a1 = getRandom(3, 9);
                    cm = getRandom(1, a1 - 2);
                    $mondai.innerText = cm + `cm ` + mm + `mm ＋ ` + (a1 - cm - 1) + `cm ` + (a2 + 10 - mm) + `mm ＝`;
                    break;
                case 2:
                    a2 = getRandom(1, 8);
                    mm = getRandom(a2 + 1, 9);
                    a1 = getRandom(2, 9);
                    $mondai.innerText = (a1 - 1) + `cm ` + mm + `mm ＋ ` + (a2 + 10 - mm) + `mm ＝`;
                    break;
                case 3:
                    a2 = getRandom(2, 9);
                    mm = getRandom(1, a2 - 1);
                    a1 = getRandom(1, 7);
                    cm = getRandom(a1 + 2, 9);
                    $mondai.innerText = cm + `cm ` + mm + `mm － ` + (cm - a1 - 1) + `cm ` + (mm + 10 - a2) + `mm ＝`;
                    break;
                case 4:
                    a2 = getRandom(2, 9);
                    mm = getRandom(1, a2 - 1);
                    a1 = getRandom(1, 9);
                    $mondai.innerText = (a1 + 1) + `cm ` + mm + `mm － ` + (mm + 10 - a2) + `mm ＝`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            $unit1.innerText = `cm`;
            $unit2.innerText = `mm`;
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
                    m = getRandom(2, 15);
                    a1 = m * 100;
                    $mondai.innerText = m + `m ＝`;
                    $unit1.innerText = `cm`;
                    break;
                case 2:
                    cm = getRandom(2, 15) * 100;
                    a1 = cm / 100;
                    $mondai.innerText = cm + `cm ＝`;
                    $unit1.innerText = `m`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step6Setup(){
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
                    m = getRandom(1, 9);
                    cm = getRandom(10, 99);
                    a1 = m * 100 + cm;
                    $mondai.innerText = m + `m ` + cm + `cm ＝`;
                    $unit1.innerText = `cm`;
                    $unit2.innerText = ``;
                    break;
                case 2:
                    $kotae2.style.display = "none";
                    m = getRandom(1, 9);
                    cm = getRandom(1, 9);
                    a1 = m * 100 + cm;
                    $mondai.innerText = m + `m ` + cm + `cm ＝`;
                    $unit1.innerText = `cm`;
                    $unit2.innerText = ``;
                    break;
                case 3:
                    $kotae2.style.display = "inline-block";
                    m = getRandom(1, 9);
                    cm = getRandom(10, 99);
                    a1 = m;
                    a2 = cm;
                    $mondai.innerText = m * 100 + cm + `cm ＝`
                    $unit1.innerText = `m`;
                    $unit2.innerText = `cm`;
                    break;
                case 4:
                    $kotae2.style.display = "inline-block";
                    m = getRandom(1, 9);
                    cm = getRandom(1, 9);
                    a1 = m;
                    a2 = cm;
                    $mondai.innerText = m * 100 + cm + `cm ＝`
                    $unit1.innerText = `m`;
                    $unit2.innerText = `cm`;
                    break;                
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step7Setup(){
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
                    m = getRandom(1, a1 - 1);
                    cm = getRandom(1, a2 - 1);
                    a2 = a2 * 10;
                    cm = cm * 10;
                    $mondai.innerText = m + `m ` + cm + `cm ＋ ` + (a1 - m) + `m ` + (a2 - cm) + `cm ＝`;
                    break;
                case 2:
                    m = getRandom(2, 9);
                    cm = getRandom(2, 9);
                    a1 = getRandom(1, m - 1);
                    a2 = getRandom(1, cm - 1);
                    a2 = a2 * 10;
                    cm = cm * 10;
                    $mondai.innerText = m + `m ` + cm + `cm － ` + (m - a1) + `m ` + (cm - a2) + `cm ＝`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            $unit1.innerText = `m`;
            $unit2.innerText = `cm`;
        } else if (count == mondaiNum){
            closing();
        };
    };  

    function step8Setup(){
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
                    cm = getRandom(a2 + 1, 9);
                    a1 = getRandom(3, 9);
                    m = getRandom(1, a1 - 2);
                    a2 = a2 * 10;
                    cm = cm * 10;
                    $mondai.innerText = m + `m ` + cm + `cm ＋ ` + (a1 - m - 1) + `m ` + (a2 + 100 - cm) + `cm ＝`;
                    break;
                case 2:
                    a2 = getRandom(1, 8);
                    cm = getRandom(a2 + 1, 9);
                    a1 = getRandom(2, 9);
                    a2 = a2 * 10;
                    cm = cm * 10;
                    $mondai.innerText = (a1 - 1) + `m ` + cm + `cm ＋ ` + (a2 + 100 - cm) + `cm ＝`;
                    break;
                case 3:
                    a2 = getRandom(2, 9);
                    cm = getRandom(1, a2 - 1,);
                    a1 = getRandom(1, 7);
                    m = getRandom(a1 + 2, 9);
                    a2 = a2 * 10;
                    cm = cm * 10;
                    $mondai.innerText = m + `m ` + cm + `cm － ` + (m - a1 - 1) + `m ` + (cm + 100 - a2) + `cm ＝`;
                    break;
                case 4:
                    a2 = getRandom(2, 9);
                    cm = getRandom(1, a2 - 1);
                    a1 = getRandom(1, 9);
                    a2 = a2 * 10;
                    cm = cm * 10;
                    $mondai.innerText = (a1 + 1) + `m ` + cm + `cm － ` + (cm + 100 - a2) + `cm ＝`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            $unit1.innerText = `m`;
            $unit2.innerText = `cm`;
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
        $hint.innerText = `10mm=1cm, 100cm=1m`;
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
    
tani1();