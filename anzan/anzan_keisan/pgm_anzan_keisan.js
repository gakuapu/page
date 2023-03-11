function anzan_keisan(){
    
    //1～countMaxまでのランダム配列（randoms）の生成
    let countMax = 10;
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
    let n1 = 0;
    let nb = 0;
    let n11 = 0;
    let n12 = 0;
    let n2 = 0;
    let n21 = 0;
    let n22 = 0;
    let a = 0;
    let a2 = 0;
    let tb = 1;

    let mistakes = [];
    let mistakesR = [];

    //timerBar↓
    let timer1;

    function insideTimer1(){
        tb = tb - 500/10000;
        $timerBar.value = tb;
        if (tb < 0){
            mistakes.push(randoms[count] % 5);
            clearInterval(timer1);
            $kotae.value = "";
            count++;
            $progress.value = count / countMax;
            if (count < countMax){
                switchSetup(randoms[count] % 5);
            } else {
                closing();
            };
        };
    };

    function moveTimerBar(){
        tb = 1;
        $timerBar.value = tb;
        timer1 = setInterval(insideTimer1, 500);
    };
    //timerBar↑

    function defaultlet(){
        count = 0;
        seikaiNum = 0;
        n1 = 0;
        n11 = 0;
        n12 = 0;
        n2 = 0;
        n21 = 0;
        n22 = 0;
        a = 0;
        a2 = 0;
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
                    li0.innerHTML = `<a href="anzan7.html">足し算を「前」から計算する暗算練習ドリル</a>`;
                    $recommendList.appendChild(li0);
                };
                if(mistakesR[j] == 1){
                    let li1 = document.createElement(`li`);
                    li1.classList.add(`recommend-li`);
                    li1.innerHTML = `<a href="anzan9.html">引き算を「前」から計算する暗算練習ドリル</a>`;
                    $recommendList.appendChild(li1);
                };
                if(mistakesR[j] == 2){
                    let li2 = document.createElement(`li`);
                    li2.classList.add(`recommend-li`);
                    li2.innerHTML = `<a href="anzan8.html">かけ算を「前」から計算する暗算練習ドリル</a>`;
                    $recommendList.appendChild(li2);
                };
                if(mistakesR[j] == 3){
                    let li3 = document.createElement(`li`);
                    li3.classList.add(`recommend-li`);
                    li3.innerHTML = `<a href="anzan6.html">100・1000からの引き算の暗算練習ドリル</a>`;
                    $recommendList.appendChild(li3);
                };
                if(mistakesR[j] == 4){
                    let li4 = document.createElement(`li`);
                    li4.classList.add(`recommend-li`);
                    li4.innerHTML = `<a href="anzan3.html">11から20までの同じ数を2回かけるかけ算</a>`;
                    $recommendList.appendChild(li4);
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
                switchSetup(randoms[count] % 5);
            } else {
                closing();
            };
        };
    };

    function setup0(){
        $mondai0.innerText = `暗算で「前」から計算しましょう`;
        n12 = getRandom(2, 9);
        while (n12 == nb){
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
        nb = n12;
    };

    function setup1(){
        $mondai0.innerText = `暗算で「前」から計算しましょう`;
        n11 = getRandom(4, 9);
        while (n11 == nb){
            n11 = getRandom(4, 9);
        };
        n21 = getRandom(2, n11 - 2);
        n12 = getRandom(0, 8);
        n22 = getRandom (n12 + 1, 9);
        n1 = n11 * 10 + n12;
        n2 = n21 * 10 + n22;
        a = n1 - n2;
        $mondai.innerText = n1 + `－` + n2 + `＝`;
        nb = n11;
    };

    function setup2(){
        $mondai0.innerText = `暗算で「前」から計算しましょう`;
        n2 = getRandom(2, 9);
        while (n2 == nb){
            n2 = getRandom(2, 9);
        };
        n11 = getRandom(2, 9);
        n12 = getRandom(2, 9);
        n1 = n11 * 10 + n12;
        a = n1 * n2;
        $mondai.innerText = n1 + `×` + n2 + `＝`;
        nb = n2;
    };

    function setup3(){
        $mondai0.innerText = `暗算で「前」から計算しましょう`;
        n2 = getRandom(1, 9);
        while (n2 == nb){
            n2 = getRandom(1, 9);
        };
        let p = getRandom(1, 2);
        if (p == 1){
            n1 = getRandom(1, 8);
            a = 100 - n1 * 10 - n2;
            $mondai.innerText = 100 + `－` + (100 - a) + `＝`;
        } else {
            n1 = getRandom(1, 99);
            a = 1000 - n1 * 10 - n2;
            $mondai.innerText = 1000 + `－` + (1000 - a) + `＝`;
        };
        nb = n2;
    };

    function setup4(){
        $mondai0.innerText = `暗算で計算しましょう`;
        n1 = getRandom(11, 19);
        while (n1 == nb){
            n1 = getRandom(11, 19);
        };
        a = n1 ** 2;
        $mondai.innerText = n1 + `×` + n1 + `＝`;
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
        switchSetup(randoms[0] % 5);
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
    
anzan_keisan();