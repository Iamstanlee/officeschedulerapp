import React, { Component } from 'react';
import { View, Text, TextInput, StatusBar } from 'react-native';
import Button from 'react-native-button';
import styles from './Message.styles';
import { Header } from '../../../components';
import { Colors } from '../../../constants/GlobalStyles';

class Message extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  onPressLeft = () => {
    const { navigation } = this.props;
    navigation.goBack()
  };

  onSendMessge = () => {
    const { navigation } = this.props;
    navigation.navigate('')
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title="Message"
          onPressLeft={this.onPressLeft} lefttext="Back" />
           <StatusBar backgroundColor={Colors.blue} />
        {/* <View>
          <Text style={styles.titleText}>Send Message</Text>
          <View style={styles.formstyles}>
            <TextInput
              multiline
              numberOfLines={5}
              onChangeText={(text) => this.setState({ text })}
              value={this.state.text} />
          </View>
          <Text style={styles.reminderTxt}>Reminder Text</Text>

          <Button
            containerStyle={styles.messageContainer}
            style={styles.faceIdText}
            onPress={() => this.onSendMessge()}>
            Send Message
         </Button>
        </View> */}
      </View>
    );
  }
}

export default Message;
