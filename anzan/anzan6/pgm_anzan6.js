function anzan6(){
    
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
    let a = 0;
    let ab = 0;
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
            default:
                alert(`リロードして下さい`);
        };
    };

    function step1Setup(){
        if (count < mondaiNum){
            ab = a;
            n2 = getRandom(1, 9);
            n1 = getRandom(1, 8);
            a = 100 - n1 * 10 - n2;
            while (a == ab){
                n2 = getRandom(1, 9);
                n1 = getRandom(1, 8);
                a = 100 - n1 * 10 - n2;
            };
            $mondai.innerText = 100 + `－` + (100 - a) + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };
    
    function step2Setup(){
        if (count < mondaiNum){
            ab = a;
            n2 = getRandom(1, 9);
            n1 = getRandom(1, 98)
            a = 1000 - n1 * 10 - n2;
            while (a == ab){
                n2 = getRandom(1, 9);
                n1 = getRandom(1, 98)
                a = 1000 - n1 * 10 - n2;
            };
            $mondai.innerText = 1000 + `－` + (1000 - a) + `＝`;
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
    
anzan6();