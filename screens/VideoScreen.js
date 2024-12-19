import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const VideoScreen = ({ route }) => {
  const { courseId } = route.params;

  let videoUrl = '';

  // Find the video URL based on the courseId
  if (courseId === 1) {
    videoUrl = 'https://www.youtube.com/watch?v=SuyoAtihn1A';
  } else if (courseId === 2) {
    videoUrl = 'https://www.example.com/video2.mp4';
  }
  // Add more conditions for additional courses

  return (
    <View style={styles.container}>
      <Video source={{ uri: videoUrl }} style={styles.video} controls={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default VideoScreen;
