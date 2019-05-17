import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './InputContainer.styles';

const InputContainer = ({ children, style, ...otherProps }) => (
  <View style={[styles.InputContainerWrapper, style]} {...otherProps}>
    {children}
  </View>
);

InputContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  style: PropTypes.shape()
};

InputContainer.defaultProps = {
  children: null,
  style: null
};

export default InputContainer;
