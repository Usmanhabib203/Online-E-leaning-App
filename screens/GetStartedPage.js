import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('Home');
  };

  return (
    <ImageBackground
      source={require('../assets/image6.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    //marginLeft:1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },

  
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: 25,
    paddingHorizontal: 50,
    borderRadius: 6,
    marginBottom:270,
    justifyContent:'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
});

export default HomeScreen;
