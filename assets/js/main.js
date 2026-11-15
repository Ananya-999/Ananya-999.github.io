const THEME_STORAGE_KEY = 'theme';
const COPY_RESET_DELAY_MS = 2000;

function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage can be blocked (private browsing). The theme still applies for this visit.
  }
}

function setupThemeToggle() {
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  const root = document.documentElement;
  const syncPressedState = () => {
    toggle.setAttribute('aria-pressed', String(root.dataset.theme === 'dark'));
  };

  toggle.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = nextTheme;
    saveTheme(nextTheme);
    syncPressedState();
  });

  syncPressedState();
  toggle.hidden = false;
}

function setupCopyEmail() {
  const button = document.querySelector('[data-copy]');
  if (!button || !navigator.clipboard) return;

  const label = button.querySelector('[aria-live]');
  if (!label) return;

  const defaultText = label.textContent;
  let resetTimer;

  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
    } catch {
      label.textContent = 'Copy failed. Use the link above.';
      return;
    }

    label.textContent = 'Copied';
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      label.textContent = defaultText;
    }, COPY_RESET_DELAY_MS);
  });

  button.hidden = false;
}

setupThemeToggle();
setupCopyEmail();
