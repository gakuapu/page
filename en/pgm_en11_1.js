function en11_1() {
    
    const $menuBtn = document.getElementById("menu-btn");
    const $startEBtn = document.getElementById("startE-btn");
    const $startJBtn = document.getElementById("startJ-btn");
    const $mainbox = document.getElementById("mainbox");
    const $okBtn = document.getElementById("ok-btn");
    const $againBtn = document.getElementById("again-btn");
    const $hideBtn = document.getElementById("hide-btn");
    const $appearBtn = document.getElementById("appear-btn");
    const $wordtable = document.getElementById("wordtable");

    let startEorJ = 0; //EtoJなら0, JtoEなら1
    let currentEorJ = 0; //Eなら0, Jなら1
    let cardnum = 0;
    let cardnumMax = 0;

    let worddataE = [];
    let worddataJ = [];

    const $we1 = document.getElementById("we1");
    const $we2 = document.getElementById("we2");
    const $we3 = document.getElementById("we3");
    const $we4 = document.getElementById("we4");
    const $we5 = document.getElementById("we5");

    const $wj1 = document.getElementById("wj1");
    const $wj2 = document.getElementById("wj2");
    const $wj3 = document.getElementById("wj3");
    const $wj4 = document.getElementById("wj4");
    const $wj5 = document.getElementById("wj5");

    worddataE = [$we1.innerText, $we2.innerText, $we3.innerText, $we4.innerText, $we5.innerText];
    worddataJ = [$wj1.innerText, $wj2.innerText, $wj3.innerText, $wj4.innerText, $wj5.innerText];

    $menuBtn.addEventListener("click", () => {
        window.location.href = "https://gakuapu.github.io/page/top_en.html";
    });

    $startEBtn.addEventListener("click", () => {
        $mainbox.style.display = "block";
        $okBtn.style.display = "inline-block";
        $againBtn.style.display = "inline-block";
        $startEBtn.style.display = "none";
        $startJBtn.style.display = "none";
        $mainbox.innerText = worddataE[0];
        startEorJ = 0;
    });

    $startJBtn.addEventListener("click", () => {
        $mainbox.style.display = "block";
        $okBtn.style.display = "inline-block";
        $againBtn.style.display = "inline-block";
        $startEBtn.style.display = "none";
        $startJBtn.style.display = "none";
        $mainbox.innerText = worddataJ[0];
        startEorJ = 1;
    });

    $mainbox.addEventListener("click", () => {
        if (currentEorJ == 0) {
            $mainbox.innerText = worddataJ[cardnum];
            currentEorJ = 1;
        } else {
            $mainbox.innerText = worddataE[cardnum];
            currentEorJ = 0;
        };
    });

    $okBtn.addEventListener("click", () => {
        cardnum++;
        cardnumMax = worddataE.length;
        if (cardnum == cardnumMax) {
            $mainbox.innerText = "completed!";
            $okBtn.style.display = "none";
            $againBtn.style.display = "none";
            $startEBtn.style.display = "block";
            $startJBtn.style.display = "block";
            cardnum = 0; 
        } else {
            if (startEorJ == 0) {
                $mainbox.innerText = worddataE[cardnum];
            } else {
                $mainbox.innerText = worddataJ[cardnum];
            };
        };
    });

    $againBtn.addEventListener("click", () => { //一旦未完
        cardnum++;
        cardnumMax = worddataE.length;
        if (cardnum == cardnumMax) {
            $mainbox.innerText = "completed!";
            $okBtn.style.display = "none";
            $againBtn.style.display = "none";
            $startEBtn.style.display = "block";
            $startJBtn.style.display = "block";
            cardnum = 0; 
        } else {
            if (startEorJ == 0) {
                $mainbox.innerText = worddataE[cardnum];
            } else {
                $mainbox.innerText = worddataJ[cardnum];
            };
        };
    });

    $hideBtn.addEventListener("click", () => {
        $hideBtn.style.display = "none";
        $appearBtn.style.display = "block";
        $wordtable.style.display = "none";
    });

    $appearBtn.addEventListener("click", () => {
        $hideBtn.style.display = "block";
        $appearBtn.style.display = "none";
        $wordtable.style.display = "block";
    });

};

en11_1();