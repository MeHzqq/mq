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
  const chatWidth = window.innerWidth - containerWidth - resizer.clientWidth;
  
  twitch.style.width = `${containerWidth}px`;
  batpersonChat.style.width = `${chatWidth}px`;
  resizer.style.left = `${containerWidth}px`;
}

function stopResize() {
  document.removeEventListener('mousemove', resize);
  document.removeEventListener('mouseup', stopResize);
}

