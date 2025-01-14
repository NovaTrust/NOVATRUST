// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    if (body.hasAttribute("data-theme")) {
        body.removeAttribute("data-theme");
    } else {
        body.setAttribute("data-theme", "dark");
    }
}

// Example usage: Call toggleDarkMode when a button is clicked
document.getElementById("lightswitch").addEventListener("click", toggleDarkMode);
