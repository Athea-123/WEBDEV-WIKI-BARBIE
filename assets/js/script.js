// Barbie Wiki scripts

// Play the trailer inside the trailer box 
const play = document.querySelector('.trailer .play');
if (play) {
  play.addEventListener('click', e => {
    e.preventDefault();
    const box = play.closest('.trailer');
    const v = document.createElement('video');
    v.src = 'assets/video/trailer.mp4';
    v.controls = true;
    v.autoplay = true;
    v.playsInline = true;
    box.appendChild(v);
    box.classList.add('playing');
  });
}

// Build the character cards from assets/json/characters.json 
const grid = document.querySelector('.char-grid');
if (grid) {
  fetch('assets/json/characters.json')
    .then(res => res.json())
    .then(list => {
      grid.innerHTML = list.map(c => `
        <li><a class="char-card" href="${c.page}">
          <img src="${c.image}" alt="${c.name}">
          <span class="char-name">${c.name}</span>
          <span class="char-tag">${c.role}</span>
        </a></li>`).join('');
    })
    .catch(() => {
    });
}
