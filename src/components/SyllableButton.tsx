import React, { useCallback } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  syllable: string;
  onPress: (syllable: string) => void;
}

export const SyllableButton: React.FC<Props> = ({ syllable, onPress }) => {
  const handlePress = useCallback(() => onPress(syllable), [syllable, onPress]);

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress} activeOpacity={0.7}>
      <Text style={styles.label}>{syllable}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 18,
    paddingVertical: 11,
    borderRadius: 10,
    margin: 5,
    elevation: 3,
    shadowColor: '#2C5282',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
