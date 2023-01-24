function anzan9(){
    
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
    let n21 = 0;
    let n22 = 0;
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
        n11 = 0;
        n12 = 0;
        n2 = 0;
        n21 = 0;
        n22 = 0;
        a = 0;
        p = 0;
        pb = 0;
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
            pb = p;
            p = getRandom(1, 5);
            while (p == pb){
                p = getRandom(1, 5);
            }
            if (p == 1){
                n11 = getRandom(3, 9);
                n21 = getRandom(2, n11 - 1);
                n12 = getRandom(3, 9);
                n22 = getRandom(2, n12 - 1);
                n1 = n11 * 10 + n12;
                n2 = n21 * 10 + n22;
                a = n1 - n2;
            } else {
                n11 = getRandom(4, 9);
                n21 = getRandom(2, n11 - 2);
                n12 = getRandom(0, 8);
                n22 = getRandom (n12 + 1, 9);
            };
            n1 = n11 * 10 + n12;
            n2 = n21 * 10 + n22;
            a = n1 - n2;
            $mondai.innerText = n1 + `－` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    $kotae.addEventListener("input", () => {
        if ($kotae.value == a){
            setTimeout(() => {
                audio1.play();
                $kotae.value = "";
                $hint.innerText = "";
                $progress.value = count / mondaiNum;
            }, 500);
            count++;
            setup();
        };
    });
    
    $hintBtn.addEventListener("click", () => {
        $hint.innerText = (n11 * 10) + `－` + (n21 * 10) + `は... ` + n12 + `－` + n22 + `は... くり下がりは...`;
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
    
anzan9();