document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display input');
    const buttons = document.querySelectorAll('.calculator input[type="button"]');
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const body = document.body;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;

            if (value === 'AC') {
                display.value = '';
            } else if (value === 'DE') {
                display.value = display.value.slice(0,-1);
            } else if (value === '=') {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
            } else {
                display.value += value;
            }
        });
    });

    themeToggleButton.addEventListener('click', () => {
        if (body.classList.contains('light')) {
            body.classList.remove('light');
            body.classList.add('dark');
            themeToggleButton.textContent = 'Dark';
        } else {
            body.classList.remove('dark');
            body.classList.add('light');
             themeToggleButton.textContent = 'Light';
        }
    });

  
    body.classList.add('light');
     themeToggleButton.textContent = 'Light';
});
