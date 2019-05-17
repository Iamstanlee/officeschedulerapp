import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import Button from 'react-native-button';
import styles from './Vacations.styles';
import { Header } from '../../../components';

class Vacations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      noOfLines: 5
    };
  }

  onSendMessge = () => {
    const { navigation } = this.props;
    navigation.navigate('');
  };

  onPressLeft = () => {
    const { navigation } = this.props;
    navigation.goBack('');
  };

  render() {
    const { noOfLines, message } = this.state;
    return (
      <ScrollView>
        <View>
          <Header title="Message"
            onPressLeft={this.onPressLeft} lefttext="Back" />
          <View>
            <Text style={styles.titleText}>Send Message</Text>
            <View style={styles.formstyles}>
              <TextInput
                multiline
                numberOfLines={noOfLines}
                onChangeText={(text) => this.setState({ message: text })}
                value={message} />
            </View>

            <Text style={styles.reminderTxt}>Reminder Text</Text>

            <Button
              containerStyle={styles.messageContainer}
              style={styles.faceIdText}
              onPress={() => this.onSendMessge()}>
              Send Message
            </Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Vacations;
