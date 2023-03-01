let values = document.querySelectorAll('.buttonrow .value');
let viewPortText = document.querySelector('.viewport span');

values.forEach(value => {
    value.addEventListener('click', () => {
        viewPortText.textContent += value.textContent;
    })
})