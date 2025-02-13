let normalBPM = 70;
let currentBPM = normalBPM;
let heart = document.querySelector(".heart");
let bpmDisplay = document.getElementById("bpm");
let timeout;
let canvas = document.getElementById("heartbeatCanvas");
let ctx = canvas.getContext("2d");
let time = 0;
let waveSpeed = 2;

function increaseHeartRate(newBPM) {
  clearTimeout(timeout);
  gsap.to(
    { bpm: currentBPM, speed: waveSpeed },
    {
      bpm: newBPM,
      speed: 4,
      duration: 1,
      onUpdate: function () {
        currentBPM = Math.round(this.targets()[0].bpm);
        waveSpeed = this.targets()[0].speed;
        bpmDisplay.textContent = currentBPM;
      },
    }
  );
  adjustHeartAnimation();

  timeout = setTimeout(() => {
    gsap.to(
      { bpm: currentBPM, speed: waveSpeed },
      {
        bpm: normalBPM,
        speed: 2,
        duration: 2,
        onUpdate: function () {
          currentBPM = Math.round(this.targets()[0].bpm);
          waveSpeed = this.targets()[0].speed;
          bpmDisplay.textContent = currentBPM;
        },
      }
    );
    adjustHeartAnimation();
  }, 500);
}

function adjustHeartAnimation() {
  let duration = 60 / currentBPM;
  gsap.to(heart, {
    scale: 1.2,
    duration: duration / 2,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
  });
}

function drawHeartbeat() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  for (let i = 0; i < canvas.width; i += 5) {
    let amplitude = Math.sin((i + time) * 0.1) * 40 * (currentBPM / 70);
    ctx.lineTo(i, canvas.height / 2 - amplitude);
  }
  ctx.strokeStyle = "red";
  ctx.lineWidth = 2;
  ctx.stroke();
  time += waveSpeed;
  requestAnimationFrame(drawHeartbeat);
}

drawHeartbeat();
