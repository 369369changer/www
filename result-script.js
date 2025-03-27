document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const score = urlParams.get('score');
    const result = urlParams.get('result');

    document.getElementById('score').textContent = `评分: ${score}`;
    document.getElementById('resultText').textContent = result;

    document.getElementById('backToHome').addEventListener('click', function () {
        window.location.href = 'index.html';
    });
});