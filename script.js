// 首页逻辑：跳转到测试页面
document.getElementById('startAssessment').addEventListener('click', function() {
    window.location.href = 'test.html';
});

// 测试页面逻辑：显示/隐藏子问题
document.querySelectorAll('input[name="q5"]').forEach(input => {
    input.addEventListener('change', function() {
        const subA = document.getElementById('q5-sub-A');
        const subB = document.getElementById('q5-sub-B');
        if (this.value === 'A') {
            subA.style.display = 'block';
            subB.style.display = 'none';
        } else if (this.value === 'B') {
            subA.style.display = 'none';
            subB.style.display = 'block';
        } else {
            subA.style.display = 'none';
            subB.style.display = 'none';
        }
    });
});

document.querySelectorAll('input[name="q9"]').forEach(input => {
    input.addEventListener('change', function() {
        const subA = document.getElementById('q9-sub-A');
        if (this.value === 'A') {
            subA.style.display = 'block';
        } else {
            subA.style.display = 'none';
        }
    });
});

// 测试页面逻辑：计算评分
document.getElementById('submitAssessment').addEventListener('click', function() {
    // 获取所有问题的答案
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked'),
        q2: document.querySelector('input[name="q2"]:checked'),
        q3: document.querySelector('input[name="q3"]:checked'),
        q4: document.querySelector('input[name="q4"]:checked'),
        q5: document.querySelector('input[name="q5"]:checked'),
        q6: document.querySelector('input[name="q6"]:checked'),
        q7: document.querySelector('input[name="q7"]:checked'),
        q8: document.querySelector('input[name="q8"]:checked'),
        q9: document.querySelector('input[name="q9"]:checked')
    };

    let totalScore = 0;

    // 检查每个问题是否已回答，并累加分数
    for (let question in answers) {
        if (answers[question]) {
            const value = answers[question].value;
            totalScore += parseFloat(getScore(value));
        } else {
            alert(`请回答所有问题！`);
            return;
        }
    }

    // 显示评分结果
    showResult(totalScore);
});

// 根据选择获取分数的函数
function getScore(choice) {
    switch(choice) {
        case 'A':
            return 0.5;
        case 'B':
            return 0.8;
        case 'C':
            return 0.2;
        case 'D':
            return 0;
        case 'A1': case 'A2': case 'A3': case 'A4':
            return 0.5;
        case 'A5':
            return 0.8;
        case 'B1': case 'B2': case 'B3': case 'B4':
            return 0.8;
        case 'B5':
            return 0.5;
        case 'C1': case 'C2': case 'C3': case 'C4':
            return 0.2;
        case 'C5':
            return 0.2;
        case 'D1': case 'D2': case 'D3': case 'D4':
            return 0.2;
        case 'D5':
            return 0;
        default:
            return 0;
    }
}

// 显示结果的函数
function showResult(score) {
    const resultContainer = document.getElementById('result');
    const resultText = document.getElementById('result-text');

    resultContainer.style.display = 'block';

    if (score >= 0 && score < 0.5) {
        resultText.textContent = '评分0
结果为：
DS  Ⅰ期     ISS Ⅱ期  R-ISS Ⅲ期   R2-ISSⅢ期';
    } else if (score >= 0.5 && score < 1) {
        resultText.textContent = '评分0.5-1
结果为：
DS  Ⅱ期     ISS Ⅱ期  R-ISS Ⅱ期   R2-ISSⅡ期';
    } else if (score >= 1.5 && score < 2.5) {
        resultText.textContent = '评分1.5-2.5
结果为：
DS  Ⅲ期     ISS Ⅲ期  R-ISS Ⅲ期   R2-ISSⅢ期';
    } else if (score >= 3 && score <= 5) {
        resultText.textContent = '评分3-5
结果为：
DS  Ⅳ期     ISS Ⅳ期  R-ISS Ⅳ期   R2-ISSⅣ期';
    } else {
        resultText.textContent = '评分无效，请重新评估。';
    }
}