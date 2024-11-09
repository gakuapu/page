function sidebarMath () {

    fetch("https://gakuapu.github.io/page/sidebar_math.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("math-sidebar-container").innerHTML = html;
        applyLink_math();
    });

    function applyLink_math () {
        const mobileonlyLinks_math = [
            `
            <a href="https://px.a8.net/svt/ejp?a8mat=3ZFLL0+37I6GA+46O6+C2GFL" rel="nofollow">
            <img border="0" width="300" height="250" alt="" src="https://www26.a8.net/svt/bgt?aid=240912900194&wid=004&eno=01&mid=s00000019527002027000&mc=1"></a>
            <img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=3ZFLL0+37I6GA+46O6+C2GFL" alt="">
            `
        ];

        $mathLinkDisclaimer = document.getElementById("math-link-disclaimer");
        $mathLinkContainer = document.getElementById("math-link-container");

        const isMobile_math = window.matchMedia(`(max-width: 640px)`).matches;

        const randomIndex_math = Math.floor(Math.random() * mobileonlyLinks_math.length);
        const selectedLink_math = mobileonlyLinks_math[randomIndex_math];

        if (isMobile_math) {
            $mathLinkDisclaimer.style.display = "block";
            $mathLinkContainer.style.display = "block";
            $mathLinkContainer.innerHTML = selectedLink_math;
        } else {
            $mathLinkDisclaimer.style.display = "none";
            $mathLinkContainer.style.display = "none";
        };
    };

    document.getElementById("math-menu-toggle").addEventListener("click", () => {
        const $SidebarMath = document.getElementById("math-sidebar-container");
        $SidebarMath.classList.toggle("math-sidebar-visible");
    });

};

sidebarMath ();