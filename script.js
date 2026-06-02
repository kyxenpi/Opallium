/* ==========================================================================
   OPALLIUM LANDING - SCRIPT INTERATIVO
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");

  const cursorState = { x: 0, y: 0, targetX: 0, targetY: 0 };
  const inertia = 0.15; // Mantém a consistência da física do workspace

  // Ativa e rastreia o ponteiro físico customizado
  document.documentElement.style.cursor = "none";

  // Força elementos a ocultarem o cursor padrão
  const styleOverride = document.createElement("style");
  styleOverride.innerHTML = "* { cursor: none !important; }";
  document.head.appendChild(styleOverride);

  document.addEventListener("mousemove", (e) => {
    cursorState.targetX = e.clientX - 12; // Desconto da metade da largura (24px / 2)
    cursorState.targetY = e.clientY - 12;
    cursor.style.display = "block";
  });

  // Loop de animação LERP para o cursor elástico
  function animateCursor() {
    cursorState.x += (cursorState.targetX - cursorState.x) * inertia;
    cursorState.y += (cursorState.targetY - cursorState.y) * inertia;

    cursor.style.transform = `translate3d(${cursorState.x}px, ${cursorState.y}px, 0)`;
    requestAnimationFrame(animateCursor);
  }
  requestAnimationFrame(animateCursor);

  // Efeito visual de clique
  document.addEventListener("mousedown", () =>
    cursor.classList.add("clicking"),
  );
  document.addEventListener("mouseup", () =>
    cursor.classList.remove("clicking"),
  );

  // Efeito sutil de revelação em cascata (Fade-in) nas caixas de features
  const cards = document.querySelectorAll(".feature-card");
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 150 * index);
  });
});

// Adicione isto dentro do seu DOMContentLoaded no landing.js
const floatingWindow = document.getElementById("floatingWindow");

document.addEventListener("mousemove", (e) => {
  // Cálculo para o efeito de inclinação (tilt)
  const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

  if (floatingWindow) {
    floatingWindow.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateY(${yAxis * -1}px)`;
  }
});
