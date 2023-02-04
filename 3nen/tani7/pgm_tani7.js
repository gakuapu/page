function tani7(){
    
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
    let n1 = 0;
    let n2 = 0;
    let a1 = 0;
    let a2 = 0;
    let p = 0;
    let pb = 0;
    let q = 0;
    let mondaiNum = 10;
    
    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };
    
    function defaultlet(){
        count = 0;
        n1 = 0;
        n2 = 0;
        a1 = 0;
        a2 = "";
        p = 0;
        pb = 0;
        q = 0;
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
                    n1 = getRandom(2, 10);
                    a1 = n1 * 60;
                    $mondai.innerText = n1 + `時間 ＝`
                    $unit1.innerText = `分`;
                    break;
                case 2:
                    n2 = getRandom(2, 10) * 60;
                    a1 = n2 / 60;
                    $mondai.innerText = n2 + `分 ＝`;
                    $unit1.innerText = `時間`;
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
            n1 = getRandom(1, 5);
            n2 = getRandom(1, 5) * 10;
            switch(p){
                case 1:
                    $kotae2.style.display = "none";
                    a1 = n1 * 60 + n2;
                    $mondai.innerText = n1 + `時間 ` + n2 + `分 ＝`;
                    $unit1.innerText = `分`;
                    $unit2.innerText = ``;
                    break;            
                case 2:
                    $kotae2.style.display = "inline-block";    
                    a1 = n1;
                    a2 = n2;
                    $mondai.innerText = n1 * 60 + n2 + `分 ＝`
                    $unit1.innerText = `時間`;
                    $unit2.innerText = `分`;
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
                    a2 = getRandom(2, 5);
                    n1 = getRandom(1, a1 - 1);
                    n2 = getRandom(1, a2 - 1);
                    a2 = a2 * 10;
                    n2 = n2 * 10;
                    $mondai.innerText = n1 + `時間 ` + n2 + `分 ＋ ` + (a1 - n1) + `時間 ` + (a2 - n2) + `分 ＝`;
                    break;
                case 2:
                    n1 = getRandom(2, 9);
                    n2 = getRandom(2, 5);
                    a1 = getRandom(1, n1 - 1);
                    a2 = getRandom(1, n2 - 1);
                    a2 = a2 * 10;
                    n2 = n2 * 10;
                    $mondai.innerText = n1 + `時間 ` + n2 + `分 － ` + (n1 - a1) + `時間 ` + (n2 - a2) + `分 ＝`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            $unit1.innerText = `時間`;
            $unit2.innerText = `分`;
        } else if (count == mondaiNum){
            closing();
        };
    };  

    function step4Setup(){
        if (count < mondaiNum){
            $hintBtn.style.display = "none";
            $unit1.innerText = `時間`;
            pb = p;
            p = getRandom(1, 4);
            while (p == pb){
                p = getRandom(1, 4);
            };
            switch(p){
                case 1:
                    q = getRandom(1, 3);
                    if (q == 1){
                        $kotae2.style.display = "none";
                        $unit2.innerText = "";
                        a2 = "";
                        n2 = getRandom(1, 5);
                        a1 = getRandom(3, 9);
                        n1 = getRandom(1, a1 - 2);
                        n2 = n2 * 10;
                        $mondai.innerText = n1 + `時間 ` + n2 + `分 ＋ ` + (a1 - n1 - 1) + `時間 ` + (60 - n2) + `分 ＝`;
                    } else {
                        $kotae2.style.display = "inline-block";
                        $unit2.innerText = `分`;
                        a2 = getRandom(1, 4);
                        n2 = getRandom(a2 + 1, 5);
                        a1 = getRandom(3, 9);
                        n1 = getRandom(1, a1 - 2);
                        a2 = a2 * 10;
                        n2 = n2 * 10;
                        $mondai.innerText = n1 + `時間 ` + n2 + `分 ＋ ` + (a1 - n1 - 1) + `時間 ` + (a2 + 60 - n2) + `分 ＝`;
                    };
                    break;
                case 2:
                    $kotae2.style.display = "inline-block";
                    $unit2.innerText = `分`;
                    a2 = getRandom(1, 4);
                    n2 = getRandom(a2 + 1, 5);
                    a1 = getRandom(2, 9);
                    a2 = a2 * 10;
                    n2 = n2 * 10;
                    $mondai.innerText = (a1 - 1) + `時間 ` + n2 + `分 ＋ ` + (a2 + 60 - n2) + `分 ＝`;
                    break;
                case 3:
                    $kotae2.style.display = "inline-block";
                    $unit2.innerText = `分`;
                    q = getRandom(1, 3);
                    if (q == 1) {
                        a2 = getRandom(1, 5);
                        a1 = getRandom(1, 7);
                        n1 = getRandom(a1 + 2, 9);
                        a2 = a2 * 10;
                        $mondai.innerText = n1 + `時間 － ` + (n1 - a1 - 1) + `時間 ` + (60 - a2) + `分 ＝`;
                    } else {
                        a2 = getRandom(2, 5);
                        n2 = getRandom(1, a2 - 1);
                        a1 = getRandom(1, 7);
                        n1 = getRandom(a1 + 2, 9);
                        a2 = a2 * 10;
                        n2 = n2 * 10;
                        $mondai.innerText = n1 + `時間 ` + n2 + `分 － ` + (n1 - a1 - 1) + `時間 ` + (n2 + 60 - a2) + `分 ＝`;
                    };
                    break;
                case 4:
                    $kotae2.style.display = "inline-block";
                    $unit2.innerText = `分`;
                    a2 = getRandom(2, 5);
                    n2 = getRandom(1, a2 - 1);
                    a1 = getRandom(1, 9);
                    a2 = a2 * 10;
                    n2 = n2 * 10;
                    $mondai.innerText = (a1 + 1) + `時間 ` + n2 + `分 － ` + (n2 + 60 - a2) + `分 ＝`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
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
                    n1 = getRandom(2, 10);
                    a1 = n1 * 60;
                    $mondai.innerText = n1 + `分 ＝`
                    $unit1.innerText = `秒`;
                    break;
                case 2:
                    n2 = getRandom(2, 10) * 60;
                    a1 = n2 / 60;
                    $mondai.innerText = n2 + `秒 ＝`;
                    $unit1.innerText = `分`;
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
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            n1 = getRandom(1, 5);
            n2 = getRandom(1, 5) * 10;
            switch(p){
                case 1:
                    $kotae2.style.display = "none";
                    a1 = n1 * 60 + n2;
                    $mondai.innerText = n1 + `分 ` + n2 + `秒 ＝`;
                    $unit1.innerText = `秒`;
                    $unit2.innerText = ``;
                    break;            
                case 2:
                    $kotae2.style.display = "inline-block";    
                    a1 = n1;
                    a2 = n2;
                    $mondai.innerText = n1 * 60 + n2 + `秒 ＝`
                    $unit1.innerText = `分`;
                    $unit2.innerText = `秒`;
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
                    a2 = getRandom(2, 5);
                    n1 = getRandom(1, a1 - 1);
                    n2 = getRandom(1, a2 - 1);
                    a2 = a2 * 10;
                    n2 = n2 * 10;
                    $mondai.innerText = n1 + `分 ` + n2 + `秒 ＋ ` + (a1 - n1) + `分 ` + (a2 - n2) + `秒 ＝`;
                    break;
                case 2:
                    n1 = getRandom(2, 9);
                    n2 = getRandom(2, 5);
                    a1 = getRandom(1, n1 - 1);
                    a2 = getRandom(1, n2 - 1);
                    a2 = a2 * 10;
                    n2 = n2 * 10;
                    $mondai.innerText = n1 + `分 ` + n2 + `秒 － ` + (n1 - a1) + `分 ` + (n2 - a2) + `秒 ＝`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            $unit1.innerText = `分`;
            $unit2.innerText = `秒`;
        } else if (count == mondaiNum){
            closing();
        };
    };  

    function step8Setup(){
        if (count < mondaiNum){
            $hintBtn.style.display = "none";
            $unit1.innerText = `分`;
            pb = p;
            p = getRandom(1, 4);
            while (p == pb){
                p = getRandom(1, 4);
            };
            switch(p){
                case 1:
                    q = getRandom(1, 3);
                    if (q == 1){
                        $kotae2.style.display = "none";
                        $unit2.innerText = "";
                        a2 = "";
                        n2 = getRandom(1, 5);
                        a1 = getRandom(3, 9);
                        n1 = getRandom(1, a1 - 2);
                        n2 = n2 * 10;
                        $mondai.innerText = n1 + `分 ` + n2 + `秒 ＋ ` + (a1 - n1 - 1) + `分 ` + (60 - n2) + `秒 ＝`;
                    } else {
                        $kotae2.style.display = "inline-block";
                        $unit2.innerText = `秒`;
                        a2 = getRandom(1, 4);
                        n2 = getRandom(a2 + 1, 5);
                        a1 = getRandom(3, 9);
                        n1 = getRandom(1, a1 - 2);
                        a2 = a2 * 10;
                        n2 = n2 * 10;
                        $mondai.innerText = n1 + `分 ` + n2 + `秒 ＋ ` + (a1 - n1 - 1) + `分 ` + (a2 + 60 - n2) + `秒 ＝`;
                    };
                    break;
                case 2:
                    $kotae2.style.display = "inline-block";
                    $unit2.innerText = `秒`;
                    a2 = getRandom(1, 4);
                    n2 = getRandom(a2 + 1, 5);
                    a1 = getRandom(2, 9);
                    a2 = a2 * 10;
                    n2 = n2 * 10;
                    $mondai.innerText = (a1 - 1) + `分 ` + n2 + `秒 ＋ ` + (a2 + 60 - n2) + `秒 ＝`;
                    break;
                case 3:
                    $kotae2.style.display = "inline-block";
                    $unit2.innerText = `秒`;
                    q = getRandom(1, 3);
                    if (q == 1){
                        a2 = getRandom(1, 5);
                        a1 = getRandom(1, 7);
                        n1 = getRandom(a1 + 2, 9);
                        a2 = a2 * 10;
                        $mondai.innerText = n1 + `分 － ` + (n1 - a1 - 1) + `分 ` + (60 - a2) + `秒 ＝`;
                    } else {
                        a2 = getRandom(2, 5);
                        n2 = getRandom(1, a2 - 1);
                        a1 = getRandom(1, 7);
                        n1 = getRandom(a1 + 2, 9);
                        a2 = a2 * 10;
                        n2 = n2 * 10;
                        $mondai.innerText = n1 + `分 ` + n2 + `秒 － ` + (n1 - a1 - 1) + `分 ` + (n2 + 60 - a2) + `秒 ＝`;
                    };
                    break;
                case 4:
                    $kotae2.style.display = "inline-block";
                    $unit2.innerText = `秒`;
                    a2 = getRandom(2, 5);
                    n2 = getRandom(1, a2 - 1);
                    a1 = getRandom(1, 9);
                    a2 = a2 * 10;
                    n2 = n2 * 10;
                    $mondai.innerText = (a1 + 1) + `分 ` + n2 + `秒 － ` + (n2 + 60 - a2) + `秒 ＝`;
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
            setTimeout(() => {
                audio1.play();
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
        $hint.innerText = `1時間=60分、1分=60秒`;
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
    
tani7();