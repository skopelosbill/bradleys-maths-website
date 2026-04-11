// 1. The Toggle Function
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
    
    updateButton(targetTheme);
}

// 2. Helper to update the button text/emoji
function updateButton(theme) {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
        btn.innerHTML = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
    }
}

// 3. Script Initialization
// This runs as soon as the script loads to prevent the "white flash"
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// 4. Wait for the DOM to load to sync the button text
document.addEventListener('DOMContentLoaded', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme') || 'light';
    updateButton(activeTheme);
});
