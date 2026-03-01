import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors, darkColors, lightColors } from './colors';

export type ThemeMode = 'light' | 'dark';

interface ThemeContextValue {
  mode: ThemeMode;
  colors: Colors;
  toggle: () => void;
}

const STORAGE_KEY = '@theme_mode';

const defaultValue: ThemeContextValue = {
  mode: 'light',
  colors: lightColors,
  toggle: () => undefined,
};

const ThemeContext = createContext<ThemeContextValue>(defaultValue);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemScheme = useColorScheme();
  const [mode, setMode] = useState<ThemeMode>(systemScheme === 'dark' ? 'dark' : 'light');

  // Load persisted preference on mount
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((saved) => {
      if (saved === 'light' || saved === 'dark') {
        setMode(saved);
      }
    });
  }, []);

  const toggle = useCallback(() => {
    setMode((prev) => {
      const next: ThemeMode = prev === 'light' ? 'dark' : 'light';
      AsyncStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const value: ThemeContextValue = {
    mode,
    colors: mode === 'dark' ? darkColors : lightColors,
    toggle,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

/** Returns the current theme. Falls back to light mode when used outside ThemeProvider (e.g. in tests). */
export const useTheme = (): ThemeContextValue => useContext(ThemeContext);
