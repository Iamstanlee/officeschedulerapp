import React, { Component } from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import Hr from 'react-native-hr-component';
import images from '../../../assets/images';
import { Text, Button, InputIcon } from '../../../components';
import styles from './Login.styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  onPressTouchId = () => {};

  onPressFaceId = () => {};

  onPressLogin = () => {
    const { navigation } = this.props;
    navigation.navigate('Schedule');
  };

  onPressForgotPass = () => {
    const { navigation } = this.props;
    navigation.navigate('ForgotPassword');
  };

  render() {
    const { email, password } = this.state;

    return (
      <View style={styles.container}>
        <View>
          <Image
            source={images.logo}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <InputIcon
          onChangeText={text => this.setState({ email: text })}
          placeholder="E-mail Address"
          autoCapitalize="none"
          icon={images.inputPersonIcon}
          value={email}
        />

        <InputIcon
          onChangeText={text => this.setState({ password: text })}
          placeholder="Password"
          autoCapitalize="none"
          icon={images.inputLockIcon}
          value={password}
          secureTextEntry
          returnKeyType="go"
        />

        <Button onPress={() => this.onPressLogin()}>Sign In</Button>

        <View style={styles.forgotPasswordContainer}>
          <TouchableHighlight
            onPress={() => this.onPressForgotPass()}
            underlayColor="transparent"
            activeOpacity={0.65}
            hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableHighlight>
        </View>

        <Hr
          text="or"
          fontSize={15}
          lineColor="#515f71"
          hrPadding={20}
          textPadding={6}
        />

        <View style={styles.alternateLoginsContainer}>
          <View style={styles.leftContainer}>
            <TouchableHighlight
              onPress={() => this.onPressTouchId()}
              underlayColor="transparent"
              activeOpacity={0.65}
              hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}>
              <View style={styles.buttonContainer}>
                <Image source={images.touchId} style={styles.iconTouchId} />
                <Text style={styles.useText}>Use Touch ID</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.rightContainer}>
            <TouchableHighlight
              onPress={() => this.onPressFaceId()}
              underlayColor="transparent"
              activeOpacity={0.65}
              hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}>
              <View style={styles.buttonContainer}>
                <Image source={images.faceId} style={styles.iconTouchId} />
                <Text style={styles.useText}>Use Face ID</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default Login;
