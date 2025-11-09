const btn = document.getElementById('klepBtn');
const src = document.getElementById('klepsSrc');

src.addEventListener('canplaythrough', () => { /* ready */ }, { once:true });

function playKlep() {
  try {
    const clone = src.cloneNode(true);
    // clone.volume = 0.9;

    clone.play().catch(err => console.error('Playback error:', err));
  } catch (e) {
    console.error(e);
  }
}

btn.addEventListener('click', playKlep);

btn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    playKlep();
  }
});
