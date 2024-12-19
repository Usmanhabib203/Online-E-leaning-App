import React from 'react';
import { View, Text, StyleSheet,Styles, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Menu from '../components/Menu';

const HomePage = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/logo1.png')}
        />
        <Text style={styles.headerText}>E-Learning App</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.logo1}
          source={require('../assets/logo2.png')}
          resizeMode="contain"
        />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.boxContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CourseList')}
          >
            <Text style={styles.buttonText}>Courses</Text>
            <MaterialIcons name="arrow-forward" size={24} color="#ffffff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Progress')}
          >
            <Text style={styles.buttonText}>My Progress</Text>
            <MaterialIcons name="arrow-forward" size={24} color="#ffffff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Notifications')}
          >
            <Text style={styles.buttonText}>All Subject PDF</Text>
            <MaterialIcons name="arrow-forward" size={24} color="#ffffff" />
          </TouchableOpacity>

          {/* <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Lecture')}
          >
            <Text style={styles.buttonText}>Profile</Text>
            <MaterialIcons name="arrow-forward" size={24} color="#ffffff" />
          </TouchableOpacity> */}

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Setting')}
          >
            <Text style={styles.buttonText}>Settings</Text>
            <MaterialIcons name="arrow-forward" size={24} color="#ffffff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Quize')}
          >
            <Text style={styles.buttonText}>Quize</Text>
            <MaterialIcons name="arrow-forward" size={24} color="#ffffff" />
          </TouchableOpacity>
          
        </View>
        <View  style={{marginTop:50}}>
        <Menu />
                {/* <View style={ Styles.lineStyle}></View>
                <Menu />
                <View style={[ Styles.lineStyle,{
                    marginVertical:10,
                },
                ]}></View> */}
            </View>
            {/* <TouchableOpacity 
      style={[
        Styles.buttonStyle,
        {
         // backgroundColor:agree ?"#4630EB":"grey",
        },
      ]}
      >
        <Text style={Styles.buttonText}>Contact US</Text>
        
      </TouchableOpacity> */}
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  buttonStyle:{
    borderRadius:5,
    paddingVertical:10,
    paddingHorizontal:18,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginVertical:30,
    marginBottom:50,

  },

  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3f51b5',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  logo1: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    padding: 20,
  },
  boxContainer: {
    backgroundColor: 'pink',
    borderRadius: 10,
    padding: 20,
  },
  button: {
    backgroundColor: 'brown',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  lineStyle:{

    marginBottom:10,
    borderWidth:0.5,
    borderColor:"grey"
  },
});

export default HomePage;
