function sidebarEN () {

    fetch("https://gakuapu.github.io/page/sidebar_en.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("en-sidebar-container").innerHTML = html;
        applyLink_en();
    });

    function applyLink_en () {
        const mobileonlyLinks_en = [
            `
            <a href="https://px.a8.net/svt/ejp?a8mat=3ZFLL0+37I6GA+46O6+C2GFL" rel="nofollow">
            <img border="0" width="300" height="250" alt="" src="https://www26.a8.net/svt/bgt?aid=240912900194&wid=004&eno=01&mid=s00000019527002027000&mc=1"></a>
            <img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=3ZFLL0+37I6GA+46O6+C2GFL" alt="">
            `
        ];

        const alldeviceLinks_en = [
            `
            <a href="https://px.a8.net/svt/ejp?a8mat=3ZFLL0+3B2S2Y+2NA+1ZNY35" rel="nofollow">
            <img border="0" width="300" height="250" alt="" src="https://www26.a8.net/svt/bgt?aid=240912900200&wid=004&eno=01&mid=s00000000343012037000&mc=1"></a>
            <img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=3ZFLL0+3B2S2Y+2NA+1ZNY35" alt="">
            `
            ,
            `
            <a href="https://px.a8.net/svt/ejp?a8mat=3ZFLL0+490HKA+1SVU+626XT" rel="nofollow">
            <img border="0" width="300" height="250" alt="" src="https://www22.a8.net/svt/bgt?aid=240912900257&wid=004&eno=01&mid=s00000008409001018000&mc=1"></a>
            <img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=3ZFLL0+490HKA+1SVU+626XT" alt="">
            `
            ,
            `
            <a href="https://px.a8.net/svt/ejp?a8mat=3BMJQD+5YDLM+36T2+TV3PD" rel="nofollow">
            <img border="0" width="300" height="250" alt="" src="https://www27.a8.net/svt/bgt?aid=200926309010&wid=002&eno=01&mid=s00000014879005016000&mc=1"></a>
            <img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=3BMJQD+5YDLM+36T2+TV3PD" alt="">
            `
            ,
            `
            <div class="paapi5-pa-ad-unit pull-left">
                <div class="paapi5-pa-product-container">
                    <div class="paapi5-pa-product-image">
                        <div class="paapi5-pa-product-image-wrapper">
                            <a class="paapi5-pa-product-image-link" href="https://www.amazon.co.jp/dp/B0CWZ7X7CQ?tag=gakuapu-22&amp;linkCode=ogi&amp;th=1&amp;psc=1" title="N/A" target="_blank"></a>
                            <img class="paapi5-pa-product-image-source" src="https://m.media-amazon.com/images/I/51lSQKbWfpL._SL500_.jpg" alt="N/A">
                        </div>
                    </div>
                    <div class="paapi5-pa-product-details">
                        <div class="paapi5-pa-product-title">
                            <a class="paap5-pa-product-title-link" href="https://www.amazon.co.jp/dp/B0CWZ7X7CQ?tag=gakuapu-22&amp;linkCode=ogi&amp;th=1&amp;psc=1" title="N/A" target="_blank">【Amazon】ＮＨＫラジオ 中学生の基礎英語　レベル１ 2024年 11月号 ［雑誌］ (NＨＫテキスト)</a>
                        </div>
                    </div>
                </div>
            </div>
            `
        ];

        const isMobile_en = window.matchMedia(`(max-width: 1024px)`).matches;

        const linksToShow_en = isMobile_en ? mobileonlyLinks_en.concat(alldeviceLinks_en) : alldeviceLinks_en;

        const randomIndex_en = Math.floor(Math.random() * linksToShow_en.length);
        const selectedLink_en = linksToShow_en[randomIndex_en];

        document.getElementById("en-link-container").innerHTML = selectedLink_en;
    };

    document.getElementById("en-menu-toggle").addEventListener("click", () => {
        const $enSidebar = document.getElementById("en-sidebar-container");
        $enSidebar.classList.toggle("en-sidebar-visible");
    });

};

sidebarEN ();