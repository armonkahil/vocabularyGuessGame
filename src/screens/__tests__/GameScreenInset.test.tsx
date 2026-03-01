// This file uses its own safe-area mock so that useSafeAreaInsets returns a
// positive bottom inset, covering the true branch of the bannerHeight ternary.
jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ top: 44, bottom: 34, left: 0, right: 0 }),
  useSafeAreaFrame: () => ({ x: 0, y: 0, width: 390, height: 844 }),
  SafeAreaProvider: ({ children }: { children: React.ReactNode }) => children,
  SafeAreaView: ({ children }: { children: React.ReactNode }) => children,
  SafeAreaConsumer: ({ children }: { children: (i: object) => React.ReactNode }) =>
    children({ top: 0, right: 0, bottom: 0, left: 0 }),
  initialWindowMetrics: {
    insets: { top: 44, bottom: 34, left: 0, right: 0 },
    frame: { x: 0, y: 0, width: 390, height: 844 },
  },
}));

import React from 'react';
import { render } from '@testing-library/react-native';
import { GameScreen } from '../GameScreen';

describe('GameScreen — positive bottom safe-area inset', () => {
  it('renders without error when the device has a bottom inset of 34pt', () => {
    expect(() => render(<GameScreen />)).not.toThrow();
  });
});
