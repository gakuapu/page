function anzan8(){
    
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
    let n11 = 0;
    let n12 = 0;
    let n2 = 0;
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
        n11 = 0;
        n12 = 0;
        n2 = 0;
        a = 0;
        ab = 0;
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
        $hintBtn.style.display = "block";
    };

    function defaultdisplay(){
        $kotae.style.display = "none";
        $progress.style.display = "none";
        $eraseBtn.style.display = "none";
        $resetBtn.style.display = "none";
        $startBtn.style.display = "block";
        $hintBtn.style.display = "none";
    };

    function closing(){
        audio2.play();
        $progress.value = 1;
        defaultdisplay();
        defaultlet();
        alert(`クリアしました`);
    };

    function setup(){
        if (count < mondaiNum){
            $hintBtn.style.display = "block";
            ab = a;
            n2 = getRandom(2, 9);
            n11 = getRandom(2, 9);
            n12 = getRandom(2, 9);
            n1 = n11 * 10 + n12;
            a = n1 * n2;
            while (a == ab){
                n2 = getRandom(2, 9);
                n11 = getRandom(2, 9);
                n12 = getRandom(2, 9);
                n1 = n11 * 10 + n12;
                a = n1 * n2;
            };
            $mondai.innerText = n1 + `×` + n2 + `＝`;
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
            setup();
        };
    });
    
    $hintBtn.addEventListener("click", () => {
        $hint.innerText = (n11 * 10) + `×` + n2 + `は... そこに` + n12 + `×` + n2 + `を足すと...`;
        $hintBtn.style.display = "none";
    });

    $startBtn.addEventListener("click", () => {
        switchdisplay();
        defaultlet();
        $progress.value = 0;
        setup();
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
    
anzan8();