import React, {Component} from 'react';
import {Dimensions, Platform} from 'react-native';
import Moment from 'moment';

export default class utils {
  static isIphoneX() {
    const {height, width} = Dimensions.get('window');
    const iphoneXAspect = parseFloat((height / width).toString().substring(0, 5))
    if (Platform.OS === 'ios' && iphoneXAspect === 2.165) {
      return true
    }
    return false
  }

  static momentDateFormat = (date, format) => Moment(date).format(format);
}
