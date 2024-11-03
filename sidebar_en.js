function sidebarEN () {

    fetch("https://gakuapu.github.io/page/sidebar_en.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("en-sidebar-container").innerHTML = html;
    })

/*

    const mobileOnlyLinks_EN = [
        `
        <a href="https://px.a8.net/svt/ejp?a8mat=3ZFLL0+37I6GA+46O6+C2GFL" rel="nofollow">
            <img border="0" width="300" height="250" alt="" src="https://www26.a8.net/svt/bgt?aid=240912900194&wid=004&eno=01&mid=s00000019527002027000&mc=1"></a>
            <img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=3ZFLL0+37I6GA+46O6+C2GFL" alt="">
        `
    ];

    const allDeviceLinks_EN = [
        `
        <a href="https://px.a8.net/svt/ejp?a8mat=3ZFLL0+3B2S2Y+2NA+1ZNY35" rel="nofollow">
            <img border="0" width="300" height="250" alt="" src="https://www22.a8.net/svt/bgt?aid=240912900200&wid=004&eno=01&mid=s00000000343012037000&mc=1"></a>
            <img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=3ZFLL0+3B2S2Y+2NA+1ZNY35" alt="">
        `
        ,
        `
        <a href="https://px.a8.net/svt/ejp?a8mat=3ZFLL0+6P4N3E+3AQG+1BQ3UP" rel="nofollow">
            <img border="0" width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=240912900405&wid=004&eno=01&mid=s00000015388008016000&mc=1"></a>
            <img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=3ZFLL0+6P4N3E+3AQG+1BQ3UP" alt="">
        `
        ,
        `
        <a href="https://px.a8.net/svt/ejp?a8mat=3ZFLL0+490HKA+1SVU+626XT" rel="nofollow">
            <img border="0" width="300" height="250" alt="" src="https://www29.a8.net/svt/bgt?aid=240912900257&wid=004&eno=01&mid=s00000008409001018000&mc=1"></a>
            <img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=3ZFLL0+490HKA+1SVU+626XT" alt="">
        `
        ,
        `
        <a href="https://px.a8.net/svt/ejp?a8mat=3ZFLL0+73F1M2+E0Q+CXJ9D" rel="nofollow">
            <img border="0" width="300" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=240912900429&wid=004&eno=01&mid=s00000001817002172000&mc=1"></a>
            <img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=3ZFLL0+73F1M2+E0Q+CXJ9D" alt="">
        `
        ,
        `
        <a href="https://px.a8.net/svt/ejp?a8mat=3ZFLL0+48F1YI+320A+65U41" rel="nofollow">
            <img border="0" width="300" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=240912900256&wid=004&eno=01&mid=s00000014257001035000&mc=1"></a>
            <img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=3ZFLL0+48F1YI+320A+65U41" alt="">
        `
    ];

    const isMobile_EN = window.matchMedia("(max-width: 1024px)").matches; 

    const linksToShow_EN = isMobile_EN ? mobileOnlyLinks_EN.concat(allDeviceLinks_EN) : allDeviceLinks_EN;

    const randomIndex_EN = Math.floor(Math.random() * linksToShow_EN.length);
    const randomLink_EN = linksToShow_EN[randomIndex_EN];

    console.log(randomLink_EN);
    document.getElementById("en-random-link-container").innerHTML = randomLink_EN;

*/

    document.getElementById("en-menu-toggle").addEventListener("click", () => {
        const $enSidebar = document.getElementById("en-sidebar-container");
        $enSidebar.classList.toggle("en-sidebar-visible");
    });

};

sidebarEN ();