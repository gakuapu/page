function bunsuu1(){
    
    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondaikotae = document.getElementById("mondaikotae");
    const $c1 = document.getElementById("c1");
    const $m1 = document.getElementById("m1");
    const $c2 = document.getElementById("c2");
    const $m2 = document.getElementById("m2");
    const $ca = document.getElementById("ca");
    const $ma = document.getElementById("ma");
    const $kigou = document.getElementById("kigou");
    const $hrkotae = document.getElementById("hrkotae");
    
    const $progress = document.getElementById("progress");
    
    const childMaster = [3, 5, 7];

    let count = 0;
    let nc1 = 0;
    let nc2 = 0;
    let ca = 0;
    let m = 0;
    let mb = 0;
    let ma = 0;
    let p = 0;
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
        $ca.value = "";
        $ma.value = "";
    };

    function defaultlet(){
        count = 0;
        nc1 = 0;
        nc2 = 0;
        ca = 0;
        m = 0;
        mb = 0;
        ma = 0;
        p = 0;
        $kigou.innerText = "";
    };

    function defaultmondaikotae(){
        $ma.style.display = "block";
        $hrkotae.style.display = "block";
        $c1.style.display = "block";
    };

    function switchdisplay(){
        $mondaikotae.style.display = "block";
        defaultmondaikotae();
        $progress.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $step.style.display = "none";
        $startBtn.style.display = "none";
    };

    function defaultdisplay(){
        $mondaikotae.style.display = "none";
        defaultmondaikotae();
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
            default:
                alert(`リロードして下さい`);
        };
    };

    function step1Setup(){
        if (count < mondaiNum){
            mb = m;
            m = getm(mb);
            p = getRandom (1, 3);
            if(p == 1){
                $ma.style.display = "none";
                $hrkotae.style.display = "none";
                ca = 1;
                ma = "";
                nc1 = getRandom (1, m - 1);
                nc2 = m - nc1;
            } else {
                defaultmondaikotae();
                ma = m;
                ca = getRandom (2, m - 1);
                nc1 = getRandom (1, ca - 1);
                nc2 = ca - nc1;
            };
            $m1.innerText = m;
            $m2.innerText = m;
            $c1.innerText = nc1
            $c2.innerText = nc2;
            $kigou.innerText = "＋";
        } else if (count == mondaiNum){
            closing();
        };
    };
    
    function step2Setup(){
        if (count < mondaiNum){
            mb = m;
            m = getm(mb);
            ma = m;
            p = getRandom (1, 3);
            if(p == 1){
                $c1.style.display = "none";
                $m1.innerText = 1;
                ca = getRandom(1, m - 1);
                nc2 = m - ca;
            } else {
                defaultmondaikotae();
                nc1 = getRandom (2, m - 1);
                ca = getRandom (1, nc1 - 1);
                nc2 = nc1 - ca;
                $m1.innerText = m;
                $c1.innerText = nc1
            };
            $m2.innerText = m;
            $c2.innerText = nc2;
            $kigou.innerText = "－";
        } else if (count == mondaiNum)
            closing();
    };
    
    $ca.addEventListener("input", () => {
        if ($ca.value == ca && $ma.value == ma){
            erase();
            setTimeout(() => {
                audio1.play();
                $progress.value = count / mondaiNum;
            }, 500);
            count++;
            switchSetup($step.value);
        };
    });
    
    $ma.addEventListener("input", () => {
        if ($ca.value == ca && $ma.value == ma){
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
    
bunsuu1();