const display = document.querySelector('.display input');
const buttons = document.querySelectorAll('.buttons button');
const clear = document.querySelector('.clear');
const titleBar = document.querySelector('.title-bar');
const minimizeButton = document.querySelector('.minimize');
const maximizeButton = document.querySelector('.maximize');
const closeButton = document.querySelector('.close');

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

// Make the window draggable
titleBar.addEventListener('mousedown', (e) => {
    e.preventDefault();
    const offsetX = e.clientX - titleBar.getBoundingClientRect().left;
    const offsetY = e.clientY - titleBar.getBoundingClientRect().top;

    function onMouseMove(e) {
        window.moveTo(e.clientX - offsetX, e.clientY - offsetY);
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

// Minimize, maximize, and close buttons
minimizeButton.addEventListener('click', () => {
    // Implement minimize functionality
});

maximizeButton.addEventListener('click', () => {
    // Implement maximize functionality
});

closeButton.addEventListener('click', () => {
    // Implement close functionality
});
