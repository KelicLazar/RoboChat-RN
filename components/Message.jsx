import { View, Text, StyleSheet } from "react-native";
import { Colors, codeTheme } from "../utils/Colors";
import SyntaxHighlighter from "react-native-syntax-highlighter";

const Message = ({ role, content }) => {
  const messageText = content?.split("```");

  return (
    <View
      style={[
        styles.container,
        role === "assistant"
          ? styles.receivedContainer
          : role === "error"
          ? styles.errorContainer
          : null,
        ,
      ]}
    >
      {messageText?.length === 1 && (
        <Text
          style={[
            styles.text,
            role === "assistant"
              ? styles.receivedText
              : role === "error"
              ? styles.errorText
              : null,
          ]}
        >
          {messageText[0]}
        </Text>
      )}
      {messageText?.length > 1 &&
        messageText.map((text, index) => {
          if (index % 2 === 0) {
            return (
              <Text
                key={index}
                style={[
                  styles.text,
                  role === "assistant" ? styles.receivedText : null,
                ]}
              >
                {text}
              </Text>
            );
          } else {
            return (
              <SyntaxHighlighter
                key={index}
                lineStyle={{
                  paddingHorizontal: 10,
                }}
                style={codeTheme}
              >
                {text}
              </SyntaxHighlighter>
            );
          }
        })}
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    maxWidth: "85%",
    backgroundColor: Colors.tertiary100,
    margin: 5,
    borderRadius: 5,
    padding: 10,
    marginLeft: "auto",
    elevation: 5,
    paddingHorizontal: 10,
  },
  text: {
    color: Colors.tertiary900,
    fontSize: 15,
    fontFamily: "OpenSans",
    letterSpacing: 0.3,
  },
  receivedContainer: {
    marginLeft: 0,
    marginRight: "auto",
    backgroundColor: Colors.tertiary900,
  },
  errorContainer: {
    backgroundColor: "#b14949ff",
    marginLeft: 0,
    marginRight: "auto",
  },
  errorText: {
    color: "#5F2120",
    fontWeight: 800,
    fontStyle: "italic",
  },
  receivedText: {
    color: "white",
  },
});
