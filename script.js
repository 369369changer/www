document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitAssessment');
    const backButton = document.getElementById('backToHome');
    const scoreDisplay = document.getElementById('score');
    const resultTextDisplay = document.getElementById('resultText');

    // 处理第5题的子选项显示/隐藏
    document.querySelectorAll('input[name="q5"]').forEach(input => {
        input.addEventListener('change', function() {
            const q5a = document.getElementById('q5a');
            const q5b = document.getElementById('q5b');
            q5a.style.display = this.value === 'A' ? 'block' : 'none';
            q5b.style.display = this.value === 'B' ? 'block' : 'none';
        });
    });

    // 处理第9题的子选项显示/隐藏
    document.querySelectorAll('input[name="q9"]').forEach(input => {
        input.addEventListener('change', function() {
            const q9a = document.getElementById('q9a');
            q9a.style.display = this.value === 'A' ? 'block' : 'none';
        });
    });

    // 提交按钮事件
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        const form = document.getElementById('assessmentForm');
        const formData = new FormData(form);
        const scores = {
            q1: 0, q2: 0, q3: 0, q4: 0, q5a: 0, q5b: 0,
            q6: 0, q7: 0, q8: 0, q9a: 0
        };

        // 简化分数计算逻辑（根据实际需求调整）
        formData.forEach((value, key) => {
            if (scores.hasOwnProperty(key)) {
                scores[key] = value === 'A' ? 1 : value === 'B' ? 2 : value === 'C' ? 0 : 0;
            }
        });

        // 计算总分
        const totalScore = scores.q1 + scores.q2 + scores.q3 + scores.q4 + 
                           Math.max(scores.q5a, scores.q5b) + scores.q6 + 
                           scores.q7 + scores.q8 + scores.q9a;

        let resultText = '';

        if (totalScore >= 0 && totalScore < 1) {
            resultText = 'DS Ⅰ期 ISS Ⅱ期 R-ISS Ⅲ期 R2-ISS Ⅲ期';
        } else if (totalScore >= 1 && totalScore < 2) {
            resultText = 'DS Ⅱ期 ISS Ⅱ期 R-ISS Ⅱ期 R2-ISS Ⅱ期';
        } else if (totalScore >= 2 && totalScore < 3) {
            resultText = 'DS Ⅲ期 ISS Ⅲ期 R-ISS Ⅲ期 R2-ISS Ⅲ期';
        } else if (totalScore >= 3) {
            resultText = 'DS Ⅳ期 ISS Ⅳ期 R-ISS Ⅳ期 R2-ISS Ⅳ期';
        }

        scoreDisplay.textContent = `评分: ${totalScore}`;
        resultTextDisplay.textContent = resultText;
    });

    // 返回首页按钮事件
    backButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});