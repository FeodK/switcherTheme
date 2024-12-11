import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../actions/themeActions';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <button onClick={handleToggle}>
        Переключить тему (Текущая: {theme === 'light' ? 'Светлая' : 'Темная'})
      </button>
    </div>
  );
};

export default ThemeSwitcher;
