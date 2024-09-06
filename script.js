let startTime, endTime;

function startTest(testId, repeatCount) {
    const textarea = document.getElementById(testId);
    const result = document.getElementById(`result-${testId.split('-')[1]}`);
    textarea.value = ''; // Clear previous text
    textarea.disabled = false;
    textarea.focus();
    result.textContent = '';

    startTime = new Date();
    textarea.addEventListener('input', function checkInput() {
        if (textarea.value.trim() === 'john'.repeat(repeatCount)) {
            endTime = new Date();
            const timeTaken = ((endTime - startTime) / 1000).toFixed(2);
            result.textContent = `Time taken: ${timeTaken} seconds`;
            textarea.disabled = true; // Disable textarea after test
            textarea.removeEventListener('input', checkInput); // Remove event listener
        }
    });
}
