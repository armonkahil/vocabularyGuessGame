import React from 'react';
import { Text } from 'react-native';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  testID?: string;
}

export const Ionicons: React.FC<IconProps> = ({ name, testID }) => (
  <Text testID={testID ?? `icon-${name}`}>{name}</Text>
);
