function heikin1(){
    
    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $kotae1 = document.getElementById("kotae1");
    const $kotae2 = document.getElementById("kotae2");
    const $dot = document.getElementById("dot");
    const $unit = document.getElementById("unit");
    
    const $progress = document.getElementById("progress");

    const $memoHyojiBtn = document.getElementById("memohyoji");//計算メモ
    const $memoClearBtn = document.getElementById("memoclear");//計算メモ
    const $memoTable = document.getElementById("memotable");//計算メモ
    
    let count = 0;
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;
    let a1 = 0;
    let a2 = 0;
    let k2v = ""; //0xとxを区別
    let p = 0;
    let pb = 0;
    let mondaiNum = 8;
    
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
        a1 = 0;
        a2 = "";
        k2v = ""; //0xとxを区別
        p = 0;
        pb = 0;
        $kotae1.value = "";
        $kotae2.value = "";
        $unit.innerText = "";
        $mondai.innerText = "";
    };

    function switchdisplay(){
        $kotae1.style.display = "inline-block"; 
        $dot.innerText = "";
        $kotae2.style.display = "none";
        $progress.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $step.style.display = "none";
        $startBtn.style.display = "none";
    };

    function defaultdisplay(){
        $kotae1.style.display = "none";
        $dot.innerText = "";
        $kotae2.style.display = "none";
        $unit.innerText = "";
        $progress.style.display = "none";
        $eraseBtn.style.display = "none";
        $resetBtn.style.display = "none";
        $memoHyojiBtn.style.display = "none";//計算メモ
        $memoClearBtn.style.display = "none";//計算メモ
        $memoTable.style.display = "none";//計算メモ
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
            case "4":
                step4Setup();
                break;
            default:
                alert(`リロードして下さい`);
        };
    };

    function checkAnswer(){
        if ($kotae1.value == a1 && k2v == a2){ //0xとxを区別
            $memoClearBtn.style.display = "none";//計算メモ
            $memoTable.style.display = "none";//計算メモ
            k2v = ""; //0xとxを区別
            setTimeout(() => {
                audio1.play();
                $kotae1.value = "";
                $kotae2.value = "";
                $progress.value = count / mondaiNum;
            }, 500);
            count++;
            switchSetup($step.value);
        };
    };

    function step1Setup(){
        if (count < mondaiNum){
            $unit.innerText = "点";
            a2 = "";
            pb = p;
            p = getRandom(2, 4);
            while (p == pb){
                p = getRandom(2, 4);
            };
            n1 = getRandom(70, 100);
            $mondai.innerText = `テストを` + p + `回受けました。`;
            switch(p){
                case 2:
                    if (n1 % 2 == 0){
                        n2 = getRandom(35, 50) * 2;
                        while (n2 == n1) {
                            n2 = getRandom(35, 50) * 2;
                        };
                        a1 = (n1 + n2) / 2;
                    } else {
                        n2 = getRandom(35, 49) * 2 + 1;
                        while (n2 == n1) {
                            n2 = getRandom(35, 49) * 2 + 1;
                        };
                    };
                    a1 = (n1 + n2) / 2;
                    $mondai.innerText += `1回目が` + n1 + `点、2回目が` + n2;
                    break;
                case 3:
                    n2 = getRandom(70, 100);
                    if ((n1 + n2) % 3 == 0){
                        n3 = getRandom(24, 33) * 3;
                        while (n3 == n2) {
                            n3 = getRandom(24, 33) * 3;
                        };
                    } else if ((n1 + n2) % 3 == 1){
                        n3 = getRandom(23, 32) * 3 + 2;
                        while (n3 == n2) {
                            n3 = getRandom(23, 32) * 3 + 2;
                        };
                    } else {
                        n3 = getRandom(23, 33) * 3 + 1;
                        while (n3 == n2) {
                            n3 = getRandom(23, 33) * 3 + 1;
                        };
                    };
                    a1 = (n1 + n2 + n3) / 3;
                    $mondai.innerText +=  `1回目が` + n1 + `点、2回目が` + n2 + `点、3回目が` + n3;
                    break;
                case 4:
                    n2 = getRandom(70, 100);
                    n3 = getRandom(70, 100);
                    if ((n1 + n2 + n3) % 4 == 0){
                        n4 = getRandom(18, 25) * 4;
                        while (n4 == n3) {
                            n4 = getRandom(18, 25) * 4;
                        };
                    } else if ((n1 + n2 + n3) % 4 == 1){
                        n4 = getRandom(17, 24) * 4 + 3;
                        while (n4 == n3) {
                            n4 = getRandom(17, 24) * 4 + 3;
                        };
                    } else if ((n1 + n2 + n3) % 4 == 2){
                        n4 = getRandom(17, 24) * 4 + 2;
                        while (n4 == n3) {
                            n4 = getRandom(17, 24) * 4 + 2;
                        };
                    } else {
                        n4 = getRandom(18, 24) * 4 + 1;
                        while (n4 == n3) {
                            n4 = getRandom(18, 24) * 4 + 1;
                        };
                    };
                    a1 = (n1 + n2 + n3 + n4) / 4;
                    $mondai.innerText +=  `それぞれ` + n1 + `点、` + n2 + `点、`+ n3 + `点、` + n4;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            $mondai.innerText += `点だった時、` + p + `回のテストの平均は何点?`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        if (count < mondaiNum){
            $unit.innerText = "点";
            $dot.innerText = ".";
            $kotae2.style.display = "inline-block";
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            n1 = getRandom(70, 100);
            n2 = getRandom(70, 100);
            $mondai.innerText = `テストを` + p * 2 + `回受けました。`;
            switch(p){
                case 1:
                    while (n2 == n1 || (n1 + n2) % 2 == 0) {
                        n2 = getRandom(70, 100);
                    };
                    a1 = Math.floor((n1 + n2) / 2);
                    a2 = 5;
                    a2 = a2 + 10; //0xとxを区別
                    $mondai.innerText +=  `1回目が` + n1 + `点、2回目が` + n2;
                    break;
                case 2:
                    n3 = getRandom(70, 100);
                    n4 = getRandom(70, 100);
                    while (n4 == n3 || (n1 + n2 + n3 + n4) % 4 == 0) {
                        n4 = getRandom(70, 100);
                    };
                    a1 = Math.floor((n1 + n2 + n3 + n4) / 4);
                    a2 = (n1 + n2 + n3 + n4) * 100 / 4 - a1 * 100;
                    if (a2 % 10 == 0){
                        a2 = a2 / 10;
                        a2 = a2 + 10; //0xとxを区別
                    } else {
                        a2 = a2 + 100; //0xとxを区別
                    };
                    $mondai.innerText += `それぞれ` + n1 + `点、` + n2 + `点、` + n3 + `点、` + n4;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            $mondai.innerText += `点だった時、平均は何点?`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step3Setup(){
        if (count < mondaiNum){
            $unit.innerText = "秒";
            $dot.innerText = ".";
            $kotae2.style.display = "inline-block";
            pb = p;
            p = getRandom(1, 2);
            while (p == pb){
                p = getRandom(1, 2);
            };
            n1 = getRandom(80, 100);
            n2 = getRandom(80, 100);
            $mondai.innerText = `50m走を` + p * 2 + `回走りました。`;
            switch(p){
                case 1:
                    while (n2 == n1 || (n1 + n2) % 2 == 1) {
                        n2 = getRandom(80, 100);
                    };
                    a1 = (n1 + n2) / 2;
                    if (a1 % 10 == 0) {
                        a2 = "";
                        $dot.innerText = "";
                        $kotae2.style.display = "none";
                        a1 = a1 / 10; 
                    } else {
                        a1 = Math.floor(a1 / 10);
                        a2 = (n1 + n2) * 10 / 2 - a1 * 100;
                        if (a2 % 10 == 0){
                            a2 = a2 / 10;
                            a2 = a2 + 10; //0xとxを区別
                        } else {
                            a2 = a2 + 100; //0xとxを区別
                        };
                    };
                    n1 = n1 / 10;
                    n2 = n2 / 10;
                    console.log(a1);
                    console.log(a2);
                    $mondai.innerText +=  `1回目は` + n1 + `秒、2回目は` + n2;
                    break;
                case 2:
                    n3 = getRandom(80, 100);
                    n4 = getRandom(80, 100);
                    while (n4 == n3 || (n1 + n2 + n3 + n4) % 2 == 1) {
                        n4 = getRandom(80, 100);
                    };
                    a1 = (n1 + n2 + n3 + n4) / 4;
                    if (a1 % 10 == 0) {
                        a2 = "";
                        $dot.innerText = "";
                        $kotae2.style.display = "none";
                        a1 = a1 / 10; 
                    } else {
                        a1 = Math.floor(a1 / 10);
                        a2 = (n1 + n2 + n3 + n4) * 10 / 4 - a1 * 100;
                        if (a2 % 10 == 0){
                            a2 = a2 / 10;
                            a2 = a2 + 10; //0xとxを区別
                        } else {
                            a2 = a2 + 100; //0xとxを区別
                        };
                    };
                    n1 = n1 / 10;
                    n2 = n2 / 10;
                    n3 = n3 / 10;
                    n4 = n4 / 10;
                    console.log(a1);
                    console.log(a2);
                    $mondai.innerText +=  `4回の記録が` + n1 + `秒、` + n2 + `秒、` + n3 + `秒、` + n4;
                    break;
                default:
                    alert(`リロードして下さい`);
                };
            $mondai.innerText += `秒だった時、` + p * 2 + `回の記録の平均は?`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step4Setup(){
        if (count < mondaiNum){
            $unit.innerText = "点";
            a2 = "";
            pb = p;
            p = getRandom(2, 4);
            while (p == pb){
                p = getRandom(2, 4);
            };
            n1 = getRandom(70, 99);
            a1 = n1 * p;
            $mondai.innerText = p + `教科のテストを受けました。各教科の平均が` + n1 + `点だった時、合計は何点?`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    $kotae1.addEventListener("input", () => {
        if ($kotae2.value != ""){ //0xとxを区別
            k2v = "1" + $kotae2.value;
        };
        checkAnswer();
    });
    
    $kotae2.addEventListener("input", () => {
        if ($kotae2.value != ""){ //0xとxを区別
            k2v = "1" + $kotae2.value;
        };
        checkAnswer();
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
    
heikin1();