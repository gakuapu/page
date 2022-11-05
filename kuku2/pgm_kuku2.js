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

let records = [0, 0, 0, 0, 0, 0, 0, 0, 0];

//要リファクタ↓
const $r1 = document.getElementById("r1");
const $r2 = document.getElementById("r2");
const $r3 = document.getElementById("r3");
const $r4 = document.getElementById("r4");
const $r5 = document.getElementById("r5");
const $r6 = document.getElementById("r6");
const $r7 = document.getElementById("r7");
const $r8 = document.getElementById("r8");
const $r9 = document.getElementById("r9");
//要リファクタ↑

const $dan = document.getElementById("dan");
const $startBtn = document.getElementById("start-btn");
const $eraseBtn = document.getElementById("erase-btn");
const $resetBtn = document.getElementById("reset-btn");

const $hint0 = document.getElementById("hint0");
const $mondai = document.getElementById("mondai");
const $kotae = document.getElementById("kotae");

let danInt = 0;
let count = 0;
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
    randoms.length = 0; //配列の要素を全て削除
    $hint0.innerText = "";
    $mondai.innerText = "";
    $kotae.value = "";
};

function closing(){
    audio2.play();
    if (records[danInt - 1] < 3){
        records[danInt - 1]++;
    };
    //要リファクタ↓
    $r1.innerText = ``;
    $r2.innerText = ``;
    $r3.innerText = ``;
    $r4.innerText = ``;
    $r5.innerText = ``;
    $r6.innerText = ``;
    $r7.innerText = ``;
    $r8.innerText = ``;
    $r9.innerText = ``;

    let i;
    if (records[0] > 0){
        for (i = 0; i < records[0]; i++){
            $r1.innerText += `☆ `;
        }
    };
    if (records[1] > 0){
        for (i = 0; i < records[1]; i++){
            $r2.innerText = `☆ `;
        }
    };
    if (records[2] > 0){
        for (i = 0; i < records[2]; i++){
            $r3.innerText += `☆ `;
        }
    };
    if (records[3] > 0){
        for (i = 0; i < records[3]; i++){
            $r4.innerText += `☆ `;
        }
    };
    if (records[4] > 0){
        for (i = 0; i < records[4]; i++){
            $r5.innerText += `☆ `;
        }
    };
    if (records[5] > 0){
        for (i = 0; i < records[5]; i++){
            $r6.innerText += `☆ `;
        }
    };
    if (records[6] > 0){
        for (i = 0; i < records[6]; i++){
            $r7.innerText += `☆ `;
        }
    };
    if (records[7] > 0){
        for (i = 0; i < records[7]; i++){
            $r8.innerText += `☆ `;
        }
    };
    if (records[8] > 0){
        for (i = 0; i < records[8]; i++){
            $r9.innerText += `☆ `;
        }
    };
    //要リファクタ↑
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