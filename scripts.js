const resizer = document.querySelector('.resizer');
const twitch = document.querySelector('.twitch');
const batpersonChat = document.querySelector('.batperson-chat');

resizer.addEventListener('mousedown', (e) => {
  e.preventDefault();
  document.addEventListener('mousemove', resize);
  document.addEventListener('mouseup', stopResize);
});

function resize(e) {
  const containerWidth = e.clientX - resizer.clientWidth / 2;

  twitch.style.flexBasis = `${containerWidth}px`;
  batpersonChat.style.flexBasis = `calc(100% - ${containerWidth}px - ${resizer.clientWidth}px)`;
}

function stopResize() {
  document.removeEventListener('mousemove', resize);
  document.removeEventListener('mouseup', stopResize);
}
