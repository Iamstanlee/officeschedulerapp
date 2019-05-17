import React, { Component } from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import images from '../../../assets/images';
import { Text, Button } from '../../../components';
import styles from './EmailSuccess.styles';
import { StyleFonts } from '../../../constants/GlobalStyles';

class EmailSuccess extends Component {
  constructor(props) {
    super(props);
    this.onPressReturnToLogin = this.onPressReturnToLogin.bind(this);
  }

  onPressReturnToLogin = () => {
    const { navigation } = this.props;

    navigation.navigate('Login');
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={images.emailSuccessAirplane}
          style={styles.iconMain}
          resizeMode="contain"
        />

        <Text style={[StyleFonts.h4, styles.headerTextAlign]}>
          We{'\''}ve sent you an e-mail
        </Text>

        <Text style={[StyleFonts.paragraph, styles.textAlign]}>
          Check your e-mail and follow instructions included in the message
        </Text>

        <Button onPress={this.onPressReturnToLogin} color="lightgray">Back to Login Page</Button>
      </View>
    );
  }
}

EmailSuccess.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired,
};

export default EmailSuccess;
