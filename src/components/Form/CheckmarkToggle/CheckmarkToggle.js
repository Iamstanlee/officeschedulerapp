import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import styles from './CheckmarkToggle.styles';

const iconChecked = require('../../../assets/images/icons/icon-select-checked.png');
const iconUnchecked = require('../../../assets/images/icons/icon-select-unchecked.png');

const CheckmarkToggle = ({ checked, onPress }) => (
  <TouchableWithoutFeedback onPress={() => onPress()}>
    {checked ? (
      <Image style={styles.icon} source={iconChecked} />
    ) : (
      <Image style={styles.icon} source={iconUnchecked} />
    )}
  </TouchableWithoutFeedback>
);

CheckmarkToggle.propTypes = {
  checked: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default CheckmarkToggle;
