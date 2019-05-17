import React, { Component } from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { Header, Button } from '../../../components';
import styles from './OthersShifts.styles';
import { Colors } from '../../../constants/GlobalStyles';
import CheckBoxLine from '../../../components/Checkbox/CheckBoxLine/CheckBoxLine';

class OthersShifts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedules: [
        {
          position: 'First Building',
          date: 'Tuesday April 16, 2019',
          time: '7am to 7pm',
          checked: false
        },
        {
          position: 'Shulmen Buiding',
          date: 'Wednesday May 18, 2019',
          time: '6am to 10pm',
          checked: false
        },
        {
          position: 'RBC Building Ground Floor',
          date: 'Monday June 26, 2019',
          time: '10am to 8pm',
          checked: false
        },
        {
          position: 'RBC Top Floor',
          date: 'Friday June 2, 2019',
          time: '1am to 12pm',
          checked: false
        }
      ]
    };
  }

  handleSchedule = () => {
    //get the selected items and navigate back
    const { navigation } = this.props;
    navigation.goBack();
  };

  onPressLeft = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  handleChecked = (value, index) => {
    const { schedules } = this.state;
    schedules[index].checked = !value;
    this.setState({ schedules });
  };
  render() {
    const { schedules } = this.state;

    return (
      <React.Fragment>
        <Header title="Others Schedule" onLeftButtonPress={this.onPressLeft} leftButton="Back" />
        <ScrollView style={styles.container}>
          <StatusBar backgroundColor={Colors.blue} />
          {schedules.map((schedule, index) => {
            return (
              <View key={schedule.position}>
                <View style={styles.topTextContainer}>
                  <Text style={styles.texttop}>{schedule.date}</Text>
                </View>

                <CheckBoxLine
                  checked={schedule.checked}
                  leftLabel={schedule.position}
                  rightLabel={schedule.time}
                  onPress={() => this.handleChecked(schedule.checked, index)}
                />
              </View>
            );
          })}
          <Button style={styles.button} color="blue" onPress={this.handleSchedule}>
            SELECT
          </Button>
        </ScrollView>
      </React.Fragment>
    );
  }
}

export default OthersShifts;
