import React from 'react';
import { render, act } from '@testing-library/react-native';
import { Animated } from 'react-native';
import { AnimatedSplash } from '../AnimatedSplash';

const source = { uri: 'test-image' };

beforeEach(() => {
  jest.useFakeTimers();
  jest.spyOn(Animated, 'timing').mockReturnValue({
    start: jest.fn(),
    stop: jest.fn(),
    reset: jest.fn(),
  } as unknown as Animated.CompositeAnimation);
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
  jest.restoreAllMocks();
});

describe('AnimatedSplash', () => {
  it('renders without crashing', () => {
    expect(() =>
      render(<AnimatedSplash source={source} onDone={jest.fn()} />)
    ).not.toThrow();
  });

  it('calls onDone after hold + fade duration', () => {
    const onDone = jest.fn();
    render(
      <AnimatedSplash source={source} onDone={onDone} holdDuration={1000} fadeDuration={500} />
    );
    act(() => { jest.advanceTimersByTime(1499); });
    expect(onDone).not.toHaveBeenCalled();
    act(() => { jest.advanceTimersByTime(1); });
    expect(onDone).toHaveBeenCalledTimes(1);
  });

  it('does not call onDone before hold + fade duration elapses', () => {
    const onDone = jest.fn();
    render(
      <AnimatedSplash source={source} onDone={onDone} holdDuration={2500} fadeDuration={800} />
    );
    act(() => { jest.advanceTimersByTime(3299); });
    expect(onDone).not.toHaveBeenCalled();
  });

  it('starts the fade animation after hold duration', () => {
    const timingSpy = Animated.timing as jest.Mock;
    render(
      <AnimatedSplash source={source} onDone={jest.fn()} holdDuration={1000} fadeDuration={500} />
    );
    act(() => { jest.advanceTimersByTime(1000); });
    expect(timingSpy).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ toValue: 0, duration: 500 }),
    );
  });

  it('clears both timers on unmount', () => {
    const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');
    const { unmount } = render(
      <AnimatedSplash source={source} onDone={jest.fn()} />
    );
    unmount();
    expect(clearTimeoutSpy).toHaveBeenCalledTimes(2);
  });
});
