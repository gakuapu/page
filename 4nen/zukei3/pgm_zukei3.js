function zukei3() {

    //1～mondaNumまでのランダム配列（randoms）の生成
    let mondaiNum = 0;
    let randoms = [];

    function getRandom(min, max){
    let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
    return randomNum;
    };

    function generateRandoms(mondaiNum){
        for (let i = 0; i < mondaiNum; i++){
            while(true){
                let rtmp = getRandom(0, mondaiNum - 1);
                if(!randoms.includes(rtmp)){
                    randoms.push(rtmp);
                    break;
                }
            } 
        };
    };

    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");

    const $mondai0 = document.getElementById("mondai0");
    const $mondai = document.getElementById("mondai");

    const $sq1Btn = document.getElementById("sq1-btn");
    const $sq2Btn = document.getElementById("sq2-btn");
    const $sq3Btn = document.getElementById("sq3-btn");
    const $sq4Btn = document.getElementById("sq4-btn");
    const $sq5Btn = document.getElementById("sq5-btn");
    const $sq6Btn = document.getElementById("sq6-btn");

    const $checkBtn = document.getElementById("check-btn");
    const $eraseBtn = document.getElementById("erase-btn");
    const $stopBtn = document.getElementById("stop-btn");
    const $nextBtn = document.getElementById("next-btn");

    const $progress = document.getElementById("progress");
    const $seikai0 = document.getElementById("seikai0");
    const $seikai = document.getElementById("seikai");

    let count = 0;
    let n = 0;
    let a = 0;

    function defaultlet() {
        randoms.length = 0;
        count = 0;
        n = 0;
        a = 0;
        $mondai.innerText = "";
        $seikai.innerText = "";
        resetSelected();
        $progress.value = 0;
    };

    function switchdisplay() {
        $step.style.display = "none";
        $startBtn.style.display = "none";
        $mondai0.style.display = "block";
        $sq1Btn.style.display = "inline-block";
        $sq2Btn.style.display = "inline-block";
        $sq3Btn.style.display = "inline-block";
        $sq4Btn.style.display = "inline-block";
        $sq5Btn.style.display = "inline-block";
        $sq6Btn.style.display = "inline-block";
        $checkBtn.style.display = "inline-block";
        $eraseBtn.style.display = "inline-block";
        $stopBtn.style.display = "inline-block";
        $progress.style.display = "block";
    };

    function defaultdisplay() {
        $step.style.display = "block";
        $startBtn.style.display = "block";
        $mondai0.style.display = "none";
        $seikai0.style.display = "none";
        $sq1Btn.style.display = "none";
        $sq2Btn.style.display = "none";
        $sq3Btn.style.display = "none";
        $sq4Btn.style.display = "none";
        $sq5Btn.style.display = "none";
        $sq6Btn.style.display = "none";
        $checkBtn.style.display = "none";
        $eraseBtn.style.display = "none";
        $stopBtn.style.display = "none";
        $progress.style.display = "none";
        $nextBtn.style.display = "none";
    };

    function closing(){
        audio2.play();
        $progress.value = 1;
        defaultdisplay();
        defaultlet();
        alert(`クリアしました`);
    };

    function switchSetup(stepValue) {
        switch (stepValue) {
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

    function seikaiHyoji(a) {
        $seikai0.style.display = "block";
        $nextBtn.style.display = "block";
        $checkBtn.style.display = "none";
        $eraseBtn.style.display = "none";
        switch (a) {
            case 111111:
                $seikai.innerText = `全ての四角形`;
                break;
            case 111110:
                $seikai.innerText = `正方形・長方形・ひし形・平行四辺形・台形`;
                break;
            case 111100:
                $seikai.innerText = `正方形・長方形・ひし形・平行四辺形`;
                break;
            case 101000:
                $seikai.innerText = `正方形・ひし形`;
                break;
            case 110000:
                $seikai.innerText = `正方形・長方形`;
                break;
            case 100000:
                $seikai.innerText = `正方形`;
                break;
            default:
                alert (`リロードして下さい`);    
        };
    };

    $nextBtn.addEventListener("click", () => {
        $seikai0.style.display = "none";
        $seikai.innerText = "";
        $nextBtn.style.display = "none";
        $checkBtn.style.display = "inline-block";
        $eraseBtn.style.display = "inline-block";
        $progress.value = count / mondaiNum;
        resetSelected();
        switchSetup($step.value);
    });

    let step1Mondai = [
        `【4つの角がある】`,
        `【4つの辺がある】`,
        `【全ての角の大きさが等しい】`,
        `【全ての辺の長さが等しい】`,
        `【向かい合う角の大きさが等しい】`,
        `【向かい合う辺の長さが等しい】`,
        `【平行な辺がある】`,
        `【平行な辺が2組ある】`
    ];

    let step1Kaitou = [
        111111, 111111, 110000, 101000, 111100, 111100, 111110, 111100
    ];

    function step1Setup() {
        if (count < mondaiNum) {
            $mondai.innerText = step1Mondai[randoms[count]];
            a = step1Kaitou[randoms[count]];
        } else if (count == mondaiNum){
            closing();
        };
    };

    let step2Mondai = [
        `【2本の対角線の長さが等しい】`,
        `【2本の対角線がそれぞれの真ん中で交わる】`,
        `【2本の対角線が垂直に交わる】`,
        `【2本の対角線が同じ長さであり、かつ、垂直に交わる】`
    ];

    let step2Kaitou = [
        110000, 111100, 101000, 100000
    ];

    function step2Setup() {
        if (count < mondaiNum) {
            $mondai.innerText = step2Mondai[randoms[count]];
            a = step2Kaitou[randoms[count]];
        } else if (count == mondaiNum){
            closing();
        };
    };

    let step3Mondai = [
        `【四角形の性質を持つ】`,
        `【台形の性質を持つ】`,
        `【平行四辺形の性質を持つ】`,
        `【ひし形の性質を持つ】`,
        `【長方形の性質を持つ】`,
        `【正方形の性質を持つ】`
    ];

    let step3Kaitou = [
        111111, 111110, 111100, 101000, 110000, 100000
    ];

    function step3Setup() {
        if (count < mondaiNum) {
            $mondai.innerText = step3Mondai[randoms[count]];
            a = step3Kaitou[randoms[count]];
        } else if (count == mondaiNum){
            closing();
        };
    };

    function sqBtnPushed(sqBtn) {
        sqBtn.style.background = "darkgray";
        sqBtn.disabled = "disabled";
    };

    function sqBtnUnselected(sqBtn) {
        sqBtn.style.background = "whitesmoke";
        sqBtn.disabled = null;
    };

    function resetSelected() {
        n = 0;
        sqBtnUnselected($sq1Btn);
        sqBtnUnselected($sq2Btn);
        sqBtnUnselected($sq3Btn);
        sqBtnUnselected($sq4Btn);
        sqBtnUnselected($sq5Btn);
        sqBtnUnselected($sq6Btn);
    };

    $sq1Btn.addEventListener("click", () => {
        n = n + 100000;
        sqBtnPushed($sq1Btn);
    });

    $sq2Btn.addEventListener("click", () => {
        n = n + 10000;
        sqBtnPushed($sq2Btn);
    });

    $sq3Btn.addEventListener("click", () => {
        n = n + 1000;
        sqBtnPushed($sq3Btn);
    });

    $sq4Btn.addEventListener("click", () => {
        n = n + 100;
        sqBtnPushed($sq4Btn);
    });

    $sq5Btn.addEventListener("click", () => {
        n = n + 10;
        sqBtnPushed($sq5Btn);
    });

    $sq6Btn.addEventListener("click", () => {
        n = n + 1;
        sqBtnPushed($sq6Btn);
    });

    $checkBtn.addEventListener("click", () => {
        if (n == a) {
            setTimeout(() => {
                audio1.play();
            }, 500);
            count++;
            $progress.value = count / mondaiNum;
            resetSelected();
            switchSetup($step.value);
        } else {
            audio3.play();
            seikaiHyoji(a);
            count++;
        };
    });

    $startBtn.addEventListener("click", () => {
        if ($step.value == 1) {
            mondaiNum = 8;
        } else if ($step.value == 2) {
            mondaiNum = 4;
        } else {
            mondaiNum = 6;
        };
        generateRandoms(mondaiNum);
        switchdisplay();
        switchSetup($step.value);
    });

    $eraseBtn.addEventListener("click", () => {
        resetSelected();
    });

    $stopBtn.addEventListener("click", () => {
        defaultdisplay();
        defaultlet();
    });

};

zukei3();