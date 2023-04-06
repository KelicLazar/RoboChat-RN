import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { useMemo, useContext, useEffect, useState } from "react";
import Message from "./Message";
import Button from "./Button";
import { ChatContext } from "../context/chat-context";
import { Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../utils/Colors";
import { useWindowDimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { Linking } from "react-native";

const ChatScreen = ({ scrollViewRef }) => {
  const { chat } = useContext(ChatContext);
  const [scrollButtonIsVisible, setScrollButtonIsVisible] = useState(false);
  const layout = useWindowDimensions();
  const webSizeChatStyles =
    layout.width > 700 ? { width: "80%" } : { width: "100%" };

  const memoizedChat = useMemo(() => {
    return chat.map((item) => {
      return <Message key={item.id} role={item.role} content={item.content} />;
    });
  }, [chat]);

  useEffect(() => {
    scrollViewRef?.current?.scrollToEnd({ animated: false });
  }, []);

  const scrollHandler = (e) => {
    const { contentOffset, contentSize, layoutMeasurement } = e.nativeEvent;

    if (contentSize.height > contentOffset.y + layoutMeasurement.height + 200) {
      setScrollButtonIsVisible(true);
    } else {
      setScrollButtonIsVisible(false);
    }
  };
  const scrollToBottomHandler = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  const layoutHandler = (e) => {
    !scrollButtonIsVisible &&
      scrollViewRef.current.scrollToEnd({ animated: false });
  };

  return (
    <View style={styles.chatContainer}>
      {!chat.length && (
        <View>
          <Image
            style={styles.chatImage}
            source={require("../assets/ai-wait.gif")}
          ></Image>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://storyset.com/web")}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                textDecorationLine: "underline",
              }}
            >
              Web illustrations by Storyset
            </Text>
          </TouchableOpacity>

          <View style={styles.noChatContainer}>
            <Text style={styles.noChatText}>Ask anything you want!</Text>
          </View>
        </View>
      )}

      {!!chat.length && (
        <ScrollView
          onLayout={layoutHandler}
          onContentSizeChange={layoutHandler}
          ref={scrollViewRef}
          style={[styles.chat, webSizeChatStyles]}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
        >
          {memoizedChat}
        </ScrollView>
      )}

      {scrollButtonIsVisible && !!chat.length && (
        <Button
          buttonStyle={styles.scrollButton}
          onPress={scrollToBottomHandler}
        >
          <FontAwesome
            name="angle-double-down"
            size={24}
            color={Colors.tertiary100}
          />
        </Button>
      )}
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
  },
  chat: {
    width: "100%",
    paddingHorizontal: Platform.OS === "web" ? "2%" : "2%",
    alignSelf: "center",
    height: Platform.OS === "web" ? "60vh" : "100%",
    flex: 1,
    ...Platform.select({
      web: {
        overflowY: "scroll",
        maxHeight: "70vh",
        margin: "auto",
      },
    }),
  },

  chatImage: {
    width: 170,
    height: 160,
    alignSelf: "center",
    padding: 0,
  },

  scrollButton: {
    position: "absolute",
    bottom: 15,
    right: 15,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: Colors.primary500,
    borderRadius: 20,
    width: 30,
    height: 30,
    borderColor: Colors.tertiary100,
    borderWidth: 1,
    borderStyle: "solid",
    elevation: 3,
  },
  noChatContainer: {
    backgroundColor: Colors.black050,
    padding: 10,
    margin: "auto",
  },
  noChatText: {
    fontWeight: 600,
    fontSize: 16,
    backgroundColor: Colors.secondary400,
    alignSelf: "center",
    padding: 8,
    borderRadius: 20,
    color: Colors.primary700,
  },
});
