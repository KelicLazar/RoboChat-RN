import { BackgroundGradientColors, Colors } from "../utils/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { BackgroundLocations } from "../utils/Colors";
import { StatusBar } from "react-native";
import { Dimensions } from "react-native";
import { Platform } from "react-native";
import { ImageBackground } from "react-native";

const BackgroundGradient = ({ children }) => {
  const width =
    Platform.OS === "web" ? "100vw" : Dimensions.get("screen").width;
  const height =
    Platform.OS === "web"
      ? "100vh"
      : Dimensions.get("screen").height + StatusBar.currentHeight;
  // if (Platform.OS === "web") {
  //   return (
  //     <ImageBackground
  //       style={{
  //         width: "100vw",
  //         height: "100vh",
  //         overflow: "hidden",
  //         position: "absolute",
  //       }}
  //       source={require("../assets/splash-screen.jpg")}
  //     ></ImageBackground>
  //   );
  // }
  return (
    <>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={BackgroundLocations}
        colors={BackgroundGradientColors}
        style={{
          width: width,
          height: height,
          position: "absolute",
        }}
      >
        <LinearGradient
          colors={[Colors.tertiary900, "#c9d8e5a4", Colors.tertiary900]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{
            position: "absolute",
            // overflow: "hidden",
            width: width,
            height: height,
          }}
        ></LinearGradient>
      </LinearGradient>
    </>
  );
};

export default BackgroundGradient;
