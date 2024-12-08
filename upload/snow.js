document.addEventListener("DOMContentLoaded", function () {
  const currentDate = new Date();
  const startSnowfallDate = new Date(currentDate.getFullYear(), 10, 1); // Noviembre 1
  const endSnowfallDate = new Date(currentDate.getFullYear() + 1, 0, 6); // Enero 6 del próximo año

  if (currentDate >= startSnowfallDate && currentDate <= endSnowfallDate) {
    const maxFlakes = 50; // Número máximo de copos de nieve en pantalla
    const flakes = [];
    const snowflakeCharacters = ["❅", "❄", "❆",]; // Diferentes caracteres de copos

    setInterval(() => {
      if (flakes.length < maxFlakes) {
        createSnowflake();
      }
    }, 300);

    function createSnowflake() {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";

      // Seleccionar un carácter aleatorio de la matriz
      const randomChar = snowflakeCharacters[Math.floor(Math.random() * snowflakeCharacters.length)];
      snowflake.innerHTML = randomChar;

      document.body.appendChild(snowflake);
      flakes.push(snowflake);

      const startPos = Math.random() * window.innerWidth;
      const startOpacity = Math.random();
      const duration = Math.random() * 3 + 5;
      const size = Math.random() * 20 + 10; // Tamaño aleatorio

      snowflake.style.fontSize = `${size}px`;
      snowflake.style.opacity = startOpacity;
      snowflake.style.position = "fixed"; // Ajustado a posición fija
      snowflake.style.top = "0";
      snowflake.style.left = `${startPos}px`;

      // Elegir dirección de rotación aleatoriamente
      const rotationDirection = Math.random() > 0.5 ? 1 : -1; // 1 para horario, -1 para antihorario

      snowflake.animate(
        [
          { transform: `translate(0, 0) rotate(0deg)` },
          { transform: `translate(0, 100vh) rotate(${rotationDirection * 360}deg)` }
        ],
        {
          duration: duration * 1000,
          easing: "linear",
          iterations: Infinity
        }
      );
    }
  }
});
