import React from 'react';
import { TextInput, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './InputIcon.styles';

const InputIcon = ({
  placeholder,
  value,
  autoCapitalize,
  onChangeText,
  secureTextEntry,
  icon
}) => (
    <View style={styles.inputContainer}>
      <View style={styles.inputInner}>
        <Image source={icon} style={styles.icon} />
        <TextInput
          autoCorrect={false}
          autoCapitalize={autoCapitalize}
          placeholder={placeholder}
          value={value}
          style={styles.inputStyle}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          underlineColorAndroid="transparent"
          placeholderTextColor="#9b9b9b"
        />
      </View>
    </View>
  );

InputIcon.propTypes = {
  icon: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  autoCapitalize: PropTypes.string,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool
};

InputIcon.defaultProps = {
  value: null,
  autoCapitalize: 'none',
  onChangeText: null,
  secureTextEntry: false
};

export default InputIcon;
