import React, { Component } from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Header } from '../../../../components';
import styles from './PendingRequests.styles';
import { Colors } from '../../../../constants/GlobalStyles';

class PendingRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pendingVacations: [
        {
          name: 'Winter'
        },
        {
          name: 'Michael'
        },
        {
          name: 'Dan'
        },
        {
          name: 'Kyle'
        },
        {
          name: 'Orange'
        },
        {
          name: 'James'
        }
      ]
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
    const { pendingVacations } = this.state;
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Header
            title="Pending Vacations"
            onLeftButtonPress={this.onPressLeft}
            leftButton="Back"
          />
          <StatusBar backgroundColor={Colors.blue} />
          <ScrollView>
            {pendingVacations.map(vacation => {
              return (
                <View style={styles.rowContainer} key={vacation.name}>
                  <Text style={styles.leftLabel}>{vacation.name}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </React.Fragment>
    );
  }
}

export default PendingRequests;
