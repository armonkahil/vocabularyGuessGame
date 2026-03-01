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
  const letterCount = `${item.word.length} letters`;

  return (
    <View style={[styles.row, isSolved && styles.solvedRow]}>
      <Text style={styles.rowIndex}>{index + 1}.</Text>
      {isSolved ? (
        <Text style={styles.solvedWord}>{item.word}</Text>
      ) : (
        <>
          <Text style={styles.definition} numberOfLines={2}>{item.definition}</Text>
          <Text style={styles.letterCount}>{letterCount}</Text>
        </>
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
      paddingVertical: 7,
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
    definition: {
      flex: 1,
      color: c.textPrimary,
      fontSize: 12,
      lineHeight: 16,
    },
    letterCount: {
      color: c.textPlaceholder,
      fontSize: 11,
      fontWeight: '600',
      minWidth: 52,
      textAlign: 'right',
    },
    solvedWord: {
      flex: 1,
      color: c.correctText,
      fontSize: 14,
      fontWeight: '800',
    },
  });
