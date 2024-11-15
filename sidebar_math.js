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
                            <a class="paapi5-pa-product-image-link" href="https://amzn.to/4hLYQUX" title="N/A" target="_blank">
                            <img class="paapi5-pa-product-image-source" src="https://m.media-amazon.com/images/I/51MN9U3EaeL._SL500_.jpg" alt="N/A"></a>
                        </div>
                    </div>
                    <div class="paapi5-pa-product-details">
                        <div class="paapi5-pa-product-title">
                            <a class="paap5-pa-product-title-link" href="https://amzn.to/4hLYQUX" title="N/A" target="_blank">【Amazon】うんこ英単語　英検5級</a>
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
                            <a class="paapi5-pa-product-image-link" href="https://amzn.to/3Z7e4MT" title="N/A" target="_blank">
                            <img class="paapi5-pa-product-image-source" src="https://m.media-amazon.com/images/I/51z8zuz-MkL._SL500_.jpg" alt="N/A"></a>
                        </div>
                    </div>
                    <div class="paapi5-pa-product-details">
                        <div class="paapi5-pa-product-title">
                            <a class="paap5-pa-product-title-link" href="https://amzn.to/3Z7e4MT" title="N/A" target="_blank">【Amazon】小学生のためのよくわかる英検5級合格ドリル 4訂版 (旺文社英検書)</a>
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
                            <a class="paapi5-pa-product-image-link" href="https://amzn.to/4eCoitc" title="N/A" target="_blank">
                            <img class="paapi5-pa-product-image-source" src="https://m.media-amazon.com/images/I/51cgbGwASEL._SL500_.jpg" alt="N/A"></a>
                        </div>
                    </div>
                    <div class="paapi5-pa-product-details">
                        <div class="paapi5-pa-product-title">
                            <a class="paap5-pa-product-title-link" href="https://amzn.to/4eCoitc" title="N/A" target="_blank">【Amazon】うんこドリル 英単語 小学1-6年生 (小学生 英語)</a>
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
                            <a class="paapi5-pa-product-image-link" href="https://amzn.to/3AvoVXK" title="N/A" target="_blank">
                            <img class="paapi5-pa-product-image-source" src="https://m.media-amazon.com/images/I/51gMtlNv9bL._SL500_.jpg" alt="N/A"></a>
                        </div>
                    </div>
                    <div class="paapi5-pa-product-details">
                        <div class="paapi5-pa-product-title">
                            <a class="paap5-pa-product-title-link" href="https://amzn.to/3AvoVXK" title="N/A" target="_blank">【Amazon】小学うんこ英単語1500 (小学生 うんこドリル 英語)</a>
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
                            <a class="paapi5-pa-product-image-link" href="https://amzn.to/3US5jUo" title="N/A" target="_blank">
                            <img class="paapi5-pa-product-image-source" src="https://m.media-amazon.com/images/I/51C5xVNfQoL._SL500_.jpg" alt="N/A"></a>
                        </div>
                    </div>
                    <div class="paapi5-pa-product-details">
                        <div class="paapi5-pa-product-title">
                            <a class="paap5-pa-product-title-link" href="https://amzn.to/3US5jUo" title="N/A" target="_blank">【Amazon】2025年中学入試用 サピックス重大ニュース</a>
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
                            <a class="paapi5-pa-product-image-link" href="https://amzn.to/4fykASU" title="N/A" target="_blank">
                            <img class="paapi5-pa-product-image-source" src="https://m.media-amazon.com/images/I/51BLC0uCwML._SL500_.jpg" alt="N/A"></a>
                        </div>
                    </div>
                    <div class="paapi5-pa-product-details">
                        <div class="paapi5-pa-product-title">
                            <a class="paap5-pa-product-title-link" href="https://amzn.to/4fykASU" title="N/A" target="_blank">【Amazon】社会コアプラス: 中学入試小5・6年生対象 (サピックスメソッド)</a>
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
                            <a class="paapi5-pa-product-image-link" href="https://amzn.to/3O81NRY" title="N/A" target="_blank">
                            <img class="paapi5-pa-product-image-source" src="https://m.media-amazon.com/images/I/51sl1M9fK4L._SL500_.jpg" alt="N/A"></a>
                        </div>
                    </div>
                    <div class="paapi5-pa-product-details">
                        <div class="paapi5-pa-product-title">
                            <a class="paap5-pa-product-title-link" href="https://amzn.to/3O81NRY" title="N/A" target="_blank">【Amazon】改訂版 理科コアプラス (サピックスメソッド)</a>
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
                            <a class="paapi5-pa-product-image-link" href="https://amzn.to/3AIDhUw" title="N/A" target="_blank">
                            <img class="paapi5-pa-product-image-source" src="https://m.media-amazon.com/images/I/51MLFYGmPuL._SL500_.jpg" alt="N/A"></a>
                        </div>
                    </div>
                    <div class="paapi5-pa-product-details">
                        <div class="paapi5-pa-product-title">
                            <a class="paap5-pa-product-title-link" href="https://amzn.to/3AIDhUw" title="N/A" target="_blank">【Amazon】SAPIXだから知っている 頭のいい子が家でやっていること【豪華2大特典付き】</a>
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
                            <a class="paapi5-pa-product-image-link" href="https://amzn.to/4hQHGp3" title="N/A" target="_blank">
                            <img class="paapi5-pa-product-image-source" src="https://m.media-amazon.com/images/I/51sdEWLLVBL._SL500_.jpg" alt="N/A"></a>
                        </div>
                    </div>
                    <div class="paapi5-pa-product-details">
                        <div class="paapi5-pa-product-title">
                            <a class="paap5-pa-product-title-link" href="https://amzn.to/4hQHGp3" title="N/A" target="_blank">【Amazon】10万人以上を指導した中学受験塾 SAPIXだから知っている算数のできる子が家でやっていること</a>
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
                            <a class="paapi5-pa-product-image-link" href="https://amzn.to/3O7L41t" title="N/A" target="_blank">
                            <img class="paapi5-pa-product-image-source" src="https://m.media-amazon.com/images/I/51ZDne0h23L._SL500_.jpg" alt="N/A"></a>
                        </div>
                    </div>
                    <div class="paapi5-pa-product-details">
                        <div class="paapi5-pa-product-title">
                            <a class="paap5-pa-product-title-link" href="https://amzn.to/3O7L41t" title="N/A" target="_blank">【Amazon】科学漫画サバイバルシリーズ ベストセレクション 10巻セット</a>
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
                            <a class="paapi5-pa-product-image-link" href="https://amzn.to/3AJvBS0" title="N/A" target="_blank">
                            <img class="paapi5-pa-product-image-source" src="https://m.media-amazon.com/images/I/51+On1vQhZL._SL500_.jpg" alt="N/A"></a>
                        </div>
                    </div>
                    <div class="paapi5-pa-product-details">
                        <div class="paapi5-pa-product-title">
                            <a class="paap5-pa-product-title-link" href="https://amzn.to/3AJvBS0" title="N/A" target="_blank">【Amazon】角川まんが学習シリーズ 日本の歴史 5大特典つき全16巻+別巻5冊セット</a>
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
                            <a class="paapi5-pa-product-image-link" href="https://amzn.to/3O9yKxv" title="N/A" target="_blank">
                            <img class="paapi5-pa-product-image-source" src="https://m.media-amazon.com/images/I/516tooLniWL._SL500_.jpg" alt="N/A"></a>
                        </div>
                    </div>
                    <div class="paapi5-pa-product-details">
                        <div class="paapi5-pa-product-title">
                            <a class="paap5-pa-product-title-link" href="https://amzn.to/3O9yKxv" title="N/A" target="_blank">【Amazon】角川まんが学習シリーズ 世界の歴史 3大特典つき全20巻+別巻2冊セット</a>
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
                            <a class="paapi5-pa-product-image-link" href="https://amzn.to/4hMTwAG" title="N/A" target="_blank">
                            <img class="paapi5-pa-product-image-source" src="https://m.media-amazon.com/images/I/61ZK19XpeiL._SL500_.jpg" alt="N/A"></a>
                        </div>
                    </div>
                    <div class="paapi5-pa-product-details">
                        <div class="paapi5-pa-product-title">
                            <a class="paap5-pa-product-title-link" href="https://amzn.to/4hMTwAG" title="N/A" target="_blank">【Amazon】きらめき算数脳 (小学1・2年生) (サピックスブックス)</a>
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
                            <a class="paapi5-pa-product-image-link" href="https://amzn.to/3UOSPgr" title="N/A" target="_blank">
                            <img class="paapi5-pa-product-image-source" src="https://m.media-amazon.com/images/I/61NsKcBFAyL._SL500_.jpg" alt="N/A"></a>
                        </div>
                    </div>
                    <div class="paapi5-pa-product-details">
                        <div class="paapi5-pa-product-title">
                            <a class="paap5-pa-product-title-link" href="https://amzn.to/3UOSPgr" title="N/A" target="_blank">【Amazon】きらめき算数脳 (小学2・3年生) (サピックスブックス)</a>
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
                            <a class="paapi5-pa-product-image-link" href="https://amzn.to/40MfMEI" title="N/A" target="_blank">
                            <img class="paapi5-pa-product-image-source" src="https://m.media-amazon.com/images/I/614L1sy9SSL._SL500_.jpg" alt="N/A"></a>
                        </div>
                    </div>
                    <div class="paapi5-pa-product-details">
                        <div class="paapi5-pa-product-title">
                            <a class="paap5-pa-product-title-link" href="https://amzn.to/40MfMEI" title="N/A" target="_blank">【Amazon】きらめき算数脳小学3・4年生 (サピックスブックス)</a>
                        </div>
                    </div>
                </div>
            </div>
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