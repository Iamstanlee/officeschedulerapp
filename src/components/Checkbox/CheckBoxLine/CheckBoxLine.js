import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './CheckBoxLine.styles';
import Checkbox from '../CheckBox';

class CheckBoxLine extends Component {
  render() {
    const { onPress, leftLabel, rightLabel, checked } = this.props;

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.rowContainer}>
          <Checkbox checked={checked} />
          <Text style={styles.leftLabel}>{leftLabel}</Text>
          <Text>{rightLabel}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default CheckBoxLine;
