function zikokuzikan1(){
    
    const ampm = [`午前`, `午後`];

    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $unit0 = document.getElementById("unit0");
    const $unit1 = document.getElementById("unit1");
    const $unit2 = document.getElementById("unit2");
    const $kotae1 = document.getElementById("kotae1");
    const $kotae2 = document.getElementById("kotae2");
    const $checkBtn = document.getElementById("check-btn");
    
    const $progress = document.getElementById("progress");
    
    let count = 0;
    let h1 = 0;
    let h2 = 0;
    let ha = 0;
    let m1 = 0;
    let m2 = 0;
    let ma = 0;
    let p = 0;
    let pb = 0;
    let q = 0;
    let ampmTxt = "";
    let mondaiNum = 10;
    
    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };
    
    function defaultlet(){
        count = 0;
        h1 = 0;
        h2 = 0;
        ha = 0;
        m1 = 0;
        m2 = 0;
        ma = "";
        p = 0;
        pb = 0;
        q = 0;
        ampmTxt = "";
        $kotae1.value = "";
        $kotae2.value = "";
        $mondai.innerText = "";
        $unit0.innerText = "";
        $unit1.innerText = "";
    };

    function switchdisplay(){
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
        $unit0.innerText = "";
        $unit1.innerText = "";
        $unit2.innerText = "";
        $checkBtn.style.display = "none";
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
            case "7":
                step7Setup();
                break;
            case "8":
                step8Setup();
                break;
            default:
                alert(`リロードして下さい`);
        };
    };

    function step1Setup(){
        if (count < mondaiNum){
            ampmTxt = ampm[getRandom(0, 1)];
            $kotae1.style.display = "inline-block";
            $kotae2.style.display = "inline-block";
            $unit0.innerText = ampmTxt;
            $unit1.innerText = `時`;
            $unit2.innerText = `分`;
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            switch(p){
                case 1:
                    h1 = getRandom(1, 11);
                    ha = h1;
                    ma = getRandom(2, 11);
                    m2 = getRandom(1, ma - 1);
                    ma = ma * 5;
                    m2 = m2 * 5;
                    m1 = ma - m2;
                    $mondai.innerText = ampmTxt + h1 + `時` + m1 + `分の` + m2 + `分後の時こくは?`;
                    break;
                case 2:
                    ha = getRandom(2, 11);
                    h2 = getRandom(1, ha - 1);
                    h1 = ha - h2;
                    ma = getRandom(2, 5);
                    m2 = getRandom(1, ma - 1);
                    ma = ma * 10;
                    m2 = m2 * 10;
                    m1 = ma - m2;
                    $mondai.innerText = ampmTxt + h1 + `時` + m1 + `分の` + h2 + `時間` + m2 + `分後の時こくは?`;
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
            ampmTxt = ampm[getRandom(0, 1)];
            $kotae1.style.display = "inline-block";
            $unit0.innerText = ampmTxt;
            $unit1.innerText = `時`;
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            q = getRandom(1, 3);
            if (q == 1){
                $kotae2.style.display = "none";
                $unit2.innerText = "";
            } else {
                $kotae2.style.display = "inline-block";
                $unit2.innerText = "分";
            };
            switch(p){
                case 1:
                    ha = getRandom(2, 11);
                    h1 = ha - 1;
                    if (q == 1){
                        ma = ""
                        m1 = getRandom(1, 5) * 10;
                        m2 = 60 - m1;
                    } else {
                        m1 = getRandom(2, 5);
                        ma = getRandom(1, m1 - 1);
                        m1 = m1 * 10;
                        ma = ma * 10;
                        m2 = ma + 60 - m1;
                    };
                    $mondai.innerText = ampmTxt + h1 + `時` + m1 + `分の` + m2 + `分後の時こくは?`;
                    break;
                case 2:
                    ha = getRandom(3, 11);
                    h1 = getRandom(1, ha - 2);
                    h2 = ha - h1 - 1;
                    if (q == 1){
                        ma = "";
                        m1 = getRandom(1, 5) * 10;
                        m2 = 60 - m1;
                    } else {
                        m1 = getRandom(2, 5);
                        ma = getRandom(1, m1 - 1);
                        m1 = m1 * 10;
                        ma = ma * 10;
                        m2 = ma + 60 - m1;
                    };
                    $mondai.innerText = ampmTxt + h1 + `時` + m1 + `分の` + h2 + `時間` + m2 + `分後の時こくは?`;
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
            ampmTxt = ampm[getRandom(0, 1)];
            $kotae1.style.display = "inline-block";
            $kotae2.style.display = "inline-block";
            $unit0.innerText = ampmTxt;
            $unit1.innerText = `時`;
            $unit2.innerText = `分`;
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            switch(p){
                case 1:
                    h1 = getRandom(1, 11);
                    ha = h1;
                    m1 = getRandom(2, 11);
                    ma = getRandom(1, m1 - 1);
                    m1 = m1 * 5;
                    ma = ma * 5;
                    m2 = m1 - ma;
                    $mondai.innerText = ampmTxt + h1 + `時` + m1 + `分の` + m2 + `分前の時こくは?`;
                    break;
                case 2:
                    h1 = getRandom(2, 11);
                    ha = getRandom(1, h1 - 1);
                    h2 = h1 - ha;
                    m1 = getRandom(2, 5);
                    ma = getRandom(1, m1 - 1);
                    m1 = m1 * 10;
                    ma = ma * 10;
                    m2 = m1 - ma;
                    $mondai.innerText = ampmTxt + h1 + `時` + m1 + `分の` + h2 + `時間` + m2 + `分前の時こくは?`;
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
            ampmTxt = ampm[getRandom(0, 1)];
            $kotae1.style.display = "inline-block";
            $kotae2.style.display = "inline-block";
            $unit0.innerText = ampmTxt;
            $unit1.innerText = `時`;
            $unit2.innerText = `分`;
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            q = getRandom(1, 3);
            switch(p){
                case 1:
                    h1 = getRandom(2, 11);
                    ha = h1 - 1;
                    if (q == 1){
                        ma = getRandom(1, 5) * 10;
                        m2 = 60 - ma;
                        $mondai.innerText = ampmTxt + h1 + `時の` + m2 + `分前の時こくは?`;
                    } else {
                        ma = getRandom(2, 5);
                        m1 = getRandom(1, ma - 1);
                        ma = ma * 10;
                        m1 = m1 * 10;
                        m2 = m1 + 60 - ma;
                        $mondai.innerText = ampmTxt + h1 + `時` + m1 + `分の` + m2 + `分前の時こくは?`;
                    };
                    break;
                case 2:
                    h1 = getRandom(3, 11);
                    ha = getRandom(1, h1 - 2);
                    h2 = h1 - ha - 1;
                    if (q == 1){
                        ma = getRandom(1, 5) * 10;
                        m2 = 60 - ma;
                        $mondai.innerText = ampmTxt + h1 + `時の` + h2 + `時間` + m2 + `分前の時こくは?`;
                    } else {
                        ma = getRandom(2, 5);
                        m1 = getRandom(1, ma - 1);
                        ma = ma * 10;
                        m1 = m1 * 10;
                        m2 = m1 + 60 - ma;
                        $mondai.innerText = ampmTxt + h1 + `時` + m1 + `分の` + h2 + `時間` + m2 + `分前の時こくは?`;
                    };
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
            $kotae2.style.display = "inline-block";
            $unit2.innerText = `分`;
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            switch(p){
                case 1:
                    $kotae1.style.display = "inline-block";    
                    $unit1.innerText = `時間`;
                    ha = getRandom(2, 5);
                    h1 = getRandom(1, ha - 1);
                    h2 = ha - h1;
                    ma = getRandom(2, 5);
                    m1 = getRandom(1, ma - 1);
                    ma = ma * 10;
                    m1 = m1 * 10;
                    m2 = ma - m1;
                    $mondai.innerText = `午前中に` + h1 + `時間` + m1 + `分、午後に` + h2 + `時間` + m2 + `分本を読みました。本を読んだ時間の合計は?`;
                    break;
                case 2:
                    $kotae1.style.display = "none"; 
                    $unit1.innerText = "";
                    ha = "";
                    ma = getRandom(2, 11);
                    m1 = getRandom(1, ma - 1);
                    ma = ma * 5;
                    m1 = m1 * 5;
                    m2 = ma - m1;
                    $mondai.innerText = `午前中に` + m1 + `分、午後に` + m2 + `分本を読みました。本を読んだ時間の合計は?`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step6Setup(){
        if (count < mondaiNum){
            $kotae1.style.display = "inline-block"; 
            $unit1.innerText = `時間`;
            pb = p;
            p = getRandom(1, 3);
            while (p == pb){
                p = getRandom(1, 3);
            };
            q = getRandom(1, 3);
            if (q == 1){
                $kotae2.style.display = "none";
                $unit2.innerText = "";
            } else {
                $kotae2.style.display = "inline-block";
                $unit2.innerText = `分`;
            };
            switch(p){
                case 1:
                    ha = getRandom(3, 5);
                    h1 = getRandom(1, ha - 2);
                    h2 = ha - h1 - 1;
                    if (q == 1){
                        ma = "";
                        m1 = getRandom(1, 5) * 10;
                        m2 = 60 - m1;
                    } else {
                        m1 = getRandom(2, 5);
                        ma = getRandom(1, m1 - 1);
                        m1 = m1 * 10;
                        ma = ma * 10;
                        m2 = ma + 60 - m1;
                    };
                    $mondai.innerText = `午前中に` + h1 + `時間` + m1 + `分、午後に` + h2 + `時間` + m2 + `分本を読みました。本を読んだ時間の合計は?`;
                    break;            
                case 2:
                    ha = getRandom(2, 5);
                    h1 = ha - 1;
                    if (q == 1){
                        ma = "";
                        m1 = getRandom(1, 5) * 10;
                        m2 = 60 - m1;
                    } else {
                        m1 = getRandom(2, 5);
                        ma = getRandom(1, m1 - 1);
                        m1 = m1 * 10;
                        ma = ma * 10;
                        m2 = ma + 60 - m1;
                    };
                    $mondai.innerText = `午前中に` + h1 + `時間` + m1 + `分、午後に` + m2 + `分本を読みました。本を読んだ時間の合計は?`;
                    break;
                case 3:
                    ha = getRandom(2, 5);
                    h2 = ha - 1;
                    if (q == 1){
                        ma = "";
                        m1 = getRandom(1, 5) * 10;
                        m2 = 60 - m1;
                    } else {
                        m1 = getRandom(2, 5);
                        ma = getRandom(1, m1 - 1);
                        m1 = m1 * 10;
                        ma = ma * 10;
                        m2 = ma + 60 - m1;
                    };
                    $mondai.innerText = `午前中に` + m1 + `分、午後に` + h2 + `時間` + m2 + `分本を読みました。本を読んだ時間の合計は?`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step7Setup(){
        if (count < mondaiNum){
            ampmTxt = ampm[getRandom(0, 1)];
            $kotae2.style.display = "inline-block";
            $unit2.innerText = `分`;
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            switch(p){
                case 1:
                    $kotae1.style.display = "none";    
                    $unit1.innerText = "";
                    h1 = getRandom(1, 11);
                    h2 = h1;
                    ha = ""
                    m2 = getRandom(2, 11);
                    m1 = getRandom(1, m2 - 1);
                    m2 = m2 * 5;
                    m1 = m1 * 5;
                    break;
                case 2:
                    $kotae1.style.display = "inline-block";    
                    $unit1.innerText = `時間`;
                    h2 = getRandom(2, 11);
                    h1 = getRandom(1, h2 - 1);
                    ha = h2 - h1;
                    m2 = getRandom(2, 5);
                    m1 = getRandom(1, m2 - 1);
                    m2 = m2 * 10;
                    m1 = m1 * 10;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            ma = m2 - m1;
            $mondai.innerText = ampmTxt + h1 + `時` + m1 + `分から` + ampmTxt + h2 + `時` + m2 + `分までの時間の長さは?`;
        } else if (count == mondaiNum){
            closing();
        };
    };  

    function step8Setup(){
        if (count < mondaiNum){
            ampmTxt = ampm[getRandom(0, 1)];
            $kotae2.style.display = "inline-block";
            $unit2.innerText = `分`;
            pb = p;
            p = getRandom(1, 3);
            while (p == pb){
                p = getRandom(1, 3);
            };
            switch(p){
                case 1:
                    $kotae1.style.display = "none";    
                    $unit1.innerText = "";
                    m1 = getRandom(2, 5);
                    m2 = getRandom(1, m1 - 1);
                    m1 = m1 * 10;
                    m2 = m2 * 10;
                    ma = m2 + 60 - m1;
                    h2 = getRandom(2, 11);
                    h1 = h2 - 1;
                    ha = ""
                    $mondai.innerText = ampmTxt + h1 + `時` + m1 + `分から` + ampmTxt + h2 + `時` + m2 + `分までの時間の長さは?`;
                    break;
                case 2:
                    $kotae1.style.display = "inline-block";    
                    $unit1.innerText = `時間`;
                    m1 = getRandom(2, 5);
                    m2 = getRandom(1, m1 - 1);
                    m1 = m1 * 10;
                    m2 = m2 * 10;
                    ma = m2 + 60 - m1;
                    h2 = getRandom(3, 11);
                    h1 = getRandom(1, h2 - 2);
                    ha = h2 - h1 - 1;
                    $mondai.innerText = ampmTxt + h1 + `時` + m1 + `分から` + ampmTxt + h2 + `時` + m2 + `分までの時間の長さは?`;
                    break;
                case 3:
                    $kotae1.style.display = "inline-block";    
                    $unit1.innerText = `時間`;
                    m1 = getRandom(1, 5) * 10;
                    ma = 60 - m1;
                    h2 = getRandom(3, 11);
                    h1 = getRandom(1, h2 - 2);
                    ha = h2 - h1 - 1;
                    $mondai.innerText = ampmTxt + h1 + `時` + m1 + `分から` + ampmTxt + h2 + `時までの時間の長さは?`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
        } else if (count == mondaiNum){
            closing();
        };
    };  

    $checkBtn.addEventListener("click", () => {
        if ($kotae1.value == ha && $kotae2.value == ma){
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
    
zikokuzikan1();