import React, { useState, useEffect } from "react";
import { Animated } from "react-native";

const AnimatedText = ({ customStyle, children }) => {
  const [animation] = useState(new Animated.Value(0.4));

  useEffect(() => {
    const animate = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animation, {
            toValue: 1,
            duration: 550,
            useNativeDriver: true,
          }),
          Animated.timing(animation, {
            toValue: 0.4,
            duration: 550,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };
    animate();
  }, [animation]);

  return (
    <Animated.Text
      style={{
        ...customStyle,
        width: "auto",
        height: "auto",
        margin: 0,
        opacity: animation,
      }}
    >
      {children}
    </Animated.Text>
  );
};

export default AnimatedText;
