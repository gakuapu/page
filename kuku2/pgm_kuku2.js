function kuku2(){

//1～9までのランダム配列（randoms）の生成
let randoms = [];

function getRandom(min, max){
    let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
    return randomNum;
};

function generateRandoms(){
    for (let i = 1; i <= 9; i++){
        while(true){
            let tmp = getRandom(1, 9);
            if(!randoms.includes(tmp)){
                randoms.push(tmp);
                break;
            }
        } 
    };
};

const $dan = document.getElementById("dan");
const $startBtn = document.getElementById("start-btn");
const $eraseBtn = document.getElementById("erase-btn");
const $resetBtn = document.getElementById("reset-btn");

const $hint0 = document.getElementById("hint0");
const $mondai = document.getElementById("mondai");
const $kotae = document.getElementById("kotae");

let danInt = 0;
let count = 0;
let n = 0;
let a = 0;
let countMax = 9;

function switchdisplay(){
    $dan.style.display = "none";
    $startBtn.style.display = "none";
    $eraseBtn.style.display = "inline-block";
    $resetBtn.style.display = "inline-block";
    $kotae.style.display = "block";
};

function defaultdisplay(){
    $dan.style.display = "inline-block";
    $startBtn.style.display = "inline-block";
    $eraseBtn.style.display = "none";
    $resetBtn.style.display = "none";
    $kotae.style.display = "none";
};

function defaultlet(){
    count = 0;
    n = 0;
    randoms.length = 0; //配列の要素を全て削除
    $hint0.innerText = "";
    $mondai.innerText = "";
    $kotae.value = "";
};

function closing(){
    audio2.play();
    defaultlet();
    defaultdisplay();
    alert(`クリアしました`);
};

function setup(){
    if (count <= countMax){
        a = danInt * randoms[count - 1];
        $mondai.innerText = danInt + `×` + randoms[count - 1] + `＝`;
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
        setup();
    };
});

$startBtn.addEventListener("click", () => {
    switchdisplay();
    danInt = parseInt($dan.value);
    $hint0.innerText = danInt + `のだんの確認テスト`;
    count = 1;
    generateRandoms();
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

kuku2();