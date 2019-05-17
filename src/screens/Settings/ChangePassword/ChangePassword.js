import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import images from '../../../assets/images';
import { Text, Button, InputIcon, Header } from '../../../components';
import styles from './ChangePassword.styles';

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    };
  }

  onPressBack = () => {
    const { navigation } = this.props;
    navigation.goBack('');
  };

  onPressUpdatePassword = () => {
  };

  render() {
    const { currentPassword, newPassword, confirmNewPassword } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Change Password" leftButton="back" onLeftButtonPress={this.onPressBack} />
        <ScrollView>
          <View style={styles.formContainer}>
            <InputIcon
              onChangeText={text => this.setState({ currentPassword: text })}
              placeholder="Current Password"
              autoCapitalize="none"
              icon={images.inputLockIcon}
              value={currentPassword}
              secureTextEntry
              returnKeyType="go"
            />

            <InputIcon
              onChangeText={text => this.setState({ newPassword: text })}
              placeholder="New Password"
              autoCapitalize="none"
              icon={images.inputLockIcon}
              value={newPassword}
              secureTextEntry
              returnKeyType="go"
            />

            <InputIcon
              onChangeText={text => this.setState({ confirmNewPassword: text })}
              placeholder="Confirm New Password"
              autoCapitalize="none"
              icon={images.inputLockIcon}
              value={confirmNewPassword}
              secureTextEntry
              returnKeyType="go"
            />

            <Text style={styles.instructionsText}>
              <Text style={styles.instructionsTextBold}>Your password must contain:</Text>{'\n'}
              At least 8 characters.{'\n'}
              At least one uppercase character (A-Z).{'\n'}
              At least 8 characters.{'\n'}
              At least one lowercase characters(a-z).{'\n'}
              At least one number(0-9).{'\n'}
              No more than 2 identical characters in row (eg:11, ba , ..etc..)
            </Text>
          </View>
          
          <Button onPress={this.onPressUpdatePassword}>Update Password</Button>
        </ScrollView>
      </View>
    );
  }
}

ChangePassword.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default ChangePassword;
