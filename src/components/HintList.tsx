import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { TargetWord } from '../types';

interface Props {
  targetWords: TargetWord[];
  solvedWordIds: Set<string>;
}

interface CardProps {
  item: TargetWord;
  index: number;
  isSolved: boolean;
}

const HintCard: React.FC<CardProps> = ({ item, index, isSolved }) => (
  <View style={[styles.card, isSolved && styles.solvedCard]}>
    <View style={styles.cardHeader}>
      <Text style={styles.cardIndex}>{index + 1}.</Text>
      {isSolved ? (
        <Text style={styles.solvedWord}>{item.word}</Text>
      ) : (
        <Text style={styles.blanks}>
          {item.syllables.map(() => '___').join(' · ')}
        </Text>
      )}
    </View>
    <Text style={[styles.definition, isSolved && styles.solvedDefinition]}>
      {item.definition}
    </Text>
    {!isSolved && (
      <Text style={styles.syllableCount}>
        {item.syllables.length} syllable{item.syllables.length !== 1 ? 's' : ''}
      </Text>
    )}
  </View>
);

export const HintList: React.FC<Props> = ({ targetWords, solvedWordIds }) => (
  <FlatList
    data={targetWords}
    keyExtractor={(item) => item.id}
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.list}
    renderItem={({ item, index }) => (
      <HintCard item={item} index={index} isSolved={solvedWordIds.has(item.id)} />
    )}
  />
);

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  card: {
    width: 220,
    backgroundColor: '#EBF4FF',
    borderRadius: 12,
    padding: 14,
    marginRight: 10,
    borderWidth: 1.5,
    borderColor: '#BEE3F8',
    justifyContent: 'space-between',
  },
  solvedCard: {
    backgroundColor: '#C6F6D5',
    borderColor: '#68D391',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 6,
  },
  cardIndex: {
    color: '#718096',
    fontWeight: '700',
    fontSize: 14,
  },
  blanks: {
    color: '#4A90E2',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 2,
    flexShrink: 1,
  },
  solvedWord: {
    color: '#22543D',
    fontSize: 16,
    fontWeight: '800',
    textTransform: 'lowercase',
  },
  definition: {
    color: '#4A5568',
    fontSize: 13,
    lineHeight: 19,
    flexGrow: 1,
  },
  solvedDefinition: {
    color: '#276749',
  },
  syllableCount: {
    marginTop: 8,
    color: '#90CDF4',
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
});
