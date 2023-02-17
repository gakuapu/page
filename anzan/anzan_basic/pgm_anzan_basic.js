function anzan_basic(){
    
    //1～countMaxまでのランダム配列（randoms）の生成
    let countMax = 20;
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

    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai0 = document.getElementById("mondai0");
    const $mondai = document.getElementById("mondai");
    const $kotae = document.getElementById("kotae");

    const $progress = document.getElementById("progress");
    const $timerBar = document.getElementById("timer-bar");
    
    let count = 0;
    let n1 = 0;
    let nb = 0; //同じ問題が出てこないようにする
    let n11 = 0;
    let n12 = 0;
    let n2 = 0;
    let n21 = 0;
    let n22 = 0;
    let n3 = 0;
    let a = 0;
    let a2 = 0;
    let p = 0;
    let tb = 1;
    
    //timerBar↓
    let timer1;

    function insideTimer1(){
        tb = tb - 500/10000;
        $timerBar.value = tb;
        console.log(tb);
        if (tb < 0){
            clearInterval(timer1);
            $kotae.value = "";
            $progress.value = count / countMax;
            count++;
            if (count < countMax){
                switchSetup(randoms[count] % 10);
            } else {
                closing();
            };
        };
    };

    function moveTimerBar(){
        tb = 1;
        timer1 = setInterval(insideTimer1, 500);
    };
    //timerBar↑

    function defaultlet(){
        count = 0;
        n1 = 0;
        n11 = 0;
        n12 = 0;
        n2 = 0;
        n21 = 0;
        n22 = 0;
        n3 = 0;
        a = 0;
        a2 = 0;
        p = 0;
        randoms.length = 0; //配列の要素を全て削除
        $kotae.value = "";
        $mondai.innerText = "";
        $mondai0.innerText = "";
    };

    function switchdisplay(){
        $kotae.style.display = "block";
        $progress.style.display = "block";
        $timerBar.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $startBtn.style.display = "none";
    };

    function defaultdisplay(){
        $kotae.style.display = "none";
        $progress.style.display = "none";
        $timerBar.style.display = "none";
        $eraseBtn.style.display = "none";
        $resetBtn.style.display = "none";
        $startBtn.style.display = "block";
        clearInterval(timer1);
    };

    function closing(){
        audio2.play();
        $progress.value = 1;
        defaultdisplay();
        defaultlet();
        alert(`クリアしました`);
        clearInterval(timer1);
    };

    function switchSetup(setupValue){
        moveTimerBar();
        switch(setupValue){
            case 0:
                setup0();
                break;
            case 1:
                setup1();
                break;
            case 2:
                setup2();
                break;
            case 3:
                setup3();
                break;
            case 4:
                setup4();
                break;
            case 5:
                setup5();
                break;
            case 6:
                setup6();
                break;
            case 7:
                setup7();
                break;
            case 8:
                setup8();
                break;
            case 9:
                setup9();
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
                $progress.value = count / countMax;
            }, 500);
            count++;
            clearInterval(timer1);
            if (count < countMax){
                switchSetup(randoms[count] % 10);
            } else {
                closing();
            };
        };
    };

    function setup0(){
        $mondai0.innerText = `暗算で前から計算しましょう`;
        n12 = getRandom(2, 9);
        while (n12 == nb){ //同じ問題が出てこないようにする
            n12 = getRandom(2, 9);
        };
        n12 = getRandom(2, 9);
        a2 = getRandom(1, n12 - 1);
        n11 = getRandom(2, 9);
        n21 = getRandom(2, 9);
        a = (n11 + n21 + 1) * 10 + a2;
        n1 = n11 * 10 + n12;
        n22 = a2 + 10 - n12;
        n2 = n21 * 10 + n22;
        $mondai.innerText = n1 + `＋` + n2 + `＝`;
        nb = n12; //同じ問題が出てこないようにする
    };

    function setup1(){
        $mondai0.innerText = `暗算で前から計算しましょう`;
        n11 = getRandom(4, 9);
        while (n11 == nb){ //同じ問題が出てこないようにする
            n11 = getRandom(4, 9);
        };
        n21 = getRandom(2, n11 - 2);
        n12 = getRandom(0, 8);
        n22 = getRandom (n12 + 1, 9);
        n1 = n11 * 10 + n12;
        n2 = n21 * 10 + n22;
        a = n1 - n2;
        $mondai.innerText = n1 + `－` + n2 + `＝`;
        nb = n11; //同じ問題が出てこないようにする
    };

    function setup2(){
        $mondai0.innerText = `暗算で前から計算しましょう`;
        n2 = getRandom(2, 9);
        while (n2 == nb){ //同じ問題が出てこないようにする
            n2 = getRandom(2, 9);
        };
        n11 = getRandom(2, 9);
        n12 = getRandom(2, 9);
        n1 = n11 * 10 + n12;
        a = n1 * n2;
        $mondai.innerText = n1 + `×` + n2 + `＝`;
        nb = n2; //同じ問題が出てこないようにする
    };

    function setup3(){
        $mondai0.innerText = `暗算で前から計算しましょう`;
        n2 = getRandom(1, 9);
        while (n2 == nb){ //同じ問題が出てこないようにする
            n2 = getRandom(1, 9);
        };
        n1 = getRandom(1, 8);
        a = 100 - n1 * 10 - n2;
        $mondai.innerText = 100 + `－` + (100 - a) + `＝`;
        nb = n2; //同じ問題が出てこないようにする
    };

    function setup4(){
        $mondai0.innerText = `暗算で計算しましょう`;
        n1 = getRandom(11, 19);
        while (n1 == nb){ //同じ問題が出てこないようにする
            n1 = getRandom(11, 19);
        };
        a = n1 ** 2;
        $mondai.innerText = n1 + `×` + n1 + `＝`;
        nb = n1; //同じ問題が出てこないようにする
    };

    function setup5(){
        $mondai0.innerText = `工夫して暗算で計算しましょう`;
        n1 = getRandom(2, 7) * 10 + getRandom(6, 9);
        while (n1 == nb){ //同じ問題が出てこないようにする
            n1 = getRandom(2, 7) * 10 + getRandom(6, 9);
        };
        n2 = 100 - n1;
        n3 = getRandom(2, 7) * 10 + getRandom(5, 9);
        a = 100 + n3;
        p = getRandom(1, 2);
        switch(p){
            case 1:
                $mondai.innerText = n1 + `＋` + n3 + `＋` + n2 + `＝`;
                break;
            case 2:
                $mondai.innerText = n3 + `＋` + n1 + `＋` + n2 + `＝`;
                break;
            default:
                alert(`リロードして下さい`);
        };
        nb = n1; //同じ問題が出てこないようにする
    };

    function setup6(){
        $mondai0.innerText = `工夫して暗算で計算しましょう`;
        n1 = getRandom(1, 4) * 100;
        while (n1 == nb){ //同じ問題が出てこないようにする
            n1 = getRandom(1, 4) * 100;
        };
        n12 = getRandom(1, 2);
        n2 = getRandom(10, 49) * 10 + getRandom(4, 6);
        a = n1 - n12 + n2;
        p = getRandom(1, 2);
        switch(p){
            case 1:
                $mondai.innerText = (n1 - n12) + `＋` + n2 + `＝`;
                break;
            case 2:
                $mondai.innerText = n2 + `＋` + (n1 - n12) + `＝`;
                break;
            default:
                alert(`リロードして下さい`);
        };
        nb = n1; //同じ問題が出てこないようにする
    };

    function setup7(){
        $mondai0.innerText = `工夫して暗算で計算しましょう`;
        n1 = getRandom(3, 9) * 10;
        while (n1 == nb){ //同じ問題が出てこないようにする
            n1 = getRandom(3, 9) * 10;
        };
        n2 = getRandom(3, 9);
        n11 = getRandom(1, 2);
        a = (n1 - n11) * n2;
        $mondai.innerText = (n1 - n11) + `×` + n2 + `＝`;
        nb = n1; //同じ問題が出てこないようにする
    };

    function setup8(){
        $mondai0.innerText = `工夫して暗算で計算しましょう`;
        p = getRandom(1, 2);
        if (p == 1){
            n3 = getRandom(6, 19);
            while (n3 == nb){ //同じ問題が出てこないようにする
                n3 = getRandom(6, 19);
            };
            n1 = n3 * 2;
            while(n1 % 5 == 0){
                n3 = getRandom(6, 19);
                n1 = n3 * 2;
            };
            a = n1 * 5;
            n2 = 5;
        } else {
            n3 = getRandom(3, 9);
            while (n3 == nb){ //同じ問題が出てこないようにする
                n3 = getRandom(3, 9);
            };
            n1 = n3 * 4;
            while(n1 % 5 == 0){
                n3 = getRandom(3, 9);
                n1 = n3 * 4;
            };
            a = n1 * 25;
            n2 = 25;
        };
        $mondai.innerText = n1 + `×` + n2 + `＝`;
        nb = n3; //同じ問題が出てこないようにする
    };

    function setup9(){
        $mondai0.innerText = `工夫して暗算で計算しましょう`;
        p = getRandom(1, 2);
        n1 = getRandom(1, 3) * 10;
        while (n1 == nb){ //同じ問題が出てこないようにする
            n1 = getRandom(1, 3) * 10;
        };
        n2 = getRandom(2, 9);
        a = n1 * n2;
        switch(p){
            case 1:
                n11 = getRandom(2, n1 - 2);
                n12 = n1 - n11;
                $mondai.innerText = n11 + `×` + n2 + `＋` + n12 + `×` + n2 + `＝`;
                break;
            case 2:
                n12 = getRandom(2, n1 - 2);
                n11 = n1 + n12;
                $mondai.innerText = n11 + `×` + n2 + `－` + n12 + `×` + n2 + `＝`;
                break;
            default:
                alert(`リロードして下さい`);
        };
        nb = n1; //同じ問題が出てこないようにする
    };

    $kotae.addEventListener("input", () => {
        checkAnswer();
    });

    $startBtn.addEventListener("click", () => {
        switchdisplay();
        defaultlet();
        $progress.value = 0;
        generateRandoms();
        switchSetup(randoms[0] % 10);
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
    
anzan_basic();