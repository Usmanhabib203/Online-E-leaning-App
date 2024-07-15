import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const CoursesPage = ({ navigation }) => {
  // const handleCoursePress = (courseId) => {
  //   navigation.navigate('Courses', { courseId });
  // };

  const courses = [
    {
      id: 1,
      title: 'Course 1',
      videoUrl: 'https://www.youtube.com/watch?v=SuyoAtihn1A',
    },
    {
      id: 2,
      title: 'Course 2',
      videoUrl: 'https://www.example.com/video2.mp4',
    },
    {
      id: 3,
      title: 'Course 3',
      videoUrl: 'https://www.youtube.com/watch?v=SuyoAtihn1A',
    },
    {
      id: 4,
      title: 'Course 4',
      videoUrl: 'https://www.example.com/video2.mp4',
    },
    {
      id: 5,
      title: 'Course 5',
      videoUrl: 'https://www.youtube.com/watch?v=SuyoAtihn1A',
    },
    {
      id: 6,
      title: 'Course 6',
      videoUrl: 'https://www.example.com/video2.mp4',
    },
    // Add more courses as needed
  ];

  const renderItem = ({ item }) => {
    const handleCoursePress = () => {
      navigation.navigate('Course', { courseId: item.id });
    };

    return (
      <TouchableOpacity style={styles.courseItem} onPress={handleCoursePress}>
        <Text style={styles.courseTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Courses</Text>
      <FlatList
        data={courses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  courseItem: {
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 100,
    backgroundColor: 'pink',
    borderRadius: 5,
  },
  courseTitle: {
    fontSize: 18,
  },
});

export default CoursesPage;
