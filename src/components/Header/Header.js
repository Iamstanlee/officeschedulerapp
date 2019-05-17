import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Text from '../Text';
import styles from './Header.styles';
import images from '../../assets/images';

class Header extends Component {
  static leftButtonContent(key) {
    switch (key.toLowerCase()) {
      case 'back':
        return <Image source={images.backArrow} style={styles.arrowBack} />;
      case 'close':
        return <Image source={images.closeIcon} style={styles.iconClose} />;
      default:
        return <Text>{key}</Text>;
    }
  }

  static rightButtonContent(key) {
    switch (key.toLowerCase()) {
      case 'filter':
        return <Image source={images.iconFilter} style={styles.iconFilter} />;
      default:
        return <Text>{key}</Text>;
    }
  }

  renderLeftButton() {
    const { leftButton, onLeftButtonPress } = this.props;

    if (!leftButton) return null;

    let buttonContent;

    switch (leftButton.toLowerCase()) {
      case 'filter':
        buttonContent = Header.leftButtonContent('filter');
        break;
      case 'back':
        buttonContent = Header.leftButtonContent('back');
        break;
      case 'close':
        buttonContent = Header.leftButtonContent('close');
        break;
      default:
    }

    return (
      <TouchableOpacity
        style={styles.headerButton}
        onPress={onLeftButtonPress}
        hitSlop={{ top: 5, bottom: 5, left: 15, right: 15 }}
      >
        {buttonContent}
      </TouchableOpacity>
    );
  }

  renderRightButton() {
    const { rightButton, onRightButtonPress } = this.props;

    if (!rightButton) return null;

    let buttonContent;

    switch (rightButton.toLowerCase()) {
      case 'filter':
        buttonContent = Header.rightButtonContent('filter');
        break;
      case 'back':
        buttonContent = Header.rightButtonContent('back');
        break;
      case 'close':
        buttonContent = Header.rightButtonContent('close');
        break;
      default:
        buttonContent = Header.rightButtonContent(rightButton);
    }

    return (
      <TouchableOpacity style={styles.headerButton} onPress={onRightButtonPress}>
        {buttonContent}
      </TouchableOpacity>
    );
  }

  renderSubtitle() {
    const { subtitle } = this.props;
    if (subtitle) {
      return (
        <Text numberOfLines={1} style={styles.subtitle}>
          {subtitle}
        </Text>
      );
    }
    return null;
  }

  render() {
    const { title } = this.props;
    return (
      <>
        <View style={styles.container}>
          <View style={styles.leftButtonContainer}>{this.renderLeftButton()}</View>
          <View style={styles.titleTextContainer}>
            <Text numberOfLines={1} style={styles.title}>
              {title}
            </Text>
            {this.renderSubtitle()}
          </View>
          <View style={styles.rightButtonContainer}>{this.renderRightButton()}</View>
        </View>
      </>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  leftButton: PropTypes.string,
  onLeftButtonPress: PropTypes.func,
  rightButton: PropTypes.string,
  onRightButtonPress: PropTypes.func
};

Header.defaultProps = {
  subtitle: null,
  leftButton: null,
  onLeftButtonPress: null,
  rightButton: null,
  onRightButtonPress: null
};

export default Header;
