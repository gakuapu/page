function anzan_basic2(){
    
    //1～countMaxまでのランダム配列（randoms）の生成
    let countMax = 12;
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

    const $kekka = document.getElementById("kekka");
    const $recommend = document.getElementById("recommend");
    const $recommendList = document.getElementById("recommend-list");

    const $backToStartBtn = document.getElementById("back-to-start-btn");
    
    let count = 0;
    let seikaiNum = 0;
    let n = 0;
    let n1 = 0;
    let n11 = 0;
    let n12 = 0;
    let n2 = 0;
    let n21 = 0;
    let n22 = 0;
    let n3 = 0;
    let n4 = [];
    let a = 0;
    let p = 0;
    let nb = 0;
    let tb = 1;

    let mistakes = [];
    let mistakesR = [];
    
    //timerBar↓
    let timer1;

    function insideTimer1(){
        tb = tb - 500/10000;
        $timerBar.value = tb;
        if (tb < 0){
            mistakes.push(randoms[count] % 6);
            clearInterval(timer1);
            $kotae.value = "";
            count++;
            $progress.value = count / countMax;
            if (count < countMax){
                switchSetup(randoms[count] % 6);
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
        seikaiNum = 0;
        n = 0;
        n1 = 0;
        n11 = 0;
        n12 = 0;
        n2 = 0;
        n21 = 0;
        n22 = 0;
        n3 = 0;
        n4.length = 0;
        a = 0;
        p = 0;
        randoms.length = 0;
        mistakes.length = 0;
        mistakesR.length = 0;
        $kotae.value = "";
        $mondai.innerText = "";
        $mondai0.innerText = "";
    };

    function defaultrecommend(){
        $kekka.innerText = "";
        $recommend.innerText = "";
        while($recommendList.firstChild){
            $recommendList.removeChild($recommendList.firstChild);
        };
    };

    function switchdisplay(){
        $kotae.style.display = "block";
        $progress.style.display = "block";
        $timerBar.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $startBtn.style.display = "none";
        $backToStartBtn.style.display = "none";
    };

    function defaultdisplay(){
        $kotae.style.display = "none";
        $progress.style.display = "none";
        $timerBar.style.display = "none";
        $eraseBtn.style.display = "none";
        $resetBtn.style.display = "none";
        $startBtn.style.display = "block";
        $backToStartBtn.style.display = "none";
        clearInterval(timer1);
    };

    function recommenddisplay(){
        $kotae.style.display = "none";
        $progress.style.display = "none";
        $timerBar.style.display = "none";
        $eraseBtn.style.display = "none";
        $resetBtn.style.display = "none";
        $startBtn.style.display = "none";
        $backToStartBtn.style.display = "block";
        clearInterval(timer1);
    };

    function asc(a, b){ //昇順に並べ替え
        return(a - b);
    };

    function displayrecommend(mt){
        if (mt.length == 0){
            $recommend.innerText = `全問正解！`;
        } else {
            $recommend.innerText = `まちがえた問題の練習ドリル`;
            mistakesR = mt.filter((element, index) => mt.indexOf(element) === index); //mistakesから重複排除
            mistakesR.sort(asc); //昇順に並べ替え
            for (let j = 0; j < mistakesR.length; j++){
                if(mistakesR[j] == 0){
                    let li0 = document.createElement(`li`);
                    li0.classList.add(`recommend-li`);
                    li0.innerHTML = `<a href="anzan14.html">順番を工夫する足し算の練習</a>`;
                    $recommendList.appendChild(li0);
                };
                if(mistakesR[j] == 1){
                    let li1 = document.createElement(`li`);
                    li1.classList.add(`recommend-li`);
                    li1.innerHTML = `<a href="anzan11.html">キリがいい数で計算してから調整する暗算の練習（足し算・引き算）</a>`;
                    $recommendList.appendChild(li1);
                };
                if(mistakesR[j] == 2){
                    let li2 = document.createElement(`li`);
                    li2.classList.add(`recommend-li`);
                    li2.innerHTML = `<a href="anzan12.html">キリがいい数で計算してから調整する暗算の練習（かけ算）</a>`;
                    $recommendList.appendChild(li2);
                };
                if(mistakesR[j] == 3){
                    let li3 = document.createElement(`li`);
                    li3.classList.add(`recommend-li`);
                    li3.innerHTML = `<a href="anzan15.html">先に10や100を作るかけ算の練習</a>`;
                    $recommendList.appendChild(li3);
                };
                if(mistakesR[j] == 4){
                    let li4 = document.createElement(`li`);
                    li4.classList.add(`recommend-li`);
                    li4.innerHTML = `<a href="anzan17.html">先にまとめるかけ算の練習</a>`;
                    $recommendList.appendChild(li4);
                };
                if(mistakesR[j] == 5){
                    let li5 = document.createElement(`li`);
                    li5.classList.add(`recommend-li`);
                    li5.innerHTML = `<a href="anzan13.html">大体の平均値を基準に調整する足し算の練習</a>`;
                    $recommendList.appendChild(li5);
                };
            };
        }; 
    };

    function closing(){
        audio2.play();
        $progress.value = 1;
        $kekka.innerText = `【正解数：` + seikaiNum + `問/` + countMax + `問】`;
        displayrecommend(mistakes);
        recommenddisplay();
        defaultlet();
        //alert(`クリアしました`);
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
            seikaiNum++;
            clearInterval(timer1);
            if (count < countMax){
                switchSetup(randoms[count] % 6);
            } else {
                closing();
            };
        };
    };

    function setup0(){
        $mondai0.innerText = `工夫して暗算で計算しましょう`;
        n1 = getRandom(2, 7) * 10 + getRandom(6, 9);
        while (nb == n1){
            n1 = getRandom(2, 7) * 10 + getRandom(6, 9);
        };
        n = getRandom(1, 5) * 100;
        n2 = n - n1;
        n3 = getRandom(0, 2) * 100 + getRandom(2, 7) * 10 + getRandom(5, 9);
        a = n + n3;
        p = getRandom(1, 4);
        switch(p){
            case 1:
                $mondai.innerText = n1 + `＋` + n3 + `＋` + n2 + `＝`;
                break;
            case 2:
                $mondai.innerText = n3 + `＋` + n1 + `＋` + n2 + `＝`;
                break;
            case 3:
                $mondai.innerText = n2 + `＋` + n3 + `＋` + n1 + `＝`;
                break;
            case 4:
                $mondai.innerText = n3 + `＋` + n2 + `＋` + n1 + `＝`;
                break;
            default:
                alert(`リロードして下さい`);
        };
        nb = n1;
    };

    function setup1(){
        $mondai0.innerText = `工夫して暗算で計算しましょう`;
        p = getRandom(1, 4);
        while (p == nb){
            p = getRandom(1, 4);
        };
        n1 = getRandom(5, 9);
        n2 = getRandom(3, n1 - 2);
        n1 = n1 * 100;
        n2 = n2 * 100;
        n22 = getRandom(1, 3);
        if (p == 1){
            a = n1 - (n2 - n22);
            $mondai.innerText = n1 + `－` + (n2 - n22) + `＝`;
        } else if (p == 2){
            a = n1 - (n2 + n22);
            $mondai.innerText = n1 + `－` + (n2 + n22) + `＝`;
        } else {
            n12 = getRandom(1, 3);
            a = (n1 + n12) - (n2 - n22);
            $mondai.innerText = (n1 + n12) + `－` + (n2 - n22) + `＝`;
        };
        nb = p;
    };

    function setup2(){
        $mondai0.innerText = `工夫して暗算で計算しましょう`;
        n1 = getRandom(2, 9) * 100;
        n12 = getRandom(1, 2);
        n2 = getRandom(3, 9);
        a = (n1 - n12) * n2;
        while (a == nb){
            n1 = getRandom(2, 9) * 100;
            n12 = getRandom(1, 2);
            n2 = getRandom(3, 9);
            a = (n1 - n12) * n2;
        };
        $mondai.innerText = (n1 - n12) + `×` + n2 + `＝`;
        nb = a;
    };

    function setup3(){
        $mondai0.innerText = `工夫して暗算で計算しましょう`;
        p = getRandom(1, 3);
        while(p == nb){
            p = getRandom(1, 3);
        };
        switch(p){
            case 1:
                n1 = 5;
                n2 = getRandom(1, 3) * 2;
                n3 = getRandom(0, 1) * 2 + 7;
                break;
            case 2:
                n1 = 15;
                n2 = getRandom(1, 3) * 2;
                n3 = getRandom(0, 1) * 2 + 7;
                break;
            case 3:
                n1 = 25;
                n2 = getRandom(1, 3) * 4;
                n3 = getRandom(1, 4) * 2 + 1;
                while(n3 % 5 == 0){
                    n3 = getRandom(1, 4) * 2 + 1;
                };
                break;
            default:
                alert(`リロードして下さい`);
        };
        a = n1 * n2 * n3;
        let q = getRandom(1, 4);
        switch(q){
            case 1:
                $mondai.innerText = n1 + `×` + n3 + `×` + n2 + `＝`;
                break;
            case 2:
                $mondai.innerText = n3 + `×` + n1 + `×` + n2 + `＝`;
                break;
            case 3:
                $mondai.innerText = n3 + `×` + n2 + `×` + n1 + `＝`;
                break;
            case 4:
                $mondai.innerText = n2 + `×` + n3 + `×` + n1 + `＝`;
                break;
            default:
                alert(`リロードして下さい`);
        };
        nb = p;
    };

    function setup4(){
        $mondai0.innerText = `工夫して暗算で計算しましょう`;
        p = getRandom(1, 3);
        while(p == nb){
            p = getRandom(1, 3);
        };
        n1 = getRandom(2, 5) * 10;
        n2 = getRandom(6, 15);
        n11 = getRandom(2, n1 - 2);
        n12 = n1 - n11;
        n21 = getRandom(2, n2 - 2);
        n22 = n2 - n21;
        a = n1 * n2;
        $mondai.innerText = n11 + `×` + n21 + `＋` + n11 + `×` + n22 + `＋` + n12 + `×` + n2 + `＝`;
        nb = p;
    };

    function setup5(){
        $mondai0.innerText = `工夫して暗算で計算しましょう`;
        n = 100;
        a = n * 5;
        n1 = getRandom(3, 5);
        while (n1 == nb){
            n1 = getRandom(3, 5);
        };
        for (let i = 0; i < 5; i++){
            p = Math.random(0, 1);
            if (p > 0.5){
                p = 1;
            } else {
                p = -1;
            };
            n4[i] = p * getRandom(1, n1);
                a = a + n4[i];
        };
        $mondai.innerText = (n + n4[0]) + `＋` + (n + n4[1]) + `＋` + (n + n4[2]) + `＋` + (n + n4[3]) + `＋` + (n + n4[4]) +`＝`;
        nb = n1;
    };

    $kotae.addEventListener("input", () => {
        checkAnswer();
    });

    $startBtn.addEventListener("click", () => {
        switchdisplay();
        defaultlet();
        $progress.value = 0;
        generateRandoms();
        switchSetup(randoms[0] % 6);
    });
    
    $eraseBtn.addEventListener("click", () => {
        $kotae.value = "";
    });
    
    $resetBtn.addEventListener("click", () => {
        defaultdisplay();
        defaultlet();
        defaultrecommend();
        $progress.value = 0;
    });
    
    $backToStartBtn.addEventListener("click", () => {
        defaultdisplay();
        defaultlet();
        defaultrecommend();
        $progress.value = 0;
    });

};
    
anzan_basic2();