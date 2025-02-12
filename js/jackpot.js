function rollJackpot() {
  const result = ["S", "R", "E", "E", "J", "A"];
  const columns = document.querySelectorAll(".column");
  let delay = 0;

  columns.forEach((col, index) => {
    setTimeout(() => {
      let counter = 0;
      let interval = setInterval(() => {
        col.textContent = String.fromCharCode(
          65 + Math.floor(Math.random() * 26)
        );
        counter++;
        if (counter > 10 + index * 5) {
          clearInterval(interval);
          col.textContent = result[index];
          if (index === columns.length - 1) {
            document.querySelector(".message").style.display = "block";
            launchConfetti();
          }
        }
      }, 100);
    }, delay);
    delay += 500;
  });
}

function launchConfetti() {
  let confettiSection = document.querySelector(".confettiSection");
  if (!confettiSection) return; // Ensure the container exists

  for (let i = 0; i < 50; i++) {
    let confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = `${Math.random() * 100}vh`; // Confetti starts at different heights
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    confettiSection.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}
