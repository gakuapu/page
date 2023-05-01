function bunsuu3(){
    
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
    const $m3 = document.getElementById("m3");
    const $ca = document.getElementById("ca");
    const $ma = document.getElementById("ma");
    
    const $progress = document.getElementById("progress");

    const $memoHyojiBtn = document.getElementById("memohyoji");//計算メモ
    const $memoClearBtn = document.getElementById("memoclear");//計算メモ
    const $memoTable = document.getElementById("memotable");//計算メモ

    let count = 0;
    let int1 = 0;
    let int2 = 0;
    let inta = "";
    let c1 = 0;
    let c2 = 0;
    let ca = 0;
    let m1 = 0;
    let m2 = 0;
    let m3 = 0;
    let ma = "";
    let n = 0;
    let g = 0;
    let p = 0;
    let pb = 0;
    let mondaiNum = 10;
    
    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };
    
    //a, bの最大公約数を出す関数
    function getGCD(a, b) {
        if (b === 0) {
            return a;
        } else {
            return getGCD(b, a % b);
        };
    };

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
        ca = 0;
        m1 = 0;
        m2 = 0;
        m3 = 0;
        ma = "";
        n = 0;
        g = 0;
        p = 0;
        pb = 0;
        $mondai0.innerText = "";
        $kigou1.innerText = "";
    };

    function switchdisplay(){
        $bunsuu1.style.display = "inline-block";
        $kigou2.style.display = "inline-block";
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
        $memoHyojiBtn.style.display = "none";//計算メモ
        $memoClearBtn.style.display = "none";//計算メモ
        $memoTable.style.display = "none";//計算メモ
    };

    function closing(){
        audio2.play();
        $progress.value = 1;
        $ma.style.display = "inline-block";
        defaultdisplay();
        defaultlet();
        alert(`クリアしました`);
    };
    
    function switchSetup(stepValue){
        $memoHyojiBtn.style.display = "block";//計算メモ
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
            default:
                alert(`リロードして下さい`);
        };
    };

    function step1Setup(){
        if (count < mondaiNum){
            pb = p;
            p = getRandom(0, 1);
            while (p == pb){
                p = getRandom (0, 1);
            };
            m1 = getRandom(2, 9);
            c1 = getRandom(1, m1 - 1);
            n = getRandom(2, 5);
            if (p == 0) {
                $mondai0.innerText = `同じ大きさの分数になるように数字を入れて下さい`;
                $ma.style.display = "none";
                $m3.style.display = "inline-block";
                ma = "";
                inta = "";
                g = getGCD(m1, c1);
                while (g != 1) {
                    c1 = getRandom(1, m1 - 1);
                    g = getGCD(m1, c1);
                };
                m3 = m1 * n;
                ca = c1 * n;
                $m3.innerText = m3;
            } else {
                $mondai0.innerText = `分母が最も小さくなるまで約分して下さい`;
                $ma.style.display = "inline-block";
                $m3.style.display = "none";
                inta = "";
                m1 = m1 * n;
                c1 = c1 * n;
                g = getGCD(m1, c1);
                ma = m1 / g;
                ca = c1 / g;
            };
            $m1.innerText = m1;
            $c1.innerText = c1;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        if (count < mondaiNum){
            pb = m1;
            $mondai0.innerText = `（仮分数は帯分数に/約分できる場合は約分して下さい）`;
            allinlineblock();
            $i1.style.display = "none";
            $i2.style.display = "none";
            $m3.style.display = "none";
            $kigou1.innerText = `＋`;
            m1 = getRandom(2, 6);
            while (m1 == pb) {
                m1 = getRandom(2, 6);  
            };
            c1 = getRandom(1, m1 - 1);
            g = getGCD(m1, c1);
            while (g != 1) {
                c1 = getRandom(1, m1 - 1);
                g = getGCD(m1, c1);
            };
            m2 = getRandom(2, 6);
            while (m2 == m1) {
                m2 = getRandom(2, 6);  
            };
            c2 = getRandom(1, m2 - 1);
            g = getGCD(m2, c2);
            while (g != 1) {
                c2 = getRandom(1, m2 - 1);
                g = getGCD(m2, c2);
            };
            g = getGCD (m1, m2);
            ma = m1 * m2 / g;
            ca = c1 * m2 / g + c2 * m1 / g;
            g = getGCD (ma, ca);
            ma = ma / g;
            ca = ca / g;
            if (ca > ma) {
                $ia.style.display = "inline-block";
                inta = 1;
                ca = ca - ma;
            } else {
                $ia.style.display = "none";
                inta = "";
            };
            $m1.innerText = m1;
            $c1.innerText = c1;
            $m2.innerText = m2;
            $c2.innerText = c2;
        } else if (count == mondaiNum){
            closing();
        };
    };
    
    function step3Setup(){
        if (count < mondaiNum){
            pb = m1;
            $mondai0.innerText = `（仮分数は帯分数に/約分できる場合は約分して下さい）`;
            allinlineblock();
            $i1.style.display = "none";
            $i2.style.display = "none";
            $m3.style.display = "none";
            $kigou1.innerText = `－`;
            m1 = getRandom(2, 6);
            while (m1 == pb) {
                m1 = getRandom(2, 6);  
            };
            c1 = getRandom(1, m1 - 1);
            g = getGCD(m1, c1);
            while (g != 1) {
                c1 = getRandom(1, m1 - 1);
                g = getGCD(m1, c1);
            };
            m2 = getRandom(2, 6);
            while (m2 == m1) {
                m2 = getRandom(2, 6);  
            };
            c2 = getRandom(1, m2 - 1);
            g = getGCD(m2, c2);
            while (g != 1) {
                c2 = getRandom(1, m2 - 1);
                g = getGCD(m2, c2);
            };
            g = getGCD (m1, m2);
            ma = m1 * m2 / g;
            ca = Math.abs(c1 * m2 / g - c2 * m1 / g);
            g = getGCD (ma, ca);
            ma = ma / g;
            ca = ca / g;
            $ia.style.display = "none";
            inta = "";
            if (c1 / m1 > c2 / m2) {
                $m1.innerText = m1;
                $c1.innerText = c1;
                $m2.innerText = m2;
                $c2.innerText = c2;
            } else {
                $m1.innerText = m2;
                $c1.innerText = c2;
                $m2.innerText = m1;
                $c2.innerText = c1;
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    $ia.addEventListener("input", () => {
        if ($ia.value == inta && $ca.value == ca && $ma.value == ma){
            $memoClearBtn.style.display = "none";//計算メモ
            $memoTable.style.display = "none";//計算メモ
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
            $memoClearBtn.style.display = "none";//計算メモ
            $memoTable.style.display = "none";//計算メモ
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
            $memoClearBtn.style.display = "none";//計算メモ
            $memoTable.style.display = "none";//計算メモ
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
        $ma.style.display = "inline-block";
        defaultdisplay();
        defaultlet();
        erase();
        $progress.value = 0;
    });
    
};
    
bunsuu3();