// Download do currículo
document.getElementById("downloadBtn").addEventListener("click", (e) => {
  e.preventDefault(); // Evita navegação padrão
  const link = document.createElement("a");
  link.href = "./src/doc/CURRICULO.docx";
  link.download = "Lucas-Sarmento-Curriculo.docx";
  link.target = "_blank";
  link.click();
});


// Mensagem ao clicar nos botões de redes
document.getElementById("githubBtn").addEventListener("click", () => {
  console.log("Abrindo GitHub...");
});

document.getElementById("linkedinBtn").addEventListener("click", () => {
  console.log("Abrindo LinkedIn...");
});

// Scroll Reveal básico
const revealElements = document.querySelectorAll(".section, .experience-item");
const revealOnScroll = () => {
  revealElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const isVisible = top < window.innerHeight - 100;
    if (isVisible) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", () => {
  revealElements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.6s ease-out";
  });
  revealOnScroll();
});

// Validação simples de e-mail (só alerta se estiver sem @)
const emailElement = document.getElementById("email");
if (!emailElement.textContent.includes("@")) {
  emailElement.style.color = "#f87171";
  emailElement.textContent += " (verifique o endereço)";
}
