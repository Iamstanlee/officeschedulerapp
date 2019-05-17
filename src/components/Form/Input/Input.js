import React from 'react';
import { View, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Input.styles';
import { Colors } from '../../../constants/GlobalStyles';

const Input = ({ label, containerStyle, style, placeholderColor, ...otherProps }) => {
  const placeholderTextColor = placeholderColor || Colors.lightGrey;
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.labelStyle}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          editable
          numberOfLines={1}
          placeholderTextColor={placeholderTextColor}
          style={[styles.inputStyle, style]}
          {...otherProps}
        />
      </View>
    </View>
  )
};

Input.propTypes = {
  label: PropTypes.string,
  style: PropTypes.shape(),
  containerStyle: PropTypes.shape(),
  placeholderColor: PropTypes.string
};

Input.defaultProps = {
  label: null,
  style: null,
  containerStyle: null,
  placeholderColor: null
};

export default Input;
