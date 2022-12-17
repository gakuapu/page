function anzan2(){
    
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
    
    let count = 0;
    let a = 0;
    
    function defaultlet(){
        count = 0;
        randoms.length = 0; //配列の要素を全て削除
        a = 0;
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
        if ($kotae.value == a){
            setTimeout(() => {
                audio1.play();
                $kotae.value = "";
            }, 500);
            count++;
            switchSetup($step.value);
        };
    };

    function step1Setup(){
        if (count < countMax){
            a = 45 * (count + 1);
            $mondai.innerText = 45 + `×` + (count + 1) + `＝`;
        } else if (count == countMax){
            closing();
        };
    };

    function step2Setup(){
        if (count < countMax){
            a = 45 * randoms[count];
            $mondai.innerText = 45 + `×` + randoms[count] + `＝`;
        } else if (count == countMax){
            closing();
        };
    };

    $kotae.addEventListener("input", () => {
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
    
anzan2();