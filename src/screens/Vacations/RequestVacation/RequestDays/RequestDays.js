import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Header, Button } from '../../../../components';
import styles from './RequestDays.styles';
import { Colors } from '../../../../constants/GlobalStyles';

class RequestDays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
      numCharacter: 0
    };
  }

  onSendMessge = () => {
    const { navigation } = this.props;
    navigation.navigate('');
  };

  onPressLeft = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  handleNote = note => {
    let len = note.length.toString();
    this.setState({ note: note, numCharacter: len });
  };

  render() {
    const { numCharacter } = this.state;
    return (
      <React.Fragment>
        <Header title="Request Vacation" onLeftButtonPress={this.onPressLeft} leftButton="Back" />
        <ScrollView>
          <Calendar />
          <View style={styles.container}>
            <Text style={styles.titleText}>Optional Note</Text>
            <View style={styles.textInput}>
              <TextInput
                multiline
                underlineColorAndroid="transparent"
                placeholder={'Write a brief note...'}
                maxLength={250}
                numberOfLines={10}
                onChangeText={note => this.handleNote(note)}
                value={this.state.text}
              />
            </View>

            <Text style={styles.reminderTxt}> {numCharacter}/250 Characters </Text>

            <Button color="blue" onPress={() => this.onSendMessge()}>
              Add
            </Button>
          </View>
        </ScrollView>
      </React.Fragment>
    );
  }
}

export default RequestDays;
