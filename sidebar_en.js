function sidebarEN () {

    fetch("https://gakuapu.github.io/page/sidebar_en.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("en-sidebar-container").innerHTML = html;
        applyLink_en();
    });

    function applyLink_en () {
        /*
        const mobileonlyLinks_en = [
            `
            <a href="https://px.a8.net/svt/ejp?a8mat=3ZFLL0+37I6GA+46O6+C2GFL" rel="nofollow">
            <img border="0" width="300" height="250" alt="" src="https://www26.a8.net/svt/bgt?aid=240912900194&wid=004&eno=01&mid=s00000019527002027000&mc=1"></a>
            <img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=3ZFLL0+37I6GA+46O6+C2GFL" alt="">
            `
        ];
        */

        const alldeviceLinks_en = [
            `
            <div class="paapi5-pa-ad-unit pull-left">
                <div class="paapi5-pa-product-container">
                    <div class="paapi5-pa-product-image">
                        <div class="paapi5-pa-product-image-wrapper">
                            <a class="paapi5-pa-product-image-link" href="https://amzn.to/42tlkVl" title="N/A" target="_blank">
                            <img class="paapi5-pa-product-image-source" src="https://m.media-amazon.com/images/I/51lSQKbWfpL._SL500_.jpg" alt="N/A"></a>
                        </div>
                    </div>
                    <div class="paapi5-pa-product-details">
                        <div class="paapi5-pa-product-title">
                            <a class="paap5-pa-product-title-link" href="https://amzn.to/42tlkVl" title="N/A" target="_blank">【Amazon】ＮＨＫラジオ 中学生の基礎英語　レベル１ 2025年 2月号 ［雑誌］ (ＮＨＫテキスト)</a>
                        </div>
                    </div>
                </div>
            </div>
            `
            ,
            `
            <div class="paapi5-pa-ad-unit pull-left">
                <div class="paapi5-pa-product-container">
                    <div class="paapi5-pa-product-image">
                        <div class="paapi5-pa-product-image-wrapper">
                            <a class="paapi5-pa-product-image-link" href="https://amzn.to/3Cq5NeE" title="N/A" target="_blank">
                            <img class="paapi5-pa-product-image-source" src="https://m.media-amazon.com/images/I/51lSQKbWfpL._SL500_.jpg" alt="N/A"></a>
                        </div>
                    </div>
                    <div class="paapi5-pa-product-details">
                        <div class="paapi5-pa-product-title">
                            <a class="paap5-pa-product-title-link" href="https://amzn.to/3Cq5NeE" title="N/A" target="_blank">【Amazon】ＮＨＫラジオ 中学生の基礎英語　レベル２ 2025年 2月号 ［雑誌］ (ＮＨＫテキスト)</a>
                        </div>
                    </div>
                </div>
            </div>
            `
            ,
            `
            <div class="paapi5-pa-ad-unit pull-left">
                <div class="paapi5-pa-product-container">
                    <div class="paapi5-pa-product-image">
                        <div class="paapi5-pa-product-image-wrapper">
                            <a class="paapi5-pa-product-image-link" href="https://amzn.to/4fQzEej" title="N/A" target="_blank">
                            <img class="paapi5-pa-product-image-source" src="https://m.media-amazon.com/images/I/51UpQ+zPzlL._SL500_.jpg" alt="N/A"></a>
                        </div>
                    </div>
                    <div class="paapi5-pa-product-details">
                        <div class="paapi5-pa-product-title">
                            <a class="paap5-pa-product-title-link" href="https://amzn.to/4fQzEej" title="N/A" target="_blank">【Amazon】2024年度版 英検5級 過去6回全問題集【音声アプリ・ダウンロード付き】 (旺文社英検書)</a>
                        </div>
                    </div>
                </div>
            </div>
            `
            ,
            `
            <div class="paapi5-pa-ad-unit pull-left">
                <div class="paapi5-pa-product-container">
                    <div class="paapi5-pa-product-image">
                        <div class="paapi5-pa-product-image-wrapper">
                            <a class="paapi5-pa-product-image-link" href="https://amzn.to/48PZCfu" title="N/A" target="_blank">
                            <img class="paapi5-pa-product-image-source" src="https://m.media-amazon.com/images/I/51pHCQggz1L._SL500_.jpg" alt="N/A"></a>
                        </div>
                    </div>
                    <div class="paapi5-pa-product-details">
                        <div class="paapi5-pa-product-title">
                            <a class="paap5-pa-product-title-link" href="https://amzn.to/48PZCfu" title="N/A" target="_blank">【Amazon】2024年度版 英検4級 過去6回全問題集【音声アプリ・ダウンロード付き】 (旺文社英検書)</a>
                        </div>
                    </div>
                </div>
            </div>
            `
            ,
            `
            <div class="paapi5-pa-ad-unit pull-left">
                <div class="paapi5-pa-product-container">
                    <div class="paapi5-pa-product-image">
                        <div class="paapi5-pa-product-image-wrapper">
                            <a class="paapi5-pa-product-image-link" href="https://amzn.to/3Cow8sY" title="N/A" target="_blank">
                            <img class="paapi5-pa-product-image-source" src="https://m.media-amazon.com/images/I/51Vt8+47DTL._SL500_.jpg" alt="N/A"></a>
                        </div>
                    </div>
                    <div class="paapi5-pa-product-details">
                        <div class="paapi5-pa-product-title">
                            <a class="paap5-pa-product-title-link" href="https://amzn.to/3Cow8sY" title="N/A" target="_blank">【Amazon】2024年度版 英検3級 過去6回全問題集【音声アプリ・ダウンロード付き】 (旺文社英検書)</a>
                        </div>
                    </div>
                </div>
            </div>
            `
        ];

        //const isMobile_en = window.matchMedia(`(max-width: 1024px)`).matches;
        //const linksToShow_en = isMobile_en ? mobileonlyLinks_en.concat(alldeviceLinks_en) : alldeviceLinks_en;
        
        const linksToShow_en = alldeviceLinks_en;

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