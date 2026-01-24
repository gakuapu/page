class ListeningSection {
    constructor(sentenceData, containerId) {
        this.sentences = sentenceData;
        this.container = document.getElementById(containerId);
        this.currentUtterance = null;
        
        this.init();
    }

    // ============================================================
    // 初期化
    // ============================================================

    init() {
        if (!this.container) {
            console.error('Container not found');
            return;
        }
        
        this.render();
    }

    // ============================================================
    // レンダリング
    // ============================================================

    render() {
        this.container.innerHTML = this.sentences
            .map((item, index) => this.createExampleItem(item, index))
            .join('');

        // イベントリスナーを追加
        this.attachEventListeners();
    }

    createExampleItem(item, index) {
        return `
            <div class="example-item">
                <button class="play-btn-sm" data-index="${index}">
                    <i class="ph-fill ph-play"></i>
                </button>
                <div style="flex:1;">
                    <div class="ex-text-en">${item.en}</div>
                    <div class="ex-text-jp">${item.ja}</div>
                </div>
            </div>
        `;
    }

    attachEventListeners() {
        const buttons = this.container.querySelectorAll('.play-btn-sm');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const index = parseInt(button.dataset.index);
                this.playAudio(index, button);
            });
        });
    }

    // ============================================================
    // Web Speech API で音声再生
    // ============================================================

    playAudio(index, button) {
        const sentence = this.sentences[index];

        // 再生中の場合は停止
        if (this.currentUtterance && speechSynthesis.speaking) {
            speechSynthesis.cancel();
            this.resetAllButtons();
            this.currentUtterance = null;
            return;
        }

        // 新しい音声を作成
        this.currentUtterance = new SpeechSynthesisUtterance(sentence.en);
        this.currentUtterance.lang = 'en-US';
        this.currentUtterance.rate = 0.9;

        // ボタンの表示を変更
        button.innerHTML = '<i class="ph-fill ph-pause"></i>';

        // 再生終了時の処理
        this.currentUtterance.onend = () => {
            button.innerHTML = '<i class="ph-fill ph-play"></i>';
            this.currentUtterance = null;
        };

        // 音声を再生
        speechSynthesis.speak(this.currentUtterance);
    }

    // ============================================================
    // ユーティリティ関数
    // ============================================================

    resetAllButtons() {
        const buttons = this.container.querySelectorAll('.play-btn-sm');
        buttons.forEach(btn => {
            btn.innerHTML = '<i class="ph-fill ph-play"></i>';
        });
    }

    // データを更新して再レンダリング
    updateData(newData) {
        this.sentences = newData;
        this.render();
    }
}

// ============================================================
// データ変換と初期化
// ============================================================

// $basicSentence を使用して初期化
if (typeof $basicSentence !== 'undefined') {
    // データ形式を変換（配列から{ja, en}オブジェクトへ）
    const listeningData = $basicSentence.map(item => ({
        ja: item[0],
        en: item[1]
    }));

    // ページ読み込み完了後に初期化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            new ListeningSection(listeningData, 'example-list-container');
        });
    } else {
        new ListeningSection(listeningData, 'example-list-container');
    }
}