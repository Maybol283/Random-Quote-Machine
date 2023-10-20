import React, { useState } from 'react';
import './App.css';
import QuoteBoard from './Components/QuoteBoard/QuoteBoard';

function App() {
  const [appThemeColor, setAppThemeColor] = useState(''); // Initialize with an empty string

  const handleThemeColorChange = (newColor) => {
    setAppThemeColor(newColor);
    document.documentElement.style.setProperty('--app-background-color', newColor);
  };

  return (
    <div className="d-flex align-items-end justify-content-center" style={{ minHeight: "75vh" }}>
      <QuoteBoard onThemeColorChange={handleThemeColorChange} />
    </div>
  );
}

export default App;