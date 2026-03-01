const React = require('react');

const insets = { top: 0, right: 0, bottom: 0, left: 0 };
const frame = { x: 0, y: 0, width: 390, height: 844 };

module.exports = {
  useSafeAreaInsets: () => insets,
  useSafeAreaFrame: () => frame,
  SafeAreaProvider: ({ children }) => children,
  SafeAreaView: ({ children }) => children,
  SafeAreaConsumer: ({ children }) => children(insets),
  initialWindowMetrics: { insets, frame },
};
