let girl = document.getElementById("girl");
let boy = document.getElementById("boy");
let message = document.getElementById("message");
let messages = [
  "something sweeter is approaching...",
  "A lovely presence is getting closer...",
  "The air feels warmer with love..",
  "Something wonderful is about to happen...",
  "A heartbeat skips with excitement...",
  "A sweet energy is surrounding me...",
  "Love's melody is playing softly...",
  "HURRAY!",
];

let message_index = 0;
let girlMovePixels = window.innerWidth * 0.03; // Move by 1% of screen width for consistency
let girlCurrentPosition = 0; // Track girl's movement

function moveGirl() {
  let girlPosition = girl.getBoundingClientRect().left;
  let boyPosition = boy.getBoundingClientRect().left;
  let distance = girlPosition - boyPosition;

  console.log("Distance:", distance);

  if (distance > 80) {
    // Stop when the girl is close enough (~80px)
    girlCurrentPosition -= girlMovePixels; // Move left
    girl.style.transform = `translateX(${girlCurrentPosition}px)`;

    message.textContent = messages[message_index % messages.length];
    message_index++;
  } else {
    message.textContent = "Happiness unlocked!";
    boy.src = "./public/happy.png";
    startConfetti();
  }
}

function startConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
  setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, 500);
}
