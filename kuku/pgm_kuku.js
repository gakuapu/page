function kuku(){

const kukuText1 = [
    [`いん いち が`, `いん に が`, `いん さん が`, `いん し が`, `いん ご が`, `いん ろく が`, `いん しち が`, `いん はち が`, `いん く が`],
    [`に いち が`, `に にん が`, `に さん が`, `に し が`, `に ご`, `に ろく`, `に しち`, `に はち`, `に く`],
    [`さん いち が`, `さん に が`, `さ ざん が`, `さん し`, `さん ご`, `さぶ ろく`, `さん しち`, `さん ぱ`, `さん く`],
    [`し いち が`, `し に が`, `し さん`, `し し`, `し ご`, `し ろく`, `し しち`, `し は`, `し く`],
    [`ご いち が`, `ご に`, `ご さん`, `ご し`, `ご ご`, `ご ろく`, `ご しち`, `ご は`, `ごっく`],
    [`ろく いち が`, `ろく に`, `ろく さん`, `ろく し`, `ろく ご`, `ろく ろく`, `ろく しち`, `ろく は`, `ろっく`],
    [`しち いち が`, `しち に`, `しち さん`, `しち し`, `しち ご`, `しち ろく`, `しち しち`, `しち は`, `しち く`],
    [`はち いち が`, `はち に`, `はち さん`, `はち し`, `はち ご`, `はち ろく`, `はち しち`, `はっぱ`, `はっく`],
    [`く いち が`, `く に`, `く さん`, `く し`, `く ご`, `く ろく`, `く しち`, `く は`, `く く`]
];

const kukuText2 = [
    [` いち`, ` に`, ` さん`, ` し`, ` ご`, ` ろく`, ` しち`, ` はち`, ` く`],
    [` に`, ` し`, ` ろく`, ` はち`, ` じゅう`, ` じゅうに`, ` じゅうし`, ` じゅうろく`, ` じゅうはち`],
    [` さん`, ` ろく`, ` く`, ` じゅうに`, ` じゅうご`, ` じゅうはち`, ` にじゅういち`, ` にじゅうし`, ` にじゅうしち`],
    [` し`, ` はち`, ` じゅうに`, ` じゅうろく`, ` にじゅう`, ` にじゅうし`, ` にじゅうはち`, ` さんじゅうに`, ` さんじゅうろく`],
    [` ご`, ` じゅう`, ` じゅうご`, ` にじゅう`, ` にじゅうご`, ` さんじゅう`, ` さんじゅうご`, ` しじゅう`, ` しじゅうご`],
    [` ろく`, ` じゅうに`, ` じゅうはち`, ` にじゅうし`, ` さんじゅう`, ` さんじゅうろく`, ` しじゅうに`, ` しじゅうはち`, ` ごじゅうし`],
    [` しち`, ` じゅうし`, ` にじゅういち`, ` にじゅうはち`, ` さんじゅうご`, ` しじゅうに`, ` しじゅうく`, ` ごじゅうろく`, ` ろくじゅうさん`],
    [` はち`, ` じゅうろく`, ` にじゅうし`, ` さんじゅうに`, ` しじゅう`, ` しじゅうはち`, ` ごじゅうろく`, ` ろくじゅうし`, ` しちじゅうに`],
    [` く`, ` じゅうはち`, ` にじゅうしち`, ` さんじゅうろく`, ` しじゅうご`, ` ごじゅうし`, ` ろくじゅうさん`, ` しちじゅうに`, ` はちじゅういち`]
];

const $dan = document.getElementById("dan");
const $step = document.getElementById("step");
const $startBtn = document.getElementById("start-btn");
const $hintBtn = document.getElementById("hint-btn");
const $eraseBtn = document.getElementById("erase-btn");
const $resetBtn = document.getElementById("reset-btn");

const $hint0 = document.getElementById("hint0");
const $hint1 = document.getElementById("hint1");
const $hint2 = document.getElementById("hint2");
const $mondai = document.getElementById("mondai");
const $kotae = document.getElementById("kotae");

let danInt = 0;
let count = 0;
let n = 0;
let a = 0;
let countMax = 9;

function switchdisplay(){
    $dan.style.display = "none";
    $step.style.display = "none";
    $startBtn.style.display = "none";
    $eraseBtn.style.display = "inline-block";
    $resetBtn.style.display = "inline-block";
    $kotae.style.display = "block";
};

function defaultdisplay(){
    $dan.style.display = "inline-block";
    $step.style.display = "inline-block";
    $startBtn.style.display = "inline-block";
    $eraseBtn.style.display = "none";
    $resetBtn.style.display = "none";
    $kotae.style.display = "none";
    $hintBtn.style.display = "none";
};

function defaultlet(){
    count = 0;
    n = 0;
    $hint0.innerText = "";
    $hint1.innerText = "";
    $hint2.innerText = "";
    $mondai.innerText = "";
    $kotae.value = "";
};

function closing(){
    audio2.play();
    defaultlet();
    defaultdisplay();
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
        default:
            alert(`リロードして下さい`);
    };
};

