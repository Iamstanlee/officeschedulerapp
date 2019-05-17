import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Header } from '../../../../components';
import styles from './PendingRequests.styles';

class PendingRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onSendMessge = () => {
    const { navigation } = this.props;
    navigation.navigate('');
  };

  onpressRight = () => {
    const { navigation } = this.props;
    navigation.navigate('RequestVacation');
  };

  render() {
    return (
      <ScrollView>
        <View>
          <Header title="Vacations"
            showRightButton onPressRight={this.onpressRight} righttext="Request" />
        </View>
        <Calendar />
        <View>
          <View>
            <Text style={styles.texttop}>Tuesday April 16, 2019</Text>
            <View style={styles.seperator} />
          </View>
          <View>
            <Text style={styles.textSize}>Winter</Text>
            <View style={styles.seperator} />
          </View>
          <View>
            <Text style={styles.textSize}>Abbot</Text>
            <View style={styles.seperator} />
          </View>
          <View>
            <Text style={styles.textSize}>Stevenson</Text>
            <View style={styles.seperator} />
          </View>

        </View>
      </ScrollView>
    );
  }
}

export default PendingRequests;
