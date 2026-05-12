const button = document.getElementById('theme-toggle');

        function getThemeByTime() {
        const hour = new Date().getHours();
        console.log(hour);

        // Dark mode from 7 PM to 7 AM
        if (hour >= 19 || hour < 7) {
            return 'dark'
        } else return 'light';
        }

    
        function applyTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
        }
    
        function updateButtonText(theme) {
            if (theme === 'dark') {
                button.textContent = "Light Mode";
            } else {
                button.textContent = "Dark Mode";
            }
        }
    
        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'light';
    
        applyTheme(getThemeByTime());
        updateButtonText(savedTheme);
    
        button.addEventListener('click', () => {
            const current =
                document.documentElement.getAttribute('data-theme');
    
            const next = current === 'dark' ? 'light' : 'dark';
    
            applyTheme(next);
            localStorage.setItem('theme', next);
            updateButtonText(next);
        });