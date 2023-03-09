function mainichi1(){
    
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
    let nb = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;
    let n5 = 0;
    let a = 0;
    let p = 0;
    let q = 0;
    let mondaiNum = 10;
    
    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };
    
    function defaultlet(){
        count = 0;
        n1 = 0;
        nb = 0;
        n2 = 0;
        n3 = 0;
        n4 = 0;
        n5 = 0;
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
        $memoHyojiBtn.style.display = "block";//計算メモ
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

    function setup(){
        if (count < mondaiNum){
            nb = n1;
            n1 = getRandom(2, 9);
            while (n1 == nb) {
                n1 = getRandom(2, 9);
            };
            n2 = getRandom(2, 9);
            while (n1 * n2 < 11) {
                n2 = getRandom(2, 9);
            };
            n4 = Math.floor(n1 * n2 / 10); //n1 * n2の10の位
            n5 = n1 * n2 - n4 * 10; //n1 * n2の1の位
            p = getRandom(0, 1);
            switch (p) {
                case 0:
                    q = getRandom(0, 1);
                    if (q == 0) {
                        n3 = (10 - n4) * 10 + (0, n5);
                    } else {
                        n3 = getRandom(1, 9 - n4) * 10 + getRandom(10 - n5 + 1, 9);
                    };
                    a = n1 * n2 + n3;
                    $mondai.innerText = n1 + `×` + n2 + `＋` + n3 + `＝`;
                    break;
                case 1:
                    q = getRandom(0, 2);
                    if (q == 0) {
                        n3 = getRandom(11, n1 * n2 - 1);
                        while (n3 % 10 == 0){
                            n3 = getRandom(11, n1 * n2 - 1);
                        };
                    } else {
                        n3 = getRandom(0, n4 - 1) * 10 + getRandom(n5 + 1, 9);
                    };
                    a = n1 * n2 - n3;
                    $mondai.innerText = n1 + `×` + n2 + `－` + n3 + `＝`;
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
    
mainichi1();