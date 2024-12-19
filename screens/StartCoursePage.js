import React from 'react';
import { View, Text, TouchableOpacity,ImageBackground, StyleSheet,Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CourseListPage from './CourseListPage';
const StartCoursePage = ({ navigation, route }) => {
  const { courseId } = route.params;

  const handleStartCourse = () => {
    navigation.navigate('Courses', { courseId });
  };


  return (
    <ImageBackground source={require('../assets/logo2.png')} style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.courseTitle}>Introduction to React Native</Text>
        <Text style={styles.courseDescription}>
          Learn how to build mobile apps with React Native and unleash your creativity!
        </Text>
        <TouchableOpacity 
        style={styles.startBtn}
        onPress={()=> Linking.openURL("https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd")}
        >
                  <Text style={styles.startText}>Start Course</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

CourseListPage.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.goBack()}
    >
      <Ionicons name="ios-arrow-back" size={24} color="red" />
    </TouchableOpacity>
),
});
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
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  courseDescription: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  startBtn: {
    backgroundColor: '#ff6f00',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StartCoursePage;
