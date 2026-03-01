export interface Colors {
  bg: string;
  surface: string;
  surfaceAlt: string;
  border: string;
  accent: string;
  accentShadow: string;
  onAccent: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textPlaceholder: string;
  clearBg: string;
  correct: string;
  correctText: string;
  correctBorder: string;
  incorrect: string;
}

export const lightColors: Colors = {
  bg:              '#FFFFFF',
  surface:         '#F7FAFC',
  surfaceAlt:      '#F0F4F8',
  border:          '#E2E8F0',
  accent:          '#4A90E2',
  accentShadow:    '#2C5282',
  onAccent:        '#FFFFFF',
  textPrimary:     '#2D3748',
  textSecondary:   '#4A5568',
  textMuted:       '#718096',
  textPlaceholder: '#A0AEC0',
  clearBg:         '#E2E8F0',
  correct:         '#27AE60',
  correctText:     '#22543D',
  correctBorder:   '#9AE6B4',
  incorrect:       '#E74C3C',
};

export const darkColors: Colors = {
  bg:              '#1A202C',
  surface:         '#2D3748',
  surfaceAlt:      '#374151',
  border:          '#4A5568',
  accent:          '#4A90E2',
  accentShadow:    '#1E3A5F',
  onAccent:        '#FFFFFF',
  textPrimary:     '#F7FAFC',
  textSecondary:   '#CBD5E0',
  textMuted:       '#A0AEC0',
  textPlaceholder: '#718096',
  clearBg:         '#4A5568',
  correct:         '#48BB78',
  correctText:     '#9AE6B4',
  correctBorder:   '#276749',
  incorrect:       '#FC8181',
};
