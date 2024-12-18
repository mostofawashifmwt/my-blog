// Navigation function
function navigateTo(page) {
    window.location.href = page;
}

// Add a greeting effect to header text (optional)
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header h1");
    header.style.opacity = 0;
    header.style.transform = "translateY(-20px)";
    setTimeout(() => {
        header.style.transition = "all 0.8s ease";
        header.style.opacity = 1;
        header.style.transform = "translateY(0)";
    }, 100);
});
