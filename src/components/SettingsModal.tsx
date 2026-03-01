import React from 'react';
import {
  Modal,
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Pressable,
} from 'react-native';
import type { Colors } from '../theme/colors';

interface Props {
  visible: boolean;
  onClose: () => void;
  mode: 'light' | 'dark';
  onToggleTheme: () => void;
  onRestartStage: () => void;
  onResetProgress: () => void;
  colors: Colors;
}

export const SettingsModal: React.FC<Props> = ({
  visible,
  onClose,
  mode,
  onToggleTheme,
  onRestartStage,
  onResetProgress,
  colors,
}) => {
  const styles = makeStyles(colors);

  const confirmRestartStage = () => {
    Alert.alert(
      'Restart Stage',
      'This will clear your progress for the current stage. Are you sure?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Restart',
          style: 'destructive',
          onPress: () => {
            onRestartStage();
            onClose();
          },
        },
      ],
    );
  };

  const confirmReset = () => {
    Alert.alert(
      'Reset Progress',
      'This will clear all solved words and return to Stage 1. Are you sure?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => {
            onResetProgress();
            onClose();
          },
        },
      ],
    );
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.backdrop} onPress={onClose} testID="settings-backdrop">
        <Pressable style={styles.card}>
          <Text style={styles.title}>Settings</Text>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Dark Mode</Text>
            <Switch
              value={mode === 'dark'}
              onValueChange={onToggleTheme}
              trackColor={{ false: colors.border, true: colors.accent }}
              thumbColor={colors.onAccent}
              testID="dark-mode-switch"
            />
          </View>

          <TouchableOpacity
            style={styles.restartBtn}
            onPress={confirmRestartStage}
            testID="restart-stage-btn"
          >
            <Text style={styles.resetLabel}>Restart Stage</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.resetBtn}
            onPress={confirmReset}
            testID="reset-progress-btn"
          >
            <Text style={styles.resetLabel}>Reset Progress</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.closeBtn}
            onPress={onClose}
            testID="close-settings-btn"
          >
            <Text style={styles.closeLabel}>Close</Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const makeStyles = (c: Colors) =>
  StyleSheet.create({
    backdrop: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      width: '80%',
      backgroundColor: c.bg,
      borderRadius: 16,
      padding: 24,
      gap: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      color: c.textPrimary,
      textAlign: 'center',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    rowLabel: {
      fontSize: 16,
      color: c.textPrimary,
      fontWeight: '500',
    },
    restartBtn: {
      backgroundColor: '#E67E22',
      paddingVertical: 12,
      borderRadius: 10,
      alignItems: 'center',
    },
    resetBtn: {
      backgroundColor: '#E74C3C',
      paddingVertical: 12,
      borderRadius: 10,
      alignItems: 'center',
    },
    resetLabel: {
      color: '#FFFFFF',
      fontWeight: '700',
      fontSize: 15,
    },
    closeBtn: {
      backgroundColor: c.clearBg,
      paddingVertical: 12,
      borderRadius: 10,
      alignItems: 'center',
    },
    closeLabel: {
      color: c.onAccent,
      fontWeight: '600',
      fontSize: 15,
    },
  });
