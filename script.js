document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector("[data-theme-toggle]");
    const root = document.documentElement;

    if (!toggle) return;

    // Load saved theme or default to light
    let theme = localStorage.getItem("theme") || "light";

    root.setAttribute("data-theme", theme);

    function updateIcon() {
        if (theme === "dark") {
            toggle.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3
                    7 7 0 0 0 21 12.79"></path>
                </svg>
            `;
            toggle.setAttribute("aria-label", "Switch to light mode");
        } else {
            toggle.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="5"></circle>
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42
                    M18.36 18.36l1.42 1.42M1 12h2M21 12h2
                    M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
                </svg>
            `;
            toggle.setAttribute("aria-label", "Switch to dark mode");
        }
    }

    updateIcon();

    toggle.addEventListener("click", () => {
        theme = theme === "light" ? "dark" : "light";

        root.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);

        updateIcon();
    });
});