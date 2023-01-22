function keisanmemo(){

const $memoHyojiBtn = document.getElementById("memohyoji");
const $memoClearBtn = document.getElementById("memoclear");
const $memoTable = document.getElementById("memotable");

const tdnum = 8;

const $mt1 = document.getElementById("mt1");
const $mt2 = document.getElementById("mt2");
const $mt3 = document.getElementById("mt3");
const $mt4 = document.getElementById("mt4");
const $mt5 = document.getElementById("mt5");
const $mt6 = document.getElementById("mt6");
const $mt7 = document.getElementById("mt7");
const $mt8 = document.getElementById("mt8");

function memoActivate(){

    const $memo = document.getElementsByClassName("memo");
    let memob = [];
    for (let mj = 0; mj < $memo.length; mj++){
        memob.push("");
    };

    $mt1.addEventListener("click", () => {
        for (let mi1 = tdnum * (1 - 1); mi1 < tdnum * 1; mi1++){
            $memo[mi1].addEventListener("click", () => {
                $memo[mi1].innerText = "";
            });
            $memo[mi1].addEventListener("input", () => {
                if ($memo[mi1].innerText.length > 1){
                $memo[mi1].innerText = $memo[mi1].innerText.replace(memob[mi1], "");
                };
                memob[mi1] = $memo[mi1].innerText;
            });
        };
    });

    $mt2.addEventListener("click", () => {
        for (let mi2 = tdnum * (2 - 1); mi2 < tdnum * 2; mi2++){
            $memo[mi2].addEventListener("click", () => {
                $memo[mi2].innerText = "";
            });
            $memo[mi2].addEventListener("input", () => {
                if ($memo[mi2].innerText.length > 1){
                $memo[mi2].innerText = $memo[mi2].innerText.replace(memob[mi2], "");
                };
                memob[mi2] = $memo[mi2].innerText;
            });
        };
    });

    $mt3.addEventListener("click", () => {
        for (let mi3 = tdnum * (3 - 1); mi3 < tdnum * 3; mi3++){
            $memo[mi3].addEventListener("click", () => {
                $memo[mi3].innerText = "";
            });
            $memo[mi3].addEventListener("input", () => {
                if ($memo[mi3].innerText.length > 1){
                $memo[mi3].innerText = $memo[mi3].innerText.replace(memob[mi3], "");
                };
                memob[mi3] = $memo[mi3].innerText;
            });
        };
    });

    $mt4.addEventListener("click", () => {
        for (let mi4 = tdnum * (4 - 1); mi4 < tdnum * 4; mi4++){
            $memo[mi4].addEventListener("click", () => {
                $memo[mi4].innerText = "";
            });
            $memo[mi4].addEventListener("input", () => {
                if ($memo[mi4].innerText.length > 1){
                $memo[mi4].innerText = $memo[mi4].innerText.replace(memob[mi4], "");
                };
                memob[mi4] = $memo[mi4].innerText;
            });
        };
    });

    $mt5.addEventListener("click", () => {
        for (let mi5 = tdnum * (5 - 1); mi5 < tdnum * 5; mi5++){
            $memo[mi5].addEventListener("click", () => {
                $memo[mi5].innerText = "";
            });
            $memo[mi5].addEventListener("input", () => {
                if ($memo[mi5].innerText.length > 1){
                $memo[mi5].innerText = $memo[mi5].innerText.replace(memob[mi5], "");
                };
                memob[mi5] = $memo[mi5].innerText;
            });
        };
    });

    $mt6.addEventListener("click", () => {
        for (let mi6 = tdnum * (6 - 1); mi6 < tdnum * 6; mi6++){
            $memo[mi6].addEventListener("click", () => {
                $memo[mi6].innerText = "";
            });
            $memo[mi6].addEventListener("input", () => {
                if ($memo[mi6].innerText.length > 1){
                $memo[mi6].innerText = $memo[mi6].innerText.replace(memob[mi6], "");
                };
                memob[mi6] = $memo[mi6].innerText;
            });
        };
    });

    $mt7.addEventListener("click", () => {
        for (let mi7 = tdnum * (7 - 1); mi7 < tdnum * 7; mi7++){
            $memo[mi7].addEventListener("click", () => {
                $memo[mi7].innerText = "";
            });
            $memo[mi7].addEventListener("input", () => {
                if ($memo[mi7].innerText.length > 1){
                $memo[mi7].innerText = $memo[mi7].innerText.replace(memob[mi7], "");
                };
                memob[mi7] = $memo[mi7].innerText;
            });
        };
    });

    $mt8.addEventListener("click", () => {
        for (let mi8 = tdnum * (8 - 1); mi8 < tdnum * 8; mi8++){
            $memo[mi8].addEventListener("click", () => {
                $memo[mi8].innerText = "";
            });
            $memo[mi8].addEventListener("input", () => {
                if ($memo[mi8].innerText.length > 1){
                $memo[mi8].innerText = $memo[mi8].innerText.replace(memob[mi8], "");
                };
                memob[mi8] = $memo[mi8].innerText;
            });
        };
    });
};

function addtds(parent){
    let addedtd = document.createElement("td");
    addedtd.className = "memo";
    addedtd.contentEditable = "true";
    addedtd.inputMode = "tel";
    parent.appendChild(addedtd);
};

function removetds(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
};

$memoHyojiBtn.addEventListener("click", () => {
    $memoHyojiBtn.style.display = "none";
    $memoClearBtn.style.display = "block";
    $memoTable.style.display = "block";
    removetds($mt1);
    removetds($mt2);
    removetds($mt3);
    removetds($mt4);
    removetds($mt5);
    removetds($mt6);
    removetds($mt7);
    removetds($mt8);
    for (let mk = 0; mk < tdnum; mk++){
        addtds($mt1);
        addtds($mt2);
        addtds($mt3);
        addtds($mt4);
        addtds($mt5);
        addtds($mt6);
        addtds($mt7);
        addtds($mt8);
    };
    memoActivate();
});

$memoClearBtn.addEventListener("click", () => {
    removetds($mt1);
    removetds($mt2);
    removetds($mt3);
    removetds($mt4);
    removetds($mt5);
    removetds($mt6);
    removetds($mt7);
    removetds($mt8);
    $memoHyojiBtn.style.display = "block";
    $memoClearBtn.style.display = "none";
    $memoTable.style.display = "none";
});

};

keisanmemo();

/*
HTML：↓＋cssリンク（<link rel="stylesheet" href="public\keisanmemo\public_keisanmemo.css">）

<!--計算メモ（↓＋css）-->
    <input id="memohyoji" type="button" class="btn" value="計算メモを表示">
    <input id="memoclear" type="button" class="btn" value="計算メモ非表示">
    <table id="memotable">
        <tr id = "mt1"></tr>
        <tr id = "mt2"></tr>
        <tr id = "mt3"></tr>
        <tr id = "mt4"></tr>
        <tr id = "mt5"></tr>
        <tr id = "mt6"></tr>
        <tr id = "mt7"></tr>
        <tr id = "mt8"></tr>
    </table>
    <script src="public\keisanyoshi\public_keisanyoshi.js"></script>
<!--計算メモ-->

*/