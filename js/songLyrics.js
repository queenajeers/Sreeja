const songs = [
  {
    id: 2,
    icon: "./public/musical-notes.png",
    title: "Beautiful In White",
    lyrics:
      "\n\n\nAnd if a daughter is what our future holds\n\nI hope she has your eyes\n\nFinds love like you and I did\nYeah, but when she falls in love we let her go\nI'll walk her down the aisle\nShe'll look so beautiful in white...\nSo beautiful in white\n\nSo as long as I live I love you\nWill have and hold you\nYou look so beautiful in white\n\nAnd from now till my very last breath\nThis day I'll cherish\nYou look so beautiful in white\nTonight\n\n\n\nYou look so beautiful in white\nTonight\n\n\n",
    speed: 120,
    src: "./songs/BeautifulInWhite.mp3",
  },
  {
    id: 1,
    icon: "./public/musical-notes.png",
    title: "My love for you",
    lyrics:
      "\n\n\nHold me now, touch me now\n\nI don't want to live without you\n\n… Nothing's gonna change my love for you\nYou oughta know by now how much I love you\nOne thing you can be sure of\nI'll never ask for more than your love\n… Nothing's gonna change my love for you\nYou oughta know by now how much I love you\nThe world may change my whole life through\nBut nothing's gonna change my love for you",
    speed: 92,
    src: "./songs/NothingsGonnaChangeMyLoveforYou.mp3",
  },

  {
    id: 3,
    icon: "./public/musical-notes.png",
    title: "Golden Days",
    lyrics:
      "\n\n\nThis life is crazy\n\nBut it led me to your love\n\nIf you call on me forever I will come (will come)\n\nNo matter what, baby\n\nThe only thing I'm certain of\nWe'll be diamond when our golden days are done (are done)\nNo matter what, no matter what (yeah)\nIt's only us (it's only us)\nYeah, no matter what",
    speed: 90,
    src: "./songs/Hailey.mp3",
  },
];

let currentInterval = null;
let currentAudio = null;

function createSongCards() {
  const container = document.getElementById("cardsContainer");
  songs.forEach((song) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <img class="icon" src="${song.icon}" alt="Song Icon">
            <div class="song-title" id="title-${song.id}">${song.title}</div>
            <audio id="audio-${song.id}" src="${song.src}"></audio>
            <div class="lyrics" id="lyrics-${song.id}">${song.lyrics}</div>
            <div class="controls">
                <img id="play-btn-${song.id}" src="./public/play.png" alt="Play" onclick="togglePlay(${song.id}, ${song.speed})">
                <img src="./public/restart.png" alt="Restart" onclick="restartLyrics(${song.id}, ${song.speed})">
            </div>
        `;
    container.appendChild(card);
  });
}

function togglePlay(songId, speed) {
  const playBtn = document.getElementById(`play-btn-${songId}`);
  const audio = document.getElementById(`audio-${songId}`);
  const lyricsDiv = document.getElementById(`lyrics-${songId}`);
  const titleDiv = document.getElementById(`title-${songId}`);

  if (audio.paused) {
    if (currentInterval) clearInterval(currentInterval);
    if (currentAudio) currentAudio.pause();

    audio.play();
    currentAudio = audio;

    let scrollAmount = 0;
    currentInterval = setInterval(() => {
      lyricsDiv.scrollTop = scrollAmount;
      scrollAmount += 1;
    }, speed);

    playBtn.src = "./public/stop.png";
    lyricsDiv.style.opacity = 1;
    // titleDiv.style.opacity = 0;
  } else {
    if (currentInterval) clearInterval(currentInterval);
    audio.pause();
    currentAudio = null;
    playBtn.src = "./public/play.png";
    lyricsDiv.style.opacity = 0;
    titleDiv.style.opacity = 1;
  }
}

function restartLyrics(songId, speed) {
  if (currentInterval) clearInterval(currentInterval);
  if (currentAudio) currentAudio.pause();

  const lyricsDiv = document.getElementById(`lyrics-${songId}`);
  const audio = document.getElementById(`audio-${songId}`);
  const playBtn = document.getElementById(`play-btn-${songId}`);
  const titleDiv = document.getElementById(`title-${songId}`);

  lyricsDiv.scrollTop = 0;
  audio.currentTime = 0;
  audio.play();
  currentAudio = audio;
  playBtn.src = "./public/stop.png";
  lyricsDiv.style.opacity = 1;
  //   titleDiv.style.opacity = 0;

  let scrollAmount = 0;
  currentInterval = setInterval(() => {
    lyricsDiv.scrollTop = scrollAmount;
    scrollAmount += 1;
  }, speed);
}

createSongCards();
