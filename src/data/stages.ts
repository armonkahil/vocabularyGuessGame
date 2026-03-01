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
    { id: 's1_w1', word: 'mistake',       syllables: ['mis', 'take'],              definition: 'An action or judgment that is misguided or wrong; an error.' },
    { id: 's1_w2', word: 'misfortune',    syllables: ['mis', 'for', 'tune'],        definition: 'Bad luck; an unfortunate condition, event, or circumstance.' },
    { id: 's1_w3', word: 'misunderstand', syllables: ['mis', 'un', 'der', 'stand'], definition: 'To fail to interpret or understand something correctly.' },
    { id: 's1_w4', word: 'undertake',     syllables: ['un', 'der', 'take'],         definition: 'To commit oneself to and begin a task; to take on a responsibility.' },
    { id: 's1_w5', word: 'understand',    syllables: ['un', 'der', 'stand'],        definition: 'To perceive the meaning of something; to comprehend.' },
    { id: 's1_w6', word: 'unhappy',       syllables: ['un', 'hap', 'py'],           definition: 'Not feeling pleased or content; sad or miserable.' },
    { id: 's1_w7', word: 'happy',         syllables: ['hap', 'py'],                 definition: 'Feeling or showing pleasure, contentment, or joy.' },
    { id: 's1_w8', word: 'forward',       syllables: ['for', 'ward'],               definition: 'Toward the front; in the direction one is facing or traveling.' },
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
    { id: 's2_w1', word: 'rainbow',      syllables: ['rain', 'bow'],           definition: 'A multicolored arc of light in the sky caused by sunlight shining through rain.' },
    { id: 's2_w2', word: 'raincloud',    syllables: ['rain', 'cloud'],         definition: 'A dark cloud that brings rain; a cumulonimbus or nimbostratus cloud.' },
    { id: 's2_w3', word: 'thunderstorm', syllables: ['thun', 'der', 'storm'],  definition: 'A storm with lightning and thunder, typically with heavy rain.' },
    { id: 's2_w4', word: 'snowfall',     syllables: ['snow', 'fall'],          definition: 'A fall of snow; the total amount of snow deposited in an area over a given time.' },
    { id: 's2_w5', word: 'thundercloud', syllables: ['thun', 'der', 'cloud'],  definition: 'A large dark cloud charged with electricity, producing thunder and lightning.' },
    { id: 's2_w6', word: 'rainstorm',    syllables: ['rain', 'storm'],         definition: 'A storm with heavy rainfall; a downpour.' },
    { id: 's2_w7', word: 'windfall',     syllables: ['wind', 'fall'],          definition: 'An unexpected piece of good fortune; or fruit blown from a tree by the wind.' },
    { id: 's2_w8', word: 'lightning',    syllables: ['light', 'ning'],         definition: 'A sudden electrostatic discharge during a thunderstorm, producing a bright flash.' },
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
    { id: 's3_w1', word: 'homework',  syllables: ['home', 'work'],         definition: 'Work or study done at home, especially school assignments.' },
    { id: 's3_w2', word: 'hometown',  syllables: ['home', 'town'],         definition: 'The town or city where a person was born or has lived for a long time.' },
    { id: 's3_w3', word: 'inside',    syllables: ['in', 'side'],           definition: 'The inner side or surface of something; situated within a building.' },
    { id: 's3_w4', word: 'outside',   syllables: ['out', 'side'],          definition: 'The external side or surface; in or to the open air beyond a building.' },
    { id: 's3_w5', word: 'inland',    syllables: ['in', 'land'],           definition: 'Situated in or toward the interior of a country, away from the coast.' },
    { id: 's3_w6', word: 'backyard',  syllables: ['back', 'yard'],         definition: 'A yard or garden behind a house; one\'s own local area or domain.' },
    { id: 's3_w7', word: 'household', syllables: ['house', 'hold'],        definition: 'A house and all the people living in it, regarded as a unit.' },
    { id: 's3_w8', word: 'indoor',    syllables: ['in', 'door'],           definition: 'Situated, conducted, or used inside a building; not outdoors.' },
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
    { id: 's4_w1', word: 'overcome',  syllables: ['over', 'come'],        definition: 'To succeed in dealing with a problem or difficulty; to prevail over.' },
    { id: 's4_w2', word: 'overthink', syllables: ['over', 'think'],       definition: 'To think about something too much or for too long, causing unnecessary worry.' },
    { id: 's4_w3', word: 'overwork',  syllables: ['over', 'work'],        definition: 'To work too hard; to exhaust oneself or others by excessive labor.' },
    { id: 's4_w4', word: 'overload',  syllables: ['over', 'load'],        definition: 'To give too great a burden to; to supply with more than can be handled.' },
    { id: 's4_w5', word: 'overwhelm', syllables: ['over', 'whelm'],       definition: 'To bury beneath a huge mass; to give too much to someone; to defeat utterly.' },
    { id: 's4_w6', word: 'feeling',   syllables: ['feel', 'ing'],         definition: 'An emotional state or reaction; an idea or belief, especially a vague one.' },
    { id: 's4_w7', word: 'mindset',   syllables: ['mind', 'set'],         definition: 'The established set of attitudes held by someone; a particular way of thinking.' },
    { id: 's4_w8', word: 'outcome',   syllables: ['out', 'come'],         definition: 'The way a thing turns out; a consequence or end result.' },
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
    { id: 's5_w1', word: 'fearful',  syllables: ['fear', 'ful'],   definition: 'Feeling afraid; showing or causing fear; full of anxiety or worry.' },
    { id: 's5_w2', word: 'joyous',   syllables: ['joy', 'ous'],    definition: 'Full of happiness and joy; feeling or causing great delight.' },
    { id: 's5_w3', word: 'anger',    syllables: ['an', 'ger'],     definition: 'A strong feeling of annoyance, displeasure, or hostility.' },
    { id: 's5_w4', word: 'peaceful', syllables: ['peace', 'ful'],  definition: 'Free from disturbance; tranquil and calm; not involving war or violence.' },
    { id: 's5_w5', word: 'lonely',   syllables: ['lone', 'ly'],    definition: 'Sad because one has no friends or company; solitary or isolated.' },
    { id: 's5_w6', word: 'joyfully', syllables: ['joy', 'ful', 'ly'], definition: 'In a joyful manner; with great happiness, pleasure, and delight.' },
    { id: 's5_w7', word: 'sadly',    syllables: ['sad', 'ly'],     definition: 'In a way that shows sorrow or regret; unfortunately.' },
    { id: 's5_w8', word: 'joyful',   syllables: ['joy', 'ful'],    definition: 'Feeling, expressing, or causing great pleasure and happiness.' },
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
    { id: 's6_w1', word: 'butter',     syllables: ['but', 'ter'],          definition: 'A pale yellow edible fat made by churning cream; used as a spread or in cooking.' },
    { id: 's6_w2', word: 'buttercup',  syllables: ['but', 'ter', 'cup'],   definition: 'A common wild plant with bright yellow cup-shaped flowers found in meadows.' },
    { id: 's6_w3', word: 'cupcake',    syllables: ['cup', 'cake'],         definition: 'A small individual cake baked in a cup-shaped container, often with icing on top.' },
    { id: 's6_w4', word: 'meatball',   syllables: ['meat', 'ball'],        definition: 'A ball of minced or ground meat, usually seasoned and cooked in sauce.' },
    { id: 's6_w5', word: 'cookie',     syllables: ['cook', 'ie'],          definition: 'A small flat sweet biscuit, typically made from flour, sugar, eggs, and butter.' },
    { id: 's6_w6', word: 'peanut',     syllables: ['pea', 'nut'],          definition: 'The oval seed of a legume plant, widely eaten as a snack and used to make oil or butter.' },
    { id: 's6_w7', word: 'breadcrumb', syllables: ['bread', 'crumb'],      definition: 'A tiny fragment of bread; used in cooking to coat foods before frying or baking.' },
    { id: 's6_w8', word: 'cookout',    syllables: ['cook', 'out'],         definition: 'An outdoor gathering at which food is cooked and eaten, typically on a grill.' },
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
    { id: 's7_w1', word: 'journey',     syllables: ['jour', 'ney'],              definition: 'A long trip or expedition, especially one over a considerable distance.' },
    { id: 's7_w2', word: 'explore',     syllables: ['ex', 'plore'],              definition: 'To travel through an unfamiliar area to learn about it; to investigate thoroughly.' },
    { id: 's7_w3', word: 'adventure',   syllables: ['ad', 'ven', 'ture'],        definition: 'An unusual, exciting, and daring experience; a bold undertaking with uncertain outcome.' },
    { id: 's7_w4', word: 'discover',    syllables: ['dis', 'cov', 'er'],         definition: 'To find something unexpectedly; to be the first to find, learn of, or observe.' },
    { id: 's7_w5', word: 'venture',     syllables: ['ven', 'ture'],              definition: 'A risky or daring journey or undertaking; to dare to do something.' },
    { id: 's7_w6', word: 'return',      syllables: ['re', 'turn'],               definition: 'To come or go back to a place or person; the act of arriving back.' },
    { id: 's7_w7', word: 'recover',     syllables: ['re', 'cov', 'er'],          definition: 'To return to a normal state after difficulty; to find or regain something lost.' },
    { id: 's7_w8', word: 'rediscover',  syllables: ['re', 'dis', 'cov', 'er'],   definition: 'To discover again; to find renewed pleasure or interest in something previously known.' },
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
    { id: 's8_w1', word: 'daytime',   syllables: ['day', 'time'],          definition: 'The period of time between sunrise and sunset when it is light.' },
    { id: 's8_w2', word: 'nighttime', syllables: ['night', 'time'],        definition: 'The period of time between sunset and sunrise when it is dark.' },
    { id: 's8_w3', word: 'midday',    syllables: ['mid', 'day'],           definition: 'The middle of the day; twelve o\'clock in the daytime; noon.' },
    { id: 's8_w4', word: 'midnight',  syllables: ['mid', 'night'],         definition: 'Twelve o\'clock at night; the very middle of the night.' },
    { id: 's8_w5', word: 'timeless',  syllables: ['time', 'less'],         definition: 'Not affected by the passage of time; ageless; remaining beautiful forever.' },
    { id: 's8_w6', word: 'morning',   syllables: ['morn', 'ing'],          definition: 'The period of time between midnight and noon, especially from sunrise to noon.' },
    { id: 's8_w7', word: 'afternoon', syllables: ['af', 'ter', 'noon'],    definition: 'The time from noon until evening; the latter part of the day.' },
    { id: 's8_w8', word: 'forenoon',  syllables: ['fore', 'noon'],         definition: 'The period between dawn and midday; the morning hours. (Formal/literary)' },
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
    { id: 's9_w1', word: 'useful',    syllables: ['use', 'ful'],       definition: 'Able to be used for a practical purpose or in several ways; beneficial.' },
    { id: 's9_w2', word: 'useless',   syllables: ['use', 'less'],      definition: 'Not fulfilling or not expected to achieve the intended purpose; worthless.' },
    { id: 's9_w3', word: 'careful',   syllables: ['care', 'ful'],      definition: 'Making sure of avoiding potential danger, mishap, or harm; attentive.' },
    { id: 's9_w4', word: 'careless',  syllables: ['care', 'less'],     definition: 'Not giving sufficient attention or thought to avoiding harm or errors.' },
    { id: 's9_w5', word: 'helpful',   syllables: ['help', 'ful'],      definition: 'Giving or ready to give assistance; serving a useful function.' },
    { id: 's9_w6', word: 'helpless',  syllables: ['help', 'less'],     definition: 'Unable to defend oneself or to act without assistance; powerless.' },
    { id: 's9_w7', word: 'thoughtful',syllables: ['thought', 'ful'],   definition: 'Absorbed in or involving thought; showing consideration for the needs of others.' },
    { id: 's9_w8', word: 'fearless',  syllables: ['fear', 'less'],     definition: 'Lacking fear; bold and courageous; not afraid of anything.' },
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
    { id: 's10_w1', word: 'kindness',   syllables: ['kind', 'ness'],   definition: 'The quality of being friendly, generous, and considerate toward others.' },
    { id: 's10_w2', word: 'darkness',   syllables: ['dark', 'ness'],   definition: 'The partial or total absence of light; the state of being dark.' },
    { id: 's10_w3', word: 'brightness', syllables: ['bright', 'ness'], definition: 'The quality or state of being bright; cheerfulness; vividness of color.' },
    { id: 's10_w4', word: 'sadness',    syllables: ['sad', 'ness'],    definition: 'The condition or quality of being sad; a feeling of sorrow or unhappiness.' },
    { id: 's10_w5', word: 'gladness',   syllables: ['glad', 'ness'],   definition: 'The state or feeling of happiness, pleasure, or delight.' },
    { id: 's10_w6', word: 'madness',    syllables: ['mad', 'ness'],    definition: 'The state of being mentally ill; extremely foolish behavior; wild excitement.' },
    { id: 's10_w7', word: 'softness',   syllables: ['soft', 'ness'],   definition: 'The quality of being soft, gentle, or quiet; lack of hardness.' },
    { id: 's10_w8', word: 'wildness',   syllables: ['wild', 'ness'],   definition: 'The state of being wild, uncontrolled, or untamed; ferocity or unruliness.' },
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
    { id: 's11_w1', word: 'handshake', syllables: ['hand', 'shake'],  definition: 'An act of shaking hands, used as a greeting or to seal an agreement.' },
    { id: 's11_w2', word: 'footprint', syllables: ['foot', 'print'],  definition: 'The impression left by a foot or shoe on a surface; one\'s environmental impact.' },
    { id: 's11_w3', word: 'eyesight',  syllables: ['eye', 'sight'],   definition: 'A person\'s ability to see; the faculty or power of vision.' },
    { id: 's11_w4', word: 'armchair',  syllables: ['arm', 'chair'],   definition: 'A comfortable chair with side supports for the arms.' },
    { id: 's11_w5', word: 'lipstick',  syllables: ['lip', 'stick'],   definition: 'A colored cosmetic applied to the lips from a small stick.' },
    { id: 's11_w6', word: 'thumbnail', syllables: ['thumb', 'nail'],  definition: 'The nail on the thumb; a small image that represents a larger one.' },
    { id: 's11_w7', word: 'handprint', syllables: ['hand', 'print'],  definition: 'The impression or mark left by a hand.' },
    { id: 's11_w8', word: 'footwork',  syllables: ['foot', 'work'],   definition: 'The way in which the feet are used; skillful maneuvering to achieve something.' },
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
    { id: 's12_w1', word: 'classroom',  syllables: ['class', 'room'],   definition: 'A room in which a class of students is taught.' },
    { id: 's12_w2', word: 'notebook',   syllables: ['note', 'book'],    definition: 'A small book with blank or ruled pages for writing notes.' },
    { id: 's12_w3', word: 'reading',    syllables: ['read', 'ing'],     definition: 'The action or skill of reading written or printed matter.' },
    { id: 's12_w4', word: 'teacher',    syllables: ['teach', 'er'],     definition: 'A person who teaches, especially one employed in a school.' },
    { id: 's12_w5', word: 'schoolwork', syllables: ['school', 'work'],  definition: 'Work assigned or done in school; academic work or assignments.' },
    { id: 's12_w6', word: 'classwork',  syllables: ['class', 'work'],   definition: 'Schoolwork done in class rather than at home.' },
    { id: 's12_w7', word: 'schoolyard', syllables: ['school', 'yard'],  definition: 'The outdoor area of a school where children play; a school playground.' },
    { id: 's12_w8', word: 'schoolroom', syllables: ['school', 'room'],  definition: 'A room used for lessons in a school; a classroom.' },
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
    { id: 's13_w1', word: 'paintbrush', syllables: ['paint', 'brush'],        definition: 'A brush used for applying paint to a surface or canvas.' },
    { id: 's13_w2', word: 'sunshine',   syllables: ['sun', 'shine'],          definition: 'Direct sunlight that is unobstructed by cloud; cheerfulness.' },
    { id: 's13_w3', word: 'golden',     syllables: ['gold', 'en'],            definition: 'Colored or shining like gold; made of gold; very precious or excellent.' },
    { id: 's13_w4', word: 'color',      syllables: ['col', 'or'],             definition: 'The property of an object that depends on the light it reflects; a hue or tint.' },
    { id: 's13_w5', word: 'colorful',   syllables: ['col', 'or', 'ful'],      definition: 'Having much or varied color; full of interest; vivid or lively.' },
    { id: 's13_w6', word: 'brighten',   syllables: ['bright', 'en'],          definition: 'To make or become brighter; to become more cheerful or hopeful.' },
    { id: 's13_w7', word: 'darken',     syllables: ['dark', 'en'],            definition: 'To make or become dark or darker; to make gloomy or foreboding.' },
    { id: 's13_w8', word: 'painter',    syllables: ['paint', 'er'],           definition: 'An artist who paints pictures; a person who applies paint to buildings.' },
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
    { id: 's14_w1', word: 'songwriter', syllables: ['song', 'writ', 'er'], definition: 'A person who writes the words and often the music of popular songs.' },
    { id: 's14_w2', word: 'drumbeat',   syllables: ['drum', 'beat'],        definition: 'A stroke or pattern of strokes on a drum; a regular rhythmic pattern.' },
    { id: 's14_w3', word: 'soundtrack', syllables: ['sound', 'track'],      definition: 'The recorded sound for a movie; a recording of music from a film or show.' },
    { id: 's14_w4', word: 'playback',   syllables: ['play', 'back'],        definition: 'The action of reproducing previously recorded sound or pictures.' },
    { id: 's14_w5', word: 'playlist',   syllables: ['play', 'list'],        definition: 'A list of recorded songs or pieces of music played in sequence.' },
    { id: 's14_w6', word: 'downbeat',   syllables: ['down', 'beat'],        definition: 'The first beat of a bar; a pessimistic or gloomy tone or mood.' },
    { id: 's14_w7', word: 'tracklist',  syllables: ['track', 'list'],       definition: 'A list of all the tracks on a music album, EP, or playlist.' },
    { id: 's14_w8', word: 'downplay',   syllables: ['down', 'play'],        definition: 'To make something seem less important than it actually is; to understate.' },
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
    { id: 's15_w1', word: 'teamwork',   syllables: ['team', 'work'],   definition: 'The combined action of a group of people, especially when effective and efficient.' },
    { id: 's15_w2', word: 'player',     syllables: ['play', 'er'],     definition: 'A person taking part in a sport or game; a person who plays a musical instrument.' },
    { id: 's15_w3', word: 'scoreboard', syllables: ['score', 'board'], definition: 'A large board for publicly displaying the score of a game or match.' },
    { id: 's15_w4', word: 'winner',     syllables: ['win', 'ner'],     definition: 'A person or thing that wins a contest or competition.' },
    { id: 's15_w5', word: 'ballgame',   syllables: ['ball', 'game'],   definition: 'A game played with a ball; a situation of a particular type.' },
    { id: 's15_w6', word: 'gameplay',   syllables: ['game', 'play'],   definition: 'The way in which a game is played; the features of a game from a player\'s perspective.' },
    { id: 's15_w7', word: 'matchplay',  syllables: ['match', 'play'],  definition: 'A form of golf in which each hole is won or lost individually; competitive match format.' },
    { id: 's15_w8', word: 'groundwork', syllables: ['ground', 'work'], definition: 'Preliminary or basic work done as a foundation for something; preparation.' },
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
    { id: 's16_w1', word: 'wildlife',  syllables: ['wild', 'life'],    definition: 'Wild animals and plants collectively; fauna and flora of a natural habitat.' },
    { id: 's16_w2', word: 'firefly',   syllables: ['fire', 'fly'],     definition: 'A soft-bodied beetle that produces a greenish-yellow light from its abdomen.' },
    { id: 's16_w3', word: 'birdsong',  syllables: ['bird', 'song'],    definition: 'The musical vocalizations of a bird; the collective sound of birds singing.' },
    { id: 's16_w4', word: 'waterfall', syllables: ['water', 'fall'],   definition: 'A cascade of water falling from a height over rocks.' },
    { id: 's16_w5', word: 'nightfall', syllables: ['night', 'fall'],   definition: 'The onset of night; the time in the evening when darkness falls.' },
    { id: 's16_w6', word: 'foxtail',   syllables: ['fox', 'tail'],     definition: 'The bushy tail of a fox; any of several grasses with soft tail-like seed heads.' },
    { id: 's16_w7', word: 'songbird',  syllables: ['song', 'bird'],    definition: 'A bird with a musical song; a bird of the order Passeriformes (perching birds).' },
    { id: 's16_w8', word: 'wildfire',  syllables: ['wild', 'fire'],    definition: 'A large, destructive fire that spreads quickly over uncultivated land.' },
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
    { id: 's17_w1', word: 'worker',    syllables: ['work', 'er'],         definition: 'A person who works, especially one employed in a particular job.' },
    { id: 's17_w2', word: 'workplace', syllables: ['work', 'place'],      definition: 'A place where people work, such as an office or factory.' },
    { id: 's17_w3', word: 'workforce', syllables: ['work', 'force'],      definition: 'The people engaged in or available for work, in a country or company.' },
    { id: 's17_w4', word: 'workday',   syllables: ['work', 'day'],        definition: 'A day on which one normally works; the part of a day during which one works.' },
    { id: 's17_w5', word: 'freelance', syllables: ['free', 'lance'],      definition: 'Self-employed and hired to work for different clients at different times.' },
    { id: 's17_w6', word: 'overtime',  syllables: ['over', 'time'],       definition: 'Time worked in addition to normal working hours; payment for this.' },
    { id: 's17_w7', word: 'workload',  syllables: ['work', 'load'],       definition: 'The amount of work to be done by a person or machine; the burden of tasks assigned.' },
    { id: 's17_w8', word: 'lifework',  syllables: ['life', 'work'],       definition: 'The main occupation or work of a person\'s life; a person\'s greatest achievement.' },
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
    { id: 's18_w1', word: 'software', syllables: ['soft', 'ware'],  definition: 'The programs and other operating information used by a computer.' },
    { id: 's18_w2', word: 'hardware', syllables: ['hard', 'ware'],  definition: 'The physical components of a computer; tools and heavy equipment generally.' },
    { id: 's18_w3', word: 'network',  syllables: ['net', 'work'],   definition: 'A group of interconnected things; a system of computers linked together.' },
    { id: 's18_w4', word: 'website',  syllables: ['web', 'site'],   definition: 'A set of related pages on the World Wide Web accessed via a single address.' },
    { id: 's18_w5', word: 'database', syllables: ['data', 'base'],  definition: 'A structured set of data held in a computer, especially accessible in various ways.' },
    { id: 's18_w6', word: 'firewall', syllables: ['fire', 'wall'],  definition: 'A system that prevents unauthorized access to a private computer network.' },
    { id: 's18_w7', word: 'keyword',  syllables: ['key', 'word'],   definition: 'A word that acts as a key to a code; a significant word used to find information.' },
    { id: 's18_w8', word: 'sitework', syllables: ['site', 'work'],  definition: 'Construction work performed at a building site; on-location labor and preparation.' },
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
    { id: 's19_w1', word: 'airport',   syllables: ['air', 'port'],    definition: 'A place where aircraft take off and land, with runways and terminal buildings.' },
    { id: 's19_w2', word: 'seaport',   syllables: ['sea', 'port'],    definition: 'A town or city with a harbor for seagoing vessels; a port on the sea.' },
    { id: 's19_w3', word: 'highway',   syllables: ['high', 'way'],    definition: 'A main road, especially one connecting major towns or cities.' },
    { id: 's19_w4', word: 'railway',   syllables: ['rail', 'way'],    definition: 'A track made of steel rails along which trains run.' },
    { id: 's19_w5', word: 'overpass',  syllables: ['over', 'pass'],   definition: 'A bridge by which a road or railway line passes over another.' },
    { id: 's19_w6', word: 'subway',    syllables: ['sub', 'way'],     definition: 'An underground railway in a city; a tunnel under a road for pedestrians.' },
    { id: 's19_w7', word: 'airship',   syllables: ['air', 'ship'],    definition: 'A power-driven aircraft that is kept buoyant by a body of gas; a dirigible.' },
    { id: 's19_w8', word: 'crossroad', syllables: ['cross', 'road'],  definition: 'A road that crosses a main road; a point at which a crucial decision must be made.' },
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
    { id: 's20_w1', word: 'seashore',   syllables: ['sea', 'shore'],    definition: 'The land along the edge of a sea or ocean; the beach.' },
    { id: 's20_w2', word: 'surfboard',  syllables: ['surf', 'board'],   definition: 'A long, narrow board used for riding on ocean waves.' },
    { id: 's20_w3', word: 'seawater',   syllables: ['sea', 'water'],    definition: 'The water in or taken from the sea; salt water.' },
    { id: 's20_w4', word: 'tideland',   syllables: ['tide', 'land'],    definition: 'Low coastal land that is covered with water at high tide and exposed at low tide.' },
    { id: 's20_w5', word: 'seabed',     syllables: ['sea', 'bed'],      definition: 'The ground under the sea; the ocean floor.' },
    { id: 's20_w6', word: 'seaweed',    syllables: ['sea', 'weed'],     definition: 'Large algae growing in the sea or on rocks below the high-water mark.' },
    { id: 's20_w7', word: 'landfall',   syllables: ['land', 'fall'],    definition: 'An approach to land after a sea voyage; when a storm reaches the land.' },
    { id: 's20_w8', word: 'breakwater', syllables: ['break', 'water'],  definition: 'A barrier built out into the sea to protect a harbor or beach from waves.' },
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
    { id: 's21_w1', word: 'firelight', syllables: ['fire', 'light'],  definition: 'The light from a fire, especially an open fire in a fireplace.' },
    { id: 's21_w2', word: 'sunburn',   syllables: ['sun', 'burn'],    definition: 'Inflammation of the skin caused by overexposure to the sun\'s ultraviolet rays.' },
    { id: 's21_w3', word: 'sunbeam',   syllables: ['sun', 'beam'],    definition: 'A ray of sunlight streaming through clouds or other openings.' },
    { id: 's21_w4', word: 'flashlight',syllables: ['flash', 'light'], definition: 'A portable electric lamp powered by batteries; a torch.' },
    { id: 's21_w5', word: 'sunray',    syllables: ['sun', 'ray'],     definition: 'A ray of sunlight; a single beam of radiant energy from the sun.' },
    { id: 's21_w6', word: 'sunlight',  syllables: ['sun', 'light'],   definition: 'Light emitted by the sun; the direct radiation from the sun.' },
    { id: 's21_w7', word: 'fireglow',  syllables: ['fire', 'glow'],   definition: 'The warm, orange-red glow cast by a fire, especially at dusk.' },
    { id: 's21_w8', word: 'burnout',   syllables: ['burn', 'out'],    definition: 'Physical or mental collapse caused by overwork; the failure of an electrical component.' },
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
    { id: 's22_w1', word: 'flower',     syllables: ['flow', 'er'],           definition: 'The seed-bearing part of a plant; a blossom.' },
    { id: 's22_w2', word: 'garden',     syllables: ['gar', 'den'],           definition: 'A piece of ground for growing flowers, vegetables, or other plants.' },
    { id: 's22_w3', word: 'seedling',   syllables: ['seed', 'ling'],         definition: 'A young plant raised from seed rather than from a cutting or bulb.' },
    { id: 's22_w4', word: 'greenhouse', syllables: ['green', 'house'],       definition: 'A glass building in which plants are grown that need protection from cold.' },
    { id: 's22_w5', word: 'sunflower',  syllables: ['sun', 'flow', 'er'],    definition: 'A tall plant with large yellow-petaled flowers that turn to follow the sun.' },
    { id: 's22_w6', word: 'flowerbed',  syllables: ['flow', 'er', 'bed'],    definition: 'A garden bed in which flowers are grown.' },
    { id: 's22_w7', word: 'seedbed',    syllables: ['seed', 'bed'],          definition: 'A bed of earth prepared for germinating seeds; a place that encourages growth.' },
    { id: 's22_w8', word: 'blooming',   syllables: ['bloom', 'ing'],         definition: 'Flowering; in the state of producing flowers; thriving and flourishing.' },
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
    { id: 's23_w1', word: 'springtime', syllables: ['spring', 'time'],        definition: 'The season of spring; a period of growth, renewal, and new beginnings.' },
    { id: 's23_w2', word: 'summertime', syllables: ['sum', 'mer', 'time'],    definition: 'The season or period of summer.' },
    { id: 's23_w3', word: 'wintertime', syllables: ['win', 'ter', 'time'],    definition: 'The season or period of winter.' },
    { id: 's23_w4', word: 'springtide', syllables: ['spring', 'tide'],        definition: 'A spring tide; poetically, the season of spring and its renewed energy.' },
    { id: 's23_w5', word: 'wintertide', syllables: ['win', 'ter', 'tide'],    definition: 'The winter season; a poetic or literary term for wintertime.' },
    { id: 's23_w6', word: 'season',     syllables: ['sea', 'son'],            definition: 'Each of the four divisions of the year; a period of the year with particular activity.' },
    { id: 's23_w7', word: 'longtime',   syllables: ['long', 'time'],          definition: 'Having existed or continued for a long time; of long standing.' },
    { id: 's23_w8', word: 'seaside',    syllables: ['sea', 'side'],           definition: 'A place by the sea, especially a beach area or holiday resort.' },
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
    { id: 's24_w1', word: 'downtown',  syllables: ['down', 'town'],   definition: 'The central business area of a city; in or toward the center of a city.' },
    { id: 's24_w2', word: 'uptown',    syllables: ['up', 'town'],     definition: 'The residential area of a town or city, away from the center.' },
    { id: 's24_w3', word: 'skyline',   syllables: ['sky', 'line'],    definition: 'The outline of buildings and structures against the sky; a city\'s silhouette.' },
    { id: 's24_w4', word: 'sidewalk',  syllables: ['side', 'walk'],   definition: 'A paved path for pedestrians at the side of a road.' },
    { id: 's24_w5', word: 'crosswalk', syllables: ['cross', 'walk'],  definition: 'A marked path for pedestrians to cross a road.' },
    { id: 's24_w6', word: 'upland',    syllables: ['up', 'land'],     definition: 'An area of high or hilly land; elevated terrain away from the coast.' },
    { id: 's24_w7', word: 'landmark',  syllables: ['land', 'mark'],   definition: 'A recognizable feature of a landscape; an important historical event or discovery.' },
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
    { id: 's25_w1', word: 'healthcare',   syllables: ['health', 'care'],         definition: 'Organized provision of medical care to individuals or a community.' },
    { id: 's25_w2', word: 'wellness',     syllables: ['well', 'ness'],           definition: 'The state of being in good health, especially as an actively pursued goal.' },
    { id: 's25_w3', word: 'fitness',      syllables: ['fit', 'ness'],            definition: 'The condition of being physically and mentally fit and healthy.' },
    { id: 's25_w4', word: 'mindful',      syllables: ['mind', 'ful'],            definition: 'Conscious or aware of something; paying attention in the present moment.' },
    { id: 's25_w5', word: 'lifestyle',    syllables: ['life', 'style'],          definition: 'The way in which a person or group lives; habits and attitudes.' },
    { id: 's25_w6', word: 'heartbeat',    syllables: ['heart', 'beat'],          definition: 'A pulsation of the heart; the rhythm of the heart; a very short time.' },
    { id: 's25_w7', word: 'mindfulness',  syllables: ['mind', 'ful', 'ness'],    definition: 'A mental state achieved by focusing awareness on the present moment calmly.' },
    { id: 's25_w8', word: 'workout',      syllables: ['work', 'out'],            definition: 'A session of vigorous physical exercise or training.' },
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
    { id: 's26_w1', word: 'starlight',  syllables: ['star', 'light'],   definition: 'The light that comes from the stars.' },
    { id: 's26_w2', word: 'moonshine',  syllables: ['moon', 'shine'],   definition: 'The light of the moon; foolish talk; illegally distilled liquor.' },
    { id: 's26_w3', word: 'sunrise',    syllables: ['sun', 'rise'],     definition: 'The time in the morning when the sun appears above the horizon.' },
    { id: 's26_w4', word: 'sunset',     syllables: ['sun', 'set'],      definition: 'The time in the evening when the sun disappears below the horizon.' },
    { id: 's26_w5', word: 'earthrise',  syllables: ['earth', 'rise'],   definition: 'The rising of the Earth above the lunar horizon, as seen from the moon.' },
    { id: 's26_w6', word: 'spacewalk',  syllables: ['space', 'walk'],   definition: 'A period of physical activity outside a spacecraft by an astronaut in space.' },
    { id: 's26_w7', word: 'starshine',  syllables: ['star', 'shine'],   definition: 'The light or glow emitted by the stars; the illumination of the night sky.' },
    { id: 's26_w8', word: 'moonrise',   syllables: ['moon', 'rise'],    definition: 'The time when the moon appears above the horizon.' },
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
    { id: 's27_w1', word: 'powerful',   syllables: ['power', 'ful'],    definition: 'Having great power, strength, or influence; capable of producing strong effects.' },
    { id: 's27_w2', word: 'powerless',  syllables: ['power', 'less'],   definition: 'Without ability, influence, or authority; unable to produce an effect.' },
    { id: 's27_w3', word: 'powerhouse', syllables: ['power', 'house'],  definition: 'A person or thing of great energy or power; a building where power is generated.' },
    { id: 's27_w4', word: 'windmill',   syllables: ['wind', 'mill'],    definition: 'A building with sails or blades driven by wind, used to grind grain or generate power.' },
    { id: 's27_w5', word: 'firepower',  syllables: ['fire', 'power'],   definition: 'The destructive capacity of weapons; the capacity to deliver effective pressure or force.' },
    { id: 's27_w6', word: 'willpower',  syllables: ['will', 'power'],   definition: 'Control exerted to do something or restrain impulses; determination.' },
    { id: 's27_w7', word: 'manpower',   syllables: ['man', 'power'],    definition: 'The number of people working or available for work; human resources.' },
    { id: 's27_w8', word: 'overflow',   syllables: ['over', 'flow'],    definition: 'To flow over the brim of; an excess amount that has exceeded a container\'s capacity.' },
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
    { id: 's28_w1', word: 'building',   syllables: ['build', 'ing'],      definition: 'A structure with a roof and walls; the process of constructing something.' },
    { id: 's28_w2', word: 'outdoor',    syllables: ['out', 'door'],       definition: 'Done, situated, or used outdoors; relating to the open air.' },
    { id: 's28_w3', word: 'window',     syllables: ['win', 'dow'],        definition: 'An opening in a wall or roof, fitted with glass, to admit light and air.' },
    { id: 's28_w4', word: 'floorboard', syllables: ['floor', 'board'],    definition: 'A long plank forming part of a wooden floor in a building.' },
    { id: 's28_w5', word: 'stonework',  syllables: ['stone', 'work'],     definition: 'Masonry; the parts of a building made of stone.' },
    { id: 's28_w6', word: 'stonewall',  syllables: ['stone', 'wall'],     definition: 'A wall built of stone; to obstruct or delay by being uncommunicative.' },
    { id: 's28_w7', word: 'buildout',   syllables: ['build', 'out'],      definition: 'The expansion of a space or system; the act of developing or fitting out an area.' },
    { id: 's28_w8', word: 'wallboard',  syllables: ['wall', 'board'],     definition: 'A type of board used for making or covering walls, such as drywall.' },
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
    { id: 's29_w1', word: 'thinking',   syllables: ['think', 'ing'],     definition: 'The process of using one\'s mind to produce thoughts; a way of reasoning.' },
    { id: 's29_w2', word: 'outwit',     syllables: ['out', 'wit'],       definition: 'To deceive or defeat someone by being more clever or cunning.' },
    { id: 's29_w3', word: 'foresight',  syllables: ['fore', 'sight'],    definition: 'The ability to predict what will happen; care in planning for the future.' },
    { id: 's29_w4', word: 'deepen',     syllables: ['deep', 'en'],       definition: 'To make or become deeper or more intense; to grow more profound.' },
    { id: 's29_w5', word: 'deepening',  syllables: ['deep', 'en', 'ing'], definition: 'Becoming deeper or more intense; making something more profound or serious.' },
    { id: 's29_w6', word: 'forethought',syllables: ['fore', 'thought'],  definition: 'Careful consideration of what will be necessary in the future; prior planning.' },
    { id: 's29_w7', word: 'sharpen',    syllables: ['sharp', 'en'],      definition: 'To make or become sharp or sharper; to make or become more acute or forceful.' },
    { id: 's29_w8', word: 'outthink',   syllables: ['out', 'think'],     definition: 'To think more cleverly or creatively than; to outsmart mentally.' },
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
    { id: 's30_w1', word: 'cookbook',   syllables: ['cook', 'book'],    definition: 'A book containing recipes and other information about preparing and cooking food.' },
    { id: 's30_w2', word: 'bakehouse',  syllables: ['bake', 'house'],   definition: 'A building used for baking; a bakery.' },
    { id: 's30_w3', word: 'roasting',   syllables: ['roast', 'ing'],    definition: 'Cooking food by dry heat in an oven; the act of criticizing or teasing someone.' },
    { id: 's30_w4', word: 'cooking',    syllables: ['cook', 'ing'],     definition: 'The practice or skill of preparing food; the food produced by this activity.' },
    { id: 's30_w5', word: 'roaster',    syllables: ['roast', 'er'],     definition: 'A container or oven for roasting food; a chicken or other bird suitable for roasting.' },
    { id: 's30_w6', word: 'chopstick',  syllables: ['chop', 'stick'],   definition: 'Each of a pair of thin tapered sticks used to pick up food, especially in East Asia.' },
    { id: 's30_w7', word: 'blender',    syllables: ['blend', 'er'],     definition: 'An electric appliance for liquefying, chopping, or mixing food.' },
    { id: 's30_w8', word: 'cookhouse',  syllables: ['cook', 'house'],   definition: 'A kitchen, especially in a military camp or ranch; a large field kitchen.' },
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
    { id: 's31_w1', word: 'grateful',       syllables: ['grate', 'ful'],               definition: 'Feeling or showing thankfulness and appreciation; warmly or deeply appreciative.' },
    { id: 's31_w2', word: 'regret',         syllables: ['re', 'gret'],                 definition: 'A feeling of sadness or disappointment about something that has happened.' },
    { id: 's31_w3', word: 'content',        syllables: ['con', 'tent'],                definition: 'A state of peaceful happiness; satisfied with one\'s lot.' },
    { id: 's31_w4', word: 'discontent',     syllables: ['dis', 'con', 'tent'],          definition: 'Dissatisfaction with one\'s circumstances; a restless desire for better things.' },
    { id: 's31_w5', word: 'disappoint',     syllables: ['dis', 'ap', 'point'],          definition: 'To fail to fulfill the hopes or expectations of someone.' },
    { id: 's31_w6', word: 'excitement',     syllables: ['ex', 'cite', 'ment'],          definition: 'A feeling of great enthusiasm and eagerness; an exciting event or situation.' },
    { id: 's31_w7', word: 'contentment',    syllables: ['con', 'tent', 'ment'],         definition: 'A state of happiness and satisfaction with one\'s position or situation.' },
    { id: 's31_w8', word: 'disappointment', syllables: ['dis', 'ap', 'point', 'ment'],  definition: 'The feeling of sadness when one\'s hopes or expectations are not fulfilled.' },
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
    { id: 's32_w1', word: 'running',  syllables: ['run', 'ning'],     definition: 'Moving at speed on foot; managing or operating something; a continuous flow.' },
    { id: 's32_w2', word: 'walking',  syllables: ['walk', 'ing'],     definition: 'Moving at a regular pace by lifting and setting down each foot in turn.' },
    { id: 's32_w3', word: 'jumping',  syllables: ['jump', 'ing'],     definition: 'Pushing off with the legs to propel oneself into the air; making a sudden movement.' },
    { id: 's32_w4', word: 'climbing', syllables: ['climb', 'ing'],    definition: 'Going up or ascending, especially by using the hands and feet.' },
    { id: 's32_w5', word: 'swimmer',  syllables: ['swim', 'mer'],     definition: 'A person or animal that swims, especially one who swims well.' },
    { id: 's32_w6', word: 'upward',   syllables: ['up', 'ward'],      definition: 'Toward a higher place, level, or position; increasing in number or value.' },
    { id: 's32_w7', word: 'downward', syllables: ['down', 'ward'],    definition: 'Toward a lower place, level, or condition; moving or extending toward what is below.' },
    { id: 's32_w8', word: 'runner',   syllables: ['run', 'ner'],      definition: 'A person who runs, especially in a specified way; a messenger.' },
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
    { id: 's33_w1', word: 'friendship',    syllables: ['friend', 'ship'],              definition: 'The emotions or conduct of friends; the state of being friends.' },
    { id: 's33_w2', word: 'partner',       syllables: ['part', 'ner'],                 definition: 'A person who shares or takes part in an activity with another; a spouse.' },
    { id: 's33_w3', word: 'companion',     syllables: ['com', 'pan', 'ion'],           definition: 'A person or animal with whom one spends a lot of time; a comrade.' },
    { id: 's33_w4', word: 'trustworthy',   syllables: ['trust', 'worth', 'y'],         definition: 'Able to be relied on as honest or truthful; deserving of trust.' },
    { id: 's33_w5', word: 'kindhearted',   syllables: ['kind', 'heart', 'ed'],         definition: 'Having a kind and sympathetic nature; warmhearted and generous.' },
    { id: 's33_w6', word: 'wholehearted',  syllables: ['whole', 'heart', 'ed'],        definition: 'Showing or characterized by complete sincerity and commitment.' },
    { id: 's33_w7', word: 'companionship', syllables: ['com', 'pan', 'ion', 'ship'],   definition: 'A feeling of fellowship or friendship; the company of another person.' },
    { id: 's33_w8', word: 'worthy',        syllables: ['worth', 'y'],                  definition: 'Deserving effort, attention, or respect; having worth, merit, or value.' },
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
    { id: 's34_w1', word: 'breaking', syllables: ['break', 'ing'],  definition: 'Separating into pieces; failing to keep a rule or promise; most recent news.' },
    { id: 's34_w2', word: 'making',   syllables: ['mak', 'ing'],    definition: 'The process of creating or producing something; the essential qualities of a person.' },
    { id: 's34_w3', word: 'taking',   syllables: ['tak', 'ing'],    definition: 'The act of getting or removing something; an amount of money received.' },
    { id: 's34_w4', word: 'giving',   syllables: ['giv', 'ing'],    definition: 'The act of transferring something to someone; providing something voluntarily.' },
    { id: 's34_w5', word: 'changing', syllables: ['chang', 'ing'],  definition: 'Making or becoming different; moving from one to another.' },
    { id: 's34_w6', word: 'learning', syllables: ['learn', 'ing'],  definition: 'The acquisition of knowledge or skills through experience, study, or teaching.' },
    { id: 's34_w7', word: 'growing',  syllables: ['grow', 'ing'],   definition: 'Increasing in size, amount, or degree; developing.' },
    { id: 's34_w8', word: 'driving',  syllables: ['driv', 'ing'],   definition: 'Operating a motor vehicle; urging or motivating forcefully.' },
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
    { id: 's35_w1', word: 'backtrack',  syllables: ['back', 'track'],   definition: 'To retrace one\'s route; to reverse a previous decision or position.' },
    { id: 's35_w2', word: 'backfire',   syllables: ['back', 'fire'],    definition: 'To have the opposite effect to what was intended; to go wrong.' },
    { id: 's35_w3', word: 'backpack',   syllables: ['back', 'pack'],    definition: 'A bag carried on the back, supported by straps over the shoulders.' },
    { id: 's35_w4', word: 'background', syllables: ['back', 'ground'],  definition: 'The part of a scene behind the main subject; a person\'s education and experience.' },
    { id: 's35_w5', word: 'backbone',   syllables: ['back', 'bone'],    definition: 'The spine; the chief support of a system; strength of character.' },
    { id: 's35_w6', word: 'backhand',   syllables: ['back', 'hand'],    definition: 'A stroke played with the back of the hand facing the direction of movement.' },
    { id: 's35_w7', word: 'backstage',  syllables: ['back', 'stage'],   definition: 'Behind the scenes in a theater; away from public view.' },
    { id: 's35_w8', word: 'backstroke', syllables: ['back', 'stroke'],  definition: 'A swimming stroke performed on the back, with both arms lifted alternately.' },
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
    { id: 's36_w1', word: 'rebuild',  syllables: ['re', 'build'],   definition: 'To build something again after it has been damaged or destroyed.' },
    { id: 's36_w2', word: 'remake',   syllables: ['re', 'make'],    definition: 'To make something again or differently; a new version of a film or recording.' },
    { id: 's36_w3', word: 'restart',  syllables: ['re', 'start'],   definition: 'To start something again; a fresh beginning after stopping.' },
    { id: 's36_w4', word: 'rethink',  syllables: ['re', 'think'],   definition: 'To think again about a plan in order to make changes to it; to reconsider.' },
    { id: 's36_w5', word: 'replay',   syllables: ['re', 'play'],    definition: 'To play something again; a playback of recorded material; a replayed match.' },
    { id: 's36_w6', word: 'reuse',    syllables: ['re', 'use'],     definition: 'To use something again or more than once; repeated use.' },
    { id: 's36_w7', word: 'refresh',  syllables: ['re', 'fresh'],   definition: 'To give new strength or energy to; to update a display; to cool or revive.' },
    { id: 's36_w8', word: 'restore',  syllables: ['re', 'store'],   definition: 'To bring back to an original or normal condition; to return something to a person.' },
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
    { id: 's37_w1', word: 'bravery',  syllables: ['brave', 'ry'],        definition: 'Courageous behavior or character; the quality of being ready to face danger.' },
    { id: 's37_w2', word: 'patience', syllables: ['pa', 'tience'],       definition: 'The ability to accept delay or trouble without becoming upset or anxious.' },
    { id: 's37_w3', word: 'wisdom',   syllables: ['wis', 'dom'],         definition: 'The quality of having experience, knowledge, and good judgment; accumulated learning.' },
    { id: 's37_w4', word: 'loyalty',  syllables: ['loy', 'al', 'ty'],    definition: 'The quality of being loyal; faithful adherence to a person, cause, or duty.' },
    { id: 's37_w5', word: 'fairly',   syllables: ['fair', 'ly'],         definition: 'With justice; to a moderately high degree; somewhat; quite.' },
    { id: 's37_w6', word: 'justly',   syllables: ['just', 'ly'],         definition: 'In a just, fair, or right manner; with legal or moral justification.' },
    { id: 's37_w7', word: 'bravely',  syllables: ['brave', 'ly'],        definition: 'In a courageous and fearless manner; with great bravery.' },
    { id: 's37_w8', word: 'loyal',    syllables: ['loy', 'al'],          definition: 'Giving constant and faithful support; showing firm allegiance to a person or cause.' },
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
    { id: 's38_w1', word: 'unfair',   syllables: ['un', 'fair'],    definition: 'Not based on or showing fairness; treating someone unjustly.' },
    { id: 's38_w2', word: 'unkind',   syllables: ['un', 'kind'],    definition: 'Inconsiderate and harsh; not friendly or pleasant.' },
    { id: 's38_w3', word: 'unjust',   syllables: ['un', 'just'],    definition: 'Not just or fair; contrary to justice or fairness.' },
    { id: 's38_w4', word: 'unsafe',   syllables: ['un', 'safe'],    definition: 'Not safe; dangerous; likely to cause harm.' },
    { id: 's38_w5', word: 'unwise',   syllables: ['un', 'wise'],    definition: 'Showing a lack of wisdom or sense; not prudent or sensible.' },
    { id: 's38_w6', word: 'insane',   syllables: ['in', 'sane'],    definition: 'In a state of mind that prevents normal behavior; extremely foolish or irrational.' },
    { id: 's38_w7', word: 'unfit',    syllables: ['un', 'fit'],     definition: 'Not of the necessary quality or standard; not in good physical condition.' },
    { id: 's38_w8', word: 'harmful',  syllables: ['harm', 'ful'],   definition: 'Causing or likely to cause harm; damaging; injurious.' },
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
    { id: 's39_w2', word: 'woodland',  syllables: ['wood', 'land'],   definition: 'Land covered with trees; forest; the area of trees growing together.' },
    { id: 's39_w3', word: 'evergreen', syllables: ['ever', 'green'],  definition: 'A plant that retains green leaves throughout the year; lasting indefinitely.' },
    { id: 's39_w4', word: 'oakwood',   syllables: ['oak', 'wood'],    definition: 'A forest or grove of oak trees; timber from oak trees.' },
    { id: 's39_w5', word: 'woodwork',  syllables: ['wood', 'work'],   definition: 'Work made from wood; the wooden parts of a room; the practice of woodworking.' },
    { id: 's39_w6', word: 'greenwood', syllables: ['green', 'wood'],  definition: 'A forest in its natural leafy state; a shady grove (literary/archaic).' },
    { id: 's39_w7', word: 'rootwork',  syllables: ['root', 'work'],   definition: 'Work involving roots; in folklore, magic or healing that uses plant roots.' },
    { id: 's39_w8', word: 'woodcraft', syllables: ['wood', 'craft'],  definition: 'Skill in carving or shaping wood; knowledge of the forest and wilderness survival.' },
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
    { id: 's40_w1', word: 'doorbell',  syllables: ['door', 'bell'],   definition: 'A bell in a building that can be rung by visitors pressing a button outside.' },
    { id: 's40_w2', word: 'doorstep',  syllables: ['door', 'step'],   definition: 'A step leading up to the outer door of a house; one\'s immediate neighborhood.' },
    { id: 's40_w3', word: 'doormat',   syllables: ['door', 'mat'],    definition: 'A mat placed at a door for wiping shoes; a person who is easily exploited.' },
    { id: 's40_w4', word: 'bookshelf', syllables: ['book', 'shelf'],  definition: 'A shelf on which books can be stored; a bookcase.' },
    { id: 's40_w5', word: 'cupboard',  syllables: ['cup', 'board'],   definition: 'A piece of furniture or small recess with a door and usually shelves.' },
    { id: 's40_w6', word: 'bedroom',   syllables: ['bed', 'room'],    definition: 'A room used for sleeping.' },
    { id: 's40_w7', word: 'keychain',  syllables: ['key', 'chain'],   definition: 'A small chain for securing a set of keys, often with a decorative attachment.' },
    { id: 's40_w8', word: 'keyboard',  syllables: ['key', 'board'],   definition: 'A panel of keys on a typewriter, computer, or musical instrument.' },
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
    { id: 's41_w2', word: 'courthouse', syllables: ['court', 'house'],     definition: 'A building in which a judicial court is held.' },
    { id: 's41_w3', word: 'lawbreaker', syllables: ['law', 'break', 'er'], definition: 'A person who breaks the law; a criminal.' },
    { id: 's41_w4', word: 'freedom',    syllables: ['free', 'dom'],        definition: 'The power or right to act, speak, or think as one wants; absence of constraint.' },
    { id: 's41_w5', word: 'landlord',   syllables: ['land', 'lord'],       definition: 'A person who rents out property; the owner of a pub or rooming house.' },
    { id: 's41_w6', word: 'lawful',     syllables: ['law', 'ful'],         definition: 'Conforming to, permitted by, or recognized by law; legitimate.' },
    { id: 's41_w7', word: 'outlaw',     syllables: ['out', 'law'],         definition: 'A person who has broken the law; to ban something by making it illegal.' },
    { id: 's41_w8', word: 'lordship',   syllables: ['lord', 'ship'],       definition: 'Supremacy; dominion; a respectful form of address for a lord or judge.' },
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
    { id: 's42_w1', word: 'expect',  syllables: ['ex', 'pect'],   definition: 'To regard something as likely to happen; to believe that someone will arrive.' },
    { id: 's42_w2', word: 'extend',  syllables: ['ex', 'tend'],   definition: 'To make longer or larger; to stretch out; to offer or make available.' },
    { id: 's42_w3', word: 'pretend', syllables: ['pre', 'tend'],  definition: 'To act as if something is true when it is not; to make believe.' },
    { id: 's42_w4', word: 'prevent', syllables: ['pre', 'vent'],  definition: 'To keep something from happening; to make impossible.' },
    { id: 's42_w5', word: 'present', syllables: ['pre', 'sent'],  definition: 'Existing or occurring now; a gift; to formally introduce or offer something.' },
    { id: 's42_w6', word: 'precede', syllables: ['pre', 'cede'],  definition: 'To come before something else in time, order, or importance.' },
    { id: 's42_w7', word: 'exceed',  syllables: ['ex', 'ceed'],   definition: 'To be greater in number or size than; to go beyond what is allowed.' },
    { id: 's42_w8', word: 'prefix',  syllables: ['pre', 'fix'],   definition: 'A word element placed at the beginning of a word to modify its meaning.' },
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
    { id: 's43_w1', word: 'nation',     syllables: ['na', 'tion'],              definition: 'A large body of people united by common territory, history, or government.' },
    { id: 's43_w2', word: 'action',     syllables: ['ac', 'tion'],              definition: 'The process of doing something to achieve an aim; a thing done.' },
    { id: 's43_w3', word: 'mention',    syllables: ['men', 'tion'],             definition: 'To refer to briefly and without going into detail; a brief reference.' },
    { id: 's43_w4', word: 'vision',     syllables: ['vi', 'sion'],              definition: 'The ability to see; the ability to plan imaginatively for the future.' },
    { id: 's43_w5', word: 'decision',   syllables: ['de', 'ci', 'sion'],        definition: 'A conclusion reached after consideration; the action of deciding something.' },
    { id: 's43_w6', word: 'convention', syllables: ['con', 'ven', 'tion'],      definition: 'A way in which something is usually done; a large formal assembly.' },
    { id: 's43_w7', word: 'attention',  syllables: ['at', 'ten', 'tion'],       definition: 'The notice taken of someone; the act of directing one\'s mind to something.' },
    { id: 's43_w8', word: 'invention',  syllables: ['in', 'ven', 'tion'],       definition: 'The action of inventing something; a thing invented; a false story.' },
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
    { id: 's44_w2', word: 'teachable',  syllables: ['teach', 'a', 'ble'],       definition: 'Able to be taught; willing and able to learn; a teachable moment.' },
    { id: 's44_w3', word: 'breakable',  syllables: ['break', 'a', 'ble'],       definition: 'Capable of breaking or being broken; fragile.' },
    { id: 's44_w4', word: 'washable',   syllables: ['wash', 'a', 'ble'],        definition: 'Able to be washed without shrinking or other damage.' },
    { id: 's44_w5', word: 'usable',     syllables: ['us', 'a', 'ble'],          definition: 'Able to be used; practical and convenient.' },
    { id: 's44_w6', word: 'doable',     syllables: ['do', 'a', 'ble'],          definition: 'Within one\'s powers; able to be done or performed; feasible.' },
    { id: 's44_w7', word: 'remarkable', syllables: ['re', 'mark', 'a', 'ble'],  definition: 'Worthy of attention; striking or extraordinary; notably unusual.' },
    { id: 's44_w8', word: 'workable',   syllables: ['work', 'a', 'ble'],        definition: 'Able to be carried out; practicable; capable of being worked.' },
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
    { id: 's45_w1', word: 'greater',  syllables: ['great', 'er'],   definition: 'Of a size, amount, or degree above the normal or average; more large or important.' },
    { id: 's45_w2', word: 'faster',   syllables: ['fast', 'er'],    definition: 'Moving or operating at high speed; more quick than another.' },
    { id: 's45_w3', word: 'stronger', syllables: ['strong', 'er'],  definition: 'Having greater physical or mental strength; more forceful or convincing.' },
    { id: 's45_w4', word: 'brighter', syllables: ['bright', 'er'],  definition: 'Giving out more light; more vivid or cheerful; more intelligent.' },
    { id: 's45_w5', word: 'darker',   syllables: ['dark', 'er'],    definition: 'Having less light; more deeply colored; more gloomy or threatening.' },
    { id: 's45_w6', word: 'quicker',  syllables: ['quick', 'er'],   definition: 'Moving fast or doing something in a short time; more prompt or lively.' },
    { id: 's45_w7', word: 'builder',  syllables: ['build', 'er'],   definition: 'A person who constructs things; a person or animal that builds something.' },
    { id: 's45_w8', word: 'leader',   syllables: ['lead', 'er'],    definition: 'The person who leads or commands a group, organization, or country.' },
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
    { id: 's46_w1', word: 'overtake',  syllables: ['over', 'take'],   definition: 'To catch up with and pass while traveling in the same direction; to supersede.' },
    { id: 's46_w2', word: 'overthrow', syllables: ['over', 'throw'],  definition: 'To remove forcibly from power; to knock down; the defeat of a ruler or regime.' },
    { id: 's46_w3', word: 'overturn',  syllables: ['over', 'turn'],   definition: 'To tip over or cause to fall; to reverse a legal decision; to abolish.' },
    { id: 's46_w4', word: 'overrun',   syllables: ['over', 'run'],    definition: 'To spread over or occupy a place in large numbers; to exceed a budget or time.' },
    { id: 's46_w5', word: 'overlook',  syllables: ['over', 'look'],   definition: 'To fail to notice; to look over from a higher position; to disregard.' },
    { id: 's46_w6', word: 'overstep',  syllables: ['over', 'step'],   definition: 'To go beyond a limit; to exceed what is acceptable or allowed.' },
    { id: 's46_w7', word: 'overboard', syllables: ['over', 'board'],  definition: 'Over the side of a ship into the water; to an excessive degree.' },
    { id: 's46_w8', word: 'overlap',   syllables: ['over', 'lap'],    definition: 'To extend over and cover part of something; to occur simultaneously.' },
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
    { id: 's47_w1', word: 'wellknown',  syllables: ['well', 'known'],         definition: 'Famous; known by many people; thoroughly familiar.' },
    { id: 's47_w2', word: 'wellmade',   syllables: ['well', 'made'],          definition: 'Skillfully or carefully constructed; of high quality workmanship.' },
    { id: 's47_w3', word: 'wellbeing',  syllables: ['well', 'be', 'ing'],     definition: 'The state of being comfortable, healthy, or happy; general welfare.' },
    { id: 's47_w4', word: 'welldone',   syllables: ['well', 'done'],          definition: 'Carried out successfully; cooked thoroughly all the way through.' },
    { id: 's47_w5', word: 'welloff',    syllables: ['well', 'off'],           definition: 'In a comfortable financial situation; fairly wealthy or prosperous.' },
    { id: 's47_w6', word: 'goodwill',   syllables: ['good', 'will'],          definition: 'Friendly or cooperative feelings; the established reputation of a business.' },
    { id: 's47_w7', word: 'goodness',   syllables: ['good', 'ness'],          definition: 'The quality of being morally good or virtuous; the nutritious element of food.' },
    { id: 's47_w8', word: 'farewell',   syllables: ['fare', 'well'],          definition: 'Used to express good wishes when parting; a goodbye; a departure.' },
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
    { id: 's48_w1', word: 'heartbreak',   syllables: ['heart', 'break'],         definition: 'Overwhelming distress or grief; a very sad event that causes deep suffering.' },
    { id: 's48_w2', word: 'heartbreaker', syllables: ['heart', 'break', 'er'],   definition: 'A person or thing causing heartbreak; someone who is irresistibly attractive.' },
    { id: 's48_w3', word: 'soulful',      syllables: ['soul', 'ful'],            definition: 'Expressing or appearing to express deep and often sorrowful feeling.' },
    { id: 's48_w4', word: 'deepset',      syllables: ['deep', 'set'],            definition: 'Firmly fixed or established; (of eyes) set deep in the face.' },
    { id: 's48_w5', word: 'skindeep',     syllables: ['skin', 'deep'],           definition: 'Not reaching below the surface; superficial; not profound or enduring.' },
    { id: 's48_w6', word: 'boneset',      syllables: ['bone', 'set'],            definition: 'A North American plant used medicinally; the setting of a broken bone.' },
    { id: 's48_w7', word: 'bloodwork',    syllables: ['blood', 'work'],          definition: 'Analysis of a blood sample to check a person\'s health; blood tests.' },
    { id: 's48_w8', word: 'heartful',     syllables: ['heart', 'ful'],           definition: 'Proceeding from the heart; full of genuine feeling; sincere and warmhearted.' },
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
    { id: 's49_w1', word: 'northward',  syllables: ['north', 'ward'],   definition: 'In a northerly direction; toward the north.' },
    { id: 's49_w2', word: 'southward',  syllables: ['south', 'ward'],   definition: 'In a southerly direction; toward the south.' },
    { id: 's49_w3', word: 'eastward',   syllables: ['east', 'ward'],    definition: 'In an easterly direction; toward the east.' },
    { id: 's49_w4', word: 'westward',   syllables: ['west', 'ward'],    definition: 'In a westerly direction; toward the west.' },
    { id: 's49_w5', word: 'northbound', syllables: ['north', 'bound'],  definition: 'Traveling or heading toward the north.' },
    { id: 's49_w6', word: 'southbound', syllables: ['south', 'bound'],  definition: 'Traveling or heading toward the south.' },
    { id: 's49_w7', word: 'eastern',    syllables: ['east', 'ern'],     definition: 'Situated in, directed toward, or facing the east; of or relating to the east.' },
    { id: 's49_w8', word: 'western',    syllables: ['west', 'ern'],     definition: 'Situated in, directed toward, or facing the west; of or relating to the west.' },
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
    { id: 's50_w1', word: 'sailboat',  syllables: ['sail', 'boat'],   definition: 'A boat propelled by sails; a vessel using wind power to move through water.' },
    { id: 's50_w2', word: 'seaman',    syllables: ['sea', 'man'],     definition: 'A person who works as a sailor; a rank in a navy below petty officer.' },
    { id: 's50_w3', word: 'shipboard', syllables: ['ship', 'board'],  definition: 'On or relating to a ship; used or occurring on a ship.' },
    { id: 's50_w4', word: 'windward',  syllables: ['wind', 'ward'],   definition: 'Facing the direction from which the wind is blowing; the side facing the wind.' },
    { id: 's50_w5', word: 'seaboard',  syllables: ['sea', 'board'],   definition: 'A region bordering on the sea; the seacoast, especially of eastern North America.' },
    { id: 's50_w6', word: 'windstorm', syllables: ['wind', 'storm'],  definition: 'A storm with very strong winds but little or no precipitation.' },
    { id: 's50_w7', word: 'driftwood', syllables: ['drift', 'wood'],  definition: 'Pieces of wood floating on water or washed ashore by the sea.' },
    { id: 's50_w8', word: 'seadrift',  syllables: ['sea', 'drift'],   definition: 'Material drifted or cast ashore by the sea; flotsam carried by ocean currents.' },
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
