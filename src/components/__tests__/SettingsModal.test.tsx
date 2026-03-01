import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { Alert } from 'react-native';
import { SettingsModal } from '../SettingsModal';
import { lightColors } from '../../theme/colors';

const defaultProps = {
  visible: true,
  onClose: jest.fn(),
  mode: 'light' as const,
  onToggleTheme: jest.fn(),
  onRestartStage: jest.fn(),
  onResetProgress: jest.fn(),
  colors: lightColors,
};

beforeEach(() => {
  jest.spyOn(Alert, 'alert').mockImplementation(() => undefined);
});

afterEach(() => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
});

describe('SettingsModal', () => {
  it('renders title when visible', () => {
    const { getByText } = render(<SettingsModal {...defaultProps} />);
    expect(getByText('Settings')).toBeTruthy();
  });

  it('does not render content when not visible', () => {
    const { queryByText } = render(<SettingsModal {...defaultProps} visible={false} />);
    expect(queryByText('Settings')).toBeNull();
  });

  it('calls onClose when Close button is pressed', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(<SettingsModal {...defaultProps} onClose={onClose} />);
    fireEvent.press(getByTestId('close-settings-btn'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when backdrop is pressed', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(<SettingsModal {...defaultProps} onClose={onClose} />);
    fireEvent.press(getByTestId('settings-backdrop'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('switch value is false in light mode', () => {
    const { getByTestId } = render(<SettingsModal {...defaultProps} mode="light" />);
    expect(getByTestId('dark-mode-switch').props.value).toBe(false);
  });

  it('switch value is true in dark mode', () => {
    const { getByTestId } = render(<SettingsModal {...defaultProps} mode="dark" />);
    expect(getByTestId('dark-mode-switch').props.value).toBe(true);
  });

  it('calls onToggleTheme when switch is changed', () => {
    const onToggleTheme = jest.fn();
    const { getByTestId } = render(
      <SettingsModal {...defaultProps} onToggleTheme={onToggleTheme} />
    );
    fireEvent(getByTestId('dark-mode-switch'), 'valueChange', true);
    expect(onToggleTheme).toHaveBeenCalledTimes(1);
  });

  it('shows a confirmation alert when Reset Progress is pressed', () => {
    const { getByTestId } = render(<SettingsModal {...defaultProps} />);
    fireEvent.press(getByTestId('reset-progress-btn'));
    expect(Alert.alert).toHaveBeenCalledWith(
      'Reset Progress',
      expect.any(String),
      expect.arrayContaining([
        expect.objectContaining({ text: 'Cancel' }),
        expect.objectContaining({ text: 'Reset' }),
      ]),
    );
  });

  it('calls onResetProgress and onClose when Reset is confirmed', () => {
    const onResetProgress = jest.fn();
    const onClose = jest.fn();
    const { getByTestId } = render(
      <SettingsModal {...defaultProps} onResetProgress={onResetProgress} onClose={onClose} />
    );
    fireEvent.press(getByTestId('reset-progress-btn'));
    const buttons = (Alert.alert as jest.Mock).mock.calls[0][2] as { text: string; onPress?: () => void }[];
    const resetBtn = buttons.find((b) => b.text === 'Reset')!;
    act(() => { resetBtn.onPress!(); });
    expect(onResetProgress).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onResetProgress when Cancel has no onPress', () => {
    const onResetProgress = jest.fn();
    const { getByTestId } = render(
      <SettingsModal {...defaultProps} onResetProgress={onResetProgress} />
    );
    fireEvent.press(getByTestId('reset-progress-btn'));
    const buttons = (Alert.alert as jest.Mock).mock.calls[0][2] as { text: string; onPress?: () => void }[];
    const cancelBtn = buttons.find((b) => b.text === 'Cancel')!;
    expect(cancelBtn.onPress).toBeUndefined();
    expect(onResetProgress).not.toHaveBeenCalled();
  });

  it('shows a confirmation alert when Restart Stage is pressed', () => {
    const { getByTestId } = render(<SettingsModal {...defaultProps} />);
    fireEvent.press(getByTestId('restart-stage-btn'));
    expect(Alert.alert).toHaveBeenCalledWith(
      'Restart Stage',
      expect.any(String),
      expect.arrayContaining([
        expect.objectContaining({ text: 'Cancel' }),
        expect.objectContaining({ text: 'Restart' }),
      ]),
    );
  });

  it('calls onRestartStage and onClose when Restart is confirmed', () => {
    const onRestartStage = jest.fn();
    const onClose = jest.fn();
    const { getByTestId } = render(
      <SettingsModal {...defaultProps} onRestartStage={onRestartStage} onClose={onClose} />
    );
    fireEvent.press(getByTestId('restart-stage-btn'));
    const buttons = (Alert.alert as jest.Mock).mock.calls[0][2] as { text: string; onPress?: () => void }[];
    const restartBtn = buttons.find((b) => b.text === 'Restart')!;
    act(() => { restartBtn.onPress!(); });
    expect(onRestartStage).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onRestartStage when Cancel has no onPress', () => {
    const onRestartStage = jest.fn();
    const { getByTestId } = render(
      <SettingsModal {...defaultProps} onRestartStage={onRestartStage} />
    );
    fireEvent.press(getByTestId('restart-stage-btn'));
    const buttons = (Alert.alert as jest.Mock).mock.calls[0][2] as { text: string; onPress?: () => void }[];
    const cancelBtn = buttons.find((b) => b.text === 'Cancel')!;
    expect(cancelBtn.onPress).toBeUndefined();
    expect(onRestartStage).not.toHaveBeenCalled();
  });
});
