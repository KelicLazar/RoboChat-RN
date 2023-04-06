import { TextInput, View, StyleSheet } from "react-native";
import Button from "./Button";
import { Ionicons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { Colors } from "../utils/Colors";
import { Platform } from "react-native";
import { ChatContext } from "../context/chat-context";

const MessageInputForm = () => {
  const [message, setMessage] = useState("");
  const chatContext = useContext(ChatContext);

  const handleTextChange = (e) => {
    setMessage(e);
  };

  const submitMessage = async () => {
    const id = new Date().getTime() + Math.random().toString().slice(2);

    if (message.trim()) {
      const newMessage = { role: "user", content: message, id: id };
      chatContext.addNewMessage(newMessage);
      setMessage("");
    }
  };

  return (
    <View style={styles.inputBox}>
      <TextInput
        selectionColor={Colors.secondary400}
        multiline
        maxLength={400}
        placeholder="Message"
        style={styles.input}
        onChangeText={handleTextChange}
        value={message}
      />
      <Button buttonStyle={styles.sendButton} onPress={submitMessage}>
        <Ionicons name="send-sharp" size={24} color={Colors.tertiary050} />
      </Button>
    </View>
  );
};

export default MessageInputForm;

const styles = StyleSheet.create({
  inputBox: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,

    ...Platform.select({
      web: {
        height: "10vh",
        position: "relative",
        width: "100vw",
        bottom: 0,
      },
    }),
  },
  input: {
    borderWidth: 2,
    borderColor: Colors.tertiary900,
    color: Colors.tertiary900,
    borderRadius: 25,
    padding: 5,
    backgroundColor: Colors.tertiary050,
    margin: 0,
    minHeight: 50,
    paddingHorizontal: 20,
    width: "85%",
    lineHeight: 20,
  },
  sendButton: {
    borderRadius: 100,
    backgroundColor: Colors.tertiary900,
    borderColor: Colors.tertiary050,
    borderWidth: 2,
    alignSelf: "flex-end",
    display: "flex",
    justifyContent: "center",
    alignContent: "flex-end",
    height: 50,
    width: 50,
    padding: 5,
  },
});
