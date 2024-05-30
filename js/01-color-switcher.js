// Funkcja generująca losowy kolor w formacie hex
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  // Pobierz przyciski ze strony
  const startBtn = document.querySelector('[data-start]');
  const stopBtn = document.querySelector('[data-stop]');
  
  let colorInterval = null;
  
  // Funkcja uruchamiana po kliknięciu przycisku "Start"
  startBtn.addEventListener('click', () => {
    // Wyłącz przycisk "Start"
    startBtn.disabled = true;
    // Uruchom interval, który zmienia kolor tła co sekundę
    colorInterval = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  });
  
  // Funkcja uruchamiana po kliknięciu przycisku "Stop"
  stopBtn.addEventListener('click', () => {
    // Zatrzymaj interval zmiany koloru
    clearInterval(colorInterval);
    // Włącz przycisk "Start"
    startBtn.disabled = false;
  });