import React from 'react';
import { ThemeProvider } from './src/theme/ThemeContext';
import { GameScreen } from './src/screens/GameScreen';

export default function App() {
  return (
    <ThemeProvider>
      <GameScreen />
    </ThemeProvider>
  );
}
