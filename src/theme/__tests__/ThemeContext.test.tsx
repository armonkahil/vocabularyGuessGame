import React from 'react';
import { renderHook, act } from '@testing-library/react-native';
import * as RN from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider, useTheme } from '../ThemeContext';
import { lightColors, darkColors } from '../colors';

beforeEach(() => {
  // Pin useColorScheme to null (→ light) so tests are not affected by OS dark mode.
  jest.spyOn(RN, 'useColorScheme').mockReturnValue(null);
  (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);
  (AsyncStorage.setItem as jest.Mock).mockResolvedValue(undefined);
});

afterEach(() => {
  jest.restoreAllMocks();
});

// ── Outside provider ───────────────────────────────────────────────────────────

describe('useTheme — outside ThemeProvider', () => {
  it('returns light mode by default', () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.mode).toBe('light');
    expect(result.current.colors).toEqual(lightColors);
  });

  it('default toggle is a no-op and does not throw', () => {
    const { result } = renderHook(() => useTheme());
    expect(() => act(() => { result.current.toggle(); })).not.toThrow();
  });
});

// ── Initialisation ─────────────────────────────────────────────────────────────

describe('ThemeProvider — initialisation', () => {
  it('defaults to light mode when system scheme is not dark', async () => {
    const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider });
    await act(async () => {});
    expect(result.current.mode).toBe('light');
    expect(result.current.colors).toEqual(lightColors);
  });

  it('defaults to dark mode when system scheme is dark', async () => {
    jest.spyOn(RN, 'useColorScheme').mockReturnValue('dark');
    const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider });
    await act(async () => {});
    expect(result.current.mode).toBe('dark');
  });

  it('loads saved "dark" preference from AsyncStorage', async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce('dark');
    const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider });
    await act(async () => {});
    expect(result.current.mode).toBe('dark');
    expect(result.current.colors).toEqual(darkColors);
  });

  it('loads saved "light" preference overriding dark system scheme', async () => {
    jest.spyOn(RN, 'useColorScheme').mockReturnValue('dark');
    (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce('light');
    const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider });
    await act(async () => {});
    expect(result.current.mode).toBe('light');
  });

  it('ignores unrecognised values from AsyncStorage', async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce('purple');
    const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider });
    await act(async () => {});
    expect(result.current.mode).toBe('light');
  });

  it('keeps system default when AsyncStorage throws', async () => {
    (AsyncStorage.getItem as jest.Mock).mockRejectedValueOnce(new Error('Storage unavailable'));
    const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider });
    await act(async () => {});
    expect(result.current.mode).toBe('light');
  });
});

// ── Toggle ─────────────────────────────────────────────────────────────────────

describe('ThemeProvider — toggle', () => {
  it('switches light → dark and provides darkColors', () => {
    const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider });
    act(() => { result.current.toggle(); });
    expect(result.current.mode).toBe('dark');
    expect(result.current.colors).toEqual(darkColors);
  });

  it('switches dark → light and provides lightColors', () => {
    const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider });
    act(() => { result.current.toggle(); }); // light → dark
    act(() => { result.current.toggle(); }); // dark  → light
    expect(result.current.mode).toBe('light');
    expect(result.current.colors).toEqual(lightColors);
  });

  it('persists the new mode to AsyncStorage', () => {
    const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider });
    act(() => { result.current.toggle(); });
    expect(AsyncStorage.setItem).toHaveBeenCalledWith('@theme_mode', 'dark');
  });

  it('does not throw when AsyncStorage setItem rejects', () => {
    (AsyncStorage.setItem as jest.Mock).mockRejectedValueOnce(new Error('full'));
    const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider });
    expect(() => act(() => { result.current.toggle(); })).not.toThrow();
  });
});
