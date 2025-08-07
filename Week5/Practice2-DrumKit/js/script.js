function playSound(e) {
    const keyCode = e.type === 'keydown' ? e.keyCode : e.target.dataset.key;
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const button = document.querySelector(`button[data-key="${keyCode}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    // Tuşa göre farklı animasyon class'ı ekle
    const key = String.fromCharCode(keyCode).toLowerCase();
    const animationClass = `playing-${key}`;

    button?.classList.add('bg-sky-600', animationClass);

    // Animasyonun bitmesini bekle ve class'ları kaldır
    button?.addEventListener('animationend', () => {
        button.classList.remove('bg-sky-600', animationClass);
    }, { once: true }); // once: true ile listener'ı bir kez çalıştıktan sonra kaldır
}

// Klavye tuşlarına event listener ekle
window.addEventListener('keydown', playSound);

// Butonlara click event listener ekle
const buttons = document.querySelectorAll('button[data-key]');
buttons.forEach(button => {
    button.addEventListener('click', playSound);
});