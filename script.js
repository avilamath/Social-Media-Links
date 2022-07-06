const mode = document.querySelector('.mode');
const icon = document.querySelector('.icon');

icon.addEventListener('click', () => {
    mode.classList.toggle('dark');
})