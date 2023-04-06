import { StatusBar } from "expo-status-bar";
import { useRef, useEffect, useState } from "react";
import { StyleSheet, View, Animated } from "react-native";
import Heading from "./Heading";
import ChatScreen from "./ChatScreen";
import MessageInputForm from "./MessageInputForm";

const MainScreen = () => {
  const scrollViewRef = useRef(null);
  const [opacity] = useState(new Animated.Value(0.2));

  useEffect(() => {
    const animate = () => {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    };
    animate();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Animated.View style={{ opacity: opacity, flex: 1 }}>
        <Heading />
        <ChatScreen scrollViewRef={scrollViewRef} />
        <MessageInputForm />
      </Animated.View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
});
