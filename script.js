const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const title = document.getElementById("title");
const gif = document.getElementById("gif");

let scale = 1;

// 😈 NO → YES становится больше
noBtn.addEventListener("click", () => {
  scale += 0.3;
  yesBtn.style.transform = `scale(${scale})`;

  title.textContent = "Дианочка, ну пожааалуйста 🥺💔";
});

// 💖 YES
yesBtn.addEventListener("click", () => {
  message.style.display = "block";
  title.textContent = "Самая лучшая девочка 💞";
  gif.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3N1aWx1bmx3b2d3M25kZ2M3ZW52M2N4M2s3eGx0Mmt2dm41NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0MYt5jPR6QX5pnqM/giphy.gif";

  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

// 💗 Генератор сердечек
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
