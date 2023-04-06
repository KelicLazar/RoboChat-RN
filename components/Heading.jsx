import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import { Colors } from "../utils/Colors";
import { Platform } from "react-native";
import { useContext } from "react";
import { ChatContext } from "../context/chat-context";
import { AntDesign } from "@expo/vector-icons";
import Button from "./Button";
import AnimatedText from "./Animated";

const Heading = () => {
  const { isTyping: isLoading, clearAllMessages } = useContext(ChatContext);

  return (
    <View style={styles.heading}>
      <View>
        <Text style={styles.headingText}>
          <AntDesign name="API" size={24} color={Colors.primary500} /> Robo Chat
          <Image
            style={styles.logo}
            source={require("../assets/ai-logo.png")}
          />
        </Text>

        {isLoading ? (
          <AnimatedText customStyle={styles.headingSubText}>
            Typing...
          </AnimatedText>
        ) : (
          <Text style={styles.headingSubText}>Online</Text>
        )}
      </View>

      <Button buttonStyle={styles.clearChatButton} onPress={clearAllMessages}>
        <View>
          <AntDesign
            name="delete"
            style={[styles.headingSubText, { textAlign: "center" }]}
          />
          <Text style={[styles.headingSubText, { fontSize: 10 }]}>
            Clear Chat
          </Text>
        </View>
      </Button>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  heading: {
    paddingTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 10,
    paddingBottom: 5,
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    height: Platform.OS === "web" ? "10vh" : "auto",
  },
  logo: {
    width: 30,
    height: 30,
    alignSelf: "center",
    margin: "auto",
  },
  headingText: {
    fontSize: 35,
    fontFamily: "BebasNeue",
    borderTopColor: Colors.primary500,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary500,
    marginBottom: 5,
    paddingVertical: 3,
    textShadowColor: Colors.secondary500,
    textShadowColor: Colors.primary500,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    color: "#a7aeb0",
  },

  headingSubText: {
    color: "white",
    textShadowColor: "#1CA8BE",
    textShadowOffset: { width: 1, height: -1 },
    textShadowRadius: 1,
    marginLeft: 10,
    fontSize: 14,
    fontFamily: "Alkatra",
  },
  clearChatButton: {
    backgroundColor: "transparent",
    alignSelf: "flex-start",
    marginTop: 5,
  },
});
