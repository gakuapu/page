function tani4(){
    
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
    let km = 0;
    let m = 0;
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
        km = 0;
        m = 0;
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
                    km = getRandom(2, 15);
                    a1 = km * 1000;
                    $mondai.innerText = km + `km ＝`;
                    $unit1.innerText = `m`;
                    break;
                case 2:
                    m = getRandom(2, 15) * 1000;
                    a1 = m / 1000;
                    $mondai.innerText = m + `m ＝`;
                    $unit1.innerText = `km`;
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
                    km = getRandom(1, 9);
                    m = getRandom(1, 9) * 100;
                    a1 = km * 1000 + m;
                    $mondai.innerText = km + `km ` + m + `m ＝`;
                    $unit1.innerText = `m`;
                    $unit2.innerText = ``;
                    break;
                case 2:
                    $kotae2.style.display = "none";
                    km = getRandom(1, 9);
                    m = getRandom(1, 99);
                    a1 = km * 1000 + m;
                    $mondai.innerText = km + `km ` + m + `m ＝`;
                    $unit1.innerText = `m`;
                    $unit2.innerText = ``;
                    break;
                case 3:
                    $kotae2.style.display = "inline-block";
                    km = getRandom(1, 9);
                    m = getRandom(1, 9) * 100;
                    a1 = km;
                    a2 = m;
                    $mondai.innerText = km * 1000 + m + `m ＝`
                    $unit1.innerText = `km`;
                    $unit2.innerText = `m`;
                    break;
                case 4:
                    $kotae2.style.display = "inline-block";
                    km = getRandom(1, 9);
                    m = getRandom(1, 99);
                    a1 = km;
                    a2 = m;
                    $mondai.innerText = km * 1000 + m + `m ＝`
                    $unit1.innerText = `km`;
                    $unit2.innerText = `m`;
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
                    km = getRandom(1, a1 - 1);
                    m = getRandom(1, a2 - 1);
                    a2 = a2 * 100;
                    m = m * 100;
                    $mondai.innerText = km + `km ` + m + `m ＋ ` + (a1 - km) + `km ` + (a2 - m) + `m ＝`;
                    break;
                case 2:
                    km = getRandom(2, 9);
                    m = getRandom(2, 9);
                    a1 = getRandom(1, km - 1);
                    a2 = getRandom(1, m - 1);
                    a2 = a2 * 100;
                    m = m * 100;
                    $mondai.innerText = km + `km ` + m + `m － ` + (km - a1) + `km ` + (m - a2) + `m ＝`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            $unit1.innerText = `km`;
            $unit2.innerText = `m`;
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
                    m = getRandom(a2 + 1, 9);
                    a1 = getRandom(3, 9);
                    km = getRandom(1, a1 - 2);
                    a2 = a2 * 100;
                    m = m * 100;
                    $mondai.innerText = km + `km ` + m + `m ＋ ` + (a1 - km - 1) + `km ` + (a2 + 1000 - m) + `m ＝`;
                    break;
                case 2:
                    a2 = getRandom(1, 8);
                    m = getRandom(a2 + 1, 9);
                    a1 = getRandom(2, 9);
                    a2 = a2 * 100;
                    m = m * 100;
                    $mondai.innerText = (a1 - 1) + `km ` + m + `m ＋ ` + (a2 + 1000 - m) + `m ＝`;
                    break;
                case 3:
                    a2 = getRandom(2, 9);
                    m = getRandom(1, a2 - 1,);
                    a1 = getRandom(1, 7);
                    km = getRandom(a1 + 2, 9);
                    a2 = a2 * 100;
                    m = m * 100;
                    $mondai.innerText = km + `km ` + m + `m － ` + (km - a1 - 1) + `km ` + (m + 1000 - a2) + `m ＝`;
                    break;
                case 4:
                    a2 = getRandom(2, 9);
                    m = getRandom(1, a2 - 1);
                    a1 = getRandom(1, 9);
                    a2 = a2 * 100;
                    m = m * 100;
                    $mondai.innerText = (a1 + 1) + `km ` + m + `m － ` + (m + 1000 - a2) + `m ＝`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            $unit1.innerText = `km`;
            $unit2.innerText = `m`;
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
        $hint.innerText = `1km=1000m`;
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
    
tani4();