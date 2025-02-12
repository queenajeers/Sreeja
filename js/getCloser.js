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
function moveGirl() {
  let girlPosition = girl.getBoundingClientRect().left;
  let boyPosition = boy.getBoundingClientRect().left;
  let distance = girlPosition - boyPosition;

  console.log("Distance:", distance);

  if (distance > 100) {
    let currentRight = parseInt(getComputedStyle(girl).right) || 60;
    girl.style.right = `${currentRight + 60}px`;
    message.textContent = messages[message_index % messages.length];
    message_index++;
  } else {
    boy.src = "./public/happy.png";
    message.textContent = "Happiness unlocked!";
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
