function topen() {
    
    const $grade = document.getElementById("grade");
    const $step = document.getElementById("step");
    const $startBtn = document.getElementById("start-btn");

    let dref = "";

    $startBtn.addEventListener("click", () => {
        //dref = "https://gakuapu.github.io/page/en" + $grade.value + "_" + $step.value + ".html";
        dref = "en" + $grade.value + "_" + $step.value + ".html";
        window.location.href = dref;
    });

};

topen();