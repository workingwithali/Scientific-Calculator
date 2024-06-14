document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('.btn');

    let screenValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const btnText = e.target.innerText;

            switch (btnText) {
                case 'CE':
                    screenValue = screenValue.slice(0, -1);
                    break;
                case 'AC':
                    screenValue = '';
                    break;
                case '=':
                    try {
                        screenValue = eval(screenValue.replace('^', '**'));
                    } catch {
                        screenValue = 'Error';
                    }
                    break;
                case 'pi':
                    screenValue += Math.PI;
                    break;
                case 'e':
                    screenValue += Math.E;
                    break;
                case 'sin':
                case 'cos':
                case 'tan':
                case 'log':
                case '√':
                    handleSpecialFunctions(btnText);
                    return;
                default:
                    screenValue += btnText;
                    break;
            }
            screen.value = screenValue;
        });
    });

    function handleSpecialFunctions(func) {
        try {
            let value = parseFloat(screenValue);
            switch (func) {
                case 'sin':
                    screenValue = Math.sin(value);
                    break;
                case 'cos':
                    screenValue = Math.cos(value);
                    break;
                case 'tan':
                    screenValue = Math.tan(value);
                    break;
                case 'log':
                    screenValue = Math.log10(value);
                    break;
                case '√':
                    screenValue = Math.sqrt(value);
                    break;
            }
            screen.value = screenValue;
        } catch {
            screenValue = 'Error';
            screen.value = screenValue;
        }
    }
});
