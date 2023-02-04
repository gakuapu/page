function anzan4(){
    
    //1～countMaxまでのランダム配列（randoms）の生成
    let countMax = 8;
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
    const $kotae = document.getElementById("kotae");
    const $dot = document.getElementById("dot");
    
    let count = 0;
    let a = 0;
    let kv = ""; //0xとxを区別
    
    function defaultlet(){
        count = 0;
        randoms.length = 0; //配列の要素を全て削除
        a = 0;
        kv = ""; //0xとxを区別
        $kotae.value = "";
        $mondai.innerText = "";
    };

    function switchdisplay(){
        $kotae.style.display = "inline-block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $step.style.display = "none";
        $startBtn.style.display = "none";
    };

    function defaultdisplay(){
        $kotae.style.display = "none";
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
            case "3":
                step3Setup();
                break;
            default:
                alert(`リロードして下さい`);
        };
    };

    function checkAnswer(){
        if (kv == a){ //0xとxを区別
            kv = ""; //0xとxを区別
            setTimeout(() => {
                audio1.play();
                $kotae.value = "";
            }, 500);
            count++;
            switchSetup($step.value);
        };
    };

    function step1Setup(){
        if (count < countMax - 1){
            $dot.innerText = `0.`;
            a = 125 * (count + 1);
            if (a % 100 == 0){
                a = a / 100;
                a = a + 10; //0xとxを区別
            } else if (a % 10 == 0){
                a = a / 10;
                a = a + 100; //0xとxを区別
            } else {
                a = a + 1000; //0xとxを区別
            };
            $mondai.innerText = 0.125 + `×` + (count + 1) + `＝`;
        } else if (count == countMax - 1){
            $dot.innerText = "";
            a = 1;
            a = 1 + 10; //0xとxを区別
            $mondai.innerText = 0.125 + `×` + (count + 1) + `＝`;
        } else if (count == countMax){
            closing();
        };
    };

    function step2Setup(){
        if (count < countMax){
            if (randoms[count] == 8){
                $dot.innerText = "";
                a = 1;
                a = 1 + 10; //0xとxを区別
                $mondai.innerText = 0.125 + `×` + randoms[count] + `＝`;
            } else {
                $dot.innerText = `0.`;
                a = 125 * randoms[count];
                if (a % 100 == 0){
                    a = a / 100;
                    a = a + 10; //0xとxを区別
                } else if (a % 10 == 0){
                    a = a / 10;
                    a = a + 100; //0xとxを区別
                } else {
                    a = a + 1000; //0xとxを区別
                };
                $mondai.innerText = 0.125 + `×` + randoms[count] + `＝`;
            };
        } else if (count == countMax){
            closing();
        };
    };

    function step3Setup(){
        if (count < countMax){
            if (randoms[count] == 8){
                count++;
                switchSetup($step.value);
            } else {
                $dot.innerText = `0.`;
                a = 125 * randoms[count];
                if (a % 100 == 0){
                    a = a / 100;
                    a = a + 10; //0xとxを区別
                } else if (a % 10 == 0){
                    a = a / 10;
                    a = a + 100; //0xとxを区別
                } else {
                    a = a + 1000; //0xとxを区別
                };
                $mondai.innerText = randoms[count] + `÷8＝`;
            };
        } else if (count == countMax){
            closing();
        };
    };

    $kotae.addEventListener("input", () => {
        if ($kotae.value != ""){ //0xとxを区別
            kv = "1" + $kotae.value;
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
        $kotae.value = "";
    });
    
    $resetBtn.addEventListener("click", () => {
        defaultdisplay();
        defaultlet();
    });
    
};
    
anzan4();