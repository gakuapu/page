function anzan15(){
    
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
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let a = 0;
    let ab = 0;
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
        n3 = 0;
        a = 0;
        ab = 0;
        p = 0;
        pb = 0;
        q = 0;
        $kotae.value = "";
        $mondai.innerText = "";
        $hint.innerText = "";
    };

    function switchdisplay(){
        $kotae.style.display = "block";
        $progress.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $startBtn.style.display = "none";
        $step.style.display = "none";
        $hintBtn.style.display = "block";
    };

    function defaultdisplay(){
        $kotae.style.display = "none";
        $progress.style.display = "none";
        $eraseBtn.style.display = "none";
        $resetBtn.style.display = "none";
        $startBtn.style.display = "block";
        $step.style.display = "block";
        $hintBtn.style.display = "none";
    };

    function closing(){
        audio2.play();
        $progress.value = 1;
        defaultdisplay();
        defaultlet();
        alert(`クリアしました`);
    };

    function switchSetup(stepValue){
        $hintBtn.style.display = "block";
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
            ab = a;
            p = getRandom(1, 2);
            if (p == 1){
                n3 = getRandom(6, 19);
                n1 = n3 * 2;
                a = n1 * 5;
                while(n1 % 5 == 0 || a == ab){
                    n3 = getRandom(6, 19);
                    n1 = n3 * 2;
                    a = n1 * 5;
                };
                n2 = 5;
            } else {
                n3 = getRandom(3, 9);
                n1 = n3 * 4;
                a = n1 * 25;
                while(n1 % 5 == 0 || a == ab){
                    n3 = getRandom(3, 9);
                    n1 = n3 * 4;
                    a = n1 * 25;
                };
                n2 = 25;
            };
            $mondai.innerText = n1 + `×` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 3);
            while(p == pb){
                p = getRandom(1, 3);
            };
            if (p != 1){
                n1 = getRandom(6, 9) * 2;
                n2 = ((getRandom(1, 4) * 2) + 1) * 5;
            } else {
                n1 = getRandom(3, 9) * 4;
                while (n1 % 5 == 0){
                    n1 = getRandom(3, 9) * 4;
                };
                n2 = getRandom(0, 1) * 50 + 25;
            };
            a = n1 * n2;
            q = getRandom(1, 2);
            if (q == 1){
                $mondai.innerText = n1 + `×` + n2 + `＝`;
            } else {
                $mondai.innerText = n2 + `×` + n1 + `＝`;
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step3Setup(){
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 3);
            while(p == pb){
                p = getRandom(1, 3);
            };
            switch(p){
                case 1:
                    n1 = 5;
                    n2 = getRandom(1, 3) * 2;
                    n3 = getRandom(0, 1) * 2 + 7;
                    break;
                case 2:
                    n1 = 15;
                    n2 = getRandom(1, 3) * 2;
                    n3 = getRandom(0, 1) * 2 + 7;
                    break;
                case 3:
                    n1 = 25;
                    n2 = getRandom(1, 3) * 4;
                    n3 = getRandom(1, 4) * 2 + 1;
                    while(n3 % 5 == 0){
                        n3 = getRandom(1, 4) * 2 + 1;
                    };
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            a = n1 * n2 * n3;
            q = getRandom(1, 4);
            switch(q){
                case 1:
                    $mondai.innerText = n1 + `×` + n3 + `×` + n2 + `＝`;
                    break;
                case 2:
                    $mondai.innerText = n3 + `×` + n1 + `×` + n2 + `＝`;
                    break;
                case 3:
                    $mondai.innerText = n3 + `×` + n2 + `×` + n1 + `＝`;
                    break;
                case 4:
                    $mondai.innerText = n2 + `×` + n3 + `×` + n1 + `＝`;
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
            $hint.innerText = "";
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
        switch($step.value){
            case "1":
                if (p == 1){
                    $hint.innerText = `5に2をわたすと、` + n3 + `×` + (n2 * 2) + `と同じになるので...`;
                } else {
                    $hint.innerText = `25に4をわたすと、` + n3 + `×` + (n2 * 4) + `と同じになるので...`;
                };
                break;
            case "2":
                if (p != 1){
                    $hint.innerText = n1 + `から` + n2 + `に2をわたすと...`;
                } else {
                    $hint.innerText = n1 + `から` + n2 + `に4をわたすと...`;
                };
                break;
            case "3":
                switch(q){
                    case 1:
                        $hint.innerText = `まず` + n1 + `と` + n2 + `のかけ算から計算すると...`;
                        break;
                    case 2:
                        $hint.innerText = `まず` + n1 + `と` + n2 + `のかけ算から計算すると...`;
                        break;
                    case 3:
                        $hint.innerText = `まず` + n2 + `と` + n1 + `のかけ算から計算すると...`;
                        break;
                    case 4:
                        $hint.innerText = `まず` + n2 + `と` + n1 + `のかけ算から計算すると...`;
                        break;
                    default:
                        alert(`リロードして下さい`);
                };
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
        $kotae.value = "";
    });
    
    $resetBtn.addEventListener("click", () => {
        defaultdisplay();
        defaultlet();
        $progress.value = 0;
    });
    
};
    
anzan15();