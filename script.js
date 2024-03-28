const display = document.querySelector('.display input');
const buttons = document.querySelectorAll('.buttons button');
const clear = document.querySelector('.clear');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        } else if (button.textContent === 'C') {
            display.value = '';
        } else {
            display.value += button.textContent;
        }
    });
});

clear.addEventListener('click', () => {
    display.value = '';
});
