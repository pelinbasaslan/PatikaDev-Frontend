document.addEventListener('DOMContentLoaded', () => {
    const jokeDisplay = document.getElementById('joke-display');
    const newJokeBtn = document.getElementById('new-joke-btn');

    const fetchJoke = async () => {
        jokeDisplay.textContent = 'Şaka yükleniyor...'; // Yükleniyor mesajı
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            if (!response.ok) {
                throw new Error(`HTTP hata! Durum: ${response.status}`);
            }
            const data = await response.json();
            jokeDisplay.textContent = data.value;
        } catch (error) {
            console.error('Şaka çekilirken bir hata oluştu:', error);
            jokeDisplay.textContent = 'Üzgünüz, şaka yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.';
        }
    };

    // Sayfa yüklendiğinde ilk şakayı çek
    fetchJoke();

    // Düğmeye tıklandığında yeni şaka çek
    newJokeBtn.addEventListener('click', fetchJoke);
});