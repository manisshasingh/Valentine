let noButton = document.querySelector('.no-btn');

function answerYes() {
  alert("Yay! I'm so happy you said YES! 💖");
}

function moveNoButton() {
  let randomX = Math.floor(Math.random() * 500) + 50;  // Random X position
  let randomY = Math.floor(Math.random() * 300) + 50;  // Random Y position
  noButton.style.position = 'absolute';
  noButton.style.left = randomX + 'px';
  noButton.style.top = randomY + 'px';
}
