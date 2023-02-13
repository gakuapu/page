function bunsuu2(){
    
    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai0 = document.getElementById("mondai0");
    const $i1 = document.getElementById("i1");
    const $bunsuu1 = document.getElementById("bunsuu1");
    const $c1 = document.getElementById("c1");
    const $m1 = document.getElementById("m1");
    const $kigou1 = document.getElementById("kigou1");
    const $i2 = document.getElementById("i2");
    const $bunsuu2 = document.getElementById("bunsuu2");
    const $c2 = document.getElementById("c2");
    const $m2 = document.getElementById("m2");
    const $kigou2 = document.getElementById("kigou2");
    const $ia = document.getElementById("ia");
    const $bunsuua = document.getElementById("bunsuua");
    const $ca = document.getElementById("ca");
    const $hrkotae = document.getElementById("hrkotae");
    const $ma = document.getElementById("ma");
    
    const $progress = document.getElementById("progress");
    
    const childMaster = [3, 5, 7];

    let count = 0;
    let int1 = 0;
    let int2 = 0;
    let inta = 0;
    let c1 = 0;
    let c2 = 0;
    let ca = 0;
    let m = 0;
    let mb = 0;
    let ma = 0;
    let p = 0;
    let pb = 0;
    let q = 0;
    let mondaiNum = 10;
    
    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };
    
    function getm(mbefore){
        let mpickuped = getRandom(0, 2);
        mpickuped = childMaster[mpickuped];
        while(mpickuped == mbefore){
            mpickuped = getRandom(0, 2);
            mpickuped = childMaster[mpickuped];
        };
        return mpickuped;
    }

    function erase(){
        $ia.value = "";
        $ca.value = "";
        $ma.value = "";
    };

    function defaultlet(){
        count = 0;
        int1 = 0;
        int2 = 0;
        inta = "";
        c1 = 0;
        c2 = 0;
        ca = "";
        m = 0;
        mb = 0;
        ma = "";
        p = 0;
        pb = 0;
        q = 0;
        $mondai0.innerText = "";
        $kigou1.innerText = "";
    };

    function switchdisplay(){
        $i1.style.display = "inline-block";
        $bunsuu1.style.display = "inline-block";
        $kigou2.style.display = "inline-block";
        $ia.style.display = "inline-block";
        $bunsuua.style.display = "inline-block";
        $progress.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $step.style.display = "none";
        $startBtn.style.display = "none";
    };

    function allinlineblock(){
        $i1.style.display = "inline-block";
        $bunsuu1.style.display = "inline-block";
        $kigou1.style.display = "inline-block";
        $i2.style.display = "inline-block";
        $bunsuu2.style.display = "inline-block";
        $kigou2.style.display = "inline-block";
        $ia.style.display = "inline-block";
        $bunsuua.style.display = "inline-block";
    };

    function allnone(){
        $i1.style.display = "none";
        $bunsuu1.style.display = "none";
        $kigou1.style.display = "none";
        $i2.style.display = "none";
        $bunsuu2.style.display = "none";
        $kigou2.style.display = "none";
        $ia.style.display = "none";
        $bunsuua.style.display = "none";
    };

    function defaultdisplay(){
        allnone();
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
            case "3":
                step3Setup();
                break;
            case "4":
                step4Setup();
                break;
            case "5":
                step5Setup();
                break;
            default:
                alert(`リロードして下さい`);
        };
    };

    function step1Setup(){
        if (count < mondaiNum){
            $ia.style.display = "inline-block";
            $i1.style.display = "inline-block";
            $bunsuua.style.display = "inline-block";
            mb = m;
            m = getm(mb);
            pb = p;
            p = getRandom(1, 3);
            while (p == pb){
                p = getRandom (1, 3);
            };
            switch(p){
                case 1: //帯分数を仮分数にする
                    $ia.style.display = "none";
                    inta = "";
                    int1 = getRandom(1, 3);
                    c1 = getRandom(1, m - 1);
                    ma = m;
                    ca = int1 * m + c1;
                    $i1.innerText = int1;
                    $m1.innerText = m;
                    $c1.innerText = c1;
                    $mondai0.innerText = `仮分数になおすと?`;
                    break;
                case 2: //仮分数を帯分数にする
                    $i1.style.display = "none";
                    c1 = getRandom(1, 3) * m + getRandom(1, m - 1);
                    inta = Math.floor(c1 / m);
                    ma = m;
                    ca = c1 - inta * m;
                    $m1.innerText = m;
                    $c1.innerText = c1;
                    $mondai0.innerText = `帯分数または整数になおすと?`;
                    break;
                case 3: //仮分数を整数にする
                    $i1.style.display = "none";
                    $bunsuua.style.display = "none";
                    ma = "";
                    ca = "";
                    inta = getRandom(1, 3);
                    c1 = inta * m;
                    $m1.innerText = m;
                    $c1.innerText = c1;
                    $mondai0.innerText = `帯分数または整数になおすと?`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        if (count < mondaiNum){
            $mondai0.innerText = `（答えは帯分数または整数）`;
            allinlineblock();
            $kigou1.innerText = `＋`;
            mb = m;
            m = getm(mb);
            pb = p;
            p = getRandom (1, 4);
            while (p == pb){
                p = getRandom (1, 4);
            };
            switch(p){
                case 1:
                    int1 = getRandom(1, 3);
                    int2 = getRandom(1, 3);
                    inta = int1 + int2;
                    ca = getRandom(2, m - 1);
                    c1 = getRandom(1, ca - 1);
                    c2 = ca - c1;
                    ma = m;
                    $i1.innerText = int1;
                    $i2.innerText = int2;
                    $c1.innerText = c1;
                    $c2.innerText = c2;
                    $m1.innerText = m;
                    $m2.innerText = m;
                    break;
                case 2:
                    int1 = getRandom(1, 3);
                    inta = int1;
                    ca = getRandom(2, m - 1);
                    c1 = getRandom(1, ca - 1);
                    c2 = ca - c1;
                    ma = m;
                    $c1.innerText = c1;
                    $c2.innerText = c2;
                    $m1.innerText = m;
                    $m2.innerText = m;
                    q = getRandom(1, 2);
                    if (q == 1){
                        $i1.innerText = int1;
                        $i2.style.display = "none";
                    } else {
                        $i2.innerText = int1;
                        $i1.style.display = "none";
                    };
                    break;
                case 3:
                    int1 = getRandom(1, 3);
                    int2 = getRandom(1, 3);
                    inta = int1 + int2 + 1;
                    c1 = getRandom(1, m - 1);
                    c2 = m - c1;
                    $i1.innerText = int1;
                    $i2.innerText = int2;
                    $c1.innerText = c1;
                    $c2.innerText = c2;
                    $m1.innerText = m;
                    $m2.innerText = m;
                    ca = "";
                    ma = "";
                    $bunsuua.style.display = "none";
                    break;
                case 4:
                    int1 = getRandom(1, 3);
                    inta = int1 + 1;
                    c1 = getRandom(1, m - 1);
                    c2 = m - c1;
                    $c1.innerText = c1;
                    $c2.innerText = c2;
                    $m1.innerText = m;
                    $m2.innerText = m;
                    ca = "";
                    ma = "";
                    $bunsuua.style.display = "none";
                    q = getRandom(1, 2);
                    if (q == 1){
                        $i1.innerText = int1;
                        $i2.style.display = "none";
                    } else {
                        $i2.innerText = int1;
                        $i1.style.display = "none";
                    };
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };
    
    function step3Setup(){
        if (count < mondaiNum){
            $mondai0.innerText = `（答えは帯分数または整数）`;
            allinlineblock();
            $kigou1.innerText = `＋`;
            mb = m;
            m = getm(mb);
            pb = p;
            p = getRandom (1, 2);
            while (p == pb){
                p = getRandom (1, 2);
            };
            switch(p){
                case 1:
                    int1 = getRandom(1, 3);
                    int2 = getRandom(1, 3);
                    inta = int1 + int2 + 1;
                    ca = getRandom(1, m - 2);
                    c1 = getRandom(ca + 1, m - 1);
                    c2 = ca + m - c1;
                    ma = m;
                    $i1.innerText = int1;
                    $i2.innerText = int2;
                    $c1.innerText = c1;
                    $c2.innerText = c2;
                    $m1.innerText = m;
                    $m2.innerText = m;
                    break;
                case 2:
                    int1 = getRandom(1, 3);
                    inta = int1 + 1;
                    ca = getRandom(1, m - 2);
                    c1 = getRandom(ca + 1, m - 1);
                    c2 = ca + m - c1;
                    ma = m;
                    $c1.innerText = c1;
                    $c2.innerText = c2;
                    $m1.innerText = m;
                    $m2.innerText = m;
                    q = getRandom(1, 2);
                    if (q == 1){
                        $i1.innerText = int1;
                        $i2.style.display = "none";
                    } else {
                        $i2.innerText = int1;
                        $i1.style.display = "none";
                    };
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step4Setup(){
        if (count < mondaiNum){
            $mondai0.innerText = `（答えは帯分数または整数）`;
            allinlineblock();
            $kigou1.innerText = `－`;
            mb = m;
            m = getm(mb);
            pb = p;
            p = getRandom (1, 3);
            while (p == pb){
                p = getRandom (1, 3);
            };
            int1 = getRandom(2, 5);
            $m2.innerText = m;
            switch(p){
                case 1:
                    int2 = getRandom(1, int1 - 1);
                    inta = int1 - int2;
                    c1 = getRandom(2, m - 1);
                    ca = getRandom(1, c1 - 1);
                    c2 = c1 - ca;
                    ma = m;
                    $i1.innerText = int1;
                    $i2.innerText = int2;
                    $c1.innerText = c1;
                    $c2.innerText = c2;
                    $m1.innerText = m;
                    break;
                case 2:
                    int2 = getRandom(1, int1 - 1);
                    c2 = getRandom(1, m - 1);
                    ca = m - c2;
                    ma = m;
                    inta = int1 - int2 - 1;
                    $i1.innerText = int1;
                    $i2.innerText = int2;
                    $bunsuu1.style.display = "none";
                    $c2.innerText = c2;
                    if (inta == 0){
                        inta = "";
                        $ia.style.display = "none";
                    };
                    break;
                case 3:
                    c2 = getRandom(1, m - 1);
                    ca = m - c2;
                    ma = m;
                    inta = int1 - 1;
                    $i1.innerText = int1;
                    $bunsuu1.style.display = "none";
                    $i2.style.display = "none";
                    $c2.innerText = c2;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };
    
    function step5Setup(){
        if (count < mondaiNum){
            $mondai0.innerText = `（答えは帯分数または整数）`;
            allinlineblock();
            $kigou1.innerText = `－`;
            mb = m;
            m = getm(mb);
            pb = p;
            p = getRandom (1, 2);
            while (p == pb){
                p = getRandom (1, 2);
            };
            switch(p){
                case 1:
                    int1 = getRandom(2, 5);
                    int2 = getRandom(1, int1 - 1);
                    inta = int1 - int2 - 1;
                    ca = getRandom(2, m - 1);
                    c1 = getRandom(1, ca - 1);
                    c2 = c1 + m - ca;
                    ma = m;
                    $i1.innerText = int1;
                    $i2.innerText = int2;
                    $c1.innerText = c1;
                    $c2.innerText = c2;
                    $m1.innerText = m;
                    $m2.innerText = m;
                    if (inta == 0){
                        inta = "";
                        $ia.style.display = "none";
                    };
                    break;
                case 2:
                    int1 = getRandom(1, 3);
                    inta = int1 - 1;
                    ca = getRandom(2, m - 1);
                    c1 = getRandom(1, ca - 1);
                    c2 = c1 + m - ca;
                    ma = m;
                    $i1.innerText = int1;
                    $i2.style.display = "none";
                    $c1.innerText = c1;
                    $c2.innerText = c2;
                    $m1.innerText = m;
                    $m2.innerText = m;
                    if (inta == 0){
                        inta = "";
                        $ia.style.display = "none";
                    };
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    $ia.addEventListener("input", () => {
        if ($ia.value == inta && $ca.value == ca && $ma.value == ma){
            setTimeout(() => {
                audio1.play();
                erase();
                $progress.value = count / mondaiNum;
            }, 500);
            count++;
            switchSetup($step.value);
        };
    });

    $ca.addEventListener("input", () => {
        if ($ia.value == inta && $ca.value == ca && $ma.value == ma){
            setTimeout(() => {
                audio1.play();
                erase();
                $progress.value = count / mondaiNum;
            }, 500);
            count++;
            switchSetup($step.value);
        };
    });

    $ma.addEventListener("input", () => {
        if ($ia.value == inta && $ca.value == ca && $ma.value == ma){
            setTimeout(() => {
                audio1.play();
                erase();
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
        erase();
    });
    
    $resetBtn.addEventListener("click", () => {
        defaultdisplay();
        defaultlet();
        erase();
        $progress.value = 0;
    });
    
};
    
bunsuu2();