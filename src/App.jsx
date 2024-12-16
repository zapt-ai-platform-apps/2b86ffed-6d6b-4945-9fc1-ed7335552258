import { createSignal, onMount } from 'solid-js';

function App() {
  const [theme, setTheme] = createSignal('');

  onMount(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  });

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    localStorage.setItem('theme', e.target.value);
  };

  return (
    <div class={`min-h-screen ${theme()}`}>
      {/* Theme Switcher */}
      <div class="fixed top-4 right-4">
        <select
          class="border border-gray-300 rounded-md p-2 cursor-pointer bg-background text-foreground"
          value={theme()}
          onChange={handleThemeChange}
        >
          <option value="">Classic Light</option>
          <option value="theme-dark">Dark Mode</option>
          <option value="theme-glass">Glassmorphism</option>
          <option value="theme-neumorphism">Neumorphism</option>
        </select>
      </div>

      {/* Main Content */}
      <div class="h-full flex flex-col justify-center items-center bg-background text-foreground">
        <h1 class="text-4xl font-bold text-primary mb-4">Welcome to the Theme Switcher App</h1>
        <p class="text-lg mb-8 text-center max-w-xl">
          Choose a theme from the selector at the top-right corner and experience the app with different visual styles.
        </p>
      </div>

      {/* Made on ZAPT Badge */}
      <a
        href="https://www.zapt.ai"
        target="_blank"
        rel="noopener noreferrer"
        class="fixed bottom-4 right-4 text-sm text-primary hover:underline cursor-pointer"
      >
        Made on ZAPT
      </a>
    </div>
  );
}

export default App;