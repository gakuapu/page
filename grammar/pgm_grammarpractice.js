class GrammarQuiz {
    constructor(questionData) {
        // 問題データ
        this.allQuestions = questionData;
        this.questions = [];
        this.currentIndex = 0;
        this.correctCount = 0;
        this.missedQuestions = [];

        // DOM要素
        this.elements = {
            // Screens
            startScreen: document.getElementById('start-screen'),
            quizCard: document.getElementById('quiz-card'),
            resultsScreen: document.getElementById('results-screen'),
            quizHeader: document.getElementById('quiz-header'),

            // Quiz elements
            questionJp: document.getElementById('question-jp'),
            answerBox: document.getElementById('answer-box'),
            wordPool: document.getElementById('word-pool'),
            feedbackContainer: document.getElementById('feedback-container'),

            // Buttons
            startBtn: document.getElementById('start-btn'),
            checkBtn: document.getElementById('check-btn'),
            checkBtnText: document.getElementById('check-btn-text'),
            retryBtn: document.getElementById('retry-btn'),
            skipBtn: document.getElementById('skip-btn'),
            stopBtn: document.getElementById('stop-btn'),
            restartBtn: document.getElementById('restart-btn'),

            // Progress
            progressFill: document.getElementById('progress-fill'),
            progressText: document.getElementById('progress-text'),
            progressPercentage: document.getElementById('progress-percentage'),

            // Results
            resultsScore: document.getElementById('results-score'),
            missedList: document.getElementById('missed-list'),
            missedItemsContainer: document.getElementById('missed-items-container')
        };

        // 状態管理
        this.userAnswer = [];
        this.availableWords = [];

        this.init();
    }

    // ============================================================
    // 初期化
    // ============================================================

    init() {
        this.attachEventListeners();
    }

    attachEventListeners() {
        this.elements.startBtn.addEventListener('click', () => this.startQuiz());
        this.elements.checkBtn.addEventListener('click', () => this.checkAnswer());
        this.elements.retryBtn.addEventListener('click', () => this.retryQuestion());
        this.elements.skipBtn.addEventListener('click', () => this.skipQuestion());
        this.elements.stopBtn.addEventListener('click', () => this.stopQuiz());
        this.elements.restartBtn.addEventListener('click', () => this.startQuiz());
    }

    // ============================================================
    // クイズフロー管理
    // ============================================================

    startQuiz() {
        // 問題をシャッフルして10問選択
        this.questions = this.shuffleArray([...this.allQuestions]).slice(0, 10);
        this.currentIndex = 0;
        this.correctCount = 0;
        this.missedQuestions = [];

        this.showScreen('quiz');
        this.loadQuestion();
    }

    loadQuestion() {
        if (this.currentIndex >= this.questions.length) {
            this.showResults();
            return;
        }

        const question = this.questions[this.currentIndex];

        // 問題文を表示
        this.elements.questionJp.textContent = question.ja;

        // 単語プールを準備
        this.availableWords = this.shuffleArray(question.words);
        this.userAnswer = [];

        // 確定ボタンのテキストを設定
        this.elements.checkBtnText.textContent = `${question.endMark} `;

        // UIを更新
        this.updateProgress();
        this.renderWordPool();
        this.renderAnswer();
        this.clearFeedback();
        this.resetAnswerBoxState();
    }

    checkAnswer() {
        const question = this.questions[this.currentIndex];
        const userAnswerStr = this.userAnswer.join(' ') + question.endMark;
        const correctAnswer = question.en;

        const isCorrect = userAnswerStr === correctAnswer;

        if (isCorrect) {
            this.correctCount++;
            this.showFeedback(true);
            this.elements.answerBox.classList.add('correct');
        } else {
            this.showFeedback(false);
            this.elements.answerBox.classList.add('incorrect');

            // 間違えた問題を記録
            this.missedQuestions.push({
                question: question.ja,
                correct: correctAnswer,
                userAnswer: userAnswerStr
            });
        }

        // 次の問題へ
        setTimeout(() => {
            this.currentIndex++;
            this.loadQuestion();
        }, 1500);
    }

    retryQuestion() {
        this.userAnswer = [];
        this.availableWords = this.shuffleArray(this.questions[this.currentIndex].words);
        this.renderWordPool();
        this.renderAnswer();
        this.clearFeedback();
        this.resetAnswerBoxState();
    }

    skipQuestion() {
        const question = this.questions[this.currentIndex];

        this.missedQuestions.push({
            question: question.ja,
            correct: question.en,
            userAnswer: '(スキップ)'
        });

        this.showFeedback(false);

        setTimeout(() => {
            this.currentIndex++;
            this.loadQuestion();
        }, 1000);
    }

    stopQuiz() {
        if (confirm('練習を止めますか？')) {
            this.showScreen('start');
        }
    }

    showResults() {
        this.showScreen('results');

        // スコアを表示
        this.elements.resultsScore.textContent = `${this.correctCount} / ${this.questions.length}`;

        // 間違えた問題を表示
        if (this.missedQuestions.length > 0) {
            this.elements.missedList.classList.remove('hidden');
            this.renderMissedQuestions();
        } else {
            this.elements.missedList.classList.add('hidden');
        }
    }

    // ============================================================
    // UI レンダリング
    // ============================================================

    renderWordPool() {
        this.elements.wordPool.innerHTML = this.availableWords
            .map((word, index) => `
                <button class="word-chip" data-index="${index}">
                    ${word}
                </button>
            `)
            .join('');

        // 単語チップにクリックイベントを追加
        this.elements.wordPool.querySelectorAll('.word-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                const index = parseInt(chip.dataset.index);
                this.selectWord(index);
            });
        });
    }

    renderAnswer() {
        if (this.userAnswer.length === 0) {
            this.elements.answerBox.innerHTML = '';
        } else {
            // 最初の単語は大文字にする
            const displayAnswer = this.userAnswer.map((word, index) => {
                if (index === 0) {
                    return this.capitalizeFirst(word);
                }
                return word;
            });

            this.elements.answerBox.textContent = displayAnswer.join(' ');
        }
    }

    renderMissedQuestions() {
        this.elements.missedItemsContainer.innerHTML = this.missedQuestions
            .map(item => `
                <div class="missed-item">
                    <div class="missed-question">${item.question}</div>
                    <div class="answer-comparison">
                        <div class="answer-row">
                            <i class="ph-fill ph-check-circle" style="color: var(--success-text);"></i>
                            <span><strong>正解：</strong>${item.correct}</span>
                        </div>
                        <div class="answer-row">
                            <i class="ph-fill ph-x-circle" style="color: var(--error-text);"></i>
                            <span><strong>あなたの回答：</strong>${item.userAnswer}</span>
                        </div>
                    </div>
                </div>
            `)
            .join('');
    }

    updateProgress() {
        const progress = (this.currentIndex / this.questions.length) * 100;
        this.elements.progressFill.style.width = `${progress}%`;
        this.elements.progressText.textContent = `問題 ${this.currentIndex + 1} / ${this.questions.length}`;
        this.elements.progressPercentage.textContent = `${Math.round(progress)}%`;
    }

    showFeedback(isCorrect) {
        const icon = isCorrect
            ? '<i class="ph-fill ph-check-circle"></i>'
            : '<i class="ph-fill ph-x-circle"></i>';
        const text = isCorrect ? '正解！' : '不正解';
        const className = isCorrect ? 'correct' : 'incorrect';

        this.elements.feedbackContainer.innerHTML = `
            <div class="feedback-message ${className}">
                ${icon}
                <span>${text}</span>
            </div>
        `;
    }

    clearFeedback() {
        this.elements.feedbackContainer.innerHTML = '';
    }

    resetAnswerBoxState() {
        this.elements.answerBox.classList.remove('correct', 'incorrect');
    }

    // ============================================================
    // 画面切り替え
    // ============================================================

    showScreen(screen) {
        // すべての画面を非表示
        this.elements.startScreen.classList.add('hidden');
        this.elements.quizCard.classList.add('hidden');
        this.elements.resultsScreen.classList.add('hidden');
        this.elements.quizHeader.classList.add('hidden');
        this.elements.stopBtn.classList.add('hidden');

        // 指定された画面を表示
        switch (screen) {
            case 'start':
                this.elements.startScreen.classList.remove('hidden');
                break;
            case 'quiz':
                this.elements.quizCard.classList.remove('hidden');
                this.elements.quizHeader.classList.remove('hidden');
                this.elements.stopBtn.classList.remove('hidden');
                break;
            case 'results':
                this.elements.resultsScreen.classList.remove('hidden');
                break;
        }
    }

    // ============================================================
    // ユーザーインタラクション
    // ============================================================

    selectWord(index) {
        const word = this.availableWords[index];

        // 回答に追加
        this.userAnswer.push(word);

        // 利用可能な単語から削除
        this.availableWords.splice(index, 1);

        // UIを更新
        this.renderWordPool();
        this.renderAnswer();
    }

    // ============================================================
    // ユーティリティ関数
    // ============================================================

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

// ============================================================
// 問題データの変換と初期化
// ============================================================

// $practiceSentence を新しい形式に変換
function convertQuestionData(rawData) {
    return rawData.map(item => ({
        ja: item[0],
        en: item[1],
        endMark: item[1].slice(-1), // 最後の文字（. ? !）
        words: item.slice(2) // 残りの要素が単語リスト
    }));
}

// グローバル変数 $practiceSentence が定義されているか確認してから初期化
if (typeof $practiceSentence !== 'undefined') {
    const questionData = convertQuestionData($practiceSentence);
    const quiz = new GrammarQuiz(questionData);
}