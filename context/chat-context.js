import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { sendRequest } from "../utils/services";

export const ChatContext = createContext({
  chat: [],
  addNewMessage: (msg) => {},
  isTyping: false,
  clearAllMessages: () => {},
});

const ChatContextProvider = ({ children }) => {
  const [chat, setChat] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const getFromStorage = async () => {
      let chats = await AsyncStorage.getItem("chat");
      chats = chats ? JSON.parse(chats) : [];
      setChat(chats);
    };
    getFromStorage();
  }, []);

  const addNewMessage = async (msg) => {
    setIsTyping(true);
    setChat((prevChat) => {
      return [...prevChat, msg];
    });

    const answer = await sendRequest(
      [...chat, msg].slice(-3).filter((item) => item.role !== "error")
    );
    const answerId = new Date().getTime() + Math.random().toString().slice(2);

    setChat((prevChat) => [...prevChat, { id: answerId, ...answer }]);

    setIsTyping(false);

    await AsyncStorage.setItem(
      "chat",
      JSON.stringify([...chat, msg, { id: answerId, ...answer }])
    );
  };

  const clearAllMessages = async () => {
    setChat([]);
    await AsyncStorage.removeItem("chat");
  };

  const contextValue = {
    isTyping,
    chat,
    addNewMessage,
    clearAllMessages,
  };
  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

export default ChatContextProvider;
