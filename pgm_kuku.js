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
const $level = document.getElementById("level");
const $startBtn = document.getElementById("start-btn");
const $eraseBtn = document.getElementById("erase-btn");
const $giveupBtn = document.getElementById("giveup-btn");

const $hint = document.getElementById("hint");
const $mondai = document.getElementById("mondai");
const $kotae = document.getElementById("kotae");

//const $progress = document.getElementById("progress");

let danInt = 0;
let count = 0;
let n = 0;
let a = 0;
let countMax = 9;
//let mondaiNum = 20;

/*
function getRandom(min, max){
    let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
    return randomNum;
};
*/

function closing(){
    audio2.play();
    //$progress.value = 1;
    $kotae.value = "";
    $hint.innerText = "";
    $mondai.innerText = "";
    count = 0;
    n = 0;
    alert(`クリアしました`);
};

function level0Setup(){
    if (count <= countMax){
        a = n + danInt;
        $mondai.innerText = n + `＋` + danInt + `＝`;
    } else if (count > countMax){
        closing();
    };
};

function level1Setup(){
    if (count <= countMax){
        a = danInt * count;
        $hint.innerText = kukuHint[danInt-1][count-1];
        $mondai.innerText = danInt + `×` + count + `＝`;
    } else if (count > countMax){
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
        console.log(count);
        switch($level.value){
            case "0":
                n = a;
                level0Setup();
                break;
            case "1":
                level1Setup();
                break;
            /*
            case "2":
                level2Setup();
                break;
            case "3":
                level3Setup();
                break;
            case "4":
                level4Setup();
                break;
            case "5":
                level5Setup();
                break;
            */
            default:
                alert(`リロードして下さい`);
        };
    };
});

$startBtn.addEventListener("click", () => {
    count = 1;
    //$progress.value = 0;
    danInt = parseInt($dan.value);
    switch($level.value){
        case "0":
            level0Setup();
            break;
        case "1":
            level1Setup();
            break;
        /*
        case "2":
            level2Setup();
            break;
        case "3":
            level3Setup();
            break;
        case "4":
            level4Setup();
            break;
        case "5":
            level5Setup();
            break;
        */
        default:
            alert(`リロードして下さい`);
    };
});

$eraseBtn.addEventListener("click", () => {
    $kotae.value = "";
});

$giveupBtn.addEventListener("click", () => {
    count = 0;
    n = 0;
    $hint.innerText = "";
    $kotae.value = "";
    $mondai.innerText = "";
    //$progress.value = 0;
});

};

kuku();
    
/*
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
    
*/