// screens/NotificationsPage.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulating fetching notifications from API
    const fetchNotifications = async () => {
      try {
        // Make API call to fetch notifications
        // const response = await fetch('API_ENDPOINT');
        // const data = await response.json();
        // setNotifications(data);

        // For now, using dummy data
        const dummyData = [
          { id: '1', message: 'Amazone Assistant' },
          { id: '2', message: 'WebDevelopment' },
          { id: '3', message: 'Android development' },
        ];

        setNotifications(dummyData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNotifications();
  }, []);

  const renderNotificationItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationText}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Notifications</Text>
      {notifications.length === 0 ? (
        <Text>No notifications found.</Text>
      ) : (
        <FlatList
          data={notifications}
          renderItem={renderNotificationItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.notificationListContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  notificationListContainer: {
    flexGrow: 1,
  },
  notificationItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  notificationText: {
    fontSize: 16,
  },
});

export default NotificationsPage;
