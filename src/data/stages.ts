// cspell:disable — this file contains intentional syllable fragments, not prose
import { Stage } from '../types';

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 1 — Foundations  (mis/un/der prefix family)
//   mistake, misfortune, misunderstand, undertake, understand, unhappy, happy, forward
// ─────────────────────────────────────────────────────────────────────────────
export const stage1: Stage = {
  id: 'stage_1',
  name: 'Stage 1: Foundations',
  syllablePool: ['mis', 'un', 'der', 'stand', 'take', 'hap', 'py', 'for', 'tune', 'ward'],
  targetWords: [
    { id: 's1_w1', word: 'mistake',       syllables: ['mis', 'take'],              definition: 'An error; a wrong action.' },
    { id: 's1_w2', word: 'misfortune',    syllables: ['mis', 'for', 'tune'],        definition: 'Bad luck; an unfortunate event.' },
    { id: 's1_w3', word: 'misunderstand', syllables: ['mis', 'un', 'der', 'stand'], definition: 'To interpret something incorrectly.' },
    { id: 's1_w4', word: 'undertake',     syllables: ['un', 'der', 'take'],         definition: 'To begin or take on a task.' },
    { id: 's1_w5', word: 'understand',    syllables: ['un', 'der', 'stand'],        definition: 'To grasp the meaning of something.' },
    { id: 's1_w6', word: 'unhappy',       syllables: ['un', 'hap', 'py'],           definition: 'Not pleased; sad.' },
    { id: 's1_w7', word: 'happy',         syllables: ['hap', 'py'],                 definition: 'Feeling pleasure or joy.' },
    { id: 's1_w8', word: 'forward',       syllables: ['for', 'ward'],               definition: 'Toward the front.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 2 — Weather & Nature
//   rainbow, sunlight, thunderstorm, snowfall, thundercloud, rainstorm, windfall, lightning
// ─────────────────────────────────────────────────────────────────────────────
export const stage2: Stage = {
  id: 'stage_2',
  name: 'Stage 2: Weather & Nature',
  syllablePool: ['sun', 'rain', 'snow', 'storm', 'cloud', 'thun', 'der', 'light', 'ning', 'wind', 'bow', 'fall'],
  targetWords: [
    { id: 's2_w1', word: 'rainbow',      syllables: ['rain', 'bow'],           definition: 'A colorful arc of light caused by sun and rain.' },
    { id: 's2_w2', word: 'raincloud',    syllables: ['rain', 'cloud'],         definition: 'A cloud that produces rain.' },
    { id: 's2_w3', word: 'thunderstorm', syllables: ['thun', 'der', 'storm'],  definition: 'A storm with lightning, thunder, and heavy rain.' },
    { id: 's2_w4', word: 'snowfall',     syllables: ['snow', 'fall'],          definition: 'Snow falling; total snow deposited in an area.' },
    { id: 's2_w5', word: 'thundercloud', syllables: ['thun', 'der', 'cloud'],  definition: 'A dark cloud that produces thunder and lightning.' },
    { id: 's2_w6', word: 'rainstorm',    syllables: ['rain', 'storm'],         definition: 'A storm with heavy rainfall.' },
    { id: 's2_w7', word: 'windfall',     syllables: ['wind', 'fall'],          definition: 'Unexpected good fortune; fruit blown from a tree.' },
    { id: 's2_w8', word: 'lightning',    syllables: ['light', 'ning'],         definition: 'A bright flash of electricity during a storm.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 3 — Home & Hearth
//   homework, hometown, inside, outside, inland, backyard, household, indoor
// ─────────────────────────────────────────────────────────────────────────────
export const stage3: Stage = {
  id: 'stage_3',
  name: 'Stage 3: Home & Hearth',
  syllablePool: ['home', 'work', 'town', 'side', 'house', 'hold', 'back', 'yard', 'in', 'door', 'out', 'land'],
  targetWords: [
    { id: 's3_w1', word: 'homework',  syllables: ['home', 'work'],         definition: 'School assignments done at home.' },
    { id: 's3_w2', word: 'hometown',  syllables: ['home', 'town'],         definition: 'The town where one was born or grew up.' },
    { id: 's3_w3', word: 'inside',    syllables: ['in', 'side'],           definition: 'The inner part; within a building.' },
    { id: 's3_w4', word: 'outside',   syllables: ['out', 'side'],          definition: 'The outer side; in the open air.' },
    { id: 's3_w5', word: 'inland',    syllables: ['in', 'land'],           definition: 'In a country\'s interior, away from the coast.' },
    { id: 's3_w6', word: 'backyard',  syllables: ['back', 'yard'],         definition: 'The yard or garden behind a house.' },
    { id: 's3_w7', word: 'household', syllables: ['house', 'hold'],        definition: 'A house and all the people living in it.' },
    { id: 's3_w8', word: 'indoor',    syllables: ['in', 'door'],           definition: 'Situated or done inside a building.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 4 — The "Over-" Family
//   overcome, overthink, overwork, overload, overwhelm, feeling, mindset, outcome
// ─────────────────────────────────────────────────────────────────────────────
export const stage4: Stage = {
  id: 'stage_4',
  name: 'Stage 4: The "Over-" Family',
  syllablePool: ['over', 'come', 'think', 'work', 'load', 'whelm', 'feel', 'ing', 'mind', 'set', 'out'],
  targetWords: [
    { id: 's4_w1', word: 'overcome',  syllables: ['over', 'come'],        definition: 'To succeed in dealing with a difficulty.' },
    { id: 's4_w2', word: 'overthink', syllables: ['over', 'think'],       definition: 'To think about something too much.' },
    { id: 's4_w3', word: 'overwork',  syllables: ['over', 'work'],        definition: 'To work too hard; exhausting labor.' },
    { id: 's4_w4', word: 'overload',  syllables: ['over', 'load'],        definition: 'To burden with more than can be handled.' },
    { id: 's4_w5', word: 'overwhelm', syllables: ['over', 'whelm'],       definition: 'To give too much to; to defeat completely.' },
    { id: 's4_w6', word: 'feeling',   syllables: ['feel', 'ing'],         definition: 'An emotional state or reaction.' },
    { id: 's4_w7', word: 'mindset',   syllables: ['mind', 'set'],         definition: 'An established way of thinking.' },
    { id: 's4_w8', word: 'outcome',   syllables: ['out', 'come'],         definition: 'A result or consequence.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 5 — Feelings & Emotions
//   fearful, joyous, anger, peaceful, lonely, happy, sadly, joyful
// ─────────────────────────────────────────────────────────────────────────────
export const stage5: Stage = {
  id: 'stage_5',
  name: 'Stage 5: Feelings & Emotions',
  syllablePool: ['sad', 'fear', 'ful', 'joy', 'ous', 'an', 'ger', 'peace', 'lone', 'ly', 'hap', 'py'],
  targetWords: [
    { id: 's5_w1', word: 'fearful',  syllables: ['fear', 'ful'],      definition: 'Feeling afraid; anxious.' },
    { id: 's5_w2', word: 'joyous',   syllables: ['joy', 'ous'],       definition: 'Full of great happiness.' },
    { id: 's5_w3', word: 'anger',    syllables: ['an', 'ger'],        definition: 'A strong feeling of hostility or displeasure.' },
    { id: 's5_w4', word: 'peaceful', syllables: ['peace', 'ful'],     definition: 'Calm and free from disturbance.' },
    { id: 's5_w5', word: 'lonely',   syllables: ['lone', 'ly'],       definition: 'Sad from having no company.' },
    { id: 's5_w6', word: 'joyfully', syllables: ['joy', 'ful', 'ly'], definition: 'In a manner full of great happiness.' },
    { id: 's5_w7', word: 'sadly',    syllables: ['sad', 'ly'],        definition: 'In a way showing sorrow; unfortunately.' },
    { id: 's5_w8', word: 'joyful',   syllables: ['joy', 'ful'],       definition: 'Feeling or expressing great happiness.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 6 — Food & Kitchen
//   butter, buttercup, cupcake, meatball, cookie, peanut, breadcrumb, cookout
// ─────────────────────────────────────────────────────────────────────────────
export const stage6: Stage = {
  id: 'stage_6',
  name: 'Stage 6: Food & Kitchen',
  syllablePool: ['bread', 'but', 'ter', 'cup', 'cake', 'sweet', 'meat', 'ball', 'cook', 'ie', 'pea', 'nut', 'crumb', 'out'],
  targetWords: [
    { id: 's6_w1', word: 'butter',     syllables: ['but', 'ter'],          definition: 'A yellow fat made from cream; used in cooking.' },
    { id: 's6_w2', word: 'buttercup',  syllables: ['but', 'ter', 'cup'],   definition: 'A wild plant with bright yellow cup-shaped flowers.' },
    { id: 's6_w3', word: 'cupcake',    syllables: ['cup', 'cake'],         definition: 'A small individual cake, often with icing.' },
    { id: 's6_w4', word: 'meatball',   syllables: ['meat', 'ball'],        definition: 'A ball of minced meat, usually cooked in sauce.' },
    { id: 's6_w5', word: 'cookie',     syllables: ['cook', 'ie'],          definition: 'A small flat sweet biscuit.' },
    { id: 's6_w6', word: 'peanut',     syllables: ['pea', 'nut'],          definition: 'A legume seed widely eaten as a snack.' },
    { id: 's6_w7', word: 'breadcrumb', syllables: ['bread', 'crumb'],      definition: 'A tiny fragment of bread used in cooking.' },
    { id: 's6_w8', word: 'cookout',    syllables: ['cook', 'out'],         definition: 'An outdoor gathering where food is grilled.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 7 — Adventure & Discovery
//   journey, explore, adventure, discover, venture, return, explorer, rediscover
// ─────────────────────────────────────────────────────────────────────────────
export const stage7: Stage = {
  id: 'stage_7',
  name: 'Stage 7: Adventure & Discovery',
  syllablePool: ['jour', 'ney', 'ex', 'plore', 'ad', 'ven', 'ture', 'dis', 'cov', 'er', 're', 'turn'],
  targetWords: [
    { id: 's7_w1', word: 'journey',     syllables: ['jour', 'ney'],              definition: 'A long trip or expedition.' },
    { id: 's7_w2', word: 'explore',     syllables: ['ex', 'plore'],              definition: 'To travel through an unknown area to learn about it.' },
    { id: 's7_w3', word: 'adventure',   syllables: ['ad', 'ven', 'ture'],        definition: 'An exciting and daring experience.' },
    { id: 's7_w4', word: 'discover',    syllables: ['dis', 'cov', 'er'],         definition: 'To find something for the first time.' },
    { id: 's7_w5', word: 'venture',     syllables: ['ven', 'ture'],              definition: 'A risky undertaking; to dare to do something.' },
    { id: 's7_w6', word: 'return',      syllables: ['re', 'turn'],               definition: 'To go or come back to a place.' },
    { id: 's7_w7', word: 'recover',     syllables: ['re', 'cov', 'er'],          definition: 'To return to a normal state after difficulty.' },
    { id: 's7_w8', word: 'rediscover',  syllables: ['re', 'dis', 'cov', 'er'],   definition: 'To discover something again.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 8 — Time of Day
//   daytime, nighttime, midday, midnight, timeless, morning, afternoon, forenoon
// ─────────────────────────────────────────────────────────────────────────────
export const stage8: Stage = {
  id: 'stage_8',
  name: 'Stage 8: Time of Day',
  syllablePool: ['day', 'night', 'morn', 'ing', 'noon', 'mid', 'time', 'less', 'fore', 'af', 'ter'],
  targetWords: [
    { id: 's8_w1', word: 'daytime',   syllables: ['day', 'time'],          definition: 'The light period between sunrise and sunset.' },
    { id: 's8_w2', word: 'nighttime', syllables: ['night', 'time'],        definition: 'The dark period between sunset and sunrise.' },
    { id: 's8_w3', word: 'midday',    syllables: ['mid', 'day'],           definition: 'Noon; the middle of the day.' },
    { id: 's8_w4', word: 'midnight',  syllables: ['mid', 'night'],         definition: 'Twelve o\'clock at night.' },
    { id: 's8_w5', word: 'timeless',  syllables: ['time', 'less'],         definition: 'Not affected by the passage of time.' },
    { id: 's8_w6', word: 'morning',   syllables: ['morn', 'ing'],          definition: 'The time from sunrise to noon.' },
    { id: 's8_w7', word: 'afternoon', syllables: ['af', 'ter', 'noon'],    definition: 'The time from noon until evening.' },
    { id: 's8_w8', word: 'forenoon',  syllables: ['fore', 'noon'],         definition: 'The morning hours before noon.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 9 — The "-ful / -less" Pair
//   useful, useless, careful, careless, helpful, helpless, thoughtful, fearless
// ─────────────────────────────────────────────────────────────────────────────
export const stage9: Stage = {
  id: 'stage_9',
  name: 'Stage 9: The "-ful / -less" Pair',
  syllablePool: ['use', 'ful', 'less', 'care', 'help', 'thought', 'fear', 'pain', 'harm', 'worth'],
  targetWords: [
    { id: 's9_w1', word: 'useful',    syllables: ['use', 'ful'],       definition: 'Able to be used for a practical purpose.' },
    { id: 's9_w2', word: 'useless',   syllables: ['use', 'less'],      definition: 'Not achieving its intended purpose; worthless.' },
    { id: 's9_w3', word: 'careful',   syllables: ['care', 'ful'],      definition: 'Avoiding potential danger or harm; attentive.' },
    { id: 's9_w4', word: 'careless',  syllables: ['care', 'less'],     definition: 'Not giving enough attention to avoid harm.' },
    { id: 's9_w5', word: 'helpful',   syllables: ['help', 'ful'],      definition: 'Ready to give assistance; serving a useful function.' },
    { id: 's9_w6', word: 'helpless',  syllables: ['help', 'less'],     definition: 'Unable to act without assistance; powerless.' },
    { id: 's9_w7', word: 'thoughtful',syllables: ['thought', 'ful'],   definition: 'Considerate of others; deeply thinking.' },
    { id: 's9_w8', word: 'fearless',  syllables: ['fear', 'less'],     definition: 'Bold and courageous; not afraid.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 10 — The "-ness" Suffix
//   kindness, darkness, brightness, sadness, gladness, madness, softness, wildness
// ─────────────────────────────────────────────────────────────────────────────
export const stage10: Stage = {
  id: 'stage_10',
  name: 'Stage 10: The "-ness" Suffix',
  syllablePool: ['kind', 'ness', 'dark', 'bright', 'sad', 'glad', 'mad', 'soft', 'wild', 'lone'],
  targetWords: [
    { id: 's10_w1', word: 'kindness',   syllables: ['kind', 'ness'],   definition: 'The quality of being friendly and considerate.' },
    { id: 's10_w2', word: 'darkness',   syllables: ['dark', 'ness'],   definition: 'The absence of light.' },
    { id: 's10_w3', word: 'brightness', syllables: ['bright', 'ness'], definition: 'The quality of being bright or vivid.' },
    { id: 's10_w4', word: 'sadness',    syllables: ['sad', 'ness'],    definition: 'A feeling of sorrow or unhappiness.' },
    { id: 's10_w5', word: 'gladness',   syllables: ['glad', 'ness'],   definition: 'A feeling of happiness or delight.' },
    { id: 's10_w6', word: 'madness',    syllables: ['mad', 'ness'],    definition: 'Mental illness; extremely foolish behavior.' },
    { id: 's10_w7', word: 'softness',   syllables: ['soft', 'ness'],   definition: 'The quality of being soft or gentle.' },
    { id: 's10_w8', word: 'wildness',   syllables: ['wild', 'ness'],   definition: 'The state of being wild or untamed.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 11 — Body Part Compounds
//   handshake, footprint, eyesight, armchair, lipstick, thumbnail, handprint, footwork
// ─────────────────────────────────────────────────────────────────────────────
export const stage11: Stage = {
  id: 'stage_11',
  name: 'Stage 11: Body Part Compounds',
  syllablePool: ['hand', 'shake', 'foot', 'print', 'eye', 'sight', 'arm', 'chair', 'lip', 'stick', 'thumb', 'nail', 'work'],
  targetWords: [
    { id: 's11_w1', word: 'handshake', syllables: ['hand', 'shake'],  definition: 'A greeting where two people clasp hands.' },
    { id: 's11_w2', word: 'footprint', syllables: ['foot', 'print'],  definition: 'A mark left by a foot on a surface.' },
    { id: 's11_w3', word: 'eyesight',  syllables: ['eye', 'sight'],   definition: 'The ability to see; vision.' },
    { id: 's11_w4', word: 'armchair',  syllables: ['arm', 'chair'],   definition: 'A comfortable chair with armrests.' },
    { id: 's11_w5', word: 'lipstick',  syllables: ['lip', 'stick'],   definition: 'A colored cosmetic applied to the lips.' },
    { id: 's11_w6', word: 'thumbnail', syllables: ['thumb', 'nail'],  definition: 'The nail on the thumb; a small image preview.' },
    { id: 's11_w7', word: 'handprint', syllables: ['hand', 'print'],  definition: 'A mark left by a hand.' },
    { id: 's11_w8', word: 'footwork',  syllables: ['foot', 'work'],   definition: 'Use of the feet; skillful maneuvering.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 12 — School Life
//   classroom, notebook, reading, teacher, schoolwork, classwork, schoolyard, schoolroom
// ─────────────────────────────────────────────────────────────────────────────
export const stage12: Stage = {
  id: 'stage_12',
  name: 'Stage 12: School Life',
  syllablePool: ['class', 'room', 'note', 'book', 'read', 'ing', 'teach', 'er', 'school', 'yard', 'work'],
  targetWords: [
    { id: 's12_w1', word: 'classroom',  syllables: ['class', 'room'],   definition: 'A room where students are taught.' },
    { id: 's12_w2', word: 'notebook',   syllables: ['note', 'book'],    definition: 'A small book for writing notes.' },
    { id: 's12_w3', word: 'reading',    syllables: ['read', 'ing'],     definition: 'The skill or action of reading text.' },
    { id: 's12_w4', word: 'teacher',    syllables: ['teach', 'er'],     definition: 'A person who teaches, especially in a school.' },
    { id: 's12_w5', word: 'schoolwork', syllables: ['school', 'work'],  definition: 'Academic assignments done in school.' },
    { id: 's12_w6', word: 'classwork',  syllables: ['class', 'work'],   definition: 'Work done in class rather than at home.' },
    { id: 's12_w7', word: 'schoolyard', syllables: ['school', 'yard'],  definition: 'The outdoor play area of a school.' },
    { id: 's12_w8', word: 'schoolroom', syllables: ['school', 'room'],  definition: 'A room used for lessons; a classroom.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 13 — Art & Color
//   paintbrush, sunshine, golden, color, colorful, brighten, darken, painter
// ─────────────────────────────────────────────────────────────────────────────
export const stage13: Stage = {
  id: 'stage_13',
  name: 'Stage 13: Art & Color',
  syllablePool: ['paint', 'brush', 'sun', 'gold', 'en', 'bright', 'col', 'or', 'dark', 'shine', 'er', 'ful'],
  targetWords: [
    { id: 's13_w1', word: 'paintbrush', syllables: ['paint', 'brush'],        definition: 'A brush used for applying paint.' },
    { id: 's13_w2', word: 'sunshine',   syllables: ['sun', 'shine'],          definition: 'Direct sunlight; cheerfulness.' },
    { id: 's13_w3', word: 'golden',     syllables: ['gold', 'en'],            definition: 'Colored like gold; precious or excellent.' },
    { id: 's13_w4', word: 'color',      syllables: ['col', 'or'],             definition: 'A visual property determined by reflected light; a hue.' },
    { id: 's13_w5', word: 'colorful',   syllables: ['col', 'or', 'ful'],      definition: 'Having many vivid colors; lively.' },
    { id: 's13_w6', word: 'brighten',   syllables: ['bright', 'en'],          definition: 'To make or become brighter or more cheerful.' },
    { id: 's13_w7', word: 'darken',     syllables: ['dark', 'en'],            definition: 'To make or become darker or gloomier.' },
    { id: 's13_w8', word: 'painter',    syllables: ['paint', 'er'],           definition: 'An artist who paints; one who applies paint.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 14 — Music & Sound
//   songwriter, drumbeat, soundtrack, playback, playlist, downbeat, backtrack, downplay
// ─────────────────────────────────────────────────────────────────────────────
export const stage14: Stage = {
  id: 'stage_14',
  name: 'Stage 14: Music & Sound',
  syllablePool: ['song', 'writ', 'er', 'beat', 'drum', 'sound', 'track', 'back', 'play', 'list', 'down'],
  targetWords: [
    { id: 's14_w1', word: 'songwriter', syllables: ['song', 'writ', 'er'], definition: 'A person who writes songs.' },
    { id: 's14_w2', word: 'drumbeat',   syllables: ['drum', 'beat'],        definition: 'A stroke on a drum; a rhythmic pattern.' },
    { id: 's14_w3', word: 'soundtrack', syllables: ['sound', 'track'],      definition: 'The recorded music for a film or show.' },
    { id: 's14_w4', word: 'playback',   syllables: ['play', 'back'],        definition: 'The reproduction of previously recorded audio or video.' },
    { id: 's14_w5', word: 'playlist',   syllables: ['play', 'list'],        definition: 'A list of songs played in sequence.' },
    { id: 's14_w6', word: 'downbeat',   syllables: ['down', 'beat'],        definition: 'The first beat of a bar; a pessimistic mood.' },
    { id: 's14_w7', word: 'tracklist',  syllables: ['track', 'list'],       definition: 'A list of tracks on a music album.' },
    { id: 's14_w8', word: 'downplay',   syllables: ['down', 'play'],        definition: 'To make something seem less important than it is.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 15 — Sports & Competition
//   teamwork, player, scoreboard, winner, ballgame, gameplay, scorer, groundwork
// ─────────────────────────────────────────────────────────────────────────────
export const stage15: Stage = {
  id: 'stage_15',
  name: 'Stage 15: Sports & Competition',
  syllablePool: ['team', 'work', 'play', 'er', 'score', 'board', 'win', 'ner', 'ball', 'game', 'match', 'ground'],
  targetWords: [
    { id: 's15_w1', word: 'teamwork',   syllables: ['team', 'work'],   definition: 'Effective combined effort by a group.' },
    { id: 's15_w2', word: 'player',     syllables: ['play', 'er'],     definition: 'A person taking part in a sport or game.' },
    { id: 's15_w3', word: 'scoreboard', syllables: ['score', 'board'], definition: 'A board displaying the score of a game.' },
    { id: 's15_w4', word: 'winner',     syllables: ['win', 'ner'],     definition: 'A person who wins a contest.' },
    { id: 's15_w5', word: 'ballgame',   syllables: ['ball', 'game'],   definition: 'A game played with a ball.' },
    { id: 's15_w6', word: 'gameplay',   syllables: ['game', 'play'],   definition: 'The way in which a game is played.' },
    { id: 's15_w7', word: 'matchplay',  syllables: ['match', 'play'],  definition: 'A format where each hole is won or lost individually.' },
    { id: 's15_w8', word: 'groundwork', syllables: ['ground', 'work'], definition: 'Preparation; foundational work.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 16 — Wildlife
//   wildlife, firefly, birdsong, waterfall, nightfall, foxtail, songbird, wildfire
// ─────────────────────────────────────────────────────────────────────────────
export const stage16: Stage = {
  id: 'stage_16',
  name: 'Stage 16: Wildlife',
  syllablePool: ['wild', 'life', 'fire', 'fly', 'bird', 'song', 'water', 'fall', 'night', 'owl', 'fox', 'tail'],
  targetWords: [
    { id: 's16_w1', word: 'wildlife',  syllables: ['wild', 'life'],    definition: 'Wild animals and plants in their natural habitat.' },
    { id: 's16_w2', word: 'firefly',   syllables: ['fire', 'fly'],     definition: 'A beetle that produces a glowing light.' },
    { id: 's16_w3', word: 'birdsong',  syllables: ['bird', 'song'],    definition: 'The musical sound made by birds.' },
    { id: 's16_w4', word: 'waterfall', syllables: ['water', 'fall'],   definition: 'A cascade of water falling from a height.' },
    { id: 's16_w5', word: 'nightfall', syllables: ['night', 'fall'],   definition: 'The onset of darkness at evening.' },
    { id: 's16_w6', word: 'foxtail',   syllables: ['fox', 'tail'],     definition: 'The tail of a fox; a grass with tail-like seed heads.' },
    { id: 's16_w7', word: 'songbird',  syllables: ['song', 'bird'],    definition: 'A bird with a musical song.' },
    { id: 's16_w8', word: 'wildfire',  syllables: ['wild', 'fire'],    definition: 'A large fire that spreads quickly across land.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 17 — Career & Work
//   worker, workplace, workforce, workday, freelance, overtime, overload, lifework
// ─────────────────────────────────────────────────────────────────────────────
export const stage17: Stage = {
  id: 'stage_17',
  name: 'Stage 17: Career & Work',
  syllablePool: ['work', 'er', 'place', 'force', 'free', 'lance', 'over', 'time', 'day', 'load', 'life', 'out'],
  targetWords: [
    { id: 's17_w1', word: 'worker',    syllables: ['work', 'er'],         definition: 'A person employed in a job.' },
    { id: 's17_w2', word: 'workplace', syllables: ['work', 'place'],      definition: 'A place where people work.' },
    { id: 's17_w3', word: 'workforce', syllables: ['work', 'force'],      definition: 'All people available for work in an area.' },
    { id: 's17_w4', word: 'workday',   syllables: ['work', 'day'],        definition: 'A normal day of work.' },
    { id: 's17_w5', word: 'freelance', syllables: ['free', 'lance'],      definition: 'Self-employed; hired per project.' },
    { id: 's17_w6', word: 'overtime',  syllables: ['over', 'time'],       definition: 'Extra time worked beyond normal hours.' },
    { id: 's17_w7', word: 'workload',  syllables: ['work', 'load'],       definition: 'The amount of work assigned to a person.' },
    { id: 's17_w8', word: 'lifework',  syllables: ['life', 'work'],       definition: 'The main work or achievement of one\'s life.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 18 — Technology
//   software, hardware, network, website, database, firewall, keyword, sitework
// ─────────────────────────────────────────────────────────────────────────────
export const stage18: Stage = {
  id: 'stage_18',
  name: 'Stage 18: Technology',
  syllablePool: ['soft', 'ware', 'hard', 'net', 'work', 'web', 'site', 'data', 'base', 'fire', 'wall', 'key', 'word'],
  targetWords: [
    { id: 's18_w1', word: 'software', syllables: ['soft', 'ware'],  definition: 'Programs and data used by a computer.' },
    { id: 's18_w2', word: 'hardware', syllables: ['hard', 'ware'],  definition: 'Physical components of a computer.' },
    { id: 's18_w3', word: 'network',  syllables: ['net', 'work'],   definition: 'A system of interconnected computers or things.' },
    { id: 's18_w4', word: 'website',  syllables: ['web', 'site'],   definition: 'A set of web pages at one internet address.' },
    { id: 's18_w5', word: 'database', syllables: ['data', 'base'],  definition: 'An organized collection of data in a computer.' },
    { id: 's18_w6', word: 'firewall', syllables: ['fire', 'wall'],  definition: 'A security system preventing unauthorized network access.' },
    { id: 's18_w7', word: 'keyword',  syllables: ['key', 'word'],   definition: 'A significant word used to search for information.' },
    { id: 's18_w8', word: 'sitework', syllables: ['site', 'work'],  definition: 'Construction work performed at a building site.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 19 — Travel & Transport
//   airport, seaport, highway, railway, overpass, subway, airship, crossroad
// ─────────────────────────────────────────────────────────────────────────────
export const stage19: Stage = {
  id: 'stage_19',
  name: 'Stage 19: Travel & Transport',
  syllablePool: ['air', 'port', 'sea', 'ship', 'high', 'way', 'rail', 'sub', 'cross', 'over', 'pass', 'road'],
  targetWords: [
    { id: 's19_w1', word: 'airport',   syllables: ['air', 'port'],    definition: 'A facility where aircraft take off and land.' },
    { id: 's19_w2', word: 'seaport',   syllables: ['sea', 'port'],    definition: 'A harbor town for seagoing ships.' },
    { id: 's19_w3', word: 'highway',   syllables: ['high', 'way'],    definition: 'A main road connecting major towns.' },
    { id: 's19_w4', word: 'railway',   syllables: ['rail', 'way'],    definition: 'A track on which trains run.' },
    { id: 's19_w5', word: 'overpass',  syllables: ['over', 'pass'],   definition: 'A bridge where one road crosses over another.' },
    { id: 's19_w6', word: 'subway',    syllables: ['sub', 'way'],     definition: 'An underground urban railway.' },
    { id: 's19_w7', word: 'airship',   syllables: ['air', 'ship'],    definition: 'A gas-filled aircraft driven by engines; a dirigible.' },
    { id: 's19_w8', word: 'crossroad', syllables: ['cross', 'road'],  definition: 'An intersection of roads; a crucial decision point.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 20 — Ocean & Coasts
//   seashore, surfboard, seawater, waterfall, seabed, seaweed, landfall, breakwater
// ─────────────────────────────────────────────────────────────────────────────
export const stage20: Stage = {
  id: 'stage_20',
  name: 'Stage 20: Ocean & Coasts',
  syllablePool: ['sea', 'shore', 'surf', 'board', 'tide', 'land', 'water', 'fall', 'weed', 'break', 'bed', 'wave'],
  targetWords: [
    { id: 's20_w1', word: 'seashore',   syllables: ['sea', 'shore'],    definition: 'The land along the edge of the sea.' },
    { id: 's20_w2', word: 'surfboard',  syllables: ['surf', 'board'],   definition: 'A board used to ride ocean waves.' },
    { id: 's20_w3', word: 'seawater',   syllables: ['sea', 'water'],    definition: 'Salt water from the sea.' },
    { id: 's20_w4', word: 'tideland',   syllables: ['tide', 'land'],    definition: 'Coastal land covered at high tide, exposed at low tide.' },
    { id: 's20_w5', word: 'seabed',     syllables: ['sea', 'bed'],      definition: 'The floor of the sea.' },
    { id: 's20_w6', word: 'seaweed',    syllables: ['sea', 'weed'],     definition: 'Algae growing in or near the sea.' },
    { id: 's20_w7', word: 'landfall',   syllables: ['land', 'fall'],    definition: 'First sight of land after a sea voyage; a storm reaching land.' },
    { id: 's20_w8', word: 'breakwater', syllables: ['break', 'water'],  definition: 'A barrier protecting a harbor from waves.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 21 — Light & Fire
//   firelight, sunburn, sunbeam, flashlight, sunray, sunlight, fireglow, burnout
// ─────────────────────────────────────────────────────────────────────────────
export const stage21: Stage = {
  id: 'stage_21',
  name: 'Stage 21: Light & Fire',
  syllablePool: ['fire', 'light', 'sun', 'burn', 'glow', 'flash', 'shine', 'beam', 'ray', 'bright', 'warm', 'out'],
  targetWords: [
    { id: 's21_w1', word: 'firelight', syllables: ['fire', 'light'],  definition: 'The light from a fire.' },
    { id: 's21_w2', word: 'sunburn',   syllables: ['sun', 'burn'],    definition: 'Skin inflammation from overexposure to the sun.' },
    { id: 's21_w3', word: 'sunbeam',   syllables: ['sun', 'beam'],    definition: 'A ray of sunlight.' },
    { id: 's21_w4', word: 'flashlight',syllables: ['flash', 'light'], definition: 'A portable battery-powered electric torch.' },
    { id: 's21_w5', word: 'sunray',    syllables: ['sun', 'ray'],     definition: 'A single beam of sunlight.' },
    { id: 's21_w6', word: 'sunlight',  syllables: ['sun', 'light'],   definition: 'Light from the sun.' },
    { id: 's21_w7', word: 'fireglow',  syllables: ['fire', 'glow'],   definition: 'The warm glow cast by a fire.' },
    { id: 's21_w8', word: 'burnout',   syllables: ['burn', 'out'],    definition: 'Exhaustion from overwork; failure of a component.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 22 — Garden & Plants
//   flower, garden, seedling, greenhouse, sunflower, flowerbed, seedbed, blooming
// ─────────────────────────────────────────────────────────────────────────────
export const stage22: Stage = {
  id: 'stage_22',
  name: 'Stage 22: Garden & Plants',
  syllablePool: ['flow', 'er', 'gar', 'den', 'seed', 'ling', 'green', 'house', 'bloom', 'sun', 'root', 'weed', 'bed', 'ing'],
  targetWords: [
    { id: 's22_w1', word: 'flower',     syllables: ['flow', 'er'],           definition: 'The blossom of a plant.' },
    { id: 's22_w2', word: 'garden',     syllables: ['gar', 'den'],           definition: 'A plot of land for growing plants.' },
    { id: 's22_w3', word: 'seedling',   syllables: ['seed', 'ling'],         definition: 'A young plant grown from seed.' },
    { id: 's22_w4', word: 'greenhouse', syllables: ['green', 'house'],       definition: 'A glass structure for growing plants in controlled conditions.' },
    { id: 's22_w5', word: 'sunflower',  syllables: ['sun', 'flow', 'er'],    definition: 'A tall plant with large yellow flowers.' },
    { id: 's22_w6', word: 'flowerbed',  syllables: ['flow', 'er', 'bed'],    definition: 'A garden bed where flowers are grown.' },
    { id: 's22_w7', word: 'seedbed',    syllables: ['seed', 'bed'],          definition: 'A bed of earth prepared for planting seeds.' },
    { id: 's22_w8', word: 'blooming',   syllables: ['bloom', 'ing'],         definition: 'Producing flowers; thriving.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 23 — Seasons & Time Cycles
//   springtime, summertime, wintertime, springtide, wintertide, season, longtime, seaside
// ─────────────────────────────────────────────────────────────────────────────
export const stage23: Stage = {
  id: 'stage_23',
  name: 'Stage 23: Seasons & Time Cycles',
  syllablePool: ['spring', 'sum', 'mer', 'win', 'ter', 'time', 'fall', 'sea', 'son', 'tide', 'long', 'side'],
  targetWords: [
    { id: 's23_w1', word: 'springtime', syllables: ['spring', 'time'],        definition: 'The season of spring.' },
    { id: 's23_w2', word: 'summertime', syllables: ['sum', 'mer', 'time'],    definition: 'The season of summer.' },
    { id: 's23_w3', word: 'wintertime', syllables: ['win', 'ter', 'time'],    definition: 'The season of winter.' },
    { id: 's23_w4', word: 'springtide', syllables: ['spring', 'tide'],        definition: 'A spring tide; poetically, the season of spring.' },
    { id: 's23_w5', word: 'wintertide', syllables: ['win', 'ter', 'tide'],    definition: 'A literary term for the winter season.' },
    { id: 's23_w6', word: 'season',     syllables: ['sea', 'son'],            definition: 'One of the four divisions of the year.' },
    { id: 's23_w7', word: 'longtime',   syllables: ['long', 'time'],          definition: 'Having existed for a long time.' },
    { id: 's23_w8', word: 'seaside',    syllables: ['sea', 'side'],           definition: 'A place beside the sea.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 24 — City & Urban Life
//   downtown, uptown, skyline, sidewalk, crosswalk, crossroad, landmark, roadside
// ─────────────────────────────────────────────────────────────────────────────
export const stage24: Stage = {
  id: 'stage_24',
  name: 'Stage 24: City & Urban Life',
  syllablePool: ['down', 'town', 'up', 'sky', 'line', 'street', 'side', 'walk', 'cross', 'road', 'land', 'mark'],
  targetWords: [
    { id: 's24_w1', word: 'downtown',  syllables: ['down', 'town'],   definition: 'The central business area of a city.' },
    { id: 's24_w2', word: 'uptown',    syllables: ['up', 'town'],     definition: 'The residential area away from a city center.' },
    { id: 's24_w3', word: 'skyline',   syllables: ['sky', 'line'],    definition: 'The outline of buildings against the sky.' },
    { id: 's24_w4', word: 'sidewalk',  syllables: ['side', 'walk'],   definition: 'A paved path for pedestrians beside a road.' },
    { id: 's24_w5', word: 'crosswalk', syllables: ['cross', 'walk'],  definition: 'A marked pedestrian crossing.' },
    { id: 's24_w6', word: 'upland',    syllables: ['up', 'land'],     definition: 'High or hilly land; elevated terrain.' },
    { id: 's24_w7', word: 'landmark',  syllables: ['land', 'mark'],   definition: 'A recognizable feature of the landscape.' },
    { id: 's24_w8', word: 'roadside',  syllables: ['road', 'side'],   definition: 'The strip of land beside a road.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 25 — Health & Wellness
//   healthcare, wellness, fitness, mindful, lifestyle, heartbeat, mindfulness, workout
// ─────────────────────────────────────────────────────────────────────────────
export const stage25: Stage = {
  id: 'stage_25',
  name: 'Stage 25: Health & Wellness',
  syllablePool: ['health', 'care', 'well', 'ness', 'fit', 'mind', 'ful', 'life', 'style', 'heart', 'beat', 'work', 'out'],
  targetWords: [
    { id: 's25_w1', word: 'healthcare',   syllables: ['health', 'care'],         definition: 'Organized medical care for a community.' },
    { id: 's25_w2', word: 'wellness',     syllables: ['well', 'ness'],           definition: 'The state of good health, actively maintained.' },
    { id: 's25_w3', word: 'fitness',      syllables: ['fit', 'ness'],            definition: 'The state of being physically and mentally healthy.' },
    { id: 's25_w4', word: 'mindful',      syllables: ['mind', 'ful'],            definition: 'Conscious and aware; attentive to the present.' },
    { id: 's25_w5', word: 'lifestyle',    syllables: ['life', 'style'],          definition: 'The way a person or group lives.' },
    { id: 's25_w6', word: 'heartbeat',    syllables: ['heart', 'beat'],          definition: 'A pulsation of the heart.' },
    { id: 's25_w7', word: 'mindfulness',  syllables: ['mind', 'ful', 'ness'],    definition: 'Calm, focused awareness of the present moment.' },
    { id: 's25_w8', word: 'workout',      syllables: ['work', 'out'],            definition: 'A session of vigorous physical exercise.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 26 — Space & Stars
//   starlight, moonshine, sunrise, sunset, earthrise, spacewalk, starshine, moonrise
// ─────────────────────────────────────────────────────────────────────────────
export const stage26: Stage = {
  id: 'stage_26',
  name: 'Stage 26: Space & Stars',
  syllablePool: ['star', 'light', 'moon', 'shine', 'sun', 'rise', 'set', 'sky', 'earth', 'space', 'fire', 'walk'],
  targetWords: [
    { id: 's26_w1', word: 'starlight',  syllables: ['star', 'light'],   definition: 'Light from the stars.' },
    { id: 's26_w2', word: 'moonshine',  syllables: ['moon', 'shine'],   definition: 'Moonlight; foolish talk; illegal liquor.' },
    { id: 's26_w3', word: 'sunrise',    syllables: ['sun', 'rise'],     definition: 'The time the sun appears above the horizon in the morning.' },
    { id: 's26_w4', word: 'sunset',     syllables: ['sun', 'set'],      definition: 'The time the sun disappears below the horizon in the evening.' },
    { id: 's26_w5', word: 'earthrise',  syllables: ['earth', 'rise'],   definition: 'The Earth rising above the lunar horizon, seen from the moon.' },
    { id: 's26_w6', word: 'spacewalk',  syllables: ['space', 'walk'],   definition: 'An astronaut\'s activity outside a spacecraft.' },
    { id: 's26_w7', word: 'starshine',  syllables: ['star', 'shine'],   definition: 'The light emitted by stars.' },
    { id: 's26_w8', word: 'moonrise',   syllables: ['moon', 'rise'],    definition: 'The time the moon appears above the horizon.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 27 — Power & Energy
//   powerful, powerless, powerhouse, windmill, firepower, willpower, manpower, overflow
// ─────────────────────────────────────────────────────────────────────────────
export const stage27: Stage = {
  id: 'stage_27',
  name: 'Stage 27: Power & Energy',
  syllablePool: ['power', 'ful', 'less', 'house', 'wind', 'mill', 'fire', 'work', 'over', 'flow', 'man', 'will'],
  targetWords: [
    { id: 's27_w1', word: 'powerful',   syllables: ['power', 'ful'],    definition: 'Having great strength or influence.' },
    { id: 's27_w2', word: 'powerless',  syllables: ['power', 'less'],   definition: 'Without power or authority; unable to act.' },
    { id: 's27_w3', word: 'powerhouse', syllables: ['power', 'house'],  definition: 'A source of great energy or power.' },
    { id: 's27_w4', word: 'windmill',   syllables: ['wind', 'mill'],    definition: 'A structure with wind-driven blades to grind grain or generate power.' },
    { id: 's27_w5', word: 'firepower',  syllables: ['fire', 'power'],   definition: 'The destructive capacity of weapons.' },
    { id: 's27_w6', word: 'willpower',  syllables: ['will', 'power'],   definition: 'Self-control; strength of determination.' },
    { id: 's27_w7', word: 'manpower',   syllables: ['man', 'power'],    definition: 'The human resources available for work.' },
    { id: 's27_w8', word: 'overflow',   syllables: ['over', 'flow'],    definition: 'To flow over the brim; an excess amount.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 28 — Building & Construction
//   building, outdoor, window, floorboard, stonework, stonewall, buildout, wallboard
// ─────────────────────────────────────────────────────────────────────────────
export const stage28: Stage = {
  id: 'stage_28',
  name: 'Stage 28: Building & Construction',
  syllablePool: ['build', 'ing', 'out', 'door', 'win', 'dow', 'floor', 'board', 'ground', 'stone', 'wall', 'work'],
  targetWords: [
    { id: 's28_w1', word: 'building',   syllables: ['build', 'ing'],      definition: 'A structure with a roof and walls.' },
    { id: 's28_w2', word: 'outdoor',    syllables: ['out', 'door'],       definition: 'Done or situated outside.' },
    { id: 's28_w3', word: 'window',     syllables: ['win', 'dow'],        definition: 'A glass-fitted opening in a wall to admit light.' },
    { id: 's28_w4', word: 'floorboard', syllables: ['floor', 'board'],    definition: 'A long plank forming part of a wooden floor.' },
    { id: 's28_w5', word: 'stonework',  syllables: ['stone', 'work'],     definition: 'Parts of a structure made from stone; masonry.' },
    { id: 's28_w6', word: 'stonewall',  syllables: ['stone', 'wall'],     definition: 'A wall of stone; to obstruct by being uncommunicative.' },
    { id: 's28_w7', word: 'buildout',   syllables: ['build', 'out'],      definition: 'The expansion or fitting out of a space.' },
    { id: 's28_w8', word: 'wallboard',  syllables: ['wall', 'board'],     definition: 'Board used to make or cover walls, such as drywall.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 29 — Mind & Thought
//   thinking, outwit, foresight, deepen, thoughtful, forethought, sharpen, outthink
// ─────────────────────────────────────────────────────────────────────────────
export const stage29: Stage = {
  id: 'stage_29',
  name: 'Stage 29: Mind & Thought',
  syllablePool: ['think', 'ing', 'out', 'wit', 'fore', 'sight', 'deep', 'en', 'thought', 'ful', 'sharp', 'mind'],
  targetWords: [
    { id: 's29_w1', word: 'thinking',   syllables: ['think', 'ing'],      definition: 'Using the mind to produce thoughts; reasoning.' },
    { id: 's29_w2', word: 'outwit',     syllables: ['out', 'wit'],        definition: 'To defeat by being more clever or cunning.' },
    { id: 's29_w3', word: 'foresight',  syllables: ['fore', 'sight'],     definition: 'The ability to predict future events; prudent planning.' },
    { id: 's29_w4', word: 'deepen',     syllables: ['deep', 'en'],        definition: 'To make or become deeper or more intense.' },
    { id: 's29_w5', word: 'deepening',  syllables: ['deep', 'en', 'ing'], definition: 'Becoming deeper or more profound.' },
    { id: 's29_w6', word: 'forethought',syllables: ['fore', 'thought'],   definition: 'Prior planning; consideration of future needs.' },
    { id: 's29_w7', word: 'sharpen',    syllables: ['sharp', 'en'],       definition: 'To make or become sharper or more acute.' },
    { id: 's29_w8', word: 'outthink',   syllables: ['out', 'think'],      definition: 'To outsmart someone mentally.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 30 — Food Preparation
//   cookbook, bakehouse, roasting, cooking, baker, chopstick, blender, cookhouse
// ─────────────────────────────────────────────────────────────────────────────
export const stage30: Stage = {
  id: 'stage_30',
  name: 'Stage 30: Food Preparation',
  syllablePool: ['cook', 'book', 'bake', 'house', 'roast', 'ing', 'er', 'stir', 'fry', 'chop', 'stick', 'blend'],
  targetWords: [
    { id: 's30_w1', word: 'cookbook',   syllables: ['cook', 'book'],    definition: 'A book of recipes for preparing food.' },
    { id: 's30_w2', word: 'bakehouse',  syllables: ['bake', 'house'],   definition: 'A building used for baking; a bakery.' },
    { id: 's30_w3', word: 'roasting',   syllables: ['roast', 'ing'],    definition: 'Cooking by dry heat in an oven.' },
    { id: 's30_w4', word: 'cooking',    syllables: ['cook', 'ing'],     definition: 'The skill or process of preparing food.' },
    { id: 's30_w5', word: 'roaster',    syllables: ['roast', 'er'],     definition: 'A pan for roasting; a bird suitable for roasting.' },
    { id: 's30_w6', word: 'chopstick',  syllables: ['chop', 'stick'],   definition: 'One of a pair of sticks used to pick up food.' },
    { id: 's30_w7', word: 'blender',    syllables: ['blend', 'er'],     definition: 'An appliance for blending or mixing food.' },
    { id: 's30_w8', word: 'cookhouse',  syllables: ['cook', 'house'],   definition: 'A kitchen, especially in a military camp.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 31 — Feelings: Advanced
//   grateful, regret, content, discontent, disappoint, excitement, contentment, disappointment
// ─────────────────────────────────────────────────────────────────────────────
export const stage31: Stage = {
  id: 'stage_31',
  name: 'Stage 31: Feelings: Advanced',
  syllablePool: ['grate', 'ful', 're', 'gret', 'con', 'tent', 'dis', 'ap', 'point', 'ex', 'cite', 'ment'],
  targetWords: [
    { id: 's31_w1', word: 'grateful',       syllables: ['grate', 'ful'],               definition: 'Feeling thankful and appreciative.' },
    { id: 's31_w2', word: 'regret',         syllables: ['re', 'gret'],                 definition: 'Sadness or disappointment about something that happened.' },
    { id: 's31_w3', word: 'content',        syllables: ['con', 'tent'],                definition: 'Peacefully happy; satisfied.' },
    { id: 's31_w4', word: 'discontent',     syllables: ['dis', 'con', 'tent'],          definition: 'Dissatisfaction; desire for better things.' },
    { id: 's31_w5', word: 'disappoint',     syllables: ['dis', 'ap', 'point'],          definition: 'To fail to meet someone\'s hopes or expectations.' },
    { id: 's31_w6', word: 'excitement',     syllables: ['ex', 'cite', 'ment'],          definition: 'A feeling of great eagerness and enthusiasm.' },
    { id: 's31_w7', word: 'contentment',    syllables: ['con', 'tent', 'ment'],         definition: 'A state of happiness and satisfaction.' },
    { id: 's31_w8', word: 'disappointment', syllables: ['dis', 'ap', 'point', 'ment'],  definition: 'Sadness when hopes or expectations are not met.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 32 — Actions & Motion
//   running, walking, jumping, climbing, swimmer, upward, downward, runner
// ─────────────────────────────────────────────────────────────────────────────
export const stage32: Stage = {
  id: 'stage_32',
  name: 'Stage 32: Actions & Motion',
  syllablePool: ['run', 'ning', 'walk', 'ing', 'jump', 'climb', 'swim', 'mer', 'up', 'down', 'ward', 'ner'],
  targetWords: [
    { id: 's32_w1', word: 'running',  syllables: ['run', 'ning'],     definition: 'Moving fast on foot; managing something.' },
    { id: 's32_w2', word: 'walking',  syllables: ['walk', 'ing'],     definition: 'Moving at a regular pace on foot.' },
    { id: 's32_w3', word: 'jumping',  syllables: ['jump', 'ing'],     definition: 'Pushing off the ground to propel into the air.' },
    { id: 's32_w4', word: 'climbing', syllables: ['climb', 'ing'],    definition: 'Going up using the hands and feet.' },
    { id: 's32_w5', word: 'swimmer',  syllables: ['swim', 'mer'],     definition: 'A person or animal that swims.' },
    { id: 's32_w6', word: 'upward',   syllables: ['up', 'ward'],      definition: 'Toward a higher place or level.' },
    { id: 's32_w7', word: 'downward', syllables: ['down', 'ward'],    definition: 'Toward a lower place or level.' },
    { id: 's32_w8', word: 'runner',   syllables: ['run', 'ner'],      definition: 'A person who runs; a messenger.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 33 — Relationships & Bonds
//   friendship, partner, companion, trustworthy, kindhearted, wholehearted, companionship, worthy
// ─────────────────────────────────────────────────────────────────────────────
export const stage33: Stage = {
  id: 'stage_33',
  name: 'Stage 33: Relationships & Bonds',
  syllablePool: ['friend', 'ship', 'part', 'ner', 'com', 'pan', 'ion', 'trust', 'worth', 'y', 'kind', 'heart', 'ed', 'whole'],
  targetWords: [
    { id: 's33_w1', word: 'friendship',    syllables: ['friend', 'ship'],              definition: 'The state of being friends; mutual affection.' },
    { id: 's33_w2', word: 'partner',       syllables: ['part', 'ner'],                 definition: 'A person who shares an activity or relationship.' },
    { id: 's33_w3', word: 'companion',     syllables: ['com', 'pan', 'ion'],           definition: 'A person one spends time with; a comrade.' },
    { id: 's33_w4', word: 'trustworthy',   syllables: ['trust', 'worth', 'y'],         definition: 'Reliable and honest; deserving of trust.' },
    { id: 's33_w5', word: 'kindhearted',   syllables: ['kind', 'heart', 'ed'],         definition: 'Having a kind and sympathetic nature.' },
    { id: 's33_w6', word: 'wholehearted',  syllables: ['whole', 'heart', 'ed'],        definition: 'Showing complete sincerity and commitment.' },
    { id: 's33_w7', word: 'companionship', syllables: ['com', 'pan', 'ion', 'ship'],   definition: 'The company and fellowship of others.' },
    { id: 's33_w8', word: 'worthy',        syllables: ['worth', 'y'],                  definition: 'Deserving respect or effort; having merit.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 34 — The "-ing" Progressive
//   breaking, making, taking, giving, changing, learning, growing, driving
// ─────────────────────────────────────────────────────────────────────────────
export const stage34: Stage = {
  id: 'stage_34',
  name: 'Stage 34: The "-ing" Progressive',
  syllablePool: ['break', 'mak', 'tak', 'giv', 'chang', 'learn', 'grow', 'driv', 'live', 'writ', 'ing'],
  targetWords: [
    { id: 's34_w1', word: 'breaking', syllables: ['break', 'ing'],  definition: 'Separating into pieces; violating a rule.' },
    { id: 's34_w2', word: 'making',   syllables: ['mak', 'ing'],    definition: 'The process of creating something.' },
    { id: 's34_w3', word: 'taking',   syllables: ['tak', 'ing'],    definition: 'The act of getting or removing something.' },
    { id: 's34_w4', word: 'giving',   syllables: ['giv', 'ing'],    definition: 'The act of transferring something to someone.' },
    { id: 's34_w5', word: 'changing', syllables: ['chang', 'ing'],  definition: 'Making or becoming different.' },
    { id: 's34_w6', word: 'learning', syllables: ['learn', 'ing'],  definition: 'Gaining knowledge or skills.' },
    { id: 's34_w7', word: 'growing',  syllables: ['grow', 'ing'],   definition: 'Increasing in size or degree; developing.' },
    { id: 's34_w8', word: 'driving',  syllables: ['driv', 'ing'],   definition: 'Operating a motor vehicle; motivating forcefully.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 35 — The "Back-" Prefix
//   backtrack, backfire, backpack, background, backbone, backhand, backstage, backstroke
// ─────────────────────────────────────────────────────────────────────────────
export const stage35: Stage = {
  id: 'stage_35',
  name: 'Stage 35: The "Back-" Prefix',
  syllablePool: ['back', 'track', 'fire', 'pack', 'ground', 'bone', 'hand', 'stage', 'stroke', 'up', 'ward', 'word'],
  targetWords: [
    { id: 's35_w1', word: 'backtrack',  syllables: ['back', 'track'],   definition: 'To retrace one\'s steps; to reverse a decision.' },
    { id: 's35_w2', word: 'backfire',   syllables: ['back', 'fire'],    definition: 'To have the opposite of the intended effect.' },
    { id: 's35_w3', word: 'backpack',   syllables: ['back', 'pack'],    definition: 'A bag worn on the back with shoulder straps.' },
    { id: 's35_w4', word: 'background', syllables: ['back', 'ground'],  definition: 'The area behind the main subject; one\'s history.' },
    { id: 's35_w5', word: 'backbone',   syllables: ['back', 'bone'],    definition: 'The spine; the chief support; strength of character.' },
    { id: 's35_w6', word: 'backhand',   syllables: ['back', 'hand'],    definition: 'A stroke with the back of the hand facing forward.' },
    { id: 's35_w7', word: 'backstage',  syllables: ['back', 'stage'],   definition: 'Behind the scenes; away from public view.' },
    { id: 's35_w8', word: 'backstroke', syllables: ['back', 'stroke'],  definition: 'A swimming stroke performed on one\'s back.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 36 — The "Re-" Prefix
//   rebuild, remake, restart, rethink, replay, reuse, refresh, restore
// ─────────────────────────────────────────────────────────────────────────────
export const stage36: Stage = {
  id: 'stage_36',
  name: 'Stage 36: The "Re-" Prefix',
  syllablePool: ['re', 'build', 'make', 'start', 'think', 'play', 'use', 'fresh', 'store', 'place', 'fill', 'new'],
  targetWords: [
    { id: 's36_w1', word: 'rebuild',  syllables: ['re', 'build'],   definition: 'To build again after damage.' },
    { id: 's36_w2', word: 'remake',   syllables: ['re', 'make'],    definition: 'To make again; a new version.' },
    { id: 's36_w3', word: 'restart',  syllables: ['re', 'start'],   definition: 'To start again from the beginning.' },
    { id: 's36_w4', word: 'rethink',  syllables: ['re', 'think'],   definition: 'To reconsider a plan or decision.' },
    { id: 's36_w5', word: 'replay',   syllables: ['re', 'play'],    definition: 'To play again; a playback.' },
    { id: 's36_w6', word: 'reuse',    syllables: ['re', 'use'],     definition: 'To use again more than once.' },
    { id: 's36_w7', word: 'refresh',  syllables: ['re', 'fresh'],   definition: 'To revive or update.' },
    { id: 's36_w8', word: 'restore',  syllables: ['re', 'store'],   definition: 'To return to an original condition.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 37 — Virtues & Character
//   bravery, patience, wisdom, loyalty, fairly, justly, bravely, loyal
// ─────────────────────────────────────────────────────────────────────────────
export const stage37: Stage = {
  id: 'stage_37',
  name: 'Stage 37: Virtues & Character',
  syllablePool: ['brave', 'ry', 'pa', 'tience', 'wis', 'dom', 'loy', 'al', 'ty', 'fair', 'ly', 'just'],
  targetWords: [
    { id: 's37_w1', word: 'bravery',  syllables: ['brave', 'ry'],        definition: 'Courageous character; readiness to face danger.' },
    { id: 's37_w2', word: 'patience', syllables: ['pa', 'tience'],       definition: 'Calm acceptance of delay or difficulty.' },
    { id: 's37_w3', word: 'wisdom',   syllables: ['wis', 'dom'],         definition: 'Good judgment from experience and knowledge.' },
    { id: 's37_w4', word: 'loyalty',  syllables: ['loy', 'al', 'ty'],    definition: 'Faithful adherence to a person or cause.' },
    { id: 's37_w5', word: 'fairly',   syllables: ['fair', 'ly'],         definition: 'With justice; to a moderate degree.' },
    { id: 's37_w6', word: 'justly',   syllables: ['just', 'ly'],         definition: 'In a fair and rightful manner.' },
    { id: 's37_w7', word: 'bravely',  syllables: ['brave', 'ly'],        definition: 'In a courageous, fearless manner.' },
    { id: 's37_w8', word: 'loyal',    syllables: ['loy', 'al'],          definition: 'Giving constant and faithful support.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 38 — "Un-" & "In-" Antonym Prefixes
//   unfair, unkind, unjust, unsafe, unwise, insane, unfit, harmful
// ─────────────────────────────────────────────────────────────────────────────
export const stage38: Stage = {
  id: 'stage_38',
  name: 'Stage 38: "Un-" & "In-" Antonyms',
  syllablePool: ['un', 'in', 'fair', 'kind', 'just', 'safe', 'wise', 'sane', 'fit', 'ful', 'use', 'harm'],
  targetWords: [
    { id: 's38_w1', word: 'unfair',   syllables: ['un', 'fair'],    definition: 'Not fair; unjust.' },
    { id: 's38_w2', word: 'unkind',   syllables: ['un', 'kind'],    definition: 'Not kind; inconsiderate or harsh.' },
    { id: 's38_w3', word: 'unjust',   syllables: ['un', 'just'],    definition: 'Not just or fair.' },
    { id: 's38_w4', word: 'unsafe',   syllables: ['un', 'safe'],    definition: 'Dangerous; likely to cause harm.' },
    { id: 's38_w5', word: 'unwise',   syllables: ['un', 'wise'],    definition: 'Lacking wisdom; imprudent.' },
    { id: 's38_w6', word: 'insane',   syllables: ['in', 'sane'],    definition: 'Mentally ill; extremely foolish.' },
    { id: 's38_w7', word: 'unfit',    syllables: ['un', 'fit'],     definition: 'Not qualified; not in good condition.' },
    { id: 's38_w8', word: 'harmful',  syllables: ['harm', 'ful'],   definition: 'Causing or likely to cause harm.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 39 — Trees & Forests
//   treetop, woodland, evergreen, oakwood, woodwork, greenwood, rootwork, woodcraft
// ─────────────────────────────────────────────────────────────────────────────
export const stage39: Stage = {
  id: 'stage_39',
  name: 'Stage 39: Trees & Forests',
  syllablePool: ['tree', 'top', 'wood', 'land', 'ever', 'green', 'oak', 'leaf', 'bark', 'root', 'craft', 'work'],
  targetWords: [
    { id: 's39_w1', word: 'treetop',   syllables: ['tree', 'top'],    definition: 'The topmost branches of a tree.' },
    { id: 's39_w2', word: 'woodland',  syllables: ['wood', 'land'],   definition: 'Land covered with trees; a forest.' },
    { id: 's39_w3', word: 'evergreen', syllables: ['ever', 'green'],  definition: 'A plant retaining leaves year-round.' },
    { id: 's39_w4', word: 'oakwood',   syllables: ['oak', 'wood'],    definition: 'A grove of oaks; timber from oak trees.' },
    { id: 's39_w5', word: 'woodwork',  syllables: ['wood', 'work'],   definition: 'Work or parts made from wood.' },
    { id: 's39_w6', word: 'greenwood', syllables: ['green', 'wood'],  definition: 'A leafy forest (literary).' },
    { id: 's39_w7', word: 'rootwork',  syllables: ['root', 'work'],   definition: 'Folk healing or magic using plant roots.' },
    { id: 's39_w8', word: 'woodcraft', syllables: ['wood', 'craft'],  definition: 'Skill in carving wood; wilderness knowledge.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 40 — Household Items
//   doorbell, doorstep, doormat, bookshelf, cupboard, bedroom, keychain, keyboard
// ─────────────────────────────────────────────────────────────────────────────
export const stage40: Stage = {
  id: 'stage_40',
  name: 'Stage 40: Household Items',
  syllablePool: ['door', 'bell', 'step', 'mat', 'book', 'shelf', 'cup', 'board', 'bed', 'room', 'key', 'chain'],
  targetWords: [
    { id: 's40_w1', word: 'doorbell',  syllables: ['door', 'bell'],   definition: 'A bell visitors ring at the door.' },
    { id: 's40_w2', word: 'doorstep',  syllables: ['door', 'step'],   definition: 'A step at the front door of a house.' },
    { id: 's40_w3', word: 'doormat',   syllables: ['door', 'mat'],    definition: 'A mat for wiping shoes at the door.' },
    { id: 's40_w4', word: 'bookshelf', syllables: ['book', 'shelf'],  definition: 'A shelf for storing books.' },
    { id: 's40_w5', word: 'cupboard',  syllables: ['cup', 'board'],   definition: 'A cabinet with a door and shelves.' },
    { id: 's40_w6', word: 'bedroom',   syllables: ['bed', 'room'],    definition: 'A room used for sleeping.' },
    { id: 's40_w7', word: 'keychain',  syllables: ['key', 'chain'],   definition: 'A chain or ring for holding keys.' },
    { id: 's40_w8', word: 'keyboard',  syllables: ['key', 'board'],   definition: 'A panel of keys for typing or playing.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 41 — Law & Justice
//   lawmaker, courthouse, lawbreaker, freedom, landlord, lawful, outlaw, lordship
// ─────────────────────────────────────────────────────────────────────────────
export const stage41: Stage = {
  id: 'stage_41',
  name: 'Stage 41: Law & Justice',
  syllablePool: ['law', 'mak', 'court', 'house', 'break', 'er', 'free', 'dom', 'lord', 'ful', 'out', 'land', 'ship'],
  targetWords: [
    { id: 's41_w1', word: 'lawmaker',   syllables: ['law', 'mak', 'er'],   definition: 'A person who makes laws; a legislator.' },
    { id: 's41_w2', word: 'courthouse', syllables: ['court', 'house'],     definition: 'A building where courts of law are held.' },
    { id: 's41_w3', word: 'lawbreaker', syllables: ['law', 'break', 'er'], definition: 'A person who breaks the law.' },
    { id: 's41_w4', word: 'freedom',    syllables: ['free', 'dom'],        definition: 'The right to act without restraint.' },
    { id: 's41_w5', word: 'landlord',   syllables: ['land', 'lord'],       definition: 'A person who rents out property.' },
    { id: 's41_w6', word: 'lawful',     syllables: ['law', 'ful'],         definition: 'Conforming to the law; legal.' },
    { id: 's41_w7', word: 'outlaw',     syllables: ['out', 'law'],         definition: 'A criminal; to make something illegal.' },
    { id: 's41_w8', word: 'lordship',   syllables: ['lord', 'ship'],       definition: 'Dominion; a respectful title for a lord.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 42 — "Ex-" & "Pre-" Prefixes
//   expect, extend, pretend, prevent, present, precede, exceed, prefix
// ─────────────────────────────────────────────────────────────────────────────
export const stage42: Stage = {
  id: 'stage_42',
  name: 'Stage 42: "Ex-" & "Pre-" Prefixes',
  syllablePool: ['ex', 'pre', 'tend', 'pect', 'vent', 'sent', 'cede', 'ceed', 'fix', 'port', 'duce', 'press'],
  targetWords: [
    { id: 's42_w1', word: 'expect',  syllables: ['ex', 'pect'],   definition: 'To believe something is likely to happen.' },
    { id: 's42_w2', word: 'extend',  syllables: ['ex', 'tend'],   definition: 'To make longer or larger; to stretch out.' },
    { id: 's42_w3', word: 'pretend', syllables: ['pre', 'tend'],  definition: 'To act as if something false is true.' },
    { id: 's42_w4', word: 'prevent', syllables: ['pre', 'vent'],  definition: 'To stop something from happening.' },
    { id: 's42_w5', word: 'present', syllables: ['pre', 'sent'],  definition: 'Now; a gift; to formally offer or show.' },
    { id: 's42_w6', word: 'precede', syllables: ['pre', 'cede'],  definition: 'To come before in time or order.' },
    { id: 's42_w7', word: 'exceed',  syllables: ['ex', 'ceed'],   definition: 'To go beyond a limit or amount.' },
    { id: 's42_w8', word: 'prefix',  syllables: ['pre', 'fix'],   definition: 'A word element added to the start of a word.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 43 — The "-tion / -sion" Suffix
//   nation, action, mention, vision, decision, convention, attention, invention
// ─────────────────────────────────────────────────────────────────────────────
export const stage43: Stage = {
  id: 'stage_43',
  name: 'Stage 43: The "-tion / -sion" Suffix',
  syllablePool: ['na', 'tion', 'ac', 'men', 'at', 'vi', 'sion', 'de', 'ci', 'con', 'ven', 'ten', 'in'],
  targetWords: [
    { id: 's43_w1', word: 'nation',     syllables: ['na', 'tion'],              definition: 'A people united by territory and government.' },
    { id: 's43_w2', word: 'action',     syllables: ['ac', 'tion'],              definition: 'The process of doing something; a thing done.' },
    { id: 's43_w3', word: 'mention',    syllables: ['men', 'tion'],             definition: 'To refer to briefly; a brief reference.' },
    { id: 's43_w4', word: 'vision',     syllables: ['vi', 'sion'],              definition: 'The ability to see; imaginative foresight.' },
    { id: 's43_w5', word: 'decision',   syllables: ['de', 'ci', 'sion'],        definition: 'A conclusion reached after consideration.' },
    { id: 's43_w6', word: 'convention', syllables: ['con', 'ven', 'tion'],      definition: 'An accepted practice; a large formal assembly.' },
    { id: 's43_w7', word: 'attention',  syllables: ['at', 'ten', 'tion'],       definition: 'Notice or mental focus directed at something.' },
    { id: 's43_w8', word: 'invention',  syllables: ['in', 'ven', 'tion'],       definition: 'Something newly created; the act of inventing.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 44 — The "-able" Suffix
//   readable, teachable, breakable, washable, usable, doable, remarkable, workable
// ─────────────────────────────────────────────────────────────────────────────
export const stage44: Stage = {
  id: 'stage_44',
  name: 'Stage 44: The "-able" Suffix',
  syllablePool: ['read', 'a', 'ble', 'teach', 'break', 'wash', 'us', 'do', 're', 'mark', 'work', 'note'],
  targetWords: [
    { id: 's44_w1', word: 'readable',   syllables: ['read', 'a', 'ble'],        definition: 'Easy or enjoyable to read; legible.' },
    { id: 's44_w2', word: 'teachable',  syllables: ['teach', 'a', 'ble'],       definition: 'Able to be taught; willing to learn.' },
    { id: 's44_w3', word: 'breakable',  syllables: ['break', 'a', 'ble'],       definition: 'Capable of breaking; fragile.' },
    { id: 's44_w4', word: 'washable',   syllables: ['wash', 'a', 'ble'],        definition: 'Able to be washed without damage.' },
    { id: 's44_w5', word: 'usable',     syllables: ['us', 'a', 'ble'],          definition: 'Able to be used; practical.' },
    { id: 's44_w6', word: 'doable',     syllables: ['do', 'a', 'ble'],          definition: 'Able to be done; feasible.' },
    { id: 's44_w7', word: 'remarkable', syllables: ['re', 'mark', 'a', 'ble'],  definition: 'Striking or extraordinary; worthy of notice.' },
    { id: 's44_w8', word: 'workable',   syllables: ['work', 'a', 'ble'],        definition: 'Practicable; able to be carried out.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 45 — Comparatives & Agent "-er"
//   greater, faster, stronger, brighter, darker, quicker, builder, leader
// ─────────────────────────────────────────────────────────────────────────────
export const stage45: Stage = {
  id: 'stage_45',
  name: 'Stage 45: Comparatives & Agents',
  syllablePool: ['great', 'er', 'fast', 'slow', 'strong', 'bright', 'dark', 'quick', 'build', 'lead', 'teach', 'make'],
  targetWords: [
    { id: 's45_w1', word: 'greater',  syllables: ['great', 'er'],   definition: 'Larger or more important than average.' },
    { id: 's45_w2', word: 'faster',   syllables: ['fast', 'er'],    definition: 'Moving at higher speed; more quick.' },
    { id: 's45_w3', word: 'stronger', syllables: ['strong', 'er'],  definition: 'Having more strength or force.' },
    { id: 's45_w4', word: 'brighter', syllables: ['bright', 'er'],  definition: 'Giving more light; more vivid or cheerful.' },
    { id: 's45_w5', word: 'darker',   syllables: ['dark', 'er'],    definition: 'Having less light; more gloomy.' },
    { id: 's45_w6', word: 'quicker',  syllables: ['quick', 'er'],   definition: 'Moving faster; more prompt.' },
    { id: 's45_w7', word: 'builder',  syllables: ['build', 'er'],   definition: 'A person who constructs things.' },
    { id: 's45_w8', word: 'leader',   syllables: ['lead', 'er'],    definition: 'A person who leads a group or organization.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 46 — "Over-" Action Words (extended)
//   overtake, overthrow, overturn, overrun, overlook, overstep, overflow, overlap
// ─────────────────────────────────────────────────────────────────────────────
export const stage46: Stage = {
  id: 'stage_46',
  name: 'Stage 46: "Over-" Actions (Extended)',
  syllablePool: ['over', 'take', 'throw', 'turn', 'run', 'look', 'step', 'flow', 'lap', 'board', 'pass', 'come'],
  targetWords: [
    { id: 's46_w1', word: 'overtake',  syllables: ['over', 'take'],   definition: 'To pass while going in the same direction.' },
    { id: 's46_w2', word: 'overthrow', syllables: ['over', 'throw'],  definition: 'To remove forcibly from power; to knock down.' },
    { id: 's46_w3', word: 'overturn',  syllables: ['over', 'turn'],   definition: 'To tip over; to reverse a legal decision.' },
    { id: 's46_w4', word: 'overrun',   syllables: ['over', 'run'],    definition: 'To spread over in large numbers; to exceed.' },
    { id: 's46_w5', word: 'overlook',  syllables: ['over', 'look'],   definition: 'To fail to notice; to disregard.' },
    { id: 's46_w6', word: 'overstep',  syllables: ['over', 'step'],   definition: 'To go beyond an acceptable limit.' },
    { id: 's46_w7', word: 'overboard', syllables: ['over', 'board'],  definition: 'Over a ship\'s side; to an excessive degree.' },
    { id: 's46_w8', word: 'overlap',   syllables: ['over', 'lap'],    definition: 'To extend over and cover part of something.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 47 — "Well-" & "Good-" Words
//   wellknown, wellmade, wellbeing, welldone, wellness, goodwill, goodness, farewell
// ─────────────────────────────────────────────────────────────────────────────
export const stage47: Stage = {
  id: 'stage_47',
  name: 'Stage 47: "Well-" & "Good-" Words',
  syllablePool: ['well', 'good', 'known', 'made', 'be', 'ing', 'done', 'will', 'ness', 'off', 'fare', 'wish'],
  targetWords: [
    { id: 's47_w1', word: 'wellknown',  syllables: ['well', 'known'],         definition: 'Famous; known by many people.' },
    { id: 's47_w2', word: 'wellmade',   syllables: ['well', 'made'],          definition: 'Skillfully constructed; of high quality.' },
    { id: 's47_w3', word: 'wellbeing',  syllables: ['well', 'be', 'ing'],     definition: 'The state of being healthy and happy.' },
    { id: 's47_w4', word: 'welldone',   syllables: ['well', 'done'],          definition: 'Successfully done; thoroughly cooked.' },
    { id: 's47_w5', word: 'welloff',    syllables: ['well', 'off'],           definition: 'Financially comfortable; prosperous.' },
    { id: 's47_w6', word: 'goodwill',   syllables: ['good', 'will'],          definition: 'Friendly feelings; a business\'s reputation.' },
    { id: 's47_w7', word: 'goodness',   syllables: ['good', 'ness'],          definition: 'The quality of being morally good.' },
    { id: 's47_w8', word: 'farewell',   syllables: ['fare', 'well'],          definition: 'A goodbye; good wishes at parting.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 48 — The Body's Inner World
//   heartbreak, heartbreaker, soulful, deepset, skindeep, boneset, bloodwork, heartful
// ─────────────────────────────────────────────────────────────────────────────
export const stage48: Stage = {
  id: 'stage_48',
  name: 'Stage 48: The Body\'s Inner World',
  syllablePool: ['heart', 'mind', 'soul', 'blood', 'bone', 'flesh', 'work', 'skin', 'deep', 'break', 'set', 'ful', 'er'],
  targetWords: [
    { id: 's48_w1', word: 'heartbreak',   syllables: ['heart', 'break'],         definition: 'Overwhelming grief from loss or disappointment.' },
    { id: 's48_w2', word: 'heartbreaker', syllables: ['heart', 'break', 'er'],   definition: 'A person or thing that causes heartbreak.' },
    { id: 's48_w3', word: 'soulful',      syllables: ['soul', 'ful'],            definition: 'Expressing deep, sincere feeling.' },
    { id: 's48_w4', word: 'deepset',      syllables: ['deep', 'set'],            definition: 'Firmly fixed; (eyes) set deep in the face.' },
    { id: 's48_w5', word: 'skindeep',     syllables: ['skin', 'deep'],           definition: 'Superficial; not reaching below the surface.' },
    { id: 's48_w6', word: 'boneset',      syllables: ['bone', 'set'],            definition: 'A medicinal plant; the setting of a broken bone.' },
    { id: 's48_w7', word: 'bloodwork',    syllables: ['blood', 'work'],          definition: 'Blood tests to assess a person\'s health.' },
    { id: 's48_w8', word: 'heartful',     syllables: ['heart', 'ful'],           definition: 'Full of genuine, sincere feeling.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 49 — Directions & Compass
//   northward, southward, eastward, westward, northbound, southbound, eastern, western
// ─────────────────────────────────────────────────────────────────────────────
export const stage49: Stage = {
  id: 'stage_49',
  name: 'Stage 49: Directions & Compass',
  syllablePool: ['north', 'south', 'east', 'west', 'ward', 'bound', 'side', 'land', 'ern', 'gate', 'star', 'shore'],
  targetWords: [
    { id: 's49_w1', word: 'northward',  syllables: ['north', 'ward'],   definition: 'Toward the north.' },
    { id: 's49_w2', word: 'southward',  syllables: ['south', 'ward'],   definition: 'Toward the south.' },
    { id: 's49_w3', word: 'eastward',   syllables: ['east', 'ward'],    definition: 'Toward the east.' },
    { id: 's49_w4', word: 'westward',   syllables: ['west', 'ward'],    definition: 'Toward the west.' },
    { id: 's49_w5', word: 'northbound', syllables: ['north', 'bound'],  definition: 'Traveling toward the north.' },
    { id: 's49_w6', word: 'southbound', syllables: ['south', 'bound'],  definition: 'Traveling toward the south.' },
    { id: 's49_w7', word: 'eastern',    syllables: ['east', 'ern'],     definition: 'Of, in, or facing the east.' },
    { id: 's49_w8', word: 'western',    syllables: ['west', 'ern'],     definition: 'Of, in, or facing the west.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE 50 — Sea & Sailing
//   sailboat, seaman, shipboard, windward, seaboard, windstorm, driftwood, seadrift
// ─────────────────────────────────────────────────────────────────────────────
export const stage50: Stage = {
  id: 'stage_50',
  name: 'Stage 50: Sea & Sailing',
  syllablePool: ['sail', 'boat', 'sea', 'man', 'ship', 'storm', 'wind', 'ward', 'board', 'tide', 'drift', 'wood'],
  targetWords: [
    { id: 's50_w1', word: 'sailboat',  syllables: ['sail', 'boat'],   definition: 'A boat propelled by sails.' },
    { id: 's50_w2', word: 'seaman',    syllables: ['sea', 'man'],     definition: 'A sailor; a naval rank below petty officer.' },
    { id: 's50_w3', word: 'shipboard', syllables: ['ship', 'board'],  definition: 'On or relating to a ship.' },
    { id: 's50_w4', word: 'windward',  syllables: ['wind', 'ward'],   definition: 'Facing the direction the wind blows from.' },
    { id: 's50_w5', word: 'seaboard',  syllables: ['sea', 'board'],   definition: 'A coastal region; the seacoast.' },
    { id: 's50_w6', word: 'windstorm', syllables: ['wind', 'storm'],  definition: 'A storm with strong winds and little rain.' },
    { id: 's50_w7', word: 'driftwood', syllables: ['drift', 'wood'],  definition: 'Wood floating on water or washed ashore.' },
    { id: 's50_w8', word: 'seadrift',  syllables: ['sea', 'drift'],   definition: 'Material cast ashore by the sea; flotsam.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Master list — add new stages here to make them available in-game
// ─────────────────────────────────────────────────────────────────────────────
export const ALL_STAGES: Stage[] = [
  stage1,  stage2,  stage3,  stage4,  stage5,
  stage6,  stage7,  stage8,  stage9,  stage10,
  stage11, stage12, stage13, stage14, stage15,
  stage16, stage17, stage18, stage19, stage20,
  stage21, stage22, stage23, stage24, stage25,
  stage26, stage27, stage28, stage29, stage30,
  stage31, stage32, stage33, stage34, stage35,
  stage36, stage37, stage38, stage39, stage40,
  stage41, stage42, stage43, stage44, stage45,
  stage46, stage47, stage48, stage49, stage50,
];
