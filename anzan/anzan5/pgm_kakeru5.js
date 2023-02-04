function anzan5(){

    //1～countMaxまでのランダム配列（randoms）の生成
    let countMax = 9;
    let randoms = [];

    function getRandom(min, max){
    let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
    return randomNum;
    };

    function generateRandoms(){
        for (let i = 1; i <= countMax; i++){
            while(true){
                let rtmp = getRandom(1, countMax);
                if(!randoms.includes(rtmp)){
                    randoms.push(rtmp);
                    break;
                }
            } 
        };
    };

    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $kotae1 = document.getElementById("kotae1");
    const $kotae2 = document.getElementById("kotae2");
    const $dot = document.getElementById("dot");
    
    let count = 0;
    let n = 0;
    let a1 = 0;
    let a2 = 0;
    let k2v = ""; //0xとxを区別
    
    function defaultlet(){
        count = 0;
        n = 0;
        randoms.length = 0; //配列の要素を全て削除
        a1 = 0;
        a2 = 0;
        k2v = ""; //0xとxを区別
        $kotae1.value = "";
        $kotae2.value = "";
        $mondai.innerText = "";
    };

    function switchdisplay(){
        $kotae1.style.display = "inline-block";
        $kotae2.style.display = "inline-block";
        $dot.innerText = `.`;
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $step.style.display = "none";
        $startBtn.style.display = "none";
    };

    function defaultdisplay(){
        $kotae1.style.display = "none";
        $kotae2.style.display = "none";
        $dot.innerText = "";
        $eraseBtn.style.display = "none";
        $resetBtn.style.display = "none";
        $step.style.display = "block";
        $startBtn.style.display = "block";
    };

    function closing(){
        audio2.play();
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
            default:
                alert(`リロードして下さい`);
        };
    };

    function checkAnswer(){
        if ($kotae1.value == a1 && k2v == a2){ //0xとxを区別
            k2v = ""; //0xとxを区別
            setTimeout(() => {
                audio1.play();
                $kotae1.value = "";
                $kotae2.value = "";
            }, 500);
            count++;
            switchSetup($step.value);
        };
    };

    function step1Setup(){
        if (count < countMax){
            n = 3.14 * (count + 1);
            a1 = Math.floor(n);
            a2 = Math.round((n - a1) * 100);
            if (a2 % 10 == 0){
                a2 = a2 / 10;
            };
            if (count == 4){ //0xとxを区別
                a2 = a2 + 10;
            } else {
                a2 = a2 + 100;
            };
            $mondai.innerText = 3.14 + `×` + (count + 1) + `＝`;
        } else if (count == countMax){
            closing();
        };
    };

    function step2Setup(){
        if (count < countMax){
            n = 3.14 * randoms[count];
            a1 = Math.floor(n);
            a2 = Math.round((n - a1) * 100);
            if (a2 % 10 == 0){
                a2 = a2 / 10;
            };
            if (randoms[count] == 5){ //0xとxを区別
                a2 = a2 + 10;
            } else {
                a2 = a2 + 100;
            };
            $mondai.innerText = 3.14 + `×` + randoms[count] + `＝`;
        } else if (count == countMax){
            closing();
        };
    };

    $kotae1.addEventListener("input", () => {
        if ($kotae2.value != ""){ //0xとxを区別
            k2v = "1" + $kotae2.value;
        };
        checkAnswer();
    });
    
    $kotae2.addEventListener("input", () => {
        if ($kotae2.value != ""){ //0xとxを区別
            k2v = "1" + $kotae2.value;
        };
        checkAnswer();
    });

    $startBtn.addEventListener("click", () => {
        switchdisplay();
        defaultlet();
        generateRandoms();
        switchSetup($step.value);
    });
    
    $eraseBtn.addEventListener("click", () => {
        $kotae1.value = "";
        $kotae2.value = "";
    });
    
    $resetBtn.addEventListener("click", () => {
        defaultdisplay();
        defaultlet();
    });
    
};
    
anzan5();