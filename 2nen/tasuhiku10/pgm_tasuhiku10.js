function tasuhiku10(){
    
    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $kotae = document.getElementById("kotae");
    
    const $progress = document.getElementById("progress");
    
    const $memoHyojiBtn = document.getElementById("memohyoji");//計算メモ
    const $memoClearBtn = document.getElementById("memoclear");//計算メモ
    const $memoTable = document.getElementById("memotable");//計算メモ

    let count = 0;
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;
    let n5 = 0;
    let n6 = 0;
    let a = 0;
    let ab = 0;
    let p = 0;
    let q = 0;
    let qb = 0;
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
        q = 0;
        $kotae.value = "";
        $mondai.innerText = "";
    };

    function switchdisplay(){
        $kotae.style.display = "block";
        $progress.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $startBtn.style.display = "none";
    };

    function defaultdisplay(){
        $kotae.style.display = "none";
        $progress.style.display = "none";
        $eraseBtn.style.display = "none";
        $resetBtn.style.display = "none";
        $memoHyojiBtn.style.display = "none";//計算メモ
        $memoClearBtn.style.display = "none";//計算メモ
        $memoTable.style.display = "none";//計算メモ
        $startBtn.style.display = "block";
    };

    function closing(){
        audio2.play();
        $progress.value = 1;
        defaultdisplay();
        defaultlet();
        alert(`クリアしました`);
    };

    function step1Setup(){
        if (count < mondaiNum){
            n3 = getRandom(0, 8);
            n4 = getRandom(3, 9);
            a = n4 * 10 + n3;
            n2 = getRandom(1, n4 - 2) * 10 + getRandom(n3 + 1, 9);
            n1 = a - n2;
            $mondai.innerText = n1 + `＋` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        if (count < mondaiNum){
            p = getRandom(1, 3);
            if (p == 1){
                n5 = getRandom(2, 9);
                n3 = getRandom(1, 9);
                n6 = getRandom(0, n3 - 1);
                a = 100 + n6 * 10 + n5;
                n1 = n3 * 10 + getRandom(1, n5 - 1);
                n2 = a - n1;
            } else {
                n1 = getRandom(1, 9);
                n2 = getRandom(10 - n1, 9);
                n3 = getRandom(1, 9);
                n4 = getRandom(10 - n3, 9);
                n1 = n3 * 10 + n1;
                n2 = n4 * 10 + n2;
                a = n1 + n2;
            };
            $mondai.innerText = n1 + `＋` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step3Setup(){
        if (count < mondaiNum){
            n1 = getRandom(3, 9);
            n3 = getRandom(1, 8);
            n2 = getRandom(2, n1 - 1);
            n4 = getRandom(n3 + 1, 9);
            n1 = n1 * 10 + n3;
            n2 = n2 * 10 + n4;
            a = n1 - n2;
            $mondai.innerText = n1 + `－` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step4Setup(){
        if (count < mondaiNum){
            p = getRandom(1, 3);
            if (p == 1){
                n1 = getRandom(1, 9);
                n2 = getRandom(0, n1 - 1);
                n4 = getRandom(1, 9);
                n3 = getRandom(0, n4 - 1);
                n1 = 100 + n3 * 10 + n1;
                n2 = n4 * 10 + n2;
            } else {
                n2 = getRandom(2, 9);
                n1 = getRandom(1, n2 - 1);
                n4 = getRandom(1, 9);
                n3 = getRandom(0, n4 - 1);
                n1 = 100 + n3 * 10 + n1;
                n2 = n4 * 10 + n2;
            };
            a = n1 - n2;
            $mondai.innerText = n1 + `－` + n2 + `＝`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function setup(){
        $memoHyojiBtn.style.display = "block";//計算メモ
        qb = q;
        q = getRandom(1, 4);
        while(q == qb){
            q = getRandom(1, 4);
        };
        switch(q){
            case 1:
                step1Setup();
                break;
            case 2:
                step2Setup();
                break;
            case 3:
                step3Setup();
                break;
            case 4:
                step4Setup();
                break;
            default:
                alert(`リロードして下さい`);
        };
    };

    $kotae.addEventListener("input", () => {
        if ($kotae.value == a){
            $memoClearBtn.style.display = "none";//計算メモ
            $memoTable.style.display = "none";//計算メモ
            setTimeout(() => {
                audio1.play();
                $kotae.value = "";
                $progress.value = count / mondaiNum;
            }, 500);
            count++;
            setup();
        };
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
    
tasuhiku10();