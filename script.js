// Navigasi tab dengan animasi fade-in
const buttons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".tab-content");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    sections.forEach((sec) => {
      sec.classList.remove("active");
      sec.style.animation = "none";
    });

    button.classList.add("active");
    const tabId = button.getAttribute("data-tab");
    const activeSection = document.getElementById(tabId);
    activeSection.classList.add("active");
    setTimeout(() => {
      activeSection.style.animation = "fadeIn 0.7s";
    }, 10);
  });
});
