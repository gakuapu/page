function gyakusan1(){
    
    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $kotae = document.getElementById("kotae");
    
    const $progress = document.getElementById("progress");
    
    let count = 0;
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;
    let n5 = 0;
    let n6 = 0;
    let a = 0;
    let p = 0;
    let pb = 0;
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
        n4 = 0;
        n5 = 0;
        n6 = 0;
        a = 0;
        p = 0;
        pb = 0;
        $kotae.value = "";
        $mondai.innerText = "";
    };

    function switchdisplay(){
        $kotae.style.display = "block";
        $progress.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $step.style.display = "none";
        $startBtn.style.display = "none";
    };

    function defaultdisplay(){
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
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            n2 = getRandom(11, 19);
            a = getRandom(11, 19);
            n1 = n2 + a;
            switch(p){
                case 1:
                    $mondai.innerText = n2 + `＋□` + `＝` + n1;
                    break;
                case 2:
                    $mondai.innerText = `□＋` + n2 + `＝` + n1;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count = mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            n1 = getRandom(3, 9);
            n3 = getRandom(1, 8);
            n2 = getRandom(1, n1 - 2);
            n4 = getRandom(n3 + 1, 9);
            n1 = n1 * 10 + n3;
            n2 = n2 * 10 + n4;
            a = n1 - n2;
            n1 = n2 + a;
            switch(p){
                case 1:
                    $mondai.innerText = n2 + `＋□` + `＝` + n1;
                    break;
                case 2:
                    $mondai.innerText = `□＋` + n2 + `＝` + n1;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count = mondaiNum){
            closing();
        };
    };

    function step3Setup(){
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            switch(p){
                case 1:
                    n1 = getRandom(11, 19);
                    a = getRandom(11, 19);
                    n2 = n1 + a;
                    $mondai.innerText = n2 + `－□` + `＝` + n1;
                    break;
                case 2:
                    n1 = getRandom(11, 19);
                    n2 = getRandom(11, 19);
                    a = n1 + n2;
                    $mondai.innerText = `□－` + n2 + `＝` + n1;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count = mondaiNum){
            closing();
        };
    };
    
    function step4Setup(){
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            switch(p){
                case 1:
                    n1 = getRandom(3, 9);
                    n3 = getRandom(1, 8);
                    n2 = getRandom(1, n1 - 2);
                    n4 = getRandom(n3 + 1, 9);
                    n1 = n1 * 10 + n3;
                    n2 = n2 * 10 + n4;
                    a = n1 - n2;
                    n1 = n2 + a;
                    $mondai.innerText = n1 + `－□` + `＝` + n2;
                    break;
                case 2:
                    n5 = getRandom(3, 9);
                    n6 = getRandom(1, 8);
                    n2 = getRandom(1, n5 - 2);
                    n4 = getRandom(n6 + 1, 9);
                    a = n5 * 10 + n6;
                    n2 = n2 * 10 + n4;
                    n1 = a - n2;
                    $mondai.innerText = `□－` + n2 + `＝` + n1;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count = mondaiNum){
            closing();
        };
    };

    function step5Setup(){
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            n1 = getRandom(2, 9);
            a = getRandom(2, 9);
            n2 = n1 * a;
            switch(p){
                case 1:
                    $mondai.innerText = n1 + `×□＝` +  n2;
                    break;
                case 2:
                    $mondai.innerText = `□×` + n1 + `＝` +  n2;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count = mondaiNum){
            closing();
        };
    };

    function step6Setup(){
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            n1 = getRandom(2, 9);
            a = getRandom(10, 19);
            n2 = n1 * a;
            switch(p){
                case 1:
                    $mondai.innerText = n1 + `×□＝` +  n2;
                    break;
                case 2:
                    $mondai.innerText = `□×` + n1 + `＝` +  n2;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count = mondaiNum){
            closing();
        };
    };

    function step7Setup(){
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            switch(p){
                case 1:
                    a = getRandom(2, 9);
                    n2 = getRandom(2, 9);
                    n1 = n2 * a;
                    $mondai.innerText = n1 + `÷□＝` +  n2;
                    break;
                case 2:
                    n1 = getRandom(2, 9);
                    n2 = getRandom(2, 9);
                    a = n1 * n2;
                    $mondai.innerText = `□÷` + n1 + `＝` +  n2;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count = mondaiNum){
            closing();
        };
    };

    function step8Setup(){
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            switch(p){
                case 1:
                    a = getRandom(10, 19);
                    n2 = getRandom(2, 9);
                    n1 = n2 * a;
                    $mondai.innerText = n1 + `÷□＝` +  n2;
                    break;
                case 2:
                    n1 = getRandom(2, 9);
                    n2 = getRandom(10, 19);
                    a = n1 * n2;
                    $mondai.innerText = `□÷` + n1 + `＝` +  n2;
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
                $kotae.value = "";
                $progress.value = count / mondaiNum;
            }, 500);
            count++;
            switchSetup($step.value);
        };
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
    
gyakusan1();