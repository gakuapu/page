function tani1(){
    
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
    let m = 0;
    let cm = 0;
    let mm = 0;
    let l = 0;
    let dl = 0;
    let ml = 0;
    let h = 0;
    let mts = 0;
    let a = 0;
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
        l = 0;
        dl = 0;
        ml = 0;
        h = 0;
        mts = 0;
        a = 0;
        p = 0;
        pb = 0;
        $kotae.value = "";
        $hint.innerText = "";
        $mondai.innerText = "";
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

    function step1Setup(){
        $hintBtn.style.display = "block";
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 6);
            while (p == pb){
                p = getRandom(1, 6);
            };
            switch(p){
                case 1:
                    m = getRandom(1,19);
                    a = m * 100;
                    $mondai.innerText = m + `m ＝ □cm`;
                    break;
                case 2:
                    cm = getRandom(1,19) * 100;
                    a = cm / 100;
                    $mondai.innerText = cm + `cm ＝ □m`;
                    break;
                case 3:
                    cm = getRandom(1,19);
                    a = cm * 10;
                    $mondai.innerText = cm + `cm ＝ □mm`;
                    break;
                case 4:
                    mm = getRandom(1,19) * 10;
                    a = mm / 10;
                    $mondai.innerText = mm + `mm ＝ □cm`;
                    break;
                case 5:
                    m = getRandom(1,19);
                    a = m * 1000;
                    $mondai.innerText = m + `m ＝ □mm`;
                    break;
                case 6:
                    mm = getRandom(1,19) * 1000;
                    a = mm / 1000;
                    $mondai.innerText = mm + `mm ＝ □m`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count = mondaiNum){
            closing();
        };
    };

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
                    a = l * 10;
                    $mondai.innerText = l + `L ＝ □dL`;
                    break;
                case 2:
                    dl = getRandom(1,19) * 10;
                    a = dl / 10;
                    $mondai.innerText = dl + `dL ＝ □L`;
                    break;
                case 3:
                    dl = getRandom(1,19);
                    a = dl * 100;
                    $mondai.innerText = dl + `dL ＝ □mL`;
                    break;
                case 4:
                    ml = getRandom(1,19) * 100;
                    a = ml / 100;
                    $mondai.innerText = ml + `mL ＝ □dL`;
                    break;
                case 5:
                    l = getRandom(1,19);
                    a = l * 1000;
                    $mondai.innerText = l + `L ＝ □mL`;
                    break;
                case 6:
                    ml = getRandom(1,19) * 1000;
                    a = ml / 1000;
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
                    a = h * 60;
                    $mondai.innerText = h + `時間 ＝ □分`;
                    break;
                case 2:
                    mts = getRandom(1,10) * 60;
                    a = mts / 60;
                    $mondai.innerText = mts + `分 ＝ □時間`;
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
                default:
                    alert(`リロードして下さい`);
            };
        };
    });
    
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
    
tani1();