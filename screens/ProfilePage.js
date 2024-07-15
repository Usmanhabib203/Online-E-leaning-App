import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ProfilePage = ({ navigation }) => {
  const handleEditProfile = () => {
    // Navigate to the EditProfile page
    navigation.navigate('EditProfile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profileInfo}>
        <Image
          source={require('../assets/logo1.png')}
          style={styles.profileImage}
          resizeMode="cover"
        />
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>John Doe</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.text}>johndoe@example.com</Text>
      </View>
      <View style={styles.profileInfo}>
        <Image
          source={require('../assets/logo1.png')}
          style={styles.profileImage}
          resizeMode="cover"
        />
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>John Doe</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.text}>johndoe@example.com</Text>
      </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  editButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  editButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileInfo: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
});

export default ProfilePage;
