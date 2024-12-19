import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Modal from 'react-native-modal';

const PrivacyScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Private Content</Text>
      <Button title="Hide Private Content" onPress={() => navigation.goBack()} />

      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Privacy Screen Overlay</Text>
          <Button title="Hide Privacy Screen" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

export default PrivacyScreen;
