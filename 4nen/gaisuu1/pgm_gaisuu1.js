function gaisuu1(){
    
    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $unit = document.getElementById("unit");
    const $kotae1 = document.getElementById("kotae1");
    const $kotae2 = document.getElementById("kotae2");
    const $checkBtn = document.getElementById("check-btn");

    const $hintBtn = document.getElementById("hint-btn");
    const $hint = document.getElementById("hint");
    
    const $progress = document.getElementById("progress");
    
    let count = 0;
    let n = 0;
    let a1 = 0;
    let a2 = 0;
    let p = 0;
    let pb = 0;
    let q = 0;
    let r = 0;
    let txt = "";
    let mondaiNum = 10;
    
    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };
    
    function defaultlet(){
        count = 0;
        n = 0;
        a1 = 0;
        a2 = "";
        p = 0;
        pb = 0;
        q = 0;
        r = 0;
        txt = "";
        $kotae1.value = "";
        $kotae2.value = "";
        $hint.innerText = "";
        $mondai.innerText = "";
        $unit.innerText = "";
    };

    function switchdisplay(){
        $kotae1.style.display = "inline-block";
        $checkBtn.style.display = "block";
        $progress.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $step.style.display = "none";
        $startBtn.style.display = "none";
    };

    function defaultdisplay(){
        $kotae1.style.display = "none";
        $kotae2.style.display = "none";
        $checkBtn.style.display = "none";
        $hintBtn.style.display = "none";
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
            case "6":
                step6Setup();
                break;
            default:
                alert(`リロードして下さい`);
        };
    };

    function step1Setup(){
        if (count < mondaiNum){
            $kotae2.style.display = "inline-block";
            $unit.innerText = "～";
            $hintBtn.style.display = "block";
            txt = "四捨五入";
            pb = p;
            p = getRandom(1, 3);
            while (p == pb){
                p = getRandom(1, 3);
            };
            q = getRandom(1, 2);
            switch(q){
                case 1:
                    r = getRandom(1, 3);
                    if (r == 1){
                        n = 1000;
                    } else {
                    n = getRandom(2, 9) * 1000;
                    };
                    a1 = n - 500;
                    a2 = n + 499;
                    switch(p){
                        case 1:
                            if (r == 1){
                                $mondai.innerText = `百の位で` + txt;
                            } else {
                                $mondai.innerText = txt + `で千の位までのがい数に`;
                            };
                            break;
                        case 2:
                            if (r == 1){
                                $mondai.innerText = `百の位で` + txt;
                            } else { 
                                $mondai.innerText = txt + `で上から1けたのがい数に`;
                            };
                            break;
                        case 3:
                            $mondai.innerText = `百の位で` + txt;
                            break;
                        default:
                            alert(`リロードして下さい`);
                    };
                    break;
                case 2:
                    r = getRandom(1, 2);
                    if (r == 1){
                        n = getRandom(10, 99) * 100;
                    } else {
                        n = getRandom(1, 9) * 1000;
                    };
                    a1 = n - 50;
                    a2 = n + 49;
                    switch(p){
                        case 1:
                            $mondai.innerText = txt + `で百の位までのがい数に`;
                            break;
                        case 2:
                            if (n == 1000){
                                $mondai.innerText = `十の位で` + txt;
                            } else {
                                $mondai.innerText = txt + `で上から2けたのがい数に`;
                            };
                            break;
                        case 3:
                            $mondai.innerText = `十の位で` + txt;
                            break;
                        default:
                            alert(`リロードして下さい`);
                    };
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            $mondai.innerText += `すると` + n + `になる整数はいくつからいくつ?`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        if (count < mondaiNum){
            a2 = "";
            txt = "四捨五入";
            pb = p;
            p = getRandom(1, 3);
            while (p == pb){
                p = getRandom(1, 3);
            };
            q = getRandom(1, 2);
            switch(q){
                case 1:
                    r =getRandom(1, 3);
                    if (r == 1){
                        n = 9000 + getRandom(500, 999);
                    } else {
                        n = getRandom(1, 8) * 1000 + getRandom(1, 999);
                    };
                    $mondai.innerText = n + `を`;
                    a1 = Math.round(n / 1000) * 1000;
                    switch(p){
                        case 1:
                            if (r == 1){
                                $mondai.innerText += `百の位で` + txt + `して`;
                            } else {
                                $mondai.innerText += txt + `で千の位までの`;
                            };
                            break;
                        case 2:
                            $mondai.innerText += txt + `で上から1けたの`;
                            break;
                        case 3:
                            $mondai.innerText += `百の位で` + txt + `して`;
                            break;
                        default:
                            alert(`リロードして下さい`);
                    };
                    break;
                case 2:
                    r = getRandom(1, 3);
                    if (r == 1){
                        n = getRandom(1, 9) * 1000 + 900 + getRandom(50, 99);
                    } else {
                        n = getRandom(10, 99) * 100 + getRandom(1, 99);
                    };
                    $mondai.innerText = n + `を`;
                    a1 = Math.round(n / 100) * 100;
                    switch(p){
                        case 1:
                            $mondai.innerText += txt + `で百の位までの`;
                            break;
                        case 2:
                            $mondai.innerText += txt + `で上から2けたの`;
                            break;
                        case 3:
                            $mondai.innerText += `十の位で` + txt + `して`;
                            break;
                        default:
                            alert(`リロードして下さい`);
                    };
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            $mondai.innerText += `がい数にするといくつ?`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step3Setup(){
        if (count < mondaiNum){
            $kotae2.style.display = "inline-block";
            $unit.innerText = "～";
            $hintBtn.style.display = "block";
            txt = "切り上げ";
            pb = p;
            p = getRandom(1, 3);
            while (p == pb){
                p = getRandom(1, 3);
            };
            q = getRandom(1, 3);
            if (q == 1){
                n = getRandom(2, 9) * 1000;
                a1 = n - 999;
                a2 = n;
                switch(p){
                    case 1:
                        $mondai.innerText = txt + `で千の位までのがい数に`;
                        break;
                    case 2:
                        $mondai.innerText = txt + `で上から1けたのがい数に`;
                        break;
                    case 3:
                        $mondai.innerText = `千の位未満を` + txt;
                        break;
                    default:
                        alert(`リロードして下さい`);
                };
            } else {
                r = getRandom(1, 2);
                if (r == 1){
                    n = getRandom(1, 9) * 1000;
                } else {
                    n = getRandom(10, 99) * 100;
                };
                a1 = n - 99;
                a2 = n;
                switch(p){
                    case 1:
                        $mondai.innerText = txt + `で百の位までのがい数に`;
                        break;
                    case 2:
                        $mondai.innerText = txt + `で上から2けたのがい数に`;
                        break;
                    case 3:
                        $mondai.innerText = `百の位未満を` + txt;
                        break;
                    default:
                        alert(`リロードして下さい`);
                };
            };
            $mondai.innerText += `すると` + n + `になる整数はいくつからいくつ?`;
        } else if (count == mondaiNum){
            closing();
        };
    };  

    function step4Setup(){
        if (count < mondaiNum){
            a2 = "";
            txt = "切り上げ";
            pb = p;
            p = getRandom(1, 3);
            while (p == pb){
                p = getRandom(1, 3);
            };
            q = getRandom(1, 2);
            switch(q){
                case 1:
                    n = getRandom(1, 9) * 1000 + getRandom(1, 999);
                    $mondai.innerText = n + `を`;
                    a1 = Math.ceil(n / 1000) * 1000;
                    switch(p){
                        case 1:
                            if (n > 9000){
                                $mondai.innerText += `千の位未満を` + txt + `て`;
                            } else {
                                $mondai.innerText += txt + `で千の位までの`;
                            };
                            break;
                        case 2:
                            if (n > 9000){
                                $mondai.innerText += `千の位未満を` + txt + `て`;
                            } else {
                                $mondai.innerText += txt + `て上から1けたの`;
                            };
                            break;
                        case 3:
                            $mondai.innerText += `千の位未満を` + txt + `て`;
                            break;
                        default:
                            alert(`リロードして下さい`);
                    };
                    break;
                case 2:
                    r = getRandom(1, 3);
                    if (r == 1){
                        n = getRandom(1, 9) * 1000 + 900 + getRandom(1, 99);
                    } else {
                        n = getRandom(10, 99) * 100 + getRandom(1, 99);
                    };
                    $mondai.innerText = n + `を`;
                    a1 = Math.ceil(n / 100) * 100;
                    switch(p){
                        case 1:
                            $mondai.innerText += txt + `で百の位までの`;
                            break;
                        case 2:
                            if (n > 9900){
                                $mondai.innerText += txt + `で百の位までの`;
                            } else {
                                $mondai.innerText += txt + `て上から2けたの`;
                            };
                            break;
                        case 3:
                            $mondai.innerText += `百の位未満を` + txt + `て`;
                            break;
                        default:
                            alert(`リロードして下さい`);
                    };
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            $mondai.innerText += `がい数にするといくつ?`;
        } else if (count == mondaiNum){
            closing();
        };
    };  

    function step5Setup(){
        if (count < mondaiNum){
            $kotae2.style.display = "inline-block";
            $unit.innerText = "～";
            $hintBtn.style.display = "block";
            txt = "切り捨て";
            pb = p;
            p = getRandom(1, 3);
            while (p == pb){
                p = getRandom(1, 3);
            };
            q = getRandom(1, 2);
            switch(q){
                case 1:
                    n = getRandom(1, 9) * 1000;
                    a1 = n;
                    a2 = n + 999;
                    switch(p){
                        case 1:
                            $mondai.innerText = txt + `で千の位までのがい数に`;
                            break;
                        case 2:
                            $mondai.innerText = txt + `て上から1けたのがい数に`;
                            break;
                        case 3:
                            $mondai.innerText = `千の位未満を` + txt;
                            break;
                        default:
                            alert(`リロードして下さい`);
                    };
                    break;
                case 2:
                    r = getRandom(1, 2);
                    if (r == 1){
                        n = getRandom(1, 9) * 1000;
                    } else {
                        n = getRandom(10, 99) * 100;
                    };
                    a1 = n;
                    a2 = n + 99;
                    switch(p){
                        case 1:
                            $mondai.innerText = txt + `で百の位までのがい数に`;
                            break;
                        case 2:
                            $mondai.innerText = txt + `て上から2けたのがい数に`;
                            break;
                        case 3:
                            $mondai.innerText = `百の位未満を` + txt;
                            break;
                        default:
                            alert(`リロードして下さい`);
                    };
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            $mondai.innerText += `すると` + n + `になる整数はいくつからいくつ?`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step6Setup(){
        if (count < mondaiNum){
            a2 = "";
            txt = "切り捨て";
            pb = p;
            p = getRandom(1, 3);
            while (p == pb){
                p = getRandom(1, 3);
            };
            q = getRandom(1, 2);
            switch(q){
                case 1:
                    n = getRandom(1, 9) * 1000 + getRandom(1, 999);
                    $mondai.innerText = n + `を`;
                    a1 = Math.floor(n / 1000) * 1000;
                    switch(p){
                        case 1:
                            $mondai.innerText += txt + `で千の位までの`;
                            break;
                        case 2:
                            $mondai.innerText += txt + `て上から1けたの`;
                            break;
                        case 3:
                            $mondai.innerText += `千の位未満を` + txt + `て`;
                            break;
                        default:
                            alert(`リロードして下さい`);
                    };
                    break;
                case 2:
                    n = getRandom(10, 99) * 100 + getRandom(1, 99);
                    $mondai.innerText = n + `を`;
                    a1 = Math.floor(n / 100) * 100;
                    switch(p){
                        case 1:
                            $mondai.innerText += txt + `で百の位までの`;
                            break;
                        case 2:
                            $mondai.innerText += txt + `て上から2けたの`;
                            break;
                        case 3:
                            $mondai.innerText += `百の位未満を` + txt + `て`;
                            break;
                        default:
                            alert(`リロードして下さい`);
                    };
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            $mondai.innerText += `がい数にするといくつ?`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    $checkBtn.addEventListener("click", () => {
        if ($kotae1.value == a1 && $kotae2.value == a2){
            $hint.innerText = "";
            $kotae1.value = "";
            $kotae2.value = "";
            setTimeout(() => {
                audio1.play();
                $progress.value = count / mondaiNum;
            }, 500);
            count++;
            switchSetup($step.value);
        } else {
            setTimeout(() => {
                audio3.play();
            }, 500);
        };
    });

    $hintBtn.addEventListener("click", () => {
        $hint.innerText = `答え：` + a1 + `～` + a2;
        $hintBtn.style.display = "none";
    });

    $startBtn.addEventListener("click", () => {
        switchdisplay();
        defaultlet();
        $progress.value = 0;
        switchSetup($step.value);
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
    
gaisuu1();