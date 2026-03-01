import React from 'react';
import { render, act } from '@testing-library/react-native';
import { Animated } from 'react-native';
import { AnimatedSplash } from '../AnimatedSplash';

const source = { uri: 'test-image' };

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
  jest.restoreAllMocks();
});

function mockTiming(finished: boolean) {
  jest.spyOn(Animated, 'timing').mockReturnValue({
    start: (cb?: (result: { finished: boolean }) => void) => { cb?.({ finished }); },
    stop: jest.fn(),
    reset: jest.fn(),
  } as unknown as Animated.CompositeAnimation);
}

describe('AnimatedSplash', () => {
  it('renders without crashing', () => {
    expect(() =>
      render(<AnimatedSplash source={source} onDone={jest.fn()} />)
    ).not.toThrow();
  });

  it('calls onDone after hold duration when animation finishes', () => {
    mockTiming(true);
    const onDone = jest.fn();
    render(
      <AnimatedSplash source={source} onDone={onDone} holdDuration={1000} fadeDuration={500} />
    );
    act(() => { jest.advanceTimersByTime(1000); });
    expect(onDone).toHaveBeenCalledTimes(1);
  });

  it('does not call onDone when animation is interrupted (finished: false)', () => {
    mockTiming(false);
    const onDone = jest.fn();
    render(
      <AnimatedSplash source={source} onDone={onDone} holdDuration={1000} fadeDuration={500} />
    );
    act(() => { jest.advanceTimersByTime(1000); });
    expect(onDone).not.toHaveBeenCalled();
  });

  it('does not call onDone before hold duration elapses', () => {
    mockTiming(true);
    const onDone = jest.fn();
    render(
      <AnimatedSplash source={source} onDone={onDone} holdDuration={2500} fadeDuration={800} />
    );
    act(() => { jest.advanceTimersByTime(2499); });
    expect(onDone).not.toHaveBeenCalled();
  });

  it('clears the timeout on unmount', () => {
    const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');
    const { unmount } = render(
      <AnimatedSplash source={source} onDone={jest.fn()} />
    );
    unmount();
    expect(clearTimeoutSpy).toHaveBeenCalled();
  });
});
