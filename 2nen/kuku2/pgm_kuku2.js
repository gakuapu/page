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
            let rtmp = getRandom(1, 9);
            if(!randoms.includes(rtmp)){
                randoms.push(rtmp);
                break;
            }
        } 
    };
};

let records = [0, 0, 0, 0, 0, 0, 0, 0, 0];

//classnameでの取得なので配列になる
const $r = document.getElementsByClassName("r");

const $dan = document.getElementById("dan");
const $startBtn = document.getElementById("start-btn");
const $eraseBtn = document.getElementById("erase-btn");
const $resetBtn = document.getElementById("reset-btn");

const $danTitle = document.getElementById("dantitle");
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
    $danTitle.innerText = "";
    $mondai.innerText = "";
    $kotae.value = "";
};

function writeRecords(){
    for (let rcount = 0; rcount < $r.length; rcount++){
        if (records[rcount] == 1){
            $r[rcount].innerText = `クリア！`;
        } else {
            $r[rcount].innerText = `チャレンジしよう`; 
        };
    };
};

function closing(){
    audio2.play();
    if (records[danInt - 1] < 1){
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
    $danTitle.innerText = danInt + `のだんの確認テスト`;
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