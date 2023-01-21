function keisanyoshi(){

const $memoHyojiBtn = document.getElementById("memohyoji");
const $memoClearBtn = document.getElementById("memoclear");
const $memoTable = document.getElementById("memotable");

const $mt1 = document.getElementById("mt1");

function memoActivate(){

    const $memo = document.getElementsByClassName("memo");
    let memob = [];
    for (let mj = 0; mj < $memo.length; mj++){
        memob.push("");
    };

    //const $mt1 = document.getElementById("mt1");
    $mt1.addEventListener("click", () => {
        for (let mi1 = 8 * (1 - 1); mi1 < 8 * 1; mi1++){
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

    const $mt2 = document.getElementById("mt2");
    $mt2.addEventListener("click", () => {
        for (let mi2 = 8 * (2 - 1); mi2 < 8 * 2; mi2++){
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

    const $mt3 = document.getElementById("mt3");
    $mt3.addEventListener("click", () => {
        for (let mi3 = 8 * (3 - 1); mi3 < 8 * 3; mi3++){
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

    const $mt4 = document.getElementById("mt4");
    $mt4.addEventListener("click", () => {
        for (let mi4 = 8 * (4 - 1); mi4 < 8 * 4; mi4++){
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

    const $mt5 = document.getElementById("mt5");
    $mt5.addEventListener("click", () => {
        for (let mi5 = 8 * (5 - 1); mi5 < 8 * 5; mi5++){
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

    const $mt6 = document.getElementById("mt6");
    $mt6.addEventListener("click", () => {
        for (let mi6 = 8 * (6 - 1); mi6 < 8 * 6; mi6++){
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

    const $mt7 = document.getElementById("mt7");
    $mt7.addEventListener("click", () => {
        for (let mi7 = 8 * (7 - 1); mi7 < 8 * 7; mi7++){
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

    const $mt8 = document.getElementById("mt8");
    $mt8.addEventListener("click", () => {
        for (let mi8 = 8 * (8 - 1); mi8 < 8 * 8; mi8++){
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

$memoHyojiBtn.addEventListener("click", () => {
    $memoHyojiBtn.style.display = "none";
    $memoClearBtn.style.display = "block";
    $memoTable.style.display = "block";
    memoActivate();
    //ここからテスト
    for (let mk = 0; mk < 8; mk++){
    let addtd = document.createElement("td");
    addtd.className = "memo";
    addtd.contentEditable = "true";
    addtd.inputmodel = "tel";
    $mt1.appendChild(addtd);
    };
});

$memoClearBtn.addEventListener("click", () => {
    $memoHyojiBtn.style.display = "block";
    $memoClearBtn.style.display = "none";
    $memoTable.style.display = "none";
});

};

keisanyoshi();