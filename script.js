const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const title = document.getElementById("title");
const gif = document.getElementById("gif");

let scale = 1;

// 😈 NO → YES becomes bigger
noBtn.addEventListener("click", () => {
  scale += 0.3;
  yesBtn.style.transform = `scale(${scale})`;

  title.textContent = "BABE PLEASEEEE 💔";
});

// 💖 YES
yesBtn.addEventListener("click", () => {
  message.style.display = "block";
  title.textContent = "The best girl in the world 💞";

  gif.src =
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRpcXBiZHRlb3hwMnVrOGZxbDl2bW5heHFpOGNlZzNqOWNwZzVsbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ly4lBWq3bDydVbGtzH/giphy.gif";

  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

// 💗 Hearts generator
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  heart.style.fontSize = 16 + Math.random() * 24 + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 300);
