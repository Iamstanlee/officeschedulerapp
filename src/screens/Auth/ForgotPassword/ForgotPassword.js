import React, { Component } from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import images from '../../../assets/images';
import { HeaderAlternate, Text, Button, InputIcon } from '../../../components';
import styles from './ForgotPassword.styles';
import { StyleFonts } from '../../../constants/GlobalStyles';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  onPressBack = () => {
    const { navigation } = this.props;

    navigation.navigate('Login');
  };

  onPressResetPassword = () => {
    const { navigation } = this.props;

    navigation.navigate('EmailSuccess');
  };

  render() {
    const { email } = this.state;

    return (
      <View style={styles.container}>
        <HeaderAlternate image={images.headerIconBackArrowBlue} imageStyle={styles.iconBackArrow} onPress={this.onPressBack} />

        <Image
          source={images.forgotPasswordLock}
          style={styles.iconLock}
          resizeMode="contain"
        />

        <Text style={[StyleFonts.h4, styles.headerTextAlign]}>
          Forgot password?
        </Text>

        <Text style={[StyleFonts.paragraph, styles.forgotPasswordTextAlign]}>
          We just need your registered e-mail address to send you password reset instructions
        </Text>

        <InputIcon
          onChangeText={text => this.setState({ email: text })}
          placeholder="E-mail Address"
          autoCapitalize="none"
          icon={images.inputPersonIcon}
          value={email}
        />

        <Button onPress={this.onPressResetPassword}>Reset Password</Button>
      </View>
    );
  }
}

ForgotPassword.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired,
};

export default ForgotPassword;
