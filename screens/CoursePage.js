import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const CoursePage = () => {
  const navigation = useNavigation();

  const course = {
    id: '1',
    title: 'Introduction to React Native',
    videos: [
      {
        id: '1',
        title: 'Getting Started rana',
        videoUrl: 'https://example.com/videos/intro_to_react_native/getting_started.mp4',
      },
      {
        id: '2',
        title: 'Components',
        videoUrl: 'https://example.com/videos/intro_to_react_native/components.mp4',
      },
    ],
      id: '2',
      title: 'Introduction to Programming',
      videos: [
        {
          id: '1',
          title: 'Getting Started',
          videoUrl: 'https://example.com/videos/intro_to_react_native/getting_started.mp4',
        },
        {
          id: '2',
          title: 'Components',
          videoUrl: 'https://example.com/videos/intro_to_react_native/components.mp4',
        },
      ],
        id: '3',
        title: 'Introduction to React Native',
        videos: [
          {
            id: '1',
            title: 'Getting Started',
            videoUrl: 'https://example.com/videos/intro_to_react_native/getting_started.mp4',
          },
          {
            id: '2',
            title: 'Components',
            videoUrl: 'https://example.com/videos/intro_to_react_native/components.mp4',
          },
        ],
          id: '4',
          title: 'Introduction to React Native',
          videos: [
            {
              id: '1',
              title: 'Getting Started',
              videoUrl: 'https://example.com/videos/intro_to_react_native/getting_started.mp4',
            },
            {
              id: '2',
              title: 'Components',
              videoUrl: 'https://example.com/videos/intro_to_react_native/components.mp4',
            },
      // Add more videos here...
    ],
  };

  const renderVideoItem = ({ item }) => (
    <TouchableOpacity
      style={styles.videoItem}
      onPress={() => handleVideoPress(item)}
    >
      <Text style={styles.videoTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const handleVideoPress = (item) => {
    // Play the video
    // You can implement the logic to play the video using a video player library
    console.log('Play video:', item.videoUrl);
  };

  return (
    <ImageBackground source={require('../assets/logo4.png')} style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.pageTitle}>{course.title}</Text>
        <FlatList
          data={course.videos}
          renderItem={renderVideoItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.videoList}
        />
      </View>
    </ImageBackground>
  );
};

// CoursePage.navigationOptions = ({ navigation }) => ({
//   headerLeft: () => (
//     <TouchableOpacity
//       style={styles.backButton}
//       onPress={() => navigation.goBack()}
//     >
//       <Ionicons name="ios-arrow-back" size={24} color="#fff" />
//     </TouchableOpacity>
//   ),
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  videoList: {
    marginTop: 10,
  },
  videoItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  backButton: {
    marginLeft: 10,
    color:'red',
  },
});

export default CoursePage;
