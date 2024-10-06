function topen() {
    
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

topen();