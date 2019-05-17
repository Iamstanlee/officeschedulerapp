import React from 'react';
import { View, TouchableHighlight, Image } from 'react-native';
import PropTypes from 'prop-types';
import StatusBarColor from '../Header/StatusBarColor';
import { Colors } from '../../constants/GlobalStyles';
import styles from './HeaderAlternate.styles';

const HeaderAlternate = ({ image, imageStyle, onPress }) => (
  <>
    <StatusBarColor
      translucent
      backgroundColor={Colors.white}
      barStyle="dark-content"
    />

    <View style={styles.container}>
      <TouchableHighlight onPress={onPress} activeOpacity={0.65} underlayColor="transparent" hitSlop={{ top: 5, bottom: 5, left: 15, right: 15 }}>
        <Image source={image} style={imageStyle} />
      </TouchableHighlight>
    </View>
  </>
);

HeaderAlternate.propTypes = {
  image: PropTypes.number.isRequired,
  imageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  onPress: PropTypes.func.isRequired
};

export default HeaderAlternate;
