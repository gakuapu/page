function en11_1() {
    
    const $menuBtn = document.getElementById("menu-btn");
    const $startEBtn = document.getElementById("startE-btn");
    const $startJBtn = document.getElementById("startJ-btn");
    const $mainbox = document.getElementById("mainbox");
    const $mainflame = document.getElementById("mainflame");
    const $comp = document.getElementById("comp");
    const $okBtn = document.getElementById("ok-btn");
    const $againBtn = document.getElementById("again-btn");
    const $hideBtn = document.getElementById("hide-btn");
    const $appearBtn = document.getElementById("appear-btn");
    const $wordtable = document.getElementById("wordtable");

    let startEorJ = 0; //EtoJなら0, JtoEなら1
    let currentEorJ = 0; //Eなら0, Jなら1
    let cardnum = 0;
    let cardnumMax = 0;

    let worddata = [];

    for (let row of $wordtable.rows) {
        worddata.push(row.innerText.split('\t'));
    };

    $menuBtn.addEventListener("click", () => {
        window.location.href = "https://gakuapu.github.io/page/top_en.html";
    });

    $startEBtn.addEventListener("click", () => {
        $mainflame.style.display = "block";
        $mainbox.style.display = "block";
        $comp.style.display = "none";
        $okBtn.style.display = "none";
        $againBtn.style.display = "none";
        $startEBtn.style.display = "none";
        $startJBtn.style.display = "none";
        $mainbox.innerText = worddata[0][0];
        startEorJ = 0;
    });

    $startJBtn.addEventListener("click", () => {
        $mainflame.style.display = "block";
        $mainbox.style.display = "block";
        $comp.style.display = "none";
        $okBtn.style.display = "none";
        $againBtn.style.display = "none";
        $startEBtn.style.display = "none";
        $startJBtn.style.display = "none";
        $mainbox.innerText = worddata[0][1];
        startEorJ = 1;
    });

    $mainbox.addEventListener("click", () => {
        $okBtn.style.display = "inline-block";
        $againBtn.style.display = "inline-block";
        if (currentEorJ == 0) {
            $mainbox.innerText = worddata[cardnum][1];
            currentEorJ = 1;
        } else {
            $mainbox.innerText = worddata[cardnum][0];
            currentEorJ = 0;
        };
    });

    $okBtn.addEventListener("click", () => {
        $okBtn.style.display = "none";
        $againBtn.style.display = "none";
        cardnum++;
        cardnumMax = worddata.length;
        if (cardnum == cardnumMax) {
            $mainflame.style.display = "none";
            $mainbox.style.display = "none";
            $comp.style.display = "block";
            $startEBtn.style.display = "inline-block";
            $startJBtn.style.display = "inline-block";
            cardnum = 0; 
        } else {

            if (startEorJ == 0) {
                $mainbox.innerText = worddata[cardnum][0];
            } else {
                $mainbox.innerText = worddata[cardnum][1];
            };
        };
    });

    $againBtn.addEventListener("click", () => {
        $okBtn.style.display = "none";
        $againBtn.style.display = "none";
        worddata.push(worddata[cardnum]);
        cardnum++;
        cardnumMax = worddata.length;
        if (startEorJ == 0) {
            $mainbox.innerText = worddata[cardnum][0];
        } else {
            $mainbox.innerText = worddata[cardnum][1];
        };
    });

    $hideBtn.addEventListener("click", () => {
        $hideBtn.style.display = "none";
        $appearBtn.style.display = "inline-block";
        $wordtable.style.display = "none";
    });

    $appearBtn.addEventListener("click", () => {
        $hideBtn.style.display = "inline-block";
        $appearBtn.style.display = "none";
        $wordtable.style.display = "block";
    });

};

en11_1();