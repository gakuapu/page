function kuku(){

const kukuHint = [
    [`いん いち が いち`, `いん に が に`, `いん さん が さん`, `いん し が し`, `いん ご が ご`, `いん ろく が ろく`, `いん しち が しち`, `いん はち が はち`, `いん く が く`],
    [`に いち が に`, `に にん が し`, `に さん が ろく`, `に し が はち`, `に ご じゅう`, `に ろく じゅうに`, `に しち じゅうし`, `に はち じゅうろく`, `に く じゅうはち`],
    [`さん いち が さん`, `さん に が ろく`, `さ ざん が く`, `さん し じゅうに`, `さん ご じゅうご`, `さぶ ろく じゅうはち`, `さん しち にじゅういち`, `さん ぱ にじゅうし`, `さん く にじゅうしち`],
    [`し いち が し`, `し に が はち`, `し さん じゅうに`, `し し じゅうろく`, `し ご にじゅう`, `し ろく にじゅうし`, `し しち にじゅうはち`, `し は さんじゅうに`, `し く さんじゅうろく`],
    [`ご いち が ご`, `ご に じゅう`, `ご さん じゅうご`, `ご し にじゅう`, `ご ご にじゅうご`, `ご ろく さんじゅう`, `ご しち さんじゅうご`, `ご は しじゅう`, `ごっく しじゅうご`],
    [`ろく いち が ろく`, `ろく に じゅうに`, `ろく さん じゅうはち`, `ろく し にじゅうし`, `ろく ご さんじゅう`, `ろく ろく さんじゅうろく`, `ろく しち しじゅうに`, `ろく は しじゅうはち`, `ろっく ごじゅうし`],
    [`しち いち が しち`, `しち に じゅうし`, `しち さん にじゅういち`, `しち し にじゅうはち`, `しち ご さんじゅうご`, `しち ろく しじゅうに`, `しち しち しじゅうく`, `しち は ごじゅうろく`, `しち く ろくじゅうさん`],
    [`はち いち が はち`, `はち に じゅうろく`, `はち さん にじゅうし`, `はち し さんじゅうに`, `はち ご しじゅう`, `はち ろく しじゅうはち`, `はち しち ごじゅうろく`, `はっぱ ろくじゅうし`, `はっく しちじゅうに`],
    [`く いち が く`, `く に じゅうはち`, `く さん にじゅうしち`, `く し さんじゅうろく`, `く ご しじゅうご`, `く ろく ごじゅうし`, `く しち ろくじゅうさん`, `く は しちじゅうに`, `く く はちじゅういち`]
];

const $dan = document.getElementById("dan");
const $step = document.getElementById("step");
const $startBtn = document.getElementById("start-btn");
const $hintBtn = document.getElementById("hint-btn");
const $eraseBtn = document.getElementById("erase-btn");
const $resetBtn = document.getElementById("reset-btn");

const $kukuHint1 = document.getElementById("kuku-hint1");
const $kukuHint2 = document.getElementById("kuku-hint2");
const $kukuMondai = document.getElementById("kuku-mondai");
const $kotae = document.getElementById("kotae");

//const $progress = document.getElementById("progress");

let danInt = 0;
let count = 0;
let n = 0;
let a = 0;
let countMax = 9;
let mondaiNum = 20;

function getRandom(min, max){
    let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
    return randomNum;
};

function closing(){
    audio2.play();
    //$progress.value = 1;
    $kotae.value = "";
    $kukuHint1.innerText = "";
    $kukuHint2.innerText ="";
    $kukuMondai.innerText = "";
    $hintBtn.style.display = "none";
    count = 0;
    n = 0;
    alert(`クリアしました`);
};

function step1Setup(){
    if (count <= countMax){
        a = n + danInt;
        $kukuMondai.innerText = n + `＋` + danInt + `＝`;
    } else if (count > countMax){
        closing();
    };
};

function step2Setup(){
    if (count <= countMax){
        a = danInt * count;
        $kukuHint1.innerText = `こえに出しながらこたえを入れよう`;
        $kukuHint2.innerText = kukuHint[danInt-1][count-1];
        $kukuMondai.innerText = danInt + `×` + count + `＝`;
    } else if (count > countMax){
        closing();
    };
};

function step3Setup(){
    if (count <= countMax){
        a = danInt * count;
        $kukuMondai.innerText = danInt + `×` + count + `＝`;
    } else if (count > countMax){
        closing();
    };
};

function step4Setup(){
    if (count <= countMax){
        a = danInt * (10 - count);
        $kukuMondai.innerText = danInt + `×` + (10 - count) + `＝`;
    } else if (count > countMax){
        closing();
    };
};

function step5Setup(){
    if (count <= mondaiNum){
        n = getRandom(1,9);
        a = danInt * n;
        $kukuMondai.innerText = danInt + `×` + n + `＝`; 
    } else if (count > mondaiNum){
            closing();
    };
};

$kotae.addEventListener("input", () => {
    if ($kotae.value == a){
        setTimeout(() => {
            audio1.play();
            $kotae.value = "";
            //$progress.value = count / mondaiNum;
            //count++;
        }, 500);
        count++;
        $kukuHint2.innerText = "";
        switch($step.value){
            case "1":
                n = a;
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
});

$startBtn.addEventListener("click", () => {
    count = 1;
    //$progress.value = 0;
    danInt = parseInt($dan.value);
    switch($step.value){
        case "1":
            step1Setup();
            break;
        case "2":
            step2Setup();
            break;
        case "3":
            step3Setup();
            $hintBtn.style.display = "inline-block";
            break;
        case "4":
            step4Setup();
            $hintBtn.style.display = "inline-block";
            break;
        case "5":
            step5Setup();
            break;
        default:
            alert(`リロードして下さい`);
    };
});

$hintBtn.addEventListener("click", () => {
    switch($step.value){
        case "3":
            $kukuHint2.innerText = kukuHint[danInt-1][count-1];
            break;
        case "4":
            $kukuHint2.innerText = kukuHint[danInt-1][10-count-1];
            break;
        default:
            alert(`リロードして下さい`);
    };
});

$eraseBtn.addEventListener("click", () => {
    $kotae.value = "";
});

$resetBtn.addEventListener("click", () => {
    count = 0;
    n = 0;
    $kukuHint1.innerText = "";
    $kukuHint2.innerText = "";
    $kotae.value = "";
    $kukuMondai.innerText = "";
    $hintBtn.style.display = "none";
    //$progress.value = 0;
});

};

kuku();