import React, { useMemo } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { lightColors } from '../theme/colors';
import type { Colors } from '../theme/colors';
import { TargetWord } from '../types';

interface Props {
  targetWords: TargetWord[];
  solvedWordIds: Set<string>;
  colors?: Colors;
}

interface RowProps {
  item: TargetWord;
  index: number;
  isSolved: boolean;
  colors: Colors;
}

const HintRow: React.FC<RowProps> = ({ item, index, isSolved, colors }) => {
  const styles = useMemo(() => makeStyles(colors), [colors]);

  return (
    <View style={[styles.row, isSolved && styles.solvedRow]}>
      <Text style={styles.rowIndex}>{index + 1}.</Text>
      {isSolved ? (
        <Text style={styles.solvedWord}>{item.word}</Text>
      ) : (
        <Text style={styles.blanks}>
          {item.syllables.map(() => '___').join(' · ')}
        </Text>
      )}
      {!isSolved && (
        <Text style={styles.syllableCount}>
          {item.syllables.length}syl
        </Text>
      )}
    </View>
  );
};

export const HintList: React.FC<Props> = ({ targetWords, solvedWordIds, colors = lightColors }) => {
  const styles = useMemo(() => makeStyles(colors), [colors]);

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
    >
      {targetWords.map((item, index) => (
        <HintRow
          key={item.id}
          item={item}
          index={index}
          isSolved={solvedWordIds.has(item.id)}
          colors={colors}
        />
      ))}
    </ScrollView>
  );
};

const makeStyles = (c: Colors) =>
  StyleSheet.create({
    scroll: {
      flex: 1,
    },
    list: {
      paddingHorizontal: 14,
      paddingVertical: 4,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 6,
      borderBottomWidth: 1,
      borderBottomColor: c.border,
      gap: 8,
    },
    solvedRow: {
      borderBottomColor: c.correctBorder,
    },
    rowIndex: {
      width: 22,
      color: c.textPlaceholder,
      fontWeight: '700',
      fontSize: 13,
    },
    blanks: {
      flex: 1,
      color: c.accent,
      fontSize: 13,
      fontWeight: '700',
      letterSpacing: 1.5,
    },
    solvedWord: {
      flex: 1,
      color: c.correctText,
      fontSize: 14,
      fontWeight: '800',
    },
    syllableCount: {
      color: c.textPlaceholder,
      fontSize: 11,
      fontWeight: '600',
    },
  });
