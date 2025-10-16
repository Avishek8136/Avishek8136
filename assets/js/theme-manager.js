/**
 * Theme Manager - Handles dark mode toggle and persistence
 */

class ThemeManager {
  constructor() {
    this.THEME_KEY = 'site-theme';
    this.theme = this.getStoredTheme() || 'light';
    this.init();
  }

  init() {
    // Apply stored theme on page load
    this.applyTheme(this.theme);
    
    // Create theme toggle button
    this.createToggleButton();
    
    // Listen for theme changes
    this.setupListeners();
  }

  getStoredTheme() {
    return localStorage.getItem(this.THEME_KEY);
  }

  setStoredTheme(theme) {
    localStorage.setItem(this.THEME_KEY, theme);
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    this.theme = theme;
    this.setStoredTheme(theme);
    this.updateToggleIcon();
  }

  toggleTheme() {
    const newTheme = this.theme === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
  }

  createToggleButton() {
    // Check if button already exists
    if (document.getElementById('themeToggle')) {
      return;
    }

    const button = document.createElement('button');
    button.id = 'themeToggle';
    button.className = 'theme-toggle';
    button.setAttribute('aria-label', 'Toggle theme');
    button.innerHTML = '<i class="ti-light-bulb"></i>';
    
    button.addEventListener('click', () => this.toggleTheme());
    
    document.body.appendChild(button);
  }

  updateToggleIcon() {
    const button = document.getElementById('themeToggle');
    if (button) {
      const icon = button.querySelector('i');
      if (this.theme === 'dark') {
        icon.className = 'ti-light-bulb';
      } else {
        icon.className = 'ti-moon';
      }
    }
  }

  setupListeners() {
    // Listen for system theme changes
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', (e) => {
        if (!this.getStoredTheme()) {
          this.applyTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }
}

// Initialize theme manager when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
  });
} else {
  window.themeManager = new ThemeManager();
}
