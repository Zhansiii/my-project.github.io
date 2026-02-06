
const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const icon = playBtn.querySelector('i');

let isPlaying = true;

window.addEventListener('load', () => {
  audio.currentTime = 20;
  audio.play();
});

playBtn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
  } else {
    audio.play();
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
  }
  isPlaying = !isPlaying;
});