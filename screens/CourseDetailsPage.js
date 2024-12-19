import React from 'react';
import { View, Text, StyleSheet, Image,ScrollView, TouchableOpacity } from 'react-native';

const CourseDetailsPage = ({ navigation, route }) => {
  const { id, courseId } = route.params;

  const courseData = [
    {
      id: '1',
      title: 'Andoid Development',
      description: 'Learn the basics of programming and get started with your coding journey. This course covers fundamental concepts such as variables, control flow, and functions. You will also gain hands-on experience with popular programming languages like JavaScript and Python.',
      instructor: 'John Smith',
      duration: '6 weeks',
      image: require('../assets/programimage.jpg'),
      rating: '4.43   4.4L+Learniers   Beginer',
      Text: 'Vist Full Playlist',
      image1:require('../assets/logo8.png'),
      text1:'With this course, you get',
      text2:'Free life time acess',
      text3:'Completion Certificate',
      text4:'2.0 hours',
      text6:'What do you learn in Programming Language ?',
      
      text7:'Pythons ',
      text8:'Java ',
      text9:'Programming Life cycle',
      title1:'Course Outline',
      button:'Introduction to Programming',
      button1:'What is Android development',
      button2:'Make full app',
      button3:'Complete Course',
      

    },
    {
      id: '2',
      title: 'Web Development Fundamentals',
      description: 'Master the essentials of web development and build interactive websites. This course will teach you HTML, CSS, and JavaScript, along with popular frameworks and libraries like React and Bootstrap. By the end of the course, you will be able to create dynamic and responsive web applications.',
      instructor: 'Emily Johnson',
      duration: '8 weeks',
      image: require('../assets/logo2.png'),
      rating: '4.46   4.4L+Learniers   Beginer',
      Text: 'what do you learn from these courses',
      image1:require('../assets/logo8.png'),
      text1:'With this course, you get',
      text2:'Free life time acess',
      text3:'Completion Certificate',
      text4:'2.0 hours',
      text6:'What do you learn in Amazon Virtual assitent foundation ?',
      text7:'Amazon Assitent',
      text8:'Amazon Analytics',
      text9:'Amazon Life cycle',
      button:'Introduction to Amazon',
      button1:'Amazon Life Cycle',
      button2:'Amazon to Tasks',
      button3:' Analytics Amazon',
      

    },
    {
      id: '3',
      title: 'Data Science Essentials',
      description: 'Dive into the world of data science and gain valuable insights. This course covers topics such as data manipulation, exploratory data analysis, and machine learning algorithms. You will work on real-world projects and learn how to extract meaningful information from large datasets.',
      instructor: 'David Anderson',
      duration: '10 weeks',
      image: require('../assets/dataimage.png'),
      rating: '4.47   4.4L+Learniers   Beginer',
      Text: 'what do you learn from these courses',
      image1:require('../assets/logo8.png'),
      text1:'With this course, you get',
      text2:'Free life time acess',
      text3:'Completion Certificate',
      text4:'2.0 hours',
      text6:'What do you learn in Amazon Virtual assitent foundation ?',
      text7:'Amazon Assitent',
      text8:'Amazon Analytics',
      text9:'Amazon Life cycle',
      button:'Introduction to Amazon',
      button1:'Amazon Life Cycle',
      button2:'Amazon to Tasks',
      button3:' Analytics Amazon',
      

    },
    {
      id: '4',
      title: 'Social Media Marketing',
      description: 'Social media refers to online platforms and applications that enable individuals and groups to create, share, and interact with content in virtual communities. It has revolutionized the way people communicate and connect with each other on a global scale.',
      instructor: 'John Smith',
      duration: '6 weeks',
      image: require('../assets/socialimage1.png'),
      rating: '4.43   4.4L+Learniers   Beginer',
      Text: 'what do you learn from these courses',
      image1:require('../assets/logo8.png'),
      text1:'With this course, you get',
      text2:'Free life time acess',
      text3:'Completion Certificate',
      text4:'2.0 hours',
      text6:'What do you learn in Amazon Virtual assitent foundation ?',
      text7:'Amazon Assitent',
      text8:'Amazon Analytics',
      text9:'Amazon Life cycle',
      button:'Introduction to Amazon',
      button1:'Amazon Life Cycle',
      button2:'Amazon to Tasks',
      button3:' Analytics Amazon',
      

    },
    {
      id: '5',
      title: 'E Commerce Marketing',
      description: 'E-commerce, short for electronic commerce, refers to the buying and selling of goods and services over the internet. It involves online transactions and the transfer of money and data to facilitate these transactions. E-commerce has revolutionized the way businesses operate and consumers shop, providing a convenient.',
      instructor: 'Emily Johnson',
      duration: '8 weeks',
      image: require('../assets/comerceimge1.jpg'),
      rating: '4.43   4.4L+Learniers   Beginer',
      Text: 'what do you learn from these courses',
      image1:require('../assets/logo8.png'),
      text1:'With this course, you get',
      text2:'Free life time acess',
      text3:'Completion Certificate',
      text4:'2.0 hours',  
      text6:'What do you learn in Amazon Virtual assitent foundation ?',
      text7:'Amazon Assitent',
      text8:'Amazon Analytics',
      text9:'Amazon Life cycle',
      button:'Introduction to Amazon',
      button1:'Amazon Life Cycle',
      button2:'Amazon to Tasks',
      button3:' Analytics Amazon',
      
  },
    {
      id: '6',
      title: 'Amazon Virtual Assistant',
      description: 'Dive into the world of data science and gain valuable insights. This course covers topics such as data manipulation, exploratory data analysis, and machine learning algorithms. You will work on real-world projects and learn how to extract meaningful information from large datasets.',
      instructor: 'David Anderson',
      duration: '10 weeks',
      image: require('../assets/amazoneimage.png'),
      rating: '4.43   4.4L+Learniers   Beginer',
      Text: 'what do you learn from these courses',
      image1:require('../assets/logo8.png'),
      text1:'With this course, you get',
      text2:'Free life time acess',
      text3:'Completion Certificate',
      text4:'2.0 hours',
      text6:'What do you learn in Amazon Virtual assitent foundation ?',
      text7:'Amazon Assitent',
      text8:'Amazon Analytics',
      text9:'Amazon Life cycle',
      title1:'Course Outline',
      button:'Introduction to Amazon',
      button1:'Amazon Life Cycle',
      button2:'Amazon to Tasks',
      button3:' Analytics Amazon',
      
      
    },
    {
      id: '7',
      title: 'Introduction to Programming',
      description: 'Learn the basics of programming and get started with your coding journey. This course covers fundamental concepts such as variables, control flow, and functions. You will also gain hands-on experience with popular programming languages like JavaScript and Python.',
      instructor: 'John Smith',
      duration: '6 weeks',
      image: require('../assets/logo3.jpeg'),
      rating: '4.43   4.4L+Learniers   Beginer',
      Text: 'what do you learn from these courses',
      image1:require('../assets/Datalogo1.png'),
      text1:'With this course, you get',
      text2:'Free life time acess',
      text3:'Completion Certificate',
      text4:'2.0 hours',
      text6:'What do you learn in Amazon Virtual assitent foundation ?',
      text7:'Amazon Assitent',
      text8:'Amazon Analytics',
      text9:'Amazon Life cycle',
      button:'Introduction to Amazon',
      button1:'Amazon Life Cycle                                       6 mint  ',
      button2:'Amazon to Tasks',
      button3:' Analytics Amazon',
      

    },
    {
      id: '8',
      title: 'Web Development Fundamentals',
      description: 'Master the essentials of web development and build interactive websites. This course will teach you HTML, CSS, and JavaScript, along with popular frameworks and libraries like React and Bootstrap. By the end of the course, you will be able to create dynamic and responsive web applications.',
      instructor: 'Emily Johnson',
      duration: '8 weeks',
      image: require('../assets/logo2.png'),
      rating: '4.43   4.4L+Learniers   Beginer',
      Text: 'what do you learn from these courses',
      image1:require('../assets/Datalogo1.png'),
      text1:'With this course, you get',
      text2:'Free life time acess',
      text3:'Completion Certificate',
      text4:'2.0 hours',
      text6:'What do you learn in Amazon Virtual assitent foundation ?',
      text7:'Amazon Assitent',
      text8:'Amazon Analytics',
      text9:'Amazon Life cycle',
      button:'Introduction to Amazon',
      button1:'Amazon Life Cycle',
      button2:'Amazon to Tasks',
      button3:' Analytics Amazon',
      

    },
    {
      id: '9',
      title: 'Data Science Essentials',
      description: 'Dive into the world of data science and gain valuable insights. This course covers topics such as data manipulation, exploratory data analysis, and machine learning algorithms. You will work on real-world projects and learn how to extract meaningful information from large datasets.',
      instructor: 'David Anderson',
      duration: '10 weeks',
      image: require('../assets/logo4.png'),
      rating: '4.43   4.4L+Learniers   Beginer',
      Text: 'what do you learn from these courses',
      image1:require('../assets/Datalogo1.png'),
      text1:'With this course, you get',
      text2:'Free life time acess',
      text3:'Completion Certificate',
      text4:'2.0 hours',
      text6:'What do you learn in Amazon Virtual assitent foundation ?',
      text7:'Amazon Assitent',
      text8:'Amazon Analytics',
      text9:'Amazon Life cycle',
      button:'Introduction to Amazon',
      button1:'Amazon Life Cycle',
      button2:'Amazon to Tasks',
      button3:' Analytics Amazon',
      

    },
    {
      id: '91',
      title: 'Data Science Essentials',
      description: 'Dive into the world of data science and gain valuable insights. This course covers topics such as data manipulation, exploratory data analysis, and machine learning algorithms. You will work on real-world projects and learn how to extract meaningful information from large datasets.',
      instructor: 'David Anderson',
      duration: '10 weeks',
      image: require('../assets/dataimage.png'),
      rating: '4.43   4.4L+Learniers   Beginer',
      Text: 'what do you learn from these courses',
      image1:require('../assets/Datalogo1.png'),
      text1:'With this course, you get',
      text2:'Free life time acess',
      text3:'Completion Certificate',
      text4:'2.0 hours',
    },
    // Add more courses as needed
  ];

  const selectedCourse = courseData.find(course => course.id === courseId);

  return (
    <ScrollView contentContainerStyle={styles.courseList}>
    <View style={styles.container}>
      <Image style={styles.courseImage} source={selectedCourse.image} />

      <View style={styles.courseDetailsContainer}>
        <Text style={styles.courseTitle}>{selectedCourse.title}</Text>
        <Text style={styles.courseInstructor}>Instructor: {selectedCourse.instructor}</Text>
        <Text style={styles.courseDuration}>Duration: {selectedCourse.duration}</Text>
        <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
        <Text style={styles.courseDuration}>rating {selectedCourse.rating}</Text>
        <Text style={styles.courseTitle}> {selectedCourse.Text}</Text>
        

        <TouchableOpacity
          style={styles.enrollButton}
          onPress={() => navigation.navigate('StartCourse', { courseId: id })}
        >
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View>
        <Image style={styles.courseImage1} source={selectedCourse.image1} />
        </View>
        
      </View>
      <View>
      <Text style={styles.courseTitle}> {selectedCourse.text1}</Text>
      <Text style={styles.courseTitle}> {selectedCourse.text2}</Text>
      <Text style={styles.courseTitle}> {selectedCourse.text3}</Text>
      <Text style={styles.courseTitle}> {selectedCourse.text4}</Text>
      <Text style={styles.courseDuration}> {selectedCourse.text6}</Text>
      <Text style={styles.courseDuration}> {selectedCourse.text7}</Text>
      <Text style={styles.courseDuration}> {selectedCourse.text8}</Text>

      </View>
      <View>
      <Text style={styles.courseTitle}> {selectedCourse.title1}</Text>
      <TouchableOpacity
          // style={styles.enrollButton}
          onPress={() => navigation.navigate('Videoa', { courseId: id })}
        >
      
      <Text style={styles.button1}> {selectedCourse.button}</Text>
      </TouchableOpacity>
      <TouchableOpacity
          // style={styles.enrollButton}
          onPress={() => navigation.navigate('Videob', { courseId: id })}
        >
      <Text style={styles.button1}> {selectedCourse.button1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
          // style={styles.enrollButton}
          onPress={() => navigation.navigate('Videoc', { courseId: id })}
        >
      <Text style={styles.button1}> {selectedCourse.button2}</Text>
      </TouchableOpacity>
      <TouchableOpacity
          // style={styles.enrollButton}
          onPress={() => navigation.navigate('Videod', { courseId: id })}
        >
      <Text style={styles.button1}> {selectedCourse.button3}</Text>
      </TouchableOpacity>   
         <TouchableOpacity
          style={styles.enrollButton}
          onPress={() => navigation.navigate('Enroll', { courseId: id })}
        >
          <Text style={styles.buttonText}>Enroll Now</Text>
        </TouchableOpacity>

      </View>
      <View style={{marginTop:10 }}>
      <TouchableOpacity
          style={styles.enrollButton}
          onPress={() => navigation.navigate('Quize', { courseId: id })}
        >
          <Text style={styles.buttonText}>Quize</Text>
        </TouchableOpacity>
      </View>

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  courseList: {
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  courseImage: {
    width: '100%',
    height: 300,
    borderRadius: 30,
    marginBottom: 20,
    marginTop:20,
  },
  courseImage1:{
     width:"100%",
    resizeMode:'contain',
    height:400,
    borderRadius: 10,
    marginTop:10,


  },
  courseDetailsContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  courseInstructor: {
    fontSize: 18,
    color: '#888888',
    marginBottom: 10,
  },
  courseDuration: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 20,
  },
  courseDescription: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
  },
  enrollButton: {
    backgroundColor: '#3f51b5',
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  button1:{
    
    backgroundColor: 'pink',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginVertical:10,
    fontSize:18,
  },
});

export default CourseDetailsPage;
