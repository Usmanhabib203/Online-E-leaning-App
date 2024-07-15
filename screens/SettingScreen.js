import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SettingsScreen = ({navigation}) => {
  const handleLogout = () => {
    // Implement logout logic
    navigation.navigate('Get'); // Navigates to the StartScreen
  };
  const Sameen = () => {
    // Implement logout logic
    navigation.navigate('Sameen'); // Navigates to the StartScreen
  };
      
      const about = () => {
        // Implement logout logic
        navigation.navigate('About'); // Navigates to the StartScreen
      };
      const Privacy = () => {
        // Implement logout logic
        navigation.navigate('Privacy'); // Navigates to the StartScreen
      };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}
        onPress={Sameen}
        
        >
          <Text style={styles.optionText}>Notifications 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={Privacy}>
          <Text style={styles.optionText}>Privacy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} 
        onPress={about}>
        
          <Text style={styles.optionText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    height: 100,
    backgroundColor: '#6699ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  content: {
    padding: 20,
  },
  option: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    marginBottom: 20,
  },
  optionText: {
    fontSize: 18,
    color: '#333333',
  },
  logoutButton: {
    backgroundColor: '#ff6666',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 18,
    color: '#ffffff',
  },
});

export default SettingsScreen;
