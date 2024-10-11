import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './index.css';  // Tailwind CSS/other styles

// Import Flowbite styles and JS
import 'flowbite/dist/flowbite.min.css';  // Flowbite CSS
import 'flowbite'; // Flowbite JS

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
