import React, { Component } from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import CheckBox from 'react-native-check-box';

import Button from 'react-native-button';
import { Header } from '../../../../components';
import styles from './OthersShifts.styles';
import { Colors } from '../../../../constants/GlobalStyles';

class OthersShifts extends Component {
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
    navigation.goBack();
  };

  onSendMessge = () => {
    console.log('Navigation Props:', this.props);
    const { navigation } = this.props;
    navigation.navigate('');
  };
  render() {
    return (
      <ScrollView>
        <View>
          <Header
            title="Schedule"
            onPressLeft={this.onPressLeft}
            lefttext="Back"
          />
          <StatusBar backgroundColor={Colors.blue} />
          <View>
            <View>
              <Text style={styles.texttop}>Tuesday April 16, 2019</Text>
            </View>
            <View>
              <View style={styles.rowContainer}>
                <CheckBox
                  isChecked={this.state.topchecked}
                  onClick={() =>
                    this.setState({ topchecked: !this.state.topchecked })
                  }
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
                  isChecked={this.state.bottomchecked}
                  onClick={() =>
                    this.setState({ bottomchecked: !this.state.bottomchecked })
                  }
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
                  isChecked={this.state.middlechecked}
                  onClick={() =>
                    this.setState({ middlechecked: !this.state.middlechecked })
                  }
                />
                <Text style={styles.leftLabel}>ShulMen Building</Text>
                <Text>7am to 7pm</Text>
              </View>
            </View>

            <View>
              <Text style={styles.texttop}>Sunday April 28, 2019</Text>
            </View>

            <View>
              <View style={styles.rowContainer}>
                <CheckBox
                  isChecked={this.state.checked}
                  onClick={() =>
                    this.setState({ checked: !this.state.checked })
                  }
                />
                <Text style={styles.leftLabel}>ShulMen Building</Text>
                <Text>7am to 7pm</Text>
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

export default OthersShifts;
