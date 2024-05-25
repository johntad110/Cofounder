document.getElementById('evaluationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const sections = document.querySelectorAll('section');
    let totalScore = 0;

    sections.forEach(section => {
        const answers = section.querySelectorAll('textarea');
        answers.forEach(answer => {
            totalScore += answer.value.trim() ? 1 : 0;
        });
    });

    const scoreElement = document.getElementById('score');
    const recommendationElement = document.getElementById('recommendation');
    const resultElement = document.getElementById('result');

    scoreElement.textContent = `Total Score: ${totalScore} out of ${sections.length * 4}`;

    if (totalScore <= 10) {
        recommendationElement.textContent = 'Spend more time defining your idea before taking any further action.';
    } else if (totalScore <= 15) {
        recommendationElement.textContent = 'Conduct additional research and refine your business idea.';
    } else if (totalScore <= 20) {
        recommendationElement.textContent = 'Your idea shows promise. Address any remaining weaknesses.';
    } else {
        recommendationElement.textContent = 'You are in a strong position to pursue your idea. Focus on execution and implementation.';
    }

    resultElement.classList.remove('hidden');
});
