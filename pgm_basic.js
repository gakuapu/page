function basicAnzan(){

const $keisanType = document.getElementById("keisan-type");
const $keisanLevel = document.getElementById("keisan-level");
const $startBtn = document.getElementById("start-btn");
const $eraseBtn = document.getElementById("erase-btn");
const $resetBtn = document.getElementById("reset-btn");

const $mondai = document.getElementById("mondai");
const $kotae = document.getElementById("kotae");

const $progress = document.getElementById("progress");

let mondaiNum = 20;

let n1;
let n2;
let n3;
let n4;
let a;
let count = 0;

function closing(){
    audio2.play();
    $progress.value = 1;
    $kotae.value = "";
    $mondai.innerText = "";
    count = 0;
    alert(`クリアしました`);
};

function getRandom(min, max){
    let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
    return randomNum;
};

function tasuSetup(){
    if (count < mondaiNum){
        switch($keisanLevel.value){
            case "0":
                n1 = getRandom(1,9);
                n2 = getRandom(1,9);
                break;
            case "1":
                n1 = getRandom(10,19);
                n2 = getRandom(1,9);
                break;
            case "2":
                n1 = getRandom(20,99);
                n2 = getRandom(1,9);
                break;
            case "3":
                n1 = getRandom(10,19);
                n2 = getRandom(10,19);
                break;
            case "4":
                n1 = getRandom(20,99);
                n2 = getRandom(10,19);
                break;
            case "5":
                n1 = getRandom(20,99);
                n2 = getRandom(20,99);
                break;
            default:
                alert(`リロードして下さい`);
        };
        a = n1 + n2;
        $mondai.innerText = n1 + `＋` + n2 + `＝`;
    } else if (count == mondaiNum){
        closing();
    };
};

function hikuSetup(){
    if (count < mondaiNum){
        switch($keisanLevel.value){
            case "0":
                n1 = getRandom(1,9);
                n2 = getRandom(1,n1);
                break;
            case "1":
                n1 = getRandom(10,19);
                n2 = getRandom(1,9);
                break;
            case "2":
                n1 = getRandom(20,99);
                n2 = getRandom(1,9);
                break;
            case "3":
                n1 = getRandom(20,99);
                n2 = getRandom(10,19);
                break;
            case "4":
                n1 = getRandom(50,99);
                n2 = getRandom(20,49);
                break;
            case "5":
                n1 = 100;
                n2 = getRandom(10,99);
                break;
            default:
                alert(`リロードして下さい`);
        };
        a = n1 - n2;
        $mondai.innerText = n1 + `－` + n2 + `＝`;
    } else if (count == mondaiNum){
        closing();
    };
};

function kakeruSetup(){
    if (count < mondaiNum){
        switch($keisanLevel.value){
            case "0":
                n1 = getRandom(1,5);
                n2 = getRandom(1,9);
                break;
            case "1":
                n1 = getRandom(6,9);
                n2 = getRandom(1,9);
                break;
            case "2":
                n1 = getRandom(11,19);
                n2 = getRandom(2,9);
                break;
            case "3":
                n1 = getRandom(21,99);
                n2 = getRandom(2,9);
                break;
            case "4":
                n1 = getRandom(2,9);
                n2 = getRandom(2,9);
                n3 = getRandom(2,9);
                break;
            case "5":
                n1 = getRandom(2,9) * ((getRandom(0,1) * 9) + 1);
                n2 = getRandom(2,9) * ((getRandom(0,1) * 9) + 1);
                n3 = getRandom(2,9) * ((getRandom(0,1) * 9) + 1);
                break;
            default:
                alert(`リロードして下さい`);
        };
        if ($keisanLevel.value == "4" || $keisanLevel.value == "5"){
            a = n1 * n2 * n3;
            $mondai.innerText = n1 + `×` + n2 + `×` + n3 + `＝`;
        } else {
            a = n1 * n2;
            $mondai.innerText = n1 + `×` + n2 + `＝`;  
        };
    } else if (count == mondaiNum){
        closing();
    };
};

function waruSetup(){
    if (count < mondaiNum){
        switch($keisanLevel.value){
            case "0":
                n1 = getRandom(1,9);
                n2 = getRandom(1,9);
                break;
            case "1":
                n1 = getRandom(1,9);
                n2 = getRandom(1,9);
                break;
            case "2":
                n1 = getRandom(11,19);
                n2 = getRandom(2,9);
                break;
            case "3":
                n1 = getRandom(2,9);
                n2 = getRandom(11,19);
                break;
            case "4":
                n1 = getRandom(20,99);
                n2 = getRandom(2,9);
                break;
            case "5":
                n1 = getRandom(2,9);
                n2 = getRandom(2,9);
                n3 = getRandom(2,9);
                break;
            default:
                alert(`リロードして下さい`);
        };
        if ($keisanLevel.value == "0"){
            n3 = n1 * n2;
            a = n2;
            $mondai.innerText = n1 + `×` + `□` + `＝` + n3;
        } else if ($keisanLevel.value == "5") {
            n4 = n1 * n2 * n3;
            a = n2;
            $mondai.innerText = n4 + `÷` + n1 + `÷` + n3 + `＝`;
        } else {
            n3 = n1 * n2;
            a = n2;
            $mondai.innerText = n3 + `÷` + n1 + `＝`;
        };
    } else if (count == mondaiNum){
        closing();
    };
};

$kotae.addEventListener("input", () => {  
    if ($kotae.value == a){
        setTimeout(() => {
            audio1.play();
            $kotae.value = "";
            $progress.value = count / mondaiNum;
            count++;
        }, 500);
        switch($keisanType.value){
            case "tasu":
                tasuSetup();
                break;
            case "hiku":
                hikuSetup();
                break;
            case "kakeru":
                kakeruSetup();
                break;
            case "waru":
                waruSetup();
                break;
            default:
                alert(`リロードして下さい`);
        };
    };
});

$startBtn.addEventListener("click", () => {
    count = 1;
    $progress.value = 0;
    switch($keisanType.value){
        case "tasu":
            tasuSetup();
            break;
        case "hiku":
            hikuSetup();
            break;
        case "kakeru":
            kakeruSetup();
            break;
        case "waru":
            waruSetup();
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
    $kotae.value = "";
    $mondai.innerText = "";
    $progress.value = 0;
});

};

basicAnzan();