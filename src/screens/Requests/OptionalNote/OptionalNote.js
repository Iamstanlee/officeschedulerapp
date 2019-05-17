import React, { Component } from 'react';
import { View, Text, CheckBox, StatusBar, TextInput } from 'react-native';

import styles from './OptionalNote.styles';
import { Header, Button } from '../../../components';
import { Colors } from '../../../constants/GlobalStyles';

class OptionalNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
      numCharacter: 0
    };
  }

  onPressLeft = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  handleNote = note => {
    let len = note.length.toString();
    this.setState({ note: note, numCharacter: len });
  };
  onSendMessge = () => {
    console.log('Navigation Props:', this.props);
    const { navigation } = this.props;
    navigation.navigate('');
  };
  render() {
    const { numCharacter } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Note" onLeftButtonPress={this.onPressLeft} leftButton="Back" />
        <StatusBar backgroundColor={Colors.blue} />
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
    );
  }
}

export default OptionalNote;
