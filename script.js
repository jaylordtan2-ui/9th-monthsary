
const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const hearts = document.getElementById("hearts");

let isOpen = false;

openBtn.addEventListener("click", () => {
  isOpen = !isOpen;
  envelope.classList.toggle("open", isOpen);

  openBtn.textContent = isOpen
    ? "Close My Love Letter 💗"
    : "Open My Love Letter 💌";
});

function createHeart() {
  const heart = document.createElement("span");

  heart.className = "floating-heart";
  heart.textContent = ["♥", "♡", "💕", "💗"][
    Math.floor(Math.random() * 4)
  ];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 15 + Math.random() * 25 + "px";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";

  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 400);
