function shousuu5(){
    
    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $dot = document.getElementById("dot");
    const $kotae1 = document.getElementById("kotae1");
    const $kotae2 = document.getElementById("kotae2");
    const $checkBtn = document.getElementById("check-btn");
    
    const $progress = document.getElementById("progress");
    
    let count = 0;
    let n1 = 0;
    let n2 = 0;
    let a1 = 0;
    let a2 = "";
    let p = 0;
    let pb = 0;
    let q = 0;
    let r = 0;
    let k2v = ""; //0xとxを区別
    let mondaiNum = 10;
    
    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };
    
    function defaultlet(){
        count = 0;
        n1 = 0;
        n2 = 0;
        a1 = 0;
        a2 = "";
        p = 0;
        pb = 0;
        q = 0;
        r = 0;
        k2v = ""; //0xとxを区別
        $kotae1.value = "";
        $kotae2.value = "";
        $dot.innerText = "";
        $mondai.innerText = "";
    };

    function switchdisplay(){
        $kotae1.style.display = "inline-block";
        $checkBtn.style.display = "block";
        $progress.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $startBtn.style.display = "none";
    };

    function defaultdisplay(){
        $kotae1.style.display = "none";
        $kotae2.style.display = "none";
        $dot.innerText = "";
        $checkBtn.style.display = "none";
        $progress.style.display = "none";
        $eraseBtn.style.display = "none";
        $resetBtn.style.display = "none";
        $startBtn.style.display = "block";
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
            pb = p;
            p = getRandom(1, 3);
            while (p == pb){
                p = getRandom(1, 3);
            };
            switch(p){
                case 1:
                    n1 = getRandom(0, 9) * 1000 + getRandom(1, 8) * 100 + getRandom(1, 8) * 10 + getRandom(1, 9);
                    q = getRandom(1, 2);
                    if (q == 1){
                        $kotae2.style.display = "inline-block";
                        $dot.innerText = ".";
                        n2 = Math.round(n1 / 100);
                        a1 = Math.floor(n2 / 10);
                        a2 = n2 - a1 * 10;
                        a2 = a2 + 10; //0xとxを区別
                        n1 = n1 / 1000;
                        r = getRandom(1, 2);
                        if (r == 1){
                            $mondai.innerText = n1 + `の小数第2位を四捨五入するといくつ?`;
                        } else {
                            $mondai.innerText = n1 + `を四捨五入で小数第1位までのがい数にするといくつ?`;
                        };
                    } else { 
                        $kotae2.style.display = "inline-block";
                        $dot.innerText = ".";
                        n2 = Math.round(n1 / 10);
                        a1 = Math.floor(n2 / 100);
                        a2 = n2 - a1 * 100;
                        a2 = a2 + 100; //0xとxを区別
                        n1 = n1 / 1000;
                        r = getRandom(1, 2);
                        if (r == 1){
                            $mondai.innerText = n1 + `の小数第3位を四捨五入するといくつ?`;
                        } else {
                            $mondai.innerText = n1 + `を四捨五入で小数第2位までのがい数にするといくつ?`;
                        };
                    };
                    break;
                case 2:
                    n1 = getRandom(0, 9) * 100 + getRandom(1, 8) * 10 + getRandom(1, 9);
                    q = getRandom(1, 3);
                    if (q == 1){
                        $kotae2.style.display = "none";
                        $dot.innerText = "";
                        a2 = "";
                        a1 = Math.round(n1 / 100);
                        n1 = n1 / 100;
                        $mondai.innerText = n1 + `の小数第1位を四捨五入するといくつ?`;
                    } else {
                        $kotae2.style.display = "inline-block";
                        $dot.innerText = ".";
                        n2 = Math.round(n1 / 10);
                        a1 = Math.floor(n2 / 10);
                        a2 = n2 - a1 * 10;
                        a2 = a2 + 10; //0xとxを区別
                        n1 = n1 / 100;
                        r = getRandom(1, 2);
                        if (r == 1){
                            $mondai.innerText = n1 + `の小数第2位を四捨五入するといくつ?`;
                        } else {
                            $mondai.innerText = n1 + `を四捨五入で小数第1位までのがい数にするといくつ?`;
                        };
                    };
                    break;
                case 3:
                    n1 = getRandom(0, 9) * 10 + getRandom(1, 9);
                    $kotae2.style.display = "none";
                    $dot.innerText = "";
                    a2 = "";
                    a1 = Math.round(n1 / 10);
                    n1 = n1 / 10;
                    $mondai.innerText = n1 + `の小数第1位を四捨五入するといくつ?`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
                    
        } else if (count == mondaiNum){
            closing();
        };
    };

    $kotae2.addEventListener("input", () => {
        if ($kotae2.value != ""){ //0xとxを区別
            k2v = "1" + $kotae2.value;
        };
    });

    $checkBtn.addEventListener("click", () => {
        if ($kotae1.value == a1 && k2v == a2){ //0xとxを区別
            k2v = ""; //0xとxを区別
            setTimeout(() => {
                audio1.play();
                $kotae1.value = "";
                $kotae2.value = "";
                $progress.value = count / mondaiNum;
            }, 500);
            count++;
            setup();
        } else {
            setTimeout(() => {
                audio3.play();
            }, 500);
        };
    });

    $startBtn.addEventListener("click", () => {
        switchdisplay();
        defaultlet();
        $progress.value = 0;
        setup();
    });
    
    $eraseBtn.addEventListener("click", () => {
        $kotae1.value = "";
        $kotae2.value = "";
    });
    
    $resetBtn.addEventListener("click", () => {
        defaultdisplay();
        defaultlet();
        $progress.value = 0;
    });
    
};
    
shousuu5();