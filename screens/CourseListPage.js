import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
// import { SliderBox } from 'react-native-image-slider-box';

const CourseListPage = ({ navigation }) => {
  // const sliderImages = [
  //   require('../assets/dataimage.png'),
  //   require('../assets/amazoneimage.png'),
  //   require('../assets/comerceimage.png'),
  //   require('../assets/image1.png'),
    
  //   // Add more slider images as needed
  // ];
  const courses = [
    { id: '1', title: 'Android Development ', image: require('../assets/logo3.jpeg') },
    { id: '2', title: 'Web Development Fundamentals', image: require('../assets/logo2.png') },
    { id: '3', title: 'Data Science Essentials', image: require('../assets/Datalogo1.png')},
    { id: '4', title: 'Social Media Marketing', image: require('../assets/sociallogo.jpg') },
    { id: '5', title: 'E Commerce Marketing', image: require('../assets/comercelogo.png') },
    { id: '6', title: 'Amazon Virtual Assistant', image: require('../assets/amazonelogo.png') },
    { id: '7', title: 'Social Media Marketing', image: require('../assets/sociallogo.jpg') },
    { id: '8', title: 'E Commerce Marketing', image: require('../assets/logo2.png') },
    
    { id: '9', title: 'Ali baba whole sale', image: require('../assets/logo4.png') },
        { id: '91', title: 'Ali baba ', image: require('../assets/logo4.png') },

    // Add more courses as needed
  ];

  const renderCourseItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.courseItem}
        onPress={() => navigation.navigate('CourseDetails', { courseId: item.id })}
      >
        <Image style={styles.courseImage} source={item.image} />
        <Text style={styles.courseTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Courses</Text>

      <ScrollView contentContainerStyle={styles.courseList}>
      {/* <View style={styles.sliderContainer}>
        <SliderBox
          images={sliderImages}
          autoplay
          circleLoop
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
        />
      </View> */}
        {courses.map((course) => (
          <View key={course.id}>{renderCourseItem({ item: course })}</View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // sliderContainer: {
  //   height: 200,
  //   marginVertical: 20,
  // },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3f51b5',
    justifyContent:'center',
    alignItems:'center'
  },
  courseList: {
    paddingBottom: 20,
  },
  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor:'#3f51b5',
    borderRadius: 8,
    padding: 10,
    elevation: 2,
  },
  courseImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'brown',
  },
});

export default CourseListPage;
