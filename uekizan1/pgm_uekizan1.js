function uekizan1(){
    
    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");
    const $hintBtn = document.getElementById("hint-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $resetBtn = document.getElementById("reset-btn");

    const $mondai = document.getElementById("mondai");
    const $hint = document.getElementById("hint");
    const $kotae = document.getElementById("kotae");
    
    const $progress = document.getElementById("progress");
    
    let count = 0;
    let AllLen = 0;
    let IntLen = 0;
    let IntNum = 0;
    let TrNum = 0;
    let a = 0; //答え
    let p = 0; //パターン
    let pb = 0; //前問のパターン
    let pstep4 = 0; //ステップ4のパターン
    let pstep4b = 0; //前問のステップ4のパターン
    let mondaiNum = 10;
    let hintMsg = "";
    
    function getRandom(min, max){
        let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNum;
    };
    
    function defaultlet(){
        count = 0;
        AllLen = 0;
        IntLen = 0;
        IntNum = 0;
        TrNum = 0;
        a = 0;
        p = 0;
        pb = 0;
        pstep4 = 0;
        pstep4b = 0;
        $kotae.value = "";
        $hint.innerText = "";
        $mondai.innerText = "";
    };

    function setlet(){
        IntLen = getRandom (5, 9);
        IntNum = getRandom (8, 15);
        AllLen = IntLen * IntNum;
    };

    function switchdisplay(){
        $hintBtn.style.display = "block";
        $kotae.style.display = "block";
        $progress.style.display = "block";
        $eraseBtn.style.display = "inline-block";
        $resetBtn.style.display = "inline-block";
        $step.style.display = "none";
        $startBtn.style.display = "none";
    };

    function defaultdisplay(){
        $hintBtn.style.display = "none";
        $kotae.style.display = "none";
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
            default:
                alert(`リロードして下さい`);
        };
    };

    function step1Setup(){
        $hintBtn.style.display = "block";
        setlet();
        if (count < mondaiNum){
            pb = p;
            p = getRandom(1, 3);
            while (p == pb){
                p = getRandom(1, 3);
            };
            switch(p){
                case 1:
                    TrNum = IntNum + 1;
                    $mondai.innerText = `長さ` + AllLen + `mの道に` + IntLen + `mごとに木を植えます。道の両はしにも木を植える場合、木は何本必要?`;
                    break;
                case 2:
                    TrNum = IntNum - 1;
                    $mondai.innerText = `長さ` + AllLen + `mの道に` + IntLen + `mごとに木を植えます。道の両はしには木を植えない場合、木は何本必要?`; 
                    break;
                case 3:
                    TrNum = IntNum;
                    $mondai.innerText = `1周` + AllLen + `mの池のまわりに` + IntLen + `mごとに木を植える時、木は何本必要?`; 
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            a = TrNum;
            hintMsg = `木と木の間は` + AllLen + `÷` + IntLen + `＝` + IntNum + `か所`;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step2Setup(){
        $hintBtn.style.display = "block";
        setlet();
        if (count < mondaiNum){
            pb = p;
            p = getRandom(4, 6);
            while (p == pb){
                p = getRandom(4, 6);
            };
            switch(p){
                case 4:
                    TrNum = IntNum + 1;
                    $mondai.innerText = `道にそって` + IntLen + `mごとに木を植えたところ、木が` + TrNum + `本必要でした。道の両はしにも木を植えていた場合、道の長さは何m?`;
                    hintMsg = `木と木の間は` + TrNum + `－1＝` + IntNum + `か所`;
                    break;
                case 5:
                    TrNum = IntNum - 1;
                    $mondai.innerText = `道にそって` + IntLen + `mごとに木を植えたところ、木が` + TrNum + `本必要でした。道の両はしには木を植えていない場合、道の長さは何m?`;
                    hintMsg = `木と木の間は` + TrNum + `＋1＝` + IntNum + `か所`;
                    break;
                case 6:
                    TrNum = IntNum;
                    $mondai.innerText = `池のまわりに` + IntLen + `mごとに木を植えたところ、木が` + TrNum + `本必要でした。池のまわりの長さは何m?`;
                    hintMsg = `木と木の間は` + IntNum + `か所`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            a = AllLen;
        } else if (count == mondaiNum){
            closing();
        };
    };

    function step3Setup(){
        $hintBtn.style.display = "block";
        setlet();
        if (count < mondaiNum){
            pb = p;
            p = getRandom(7, 9);
            while (p == pb){
                p = getRandom(7, 9);
            };
            switch(p){
                case 7:
                    TrNum = IntNum + 1;    
                    $mondai.innerText = `長さ` + AllLen + `mの道に同じ間隔（かんかく）で` + TrNum + `本の木を植えます。道の両はしにも木を植える時、木と木の間は何mにすればいいでしょう?`;
                    hintMsg = `木と木の間は` + TrNum + `－1＝` + IntNum + `か所`;
                    break;
                case 8:
                    TrNum = IntNum - 1;    
                    $mondai.innerText = `長さ` + AllLen + `mの道に同じ間隔（かんかく）で` + TrNum + `本の木を植えます。道の両はしには木を植えない時、木と木の間は何mにすればいいでしょう?`;
                    hintMsg = `木と木の間は` + TrNum + `＋1＝` + IntNum + `か所`;
                    break;
                case 9:
                    TrNum = IntNum;    
                    $mondai.innerText = `1周` + AllLen + `mの池のまわりに同じ間隔（かんかく）で` + TrNum + `本の木を植える時、木と木の間は何mにすればいいでしょう?`;
                    hintMsg = `木と木の間は` + IntNum + `か所`;
                    break;
                default:
                    alert(`リロードして下さい`);
            };
            a = IntLen;
        } else if (count == mondaiNum){
            closing();
        };
    };
    
    function step4Setup(){
        if (count < mondaiNum){
            pstep4b = pstep4;
            pstep4 = getRandom(1, 3);
            while (pstep4 == pstep4b){
                pstep4 = getRandom(1, 3);
            };
            switch(pstep4){
                case 1:
                    step1Setup();
                    $hintBtn.style.display = "none";
                    break;
                case 2:
                    step2Setup();
                    $hintBtn.style.display = "none";
                    break;
                case 3:
                    step3Setup();
                    $hintBtn.style.display = "none";
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
            setTimeout(() => {
                audio1.play();
                $hint.innerText = "";
                $kotae.value = "";
                $progress.value = count / mondaiNum;
            }, 500);
            count++;
            switchSetup($step.value);
        };
    });
    
    $hintBtn.addEventListener("click", () => {
        $hint.innerText = hintMsg;
        $hintBtn.style.display = "none";
    });

    $startBtn.addEventListener("click", () => {
        switchdisplay();
        defaultlet();
        $progress.value = 0;
        switchSetup($step.value);
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
    
uekizan1();