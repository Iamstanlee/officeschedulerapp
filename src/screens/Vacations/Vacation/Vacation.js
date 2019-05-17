import React, { Component } from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Header } from '../../../components';
import styles from './Vacation.styles';
import { Colors } from '../../../constants/GlobalStyles';

class Vacations extends Component {
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
          name: 'Albert'
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
          <Header title="Vacations" rightButton="Request" onRightButtonPress={this.onpressRight} />
          <StatusBar backgroundColor={Colors.blue} />
          <ScrollView>
            <Calendar />
            <View style={styles.top}>
              <Text style={styles.texttop}>Mon 16 June 2019 </Text>
            </View>
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

export default Vacations;
