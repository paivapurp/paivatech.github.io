document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('myButton');
    if (btn) {
        btn.addEventListener('click', () => {
            alert('Você clicou no botão!');
            btn.textContent = 'Clicado!';
        });
    }

    const expandBtn = document.querySelector('.work1');
    const overlay = document.getElementById('focus-overlay');

    function focusImage() {
        document.body.classList.add('img-focus');
        if (work1 && work1.parentElement) work1.parentElement.classList.add('focused');
        if (overlay) overlay.classList.add('visible');
        if (expandBtn) expandBtn.style.cursor = 'zoom-out';
    }

    function unfocusImage() {
        document.body.classList.remove('img-focus');
        if (work1 && work1.parentElement) work1.parentElement.classList.remove('focused');
        if (overlay) overlay.classList.remove('visible');
        if (expandBtn) expandBtn.style.cursor = 'zoom-in';
    }

    if (expandBtn) {
        // Abre/fecha apenas ao clicar na imagem
        expandBtn.addEventListener('click', () => {
            if (document.body.classList.contains('img-focus')) {
                unfocusImage();
            } else {
                focusImage();
            }
        });
    }

    if (overlay) {
        overlay.addEventListener('click', unfocusImage);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') unfocusImage();
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('myButton');
    if (!btn) return;

    btn.addEventListener('click', () => {
        alert('Você clicou no botão!');
        btn.textContent = 'Clicado!';
    });
});

const work2Btn = document.querySelector('.work2');
if (work2Btn) {
    work2Btn.addEventListener('click', () => {
        window.open('https://www.instagram.com/paivaa.tech/', '_blank');
    });
}
