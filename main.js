const buttons = document.querySelectorAll('.strange-button');
const tgIcon = document.querySelector('.tg-icon');
const waIcon = document.querySelector('.wa-icon');

buttons.forEach((button) => button.addEventListener('click', () => {
    window.open('https://t.me/iniands', '_blank')
    })
)

tgIcon.addEventListener('click', () => {
    window.open('https://t.me/iniands', '_blank')
})

waIcon.addEventListener('click', () => {
    window.open('https://wa.me/79264640723', '_blank')
})