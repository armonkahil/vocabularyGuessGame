import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/theme/ThemeContext';
import { GameScreen } from './src/screens/GameScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <GameScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
