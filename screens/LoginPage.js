import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, ImageBackground, Alert } from 'react-native';
// import axios from 'axois'
import { auth } from '../Firebase';
import {  signInWithEmailAndPassword } from "firebase/auth";
import {  sendPasswordResetEmail } from "firebase/auth";
import {  signOut } from "firebase/auth";




const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleforget=()=>{

    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        Alert.alert('Password reset link sucessfully send')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }


const handleLogin=()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      if(user){
      navigation.navigate('Home');
      }

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert(errorMessage);

    });

  }

signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  const handleSignup = () => {
    navigation.navigate('Register');
  };


  return (
    <ImageBackground source={require('../assets/loginback.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text
        style={{color:'black',marginRight:"80%",fontSize:15,marginBottom:10}}
        >Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
                <Text
        style={{color:'black',marginRight:"80%",fontSize:15,marginBottom:10}}
        >Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={handleforget}>
          <Text style={styles.button1}>forget Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignup}>
          <Text style={styles.registerLink}>Don't have an account? Register</Text>
        </TouchableOpacity>
         {/* <Button title="Signup" onPress={handleSignup} /> */}

      </View>
      </ImageBackground>
  );
};


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      marginTop:370,
    },
    input: {
      width: '100%',
      height: 60,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 20,
      fontSize:15,
      padding: 10,
      marginBottom: 7,
      justifyContent:'center',
      alignItems:'center',
      color:'#000',
      backgroundColor:"#f0f2f5",
    },
  
 
  
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#6e665a',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1,
    paddingHorizontal: 95,
    marginTop:10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button1:{
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',

  },
  registerLink: {
    color: '#888',
    //textDecorationLine: 'underline',
    marginTop: 10,
    fontSize:18,
  },
});

export default LoginScreen;
