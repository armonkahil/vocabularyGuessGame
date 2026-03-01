import React, { useCallback, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/theme/ThemeContext';
import { GameScreen } from './src/screens/GameScreen';
import { AnimatedSplash } from './src/components/AnimatedSplash';

// Drop your splash image into assets/ and update this path:
const splashImage = require('./assets/splash-image.png');

export default function App() {
  const [splashDone, setSplashDone] = useState(false);
  const onSplashDone = useCallback(() => setSplashDone(true), []);

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <GameScreen />
        {!splashDone && (
          <AnimatedSplash source={splashImage} onDone={onSplashDone} />
        )}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