function step1Setup(){
    n = a;
    if (count <= countMax){
        a = n + danInt;
        $mondai.innerText = n + `＋` + danInt + `＝`;
    } else if (count > countMax){
        closing();
    };
};

function step2Setup(){
    if (count <= countMax){
        a = danInt * count;
        $hint1.innerText = `こえに出しながら答えを入れよう`;
        $hint2.innerText = kukuText1[danInt-1][count-1] + kukuText2[danInt-1][count-1];
        $mondai.innerText = danInt + `×` + count + `＝`;
    } else if (count > countMax){
        closing();
    };
};

function step3Setup(){
    if (count <= countMax){
        a = danInt * (10 - count);
        $hint1.innerText = `こえに出しながら答えを入れよう`;
        $hint2.innerText = kukuText1[danInt-1][10-count-1] + kukuText2[danInt-1][10-count-1];
        $mondai.innerText = danInt + `×` + (10 - count) + `＝`;
    } else if (count > countMax){
        closing();
    };
};

function step4Setup(){
    $hintBtn.style.display = "block";
    if (count <= countMax){
        a = danInt * count;
        $hint1.innerText = `答えを数字で入れよう`;
        $mondai.innerText = kukuText1[danInt-1][count-1];
    } else if (count > countMax){
        closing();
    };
};

function step5Setup(){
    $hintBtn.style.display = "block";
    if (count <= countMax){
        a = danInt * (10 - count);
        $hint1.innerText = `答えを数字で入れよう`;
        $mondai.innerText = kukuText1[danInt-1][10-count-1];
    } else if (count > countMax){
        closing();
    };
};

function step6Setup(){
    $hintBtn.style.display = "block";
    if (count <= countMax){
        a = danInt * count;
        $mondai.innerText = danInt + `×` + count + `＝`;
    } else if (count > countMax){
        closing();
    };
};

function step7Setup(){
    $hintBtn.style.display = "block";
    if (count <= countMax){
        a = danInt * (10 - count);
        $mondai.innerText = danInt + `×` + (10 - count) + `＝`;
    } else if (count > countMax){
        closing();
    };
};

$kotae.addEventListener("input", () => {
    if ($kotae.value == a){
        setTimeout(() => {
            audio1.play();
            $kotae.value = "";
        }, 500);
        count++;
        $hint2.innerText = "";
        switchSetup($step.value);
    };
});

$startBtn.addEventListener("click", () => {
    switchdisplay();
    a = 0;
    count = 1;
    danInt = parseInt($dan.value);
    $hint0.innerText = danInt + `のだんの練習`;
    switchSetup($step.value);
});

$hintBtn.addEventListener("click", () => {
    switch($step.value){
        case "4":
            $hint2.innerText = kukuText1[danInt-1][count-1] + kukuText2[danInt-1][count-1];;
            break;
        case "5":
            $hint2.innerText = kukuText1[danInt-1][10-count-1] + kukuText2[danInt-1][10-count-1];
            break;
        case "6":
            $hint2.innerText = kukuText1[danInt-1][count-1] + kukuText2[danInt-1][count-1];;
            break;
        case "7":
            $hint2.innerText = kukuText1[danInt-1][10-count-1] + kukuText2[danInt-1][10-count-1];
            break;
        default:
            alert(`リロードして下さい`);
    };
    $hintBtn.style.display = "none";
});

$eraseBtn.addEventListener("click", () => {
    $kotae.value = "";
});

$resetBtn.addEventListener("click", () => {
    defaultlet();
    defaultdisplay();
});

};

kuku();