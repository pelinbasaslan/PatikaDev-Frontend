// İsim bilgisini al
let myName = prompt("Lütfen adınızı giriniz:");
document.querySelector("#myName").innerHTML = myName;

// Saat ve gün bilgisini gösteren fonksiyon
function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDay();

    // Günleri türkçe göstermek için dizi
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

    // Saat, dakika ve saniyeyi iki haneli göster
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = `${h}:${m}:${s} ${days[d]}`;
    document.getElementById("myClock").innerHTML = time;

    // Her saniye güncelle
    setTimeout(showTime, 1000);
}

// Sayfa yüklendiğinde saati başlat
showTime();