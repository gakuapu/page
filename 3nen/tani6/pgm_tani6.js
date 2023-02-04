function tani6(){
    
    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $unit1 = document.getElementById("unit1");
    const $unit2 = document.getElementById("unit2");
    const $kotae1 = document.getElementById("kotae1");
    const $kotae2 = document.getElementById("kotae2");
    const $checkBtn = document.getElementById("check-btn");
    
    const $progress = document.getElementById("progress");
    
    let count = 0;
    let n = 0;
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
        n = 0;
        a1 = 0;
        a2 = 0;
        p = 0;
        pb = 0;
        $kotae1.value = "";
        $kotae2.value = "";
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
        a1 = getRandom(1, 5);
        a2 = getRandom(1, 9);
        n = a1 + a2 / 10;
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
            pb = p;
            p = getRandom(1, 3);
            while (p == pb){
                p = getRandom(1, 3);
            };
            switch(p){
                case 1:
                    $kotae2.style.display = "inline-block";
                    $mondai.innerText = n + `L ＝`;
                    $unit1.innerText = `L`;
                    $unit2.innerText = `dL`;
                    break;
                case 2:
                    $kotae2.style.display = "inline-block";
                    a2 = a2 * 100;
                    $mondai.innerText = n + `L ＝`;
                    $unit1.innerText = `L`;
                    $unit2.innerText = `mL`;
                    break;
                case 3:
                    $kotae2.style.display = "none";
                    a1 = a1 * 100 + a2 * 10;
                    a2 = "";
                    $mondai.innerText = n + `dL ＝`;
                    $unit1.innerText = `mL`;
                    $unit2.innerText = ``;
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
            pb = p;
            p = getRandom(1, 3);
            while (p == pb){
                p = getRandom(1, 3);
            };
            switch(p){
                case 1:
                    $kotae2.style.display = "inline-block";
                    a2 = a2 * 100;
                    $mondai.innerText = n + `km ＝`;
                    $unit1.innerText = `km`;
                    $unit2.innerText = `m`;
                    break;
                case 2:
                    $kotae2.style.display = "inline-block";
                    a2 = a2 * 10;
                    $mondai.innerText = n + `m ＝`;
                    $unit1.innerText = `m`;
                    $unit2.innerText = `cm`;
                    break;
                case 3:
                    $kotae2.style.display = "inline-block";
                    $mondai.innerText = n + `cm ＝`;
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
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 3);
            while (p == pb){
                p = getRandom(1, 3);
            };
            switch(p){
                case 1:
                    $kotae2.style.display = "none";
                    a1 = a1 * 1000 + a2 * 100;
                    a2 = "";
                    $mondai.innerText = n + `t ＝`;
                    $unit1.innerText = `kg`;
                    $unit2.innerText = ``;
                    break;
                case 2:
                    $kotae2.style.display = "inline-block";
                    a2 = a2 * 100;
                    $mondai.innerText = n + `kg ＝`;
                    $unit1.innerText = `kg`;
                    $unit2.innerText = `g`;
                    break;
                case 3:
                    $kotae2.style.display = "none";
                    a1 = a1 * 1000 + a2 * 100;
                    a2 = "";
                    $mondai.innerText = n + `g ＝`;
                    $unit1.innerText = `mg`;
                    $unit2.innerText = ``;
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
            $kotae1.value = "";
            $kotae2.value = "";
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
    
tani6();