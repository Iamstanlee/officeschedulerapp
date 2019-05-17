import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Button from 'react-native-button';
import { Header } from '../../../components';
import { Colors } from '../../../constants/GlobalStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  InputContainer: {
    width: '80%',
    marginTop: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'grey',
    borderRadius: 25
  },
  forgotPassContainer: {
    width: '70%',
    backgroundColor: Colors.blue,
    borderRadius: 25,
    padding: 10,
    marginTop: 20
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: '#696969'
  },
  forgotPassText: {
    color: 'white'
  }
});

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pass1: '',
      pass2: ''
    };
  }

  onPressSavePass = () => {
    const { navigation } = this.props;
    navigation.navigate('Login');
  };

  render() {
    return (
      <>
        <Header title="Reset Password"/>
        <View style={styles.container}>
          <View style={styles.InputContainer}>
            <TextInput
              style={styles.body}
              placeholder="Password"
              onChangeText={text => this.setState({ pass1: text })}
              value={this.state.pass1}
              placeholderTextColor="grey"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.InputContainer}>
            <TextInput
              style={styles.body}
              placeholder="Confirm Password"
              onChangeText={text => this.setState({ pass2: text })}
              value={this.state.pass2}
              placeholderTextColor="grey"
              underlineColorAndroid="transparent"
            />
          </View>
          <Button
            containerStyle={styles.forgotPassContainer}
            style={styles.forgotPassText}
            onPress={() => this.onPressSavePass()}>
            Save My New Password
          </Button>
        </View>
      </>
    );
  }
}

export default ResetPassword;
