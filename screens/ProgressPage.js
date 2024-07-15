import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const ProgressPage = () => {
  const [progressData, setProgressData] = useState([
    { id: '1', course: 'Course 1', progress: 25 },
    { id: '2', course: 'Course 2', progress: 50 },
    { id: '3', course: 'Course 3', progress: 75 },
    { id: '4', course: 'Course 4', progress: 25 },
    { id: '5', course: 'Course 5', progress: 50 },
    { id: '6', course: 'Course 6', progress: 75 },
  ]);

  const handleIncreaseProgress = (itemId) => {
    setProgressData((prevData) =>
      prevData.map((item) => {
        if (item.id === itemId && item.progress < 100) {
          return { ...item, progress: item.progress + 25 };
        }
        return item;
      })
    );
  };

  const handleDecreaseProgress = (itemId) => {
    setProgressData((prevData) =>
      prevData.map((item) => {
        if (item.id === itemId && item.progress > 0) {
          return { ...item, progress: item.progress - 25 };
        }
        return item;
      })
    );
  };

  const renderCourseItem = ({ item }) => (
    <View style={styles.courseItem}>
      <Text style={styles.courseName}>{item.course}</Text>
      <View style={styles.progressContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleIncreaseProgress(item.id)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.courseProgress}>{item.progress}%</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleDecreaseProgress(item.id)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress</Text>
      <FlatList
        data={progressData}
        keyExtractor={(item) => item.id}
        renderItem={renderCourseItem}
        contentContainerStyle={styles.courseList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  courseList: {
    flexGrow: 1,
  },
  courseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  courseName: {
    fontSize: 18,
    color: '#333',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  courseProgress: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginHorizontal: 10,
  },
});

export default ProgressPage;
