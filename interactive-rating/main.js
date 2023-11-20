
const selectedNumbers = []; //store selected numbers
const numbers = document.querySelectorAll('.number');

document.addEventListener('DOMContentLoaded', () => {
    numbers.forEach(number => {
        number.addEventListener('click', (event) => {
            const numValue = Number(number.textContent);
            const i = selectedNumbers.indexOf(numValue);

            if (i === -1) {
                selectedNumbers.push(numValue);
                number.classList.add('active');
            } else {
                selectedNumbers.splice(i, 1);
                number.classList.remove('active');
            }
        });
    });
});

const sendNumber = document.querySelector('.submit');
sendNumber.addEventListener('click', () => {
    const numberSelected = selectedNumbers.length;
    const totalNumbers = numbers.length;
    const selectedNumbersString = selectedNumbers.join('&number=');

    window.location.href = `thanks.html?selected=${numberSelected}&total=${totalNumbers}&number=${selectedNumbersString}`;
});