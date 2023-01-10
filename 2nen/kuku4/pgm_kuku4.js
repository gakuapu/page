function kuku4(){

const $hintBtn = document.getElementById("hint-btn");

const $hint = document.getElementById("hint");

$hintBtn.addEventListener("click", () => {
    $hint.innerText = `ヒント：よこから見ると？たてから見ると？`;
    $hintBtn.style.display = "none";
});

};

kuku4();