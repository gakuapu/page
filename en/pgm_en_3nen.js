function en3nen() {
    
    let dref = "";

    const $grade3 = document.getElementById("grade3");
    const $step3 = document.getElementById("step3");
    const $startBtn3 = document.getElementById("start-btn3");

    $startBtn3.addEventListener("click", () => {
        if ($grade3.value == "34") {
            if ($step3.value == "8" || $step3.value == "9" || $step3.value == "10") {
                dref = "en" + $grade3.value + "_7.html";
            } else {
                dref = "en" + $grade3.value + "_" + $step3.value + ".html";
            };
        } else {
            dref = "en" + $grade3.value + "_" + $step3.value + ".html";
        };
        window.location.href = dref;
    });

    const $grade3t = document.getElementById("grade3t");
    const $step3t = document.getElementById("step3t");
    const $startBtn3t = document.getElementById("start-btn3t");

    $startBtn3t.addEventListener("click", () => {
        if ($grade3t.value == "34") {
            if ($step3t.value == "8t" || $step3t.value == "9t" || $step3t.value == "10t") {
                dref = "en" + $grade3t.value + "_7t.html";
            } else {
                dref = "en" + $grade3t.value + "_" + $step3t.value + ".html";
            };
        } else {
            dref = "en" + $grade3t.value + "_" + $step3t.value + ".html";
        };
        window.location.href = dref;
    });
    
};

en3nen();