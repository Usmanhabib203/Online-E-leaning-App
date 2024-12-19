import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity, Text, Alert, KeyboardAvoidingView } from 'react-native';
import { auth } from '../Firebase';
// import axios from 'axios';
import { createUserWithEmailAndPassword } from "firebase/auth";


const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSignup=()=>{

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if(user){

    
    navigation.navigate('Login')
    }
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Alert.alert(errorMessage)
    
    // ..
  });
  
}

  return (
    <ImageBackground source={require('../assets/loginback.png')} style={styles.backgroundImage}>
      <View style={styles.container} behavior="padding">
        <Text style={styles.text}>Name</Text>
        <TextInput style={styles.input} placeholder=" Enter Name" value={name} onChangeText={text => setName(text)} />
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.input} placeholder=" Enter Email" value={email} onChangeText={text => setEmail(text)} />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={{color:'white',fontSize:22,}}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}
>
          <Text style={{color:'#6e665a',fontSize:18, marginTop:10}}> Already Register?Login Here</Text>
        </TouchableOpacity>
        
      </View>
      </ImageBackground>
  );
};

// Styles...



const styles = StyleSheet.create({

  backgroundImage:{

    flex:1,
    resizeMode:'cover',
  },
  container: {
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop:100,
  },
  text:{
    color:"black",
    fontSize:15,
    marginRight:290,
    margin:10
    


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
    width: '100%',
    height: 50,
    backgroundColor: '#6e665a',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30
  },
});

export default RegisterScreen;
