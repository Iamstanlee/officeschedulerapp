import React, { Component } from 'react';
import { View, Text, ScrollView, CheckBox, StatusBar } from 'react-native'
import Button from 'react-native-button';
import styles from './OptionalNote.styles';
import { Header } from '../../../../components';
import { Colors } from '../../../../constants/GlobalStyles';

class OptionalNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topchecked: false,
      middlechecked: false,
      bottomchecked: false,
      checked: false
    };

  }

  onPressLeft = () => {
    const { navigation } = this.props;
    navigation.goBack()
  };

  onSendMessge = () => {
    console.log('Navigation Props:', this.props)
    const { navigation } = this.props;
    navigation.navigate('');
  }
  render() {
    return (
      <ScrollView>
        <View>
          <Header title="Optional Note"
            onPressLeft={this.onPressLeft} lefttext="Back" />
          <StatusBar backgroundColor={Colors.blue} />
          <View>
            <View>
              <Text style={styles.texttop}>Tuesday April 16, 2019</Text>
            </View>
            <View>
              <View style={styles.rowContainer}>
                <CheckBox
                  value={this.state.topchecked}
                  onValueChange={() => this.setState({ topchecked: !this.state.topchecked })}
                />
                <Text style={styles.leftLabel}>ShulMen Building</Text>
                <Text>7am to 7pm</Text>
              </View>
            </View>

            <View>
              <Text style={styles.texttop}>Wednesday April 17, 2019</Text>
            </View>

            <View>
              <View style={styles.rowContainer}>
                <CheckBox
                  value={this.state.bottomchecked}
                  onValueChange={() => this.setState({ bottomchecked: !this.state.bottomchecked })}
                />
                <Text style={styles.leftLabel}>ShulMen Building</Text>
                <Text>7am to 7pm</Text>
              </View>
            </View>

            <View>
              <Text style={styles.texttop}>Thrusday April 18, 2019</Text>
            </View>

            <View>
              <View style={styles.rowContainer}>
                <CheckBox
                  value={this.state.middlechecked}
                  onValueChange={() => this.setState({ middlechecked: !this.state.middlechecked })}
                />
                <Text style={styles.leftLabel}>ShulMen Building</Text>
                <Text >7am to 7pm</Text>
              </View>
            </View>

            <View>
              <Text style={styles.texttop}>Sunday April 28, 2019</Text>
            </View>

            <View>
              <View style={styles.rowContainer}>
                <CheckBox
                  value={this.state.checked}
                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                />
                <Text style={styles.leftLabel}>ShulMen Building</Text>
                <Text >7am to 7pm</Text>
              </View>
            </View>

            <Button
              containerStyle={styles.messageContainer}
              style={styles.faceIdText}
              onPress={() => this.onSendMessge()}>
              Select
        </Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default OptionalNote;