function en1nen() {
    
    let dref = "";

    const $grade1 = document.getElementById("grade1");
    const $step1 = document.getElementById("step1");
    const $startBtn1 = document.getElementById("start-btn1");

    $startBtn1.addEventListener("click", () => {
        dref = "en" + $grade1.value + "_" + $step1.value + ".html";
        window.location.href = dref;
    });

    const $grade1t = document.getElementById("grade1t");
    const $step1t = document.getElementById("step1t");
    const $startBtn1t = document.getElementById("start-btn1t");

    $startBtn1t.addEventListener("click", () => {
        dref = "en" + $grade1t.value + "_" + $step1t.value + ".html";
        window.location.href = dref;
    });
    
};

en1nen();