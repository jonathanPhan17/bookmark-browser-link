import { Switch } from '@mui/material';
import React from 'react'

export default function ToggleThemeButton({ toggleDarkMode, setToggleDarkMode, setFormTheme}) {

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
    setFormTheme(toggleDarkMode ? "light" : "dark");
  }

  return (
    <>
      <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
      <label>{toggleDarkMode ? "🌙" : "🔆"}</label>
    </>
  );
}

