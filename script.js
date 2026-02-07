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

// 💖 YES → FIREWORKS 🎆
yesBtn.addEventListener("click", () => {
  message.style.display = "block";
  title.textContent = "The best girl in the world 💞";

  gif.src =
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRpcXBiZHRlb3hwMnVrOGZxbDl2bW5heHFpOGNlZzNqOWNwZzVsbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ly4lBWq3bDydVbGtzH/giphy.gif";

  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  launchFireworks(); // 🎆 ВОТ ОН
});

// 🎆 FIREWORKS FUNCTION
function launchFireworks() {
  for (let i = 0; i < 100; i++) {
    const particle = document.createElement("div");
    particle.className = "firework";

    const colors = [
  "#ff004c",  // hot pink
  "#ff3d81",
  "#ff7aa2",
  "#ffd1dc",
  "#ffffff"
];

    particle.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    particle.style.color = particle.style.background;
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 220 + 40;

    particle.style.setProperty(
      "--x",
      `${Math.cos(angle) * distance}px`
    );
    particle.style.setProperty(
      "--y",
      `${Math.sin(angle) * distance}px`
    );

    particle.style.left = "50%";
    particle.style.top = "45%";

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 1000);
  }
}

// 💗
