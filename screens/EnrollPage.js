import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const EnrollPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleEnroll = (navigation) => {
    if (name && email) {
      // Perform enrollment logic here
      Alert.alert('Enrollment Successful', 'You have been successfully enrolled in the course.');
    } else {
      Alert.alert('Enrollment Error', 'Please fill in all the required fields.');
    }
    navigation.navigate('Courses');


  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Enroll</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.enrollButton} 
      onPress={handleEnroll}>
        <Text style={styles.enrollButtonText}>Enroll Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  enrollButton: {
    backgroundColor: '#3f51b5',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  enrollButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EnrollPage;
