import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Image, ImageSourcePropType, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface Props {
  source: ImageSourcePropType;
  /** How long to hold the splash before fading (ms). Default 1200. */
  holdDuration?: number;
  /** How long the fade-out takes (ms). Default 600. */
  fadeDuration?: number;
  onDone: () => void;
}

export const AnimatedSplash: React.FC<Props> = ({
  source,
  holdDuration = 2500,
  fadeDuration = 800,
  onDone,
}) => {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const hold = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: fadeDuration,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) onDone();
      });
    }, holdDuration);

    return () => clearTimeout(hold);
  }, [fadeDuration, holdDuration, onDone, opacity]);

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Image source={source} style={styles.image} resizeMode="contain" />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 999,
    backgroundColor: '#5B8DB8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width,
    height: width,
  },
});
