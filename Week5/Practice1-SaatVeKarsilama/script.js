function startApp() {
    const name = document.getElementById("name-input").value.trim();

    if (name === "") {
        alert("Lütfen isminizi girin.");
        return;
    }

    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("welcome-screen").classList.remove("hidden");
    document.getElementById("greeting").textContent = `Merhaba, ${name}!`;

    updateTime();
    setInterval(updateTime, 1000); // Her saniye güncelle
}

function updateTime() {
    const now = new Date();
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const day = days[now.getDay()];

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds} - ${day}`;
    document.getElementById("datetime").textContent = timeString;
}
