const toggleBtn = document.getElementById("toggleBtn");

// Listen for click event dark mode
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
});
