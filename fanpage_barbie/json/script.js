// Barbie Wiki scripts

// Play the trailer inside the trailer box (only on pages that have one)
const play = document.querySelector('.trailer .play');
if (play) {
  play.addEventListener('click', e => {
    e.preventDefault();
    const box = play.closest('.trailer');
    const v = document.createElement('video');
    v.src = 'images/trailer.mp4';
    v.controls = true;
    v.autoplay = true;
    v.playsInline = true;
    box.appendChild(v);
    box.classList.add('playing');
  });
}
