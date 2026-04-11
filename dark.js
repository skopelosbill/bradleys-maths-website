function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
    const btn = document.getElementById('theme-toggle');
    
    html.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
    
    btn.innerHTML = targetTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
}

// Apply the saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    const btn = document.getElementById('theme-toggle');
    if(btn) btn.innerHTML = savedTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
}
