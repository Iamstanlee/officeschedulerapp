import React from 'react';
import { Modal, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './LoadingModal.styles';

const LoadingModal = ({ visible }) => (
  <Modal transparent animationType="fade" visible={visible}>
    <View style={styles.modalBackground}>
      <Text>Loading...</Text>
    </View>
  </Modal>
);

LoadingModal.propTypes = {
  visible: PropTypes.bool.isRequired
};

export default LoadingModal;
