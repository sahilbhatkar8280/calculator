function appendNumber(number) {
    document.getElementById('screen').value += number;
}

function clearScreen() {
    document.getElementById('screen').value = '';
}

function calculateResult() {
    let screen = document.getElementById('screen');
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
    }
}
