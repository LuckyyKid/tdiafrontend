
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import i18n from './i18n'

// Create the root once
const root = createRoot(document.getElementById("root")!);

// Wait for i18n to be initialized before rendering
if (i18n.isInitialized) {
  root.render(<App />);
} else {
  i18n.on('initialized', () => {
    root.render(<App />);
  });
}

