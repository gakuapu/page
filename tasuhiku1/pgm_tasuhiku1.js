function tasuhiku1(){
    
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
    let mondaiNum = 20;
    
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
    
    //前と同じにならないはず
    function step1Setup(){
        if (count < mondaiNum){
            ab = a;
            a = getRandom(1, 10);
            while (a == ab){
                a = getRandom(1, 10);
            };
            n1 = getRandom(0, a);
            n2 = a - n1;
            $mondai.innerText = n1 + `＋` + n2 + `＝`;
        } else if (count = mondaiNum){
            closing();
        };
    };
    
    function step2Setup(){
        if (count < mondaiNum){
            n1 = getRandom(0, 10);
            a = 10 - n1;
            $mondai.innerText = n1 + `＋` + `□` + `＝` + 10;
        } else if (count = mondaiNum)
            closing();
    };
    
    function step3Setup(){
        if (count < mondaiNum){
            n3 = getRandom(0, 8);
            n2 = getRandom(n3 + 1, 9);
            a = 10 + n3;
            n1 = a - n2;
            $mondai.innerText = n1 + `＋` + n2 + `＝`;
        } else if (count = mondaiNum){
            closing();
        };
    };
    
    function step4Setup(){
        if (count < mondaiNum){
            n1 = getRandom(1, 9);
            n2 = getRandom(n1, 10);
            a = n2 - n1;
            $mondai.innerText = n1 + `＋` + `□` + `＝` + n2;
        } else if (count = mondaiNum)
            closing();
    };
    
    function step5Setup(){
        if (count < mondaiNum){
            n1 = getRandom(1, 9);
            n2 = getRandom(0, n1);
            a = n1 - n2;
            $mondai.innerText = n1 + `－` + n2 + `＝`;
        } else if (count = mondaiNum){
            closing();
        };
    };
    
    function step6Setup(){
        if (count < mondaiNum){
            n1 = getRandom(1,9);
            a = 10 - n1;
            $mondai.innerText = 10 + `－` + n1 + `＝`; 
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
                case "4":
                    step4Setup();
                    break;
                case "5":
                    step5Setup();
                    break;
                case "6":
                    step6Setup();
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        };
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
            case "4":
                step4Setup();
                break;
            case "5":
                step5Setup();
                break;
            case "6":
                step6Setup();
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
    
tasuhiku1();