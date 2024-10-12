function en2nen() {
    
    let dref = "";

    const $grade2 = document.getElementById("grade2");
    const $step2 = document.getElementById("step2");
    const $startBtn2 = document.getElementById("start-btn2");

    $startBtn2.addEventListener("click", () => {
        dref = "en" + $grade2.value + "_" + $step2.value + ".html";
        window.location.href = dref;
    });

    const $grade2t = document.getElementById("grade2t");
    const $step2t = document.getElementById("step2t");
    const $startBtn2t = document.getElementById("start-btn2t");

    $startBtn2t.addEventListener("click", () => {
        dref = "en" + $grade2t.value + "_" + $step2t.value + ".html";
        window.location.href = dref;
    });
    
};

en2nen();