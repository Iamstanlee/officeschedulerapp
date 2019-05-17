import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';

const InputLabel = ({ children, style, ...otherProps }) => (
  <Text bold color="white" style={style} {...otherProps}>
    {children}
  </Text>
);

InputLabel.propTypes = {
  children: PropTypes.string,
  style: PropTypes.shape()
};

InputLabel.defaultProps = {
  children: null,
  style: null
};

export default InputLabel;
