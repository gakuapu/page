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
    let mondaiNum = 15;
    
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
        $hintBtn.style.display = "block";
        $kotae1.style.display = "inline-block";
        $kotae2.style.display = "inline-block";
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
                case 3:
                    cm = getRandom(2, 15);
                    a1 = cm * 10;
                    $mondai.innerText = cm + `cm ＝`
                    $unit1.innerText = `mm`;
                    break;
                case 4:
                    mm = getRandom(2, 15) * 10;
                    a1 = mm / 10;
                    $mondai.innerText = mm + `mm ＝`;
                    $unit1.innerText = `cm`;
                    break;
                case 5:
                    m = getRandom(2, 15);
                    a1 = m * 1000;
                    $mondai.innerText = m + `m ＝`;
                    $unit1.innerText = `mm`;
                    break;
                case 6:
                    mm = getRandom(2, 15) * 1000;
                    a1 = mm / 1000;
                    $mondai.innerText = mm + `mm ＝`;
                    $unit1.innerText = `m`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count = mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        a2 = "";
        $hintBtn.style.display = "block";
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 6);
            while (p == pb){
                p = getRandom(1, 6);
            };
            switch(p){
                case 1:
                    $kotae2.style.display = "none";
                    m = getRandom(1, 9);
                    cm = getRandom(10, 99);
                    a1 = m * 100 + cm;
                    $mondai.innerText = m + `m` + cm + `cm ＝`;
                    $unit1.innerText = `cm`;
                    $unit2.innerText = ``;
                    break;
                case 2:
                    $kotae2.style.display = "none";
                    m = getRandom(1, 9);
                    cm = getRandom(1, 9);
                    a1 = m * 100 + cm;
                    $mondai.innerText = m + `m` + cm + `cm ＝`;
                    $unit1.innerText = `cm`;
                    $unit2.innerText = ``;
                    break;
                case 3:
                    $kotae2.style.display = "none";
                    cm = getRandom(1, 19);
                    mm = getRandom(1, 9);
                    a1 = cm * 10 + mm;
                    $mondai.innerText = cm + `cm` + mm + `mm ＝`;
                    $unit1.innerText = `mm`;
                    $unit2.innerText = ``;
                    break;
                case 4:
                    $kotae2.style.display = "inline-block";
                    m = getRandom(1, 9);
                    cm = getRandom(10, 99);
                    a1 = m;
                    a2 = cm;
                    $mondai.innerText = m * 100 + cm + `cm ＝`
                    $unit1.innerText = `m`;
                    $unit2.innerText = `cm`;
                    break;
                case 5:
                    $kotae2.style.display = "inline-block";
                    m = getRandom(1, 9);
                    cm = getRandom(1, 9);
                    a1 = m;
                    a2 = cm;
                    $mondai.innerText = m * 100 + cm + `cm ＝`
                    $unit1.innerText = `m`;
                    $unit2.innerText = `cm`;
                    break;                
                case 6:
                    $kotae2.style.display = "inline-block";    
                    cm = getRandom(1, 19);
                    mm = getRandom(1, 9);
                    a1 = cm;
                    a2 = mm;
                    $mondai.innerText = cm * 10 + mm + `mm ＝`
                    $unit1.innerText = `cm`;
                    $unit2.innerText = `mm`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count = mondaiNum){
            closing();
        };
    };

    function step3Setup(){
        console.log("step3 on developing");
    };  

    function step4Setup(){
        console.log("step4 on developing");
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
        } else {
            setTimeout(() => {
                audio1.play(); //※要差し替え
            }, 500);
        };
    });

    $hintBtn.addEventListener("click", () => {
        $hint.innerText = `1m=100cm、1cm=10mm`;
        $hintBtn.style.display = "none";
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

/*
    let l = 0;
    let dl = 0;
    let ml = 0;
    let h = 0;
    let mts = 0;

function step2Setup(){
        $hintBtn.style.display = "block";
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 6);
            while (p == pb){
                p = getRandom(1, 6);
            };
            switch(p){
                case 1:
                    l = getRandom(1,19);
                    a1 = l * 10;
                    $mondai.innerText = l + `L ＝ □dL`;
                    
                    break;
                case 2:
                    dl = getRandom(1,19) * 10;
                    a1 = dl / 10;
                    $mondai.innerText = dl + `dL ＝ □L`;
                    break;
                case 3:
                    dl = getRandom(1,19);
                    a1 = dl * 100;
                    $mondai.innerText = dl + `dL ＝ □mL`;
                    break;
                case 4:
                    ml = getRandom(1,19) * 100;
                    a1 = ml / 100;
                    $mondai.innerText = ml + `mL ＝ □dL`;
                    break;
                case 5:
                    l = getRandom(1,19);
                    a1 = l * 1000;
                    $mondai.innerText = l + `L ＝ □mL`;
                    break;
                case 6:
                    ml = getRandom(1,19) * 1000;
                    a1 = ml / 1000;
                    $mondai.innerText = ml + `mL ＝ □L`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count = mondaiNum){
            closing();
        };
    };

    function step3Setup(){
        $hintBtn.style.display = "block";
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            switch(p){
                case 1:
                    h = getRandom(1,10);
                    a1 = h * 60;
                    $mondai.innerText = h + `時間 ＝ □分`;
                    break;
                case 2:
                    mts = getRandom(1,10) * 60;
                    a1 = mts / 60;
                    $mondai.innerText = mts + `分 ＝ □時間`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count = mondaiNum){
            closing();
        };
    };

    $hintBtn.addEventListener("click", () => {
        switch($step.value){
            case "1":
                $hint.innerText = `1m=100cm、1cm=10mm`;
                break;
            case "2":
                $hint.innerText = `1L=10dL、1dL=100mL、1L=1000mL`;
                break;
            case "3":
                $hint.innerText = `1時間=60分`;
            }
        $hintBtn.style.display = "none";
    });

    $kotae1.addEventListener("input", () => {
        if ($kotae1.value == a1){
            setTimeout(() => {
                audio1.play();
                $hint.innerText = "";
                $kotae1.value = "";
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
                default:
                    alert(`リロードして下さい`);
            };
        };
    });
*/