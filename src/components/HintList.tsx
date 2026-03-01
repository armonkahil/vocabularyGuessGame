import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { TargetWord } from '../types';

interface Props {
  targetWords: TargetWord[];
  solvedWordIds: Set<string>;
}

interface RowProps {
  item: TargetWord;
  index: number;
  isSolved: boolean;
}

const HintRow: React.FC<RowProps> = ({ item, index, isSolved }) => (
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

export const HintList: React.FC<Props> = ({ targetWords, solvedWordIds }) => (
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
      />
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
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
    borderBottomColor: '#E2E8F0',
    gap: 8,
  },
  solvedRow: {
    borderBottomColor: '#9AE6B4',
  },
  rowIndex: {
    width: 22,
    color: '#A0AEC0',
    fontWeight: '700',
    fontSize: 13,
  },
  blanks: {
    flex: 1,
    color: '#4A90E2',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  solvedWord: {
    flex: 1,
    color: '#22543D',
    fontSize: 14,
    fontWeight: '800',
  },
  syllableCount: {
    color: '#A0AEC0',
    fontSize: 11,
    fontWeight: '600',
  },
});
