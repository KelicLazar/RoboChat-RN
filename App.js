import { View } from "react-native";
import BackgroundGradient from "./components/BackgroundGradient";
import MainScreen from "./components/MainScreen";
import ChatContextProvider from "./context/chat-context";
import { useFonts } from "expo-font";
import { KeyboardAvoidingView, ScrollView } from "react-native";

export default function App() {
  const [loaded] = useFonts({
    Alkatra: require("./assets/fonts/Alkatra-VariableFont_wght.ttf"),
    BebasNeue: require("./assets/fonts/BebasNeue-Regular.ttf"),
    OpenSans: require("./assets/fonts/OpenSans.ttf"),
  });

  return (
    <ChatContextProvider>
      <BackgroundGradient />

      {loaded && <MainScreen />}
    </ChatContextProvider>
  );
}
