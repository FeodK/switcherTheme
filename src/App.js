import React, { useEffect } from 'react';
import './App.css';
import ThemeSwitcher from './components/ThemeSwitcher';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);

  return (
    <div className="App">
      <h1>Переключение темы</h1>
      <ThemeSwitcher />
    </div>
  );
}

export default App;
