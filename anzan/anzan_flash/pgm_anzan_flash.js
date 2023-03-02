function anzan_flash(){

const $kuchi = document.getElementById("kuchi");
const $hayasa = document.getElementById("hayasa");
const $startBtn = document.getElementById("start-btn");
const $eraseBtn = document.getElementById("erase-btn");
const $resetBtn = document.getElementById("reset-btn");

const $mondai0 = document.getElementById("mondai0");
const $mondai1 = document.getElementById("mondai1");
const $mondaispace = document.getElementById("mondaispace");
const $kotae = document.getElementById("kotae");

const $checkBtn = document.getElementById("check-btn");
const $progress = document.getElementById("progress");
const $kekka1 = document.getElementById("kekka1");
const $kekka2 = document.getElementById("kekka2");

let count = 0;
let seikaiNum = 0;
let n = [];
let a = 0;
let i = 0;
let j = 0;
let countMax = 10;

function getRandom(min, max) {
    let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
    return randomNum;
};

function switchdisplay(){
    $kuchi.style.display = "none";
    $hayasa.style.display = "none";
    $startBtn.style.display = "none";
    $mondai0.style.display = "block";
    $mondai1.style.display = "inline-block";
    $mondaispace.style.display = "inline-block";
    $eraseBtn.style.display = "inline-block";
    $resetBtn.style.display = "inline-block";
    $kotae.style.display = "block";
    $checkBtn.style.display = "block";
    $progress.style.display = "block";
};

function defaultdisplay(){
    $kuchi.style.display = "inline-block";
    $hayasa.style.display = "inline-block";
    $startBtn.style.display = "inline-block";
    $mondai0.style.display = "none";
    $mondai1.style.display = "none";
    $mondaispace.style.display = "none";
    $eraseBtn.style.display = "none";
    $resetBtn.style.display = "none";
    $kotae.style.display = "none";
    $checkBtn.style.display = "none";
    $progress.style.display = "none";
    $kekka1.style.display = "none";
    $kekka2.style.display = "none";
};

function defaultlet(){
    count = 0;
    seikaiNum = 0;
    n.length = 0;
    a = 0;
    i = 0;
    j = 0;
    $mondai1.innerText = "";
    $kotae.value = "";
    $kekka1.innerText = "";
    $kekka2.innerText = "";
    $progress.value = 0;
};

function closing(){
    audio2.play();
    $progress.value = 1;
    $kekka1.style.display = "block";
    $kekka2.style.display = "block";
    $kekka1.innerText = `【正解数：` + seikaiNum + `問/` + countMax + `問】`;
    if (seikaiNum == countMax){
        $kekka2.innerText = `全問正解！`;
    };
};

function generatemondai(){
    for (i = 0; i < $kuchi.value; i++){
        n[i] = getRandom(1, 9);
        a = a + n[i];
    };
    if (a <= $kuchi.value * 5 - 5){
        a = 0;
        generatemondai();
    };
};

function timer0(){ //1sec後に1問目表示
    setTimeout(() => {
        $mondai1.innerText = n[j];
        j++;
        timer1();
    }, 1000);
};

function timer1(){ 
    if (j < $kuchi.value) {
        setTimeout (() => { //インターバル
            $mondai1.innerText = "";
            setTimeout(() => {
                $mondai1.innerText = n[j]; //次の問題の表示
                j++;
                timer1();
            }, 200);
        }, $hayasa.value - 200);
    } else {
        setTimeout (() => {
            $mondai1.innerText = "";
            $resetBtn.disabled = false;
        }, $hayasa.value);
    };
};

function setup(){
    if (count < countMax){
        $resetBtn.disabled = true;
        generatemondai();
        timer0();
    } else if (count == countMax){
        closing();
    };
};

$checkBtn.addEventListener("click", () => {
    if ($kotae.value == a){
        setTimeout(() => {
            audio1.play();
        }, 500);
        seikaiNum++;
    } else {
        setTimeout(() => {
            audio3.play();
        }, 500);
    };
    $mondai1.innerText = "";
    $kotae.value = "";
    a = 0;
    count++;
    $progress.value = count / countMax;
    i = 0;
    j = 0;
    setup();
});

$startBtn.addEventListener("click", () => {
    switchdisplay();
    setup();
});

$eraseBtn.addEventListener("click", () => {
    $kotae.value = "";
});

$resetBtn.addEventListener("click", () => {
    defaultlet();
    defaultdisplay();
});

};

anzan_flash();