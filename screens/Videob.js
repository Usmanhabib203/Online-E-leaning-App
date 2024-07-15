import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Video } from "expo-av";
const { Width, height } = Dimensions.get("window");
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default class VideoPage extends React.Component {
  // const VideoPage = ({ route }) => {
  //     const { courseId } = route.params;

  //     let videoUrl = '';

  //     // Find the video URL based on the courseId
  //     if (courseId === 1) {
  //       videoUrl = 'https://www.youtube.com/watch?v=SuyoAtihn1A';
  //     } else if (courseId === 2) {
  //       videoUrl = 'https://www.example.com/video2.mp4';
  //     }
  //     // Add more conditions for additional courses

  //     return (
  //       <View style={styles.container}>
  //         <Video source={{ uri: videoUrl }} style={styles.video} controls={true} />
  //       </View>
  //     );
  //   };

  render() {
    return (
      <View style={styles.container}>
        <Video
          source={require("../assets/java1.mp4")}
          rate={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={true}
          isLooping={false}
          useNativeControls
          style={styles.video}
        />
        <View>
          <Text style={{ marginTop: 10, fontSize: 20, padding: 10 }}>
            What is Android Development
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#48b0b9]">
            <AntDesign name="like2" size={30} color="blue" />
          </TouchableOpacity>

          <FontAwesome5 name="comment-alt" size={24} color="black" />
          <FontAwesome name="share" size={24} color="black" />
          <AntDesign name="download" size={24} color="black" />
        </View>

        <View style={{ marginTop: 20, padding: 10, fontSize: 20 }}>
          <Text>
            Programming languages are formal languages designed for expressing
            instructions that can be executed by a computer. Examples include
            Python, Java, C++, JavaScript, and Ruby. Each programming language
            has its own syntax and features, suited for different types of
            tasks.
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  video: {
    Width: Width,
    height: height / 3,
  },
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
// export default VideoPage;
