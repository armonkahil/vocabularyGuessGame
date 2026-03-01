import React, { useCallback, useMemo } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { lightColors } from '../theme/colors';
import type { Colors } from '../theme/colors';

interface Props {
  syllable: string;
  colors?: Colors;
  onPress: (syllable: string) => void;
}

export const SyllableButton: React.FC<Props> = ({ syllable, colors = lightColors, onPress }) => {
  const handlePress = useCallback(() => onPress(syllable), [syllable, onPress]);
  const styles = useMemo(() => makeStyles(colors), [colors]);

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress} activeOpacity={0.7}>
      <Text style={styles.label}>{syllable}</Text>
    </TouchableOpacity>
  );
};

const makeStyles = (c: Colors) =>
  StyleSheet.create({
    button: {
      backgroundColor: c.accent,
      paddingHorizontal: 18,
      paddingVertical: 11,
      borderRadius: 10,
      margin: 5,
      elevation: 3,
      shadowColor: c.accentShadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3,
    },
    label: {
      color: c.onAccent,
      fontSize: 16,
      fontWeight: '700',
      letterSpacing: 0.5,
    },
  });
