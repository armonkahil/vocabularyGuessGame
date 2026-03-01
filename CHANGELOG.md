# Changelog

All notable changes to Vocabulary Guess Game are documented here.

## [0.6.0]

### Added
- Stage progression: completing a stage now shows a "Next Stage" alert and loads the following stage
- "You completed all stages!" alert with a "Finish" button on the final stage
- Unit test for full 50-stage progression end-to-end (`GameScreenProgression.test.tsx`)
- Unit test for last-stage completion path (`GameScreenLastStage.test.tsx`)

### Changed
- Incorrect word submissions now clear the word builder automatically
- Buttons (Clear and Submit) updated to navy blue (`#5B8DB8`)
- Syllable tiles updated to light navy blue
- Splash screen background color darkened to `#1A3A5C`
- App loading background color set to `#1A3A5C` via `app.json`

### Fixed
- Splash screen was not dismissing — replaced animation callback with a reliable `setTimeout`
- `newArchEnabled: true` added to `app.json` to silence React Native New Architecture warning

---

## [0.5.0] — Splash Screen

### Added
- Animated splash screen (`AnimatedSplash.tsx`) with configurable hold and fade durations
- Splash image fills viewport width, centered on a dark navy background
- Unit tests for `AnimatedSplash` covering render, timing, fade, cleanup, and interruption

### Changed
- Splash image path in `app.json` corrected to `splash-image.png`
- Native Expo splash removed to avoid double-image flicker

---

## [0.4.0] — Quality & CI

### Added
- ESLint with `eslint-config-expo` and `eslint-plugin-react-hooks`
- `npm run lint` step added to Travis CI pipeline
- SonarCloud integration via Travis CI addon
- 100% test coverage (statements, branches, functions, lines) across all source files
- `ThemeContext` tests covering AsyncStorage load/error, toggle, persistence, and rejection
- `GameScreenInset` tests covering positive bottom safe-area inset branch

### Fixed
- Unhandled `AsyncStorage` promises in `ThemeContext` — converted to `async/await` with `try/catch`
- Array index used as React key in `WordBuilder` chip list
- Ignored `setTimeout` return value in `GameScreen`
- Nested ternary in `WordBuilder` `borderColor` logic refactored to `if/else if`
- Context provider `value` object wrapped in `useMemo` to prevent unnecessary re-renders
- Duplicate `lib` entry removed from `tsconfig.json`
- `forceConsistentCasingInFileNames` added to `tsconfig.json`

---

## [0.3.0] — Dark Mode & Theming

### Added
- Dark mode toggle button in the game header
- `ThemeContext` with `AsyncStorage` persistence and system colour scheme detection
- `lightColors` / `darkColors` palettes in `src/theme/colors.ts`
- Design tokens: primary blue → Chicago Bears orange → light navy blue accent colour

---

## [0.2.0] — Game Layout & Components

### Added
- Split-screen layout: syllable pool (top) and word builder + hints (bottom)
- `SyllableButton` — pressable syllable tile
- `WordBuilder` — selected syllable chips with Submit / Clear actions
- `HintList` — horizontal scrollable hint cards showing word definitions
- Correct / incorrect feedback with 900 ms auto-clear
- Progress counter (`X / N found`) in the header

### Changed
- Screen layout reworked with flex sections and a 3 px accent border divider

---

## [0.1.0] — Foundation

### Added
- Expo SDK ~52 + React Native 0.76 + TypeScript (strict) project scaffold
- 50 vocabulary stages across themes: Foundations, Weather, Home, Emotions, Food, Adventure, and more
- Core game logic: `buildWordFromSyllables`, `validateWord`, `isStageComplete`
- Travis CI pipeline with Node 20 and Java 17 for SonarCloud analysis
- Initial unit tests for game logic and stage data
- `README.md` with CI and SonarCloud badges
