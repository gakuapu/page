function anzan14(){
    
    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $kotae = document.getElementById("kotae");
    
    const $progress = document.getElementById("progress");
    
    let count = 0;
    let n = 0;
    let n1 = 0;
    let n1b = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;
    let p = 0;
    let a = 0;
    let mondaiNum = 10;
    
    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };
    
    function defaultlet(){
        count = 0;
        n = 0;
        n1 = 0;
        n1b = 0;
        n2 = 0;
        n3 = 0;
        n4 = 0;
        p = 0;
        a = 0;
        $kotae.value = "";
        $mondai.innerText = "";
    };

    function switchdisplay(){
        $kotae.style.display = "block";
        $progress.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $startBtn.style.display = "none";
        $step.style.display = "none";
    };

    function defaultdisplay(){
        $kotae.style.display = "none";
        $progress.style.display = "none";
        $eraseBtn.style.display = "none";
        $resetBtn.style.display = "none";
        $startBtn.style.display = "block";
        $step.style.display = "block";
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
            default:
                alert(`リロードして下さい`);
        };
    };

    function step1Setup(){
        if (count < mondaiNum){
            n1b = n1;
            n1 = getRandom(2, 7) * 10 + getRandom(6, 9);
            while (n1b == n1){
                n1 = getRandom(2, 7) * 10 + getRandom(6, 9);
            };
            n2 = 100 - n1;
            n3 = getRandom(2, 7) * 10 + getRandom(5, 9);
            a = 100 + n3;
            p = getRandom(1, 2);
            switch(p){
                case 1:
                    $mondai.innerText = n1 + `＋` + n3 + `＋` + n2 + `＝`;
                    break;
                case 2:
                    $mondai.innerText = n3 + `＋` + n1 + `＋` + n2 + `＝`;
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
            n1b = n1;
            n1 = getRandom(2, 7) * 10 + getRandom(6, 9);
            while (n1b == n1){
                n1 = getRandom(2, 7) * 10 + getRandom(6, 9);
            };
            n = getRandom(1, 5) * 100;
            n2 = n - n1;
            n3 = getRandom(0, 2) * 100 + getRandom(2, 7) * 10 + getRandom(5, 9);
            a = n + n3;
            p = getRandom(1, 4);
            switch(p){
                case 1:
                    $mondai.innerText = n1 + `＋` + n3 + `＋` + n2 + `＝`;
                    break;
                case 2:
                    $mondai.innerText = n3 + `＋` + n1 + `＋` + n2 + `＝`;
                    break;
                case 3:
                    $mondai.innerText = n2 + `＋` + n3 + `＋` + n1 + `＝`;
                    break;
                case 4:
                    $mondai.innerText = n3 + `＋` + n2 + `＋` + n1 + `＝`;
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
            n1b = n1;
            n1 = getRandom (3, 9)
            n2 = getRandom (1, n1 - 2) * 10 + getRandom(1, 9);
            n1 = n1 * 10 - n2;
            while(n1 == n1b){
                n1 = getRandom (3, 9)
                n2 = getRandom (1, n1 - 2) * 10 + getRandom(1, 9);
                n1 = n1 * 10 - n2;
            };
            n3 = getRandom (3, 9);
            n4 = getRandom (1, n3 - 2) * 10 + getRandom(1, 9);
            n3 = n3 * 10 - n4;
            a = n1 + n2 + n3 + n4;
            p = getRandom(1, 2);
            switch(p){
                case 1:
                    $mondai.innerText = n1 + `＋` + n3 + `＋` + n2 + `＋` + n4 + `＝`;
                    break;
                case 2:
                    $mondai.innerText = n1 + `＋` + n3 + `＋` + n4 + `＋` + n2 + `＝`;
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
    
anzan14();