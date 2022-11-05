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

function writeRecords(){
        //要リファクタ↓
    if (records[0] == 3){
            $r1.innerText = `マスターしました！`;
        } else {
            $r1.innerText = records[0] + `回クリア。あと` + (3 - records[0]) + `回`;
        };
    if (records[1] == 3){
            $r2.innerText = `マスターしました！`;
        } else {
            $r2.innerText = records[1] + `回クリア。あと` + (3 - records[1]) + `回`;
        };
    if (records[2] == 3){
            $r3.innerText = `マスターしました！`;
        } else {
            $r3.innerText = records[2] + `回クリア。あと` + (3 - records[2]) + `回`;
        };
    if (records[3] == 3){
            $r4.innerText = `マスターしました！`;
        } else {
            $r4.innerText = records[3] + `回クリア。あと` + (3 - records[3]) + `回`;
        };
    if (records[4] == 3){
            $r5.innerText = `マスターしました！`;
        } else {
            $r5.innerText = records[4] + `回クリア。あと` + (3 - records[4]) + `回`;
        };
    if (records[5] == 3){
            $r6.innerText = `マスターしました！`;
        } else {
            $r6.innerText = records[5] + `回クリア。あと` + (3 - records[5]) + `回`;
        };
    if (records[6] == 3){
            $r7.innerText = `マスターしました！`;
        } else {
            $r7.innerText = records[6] + `回クリア。あと` + (3 - records[6]) + `回`;
        };
    if (records[7] == 3){
            $r8.innerText = `マスターしました！`;
        } else {
            $r8.innerText = records[7] + `回クリア。あと` + (3 - records[7]) + `回`;
        };
    if (records[8] == 3){
            $r9.innerText = `マスターしました！`;
        } else {
            $r9.innerText = records[8] + `回クリア。あと` + (3 - records[8]) + `回`;
        };
    //要リファクタ↑
};

function closing(){
    audio2.play();
    if (records[danInt - 1] < 3){
        records[danInt - 1]++;
    };
    writeRecords();
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

writeRecords();

};

kuku2();