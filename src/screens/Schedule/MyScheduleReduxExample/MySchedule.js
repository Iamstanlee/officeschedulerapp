

/* import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { CustomButton, LoadingModal } from '../../components';
import styles from './MySchedule.styles';

class MySchedule extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  onPressCalendar = () => {
    const { navigation } = this.props;

    navigation.navigate('Calendar');
  };

  renderScheduleList() {
    const { scheduleData } = this.props;

    const itemList = scheduleData.map(item => (
      <View key={item.key}>
        <Text>{item.name}</Text>
      </View>
    ));
    if (scheduleData.length === 0) {
      return (
        <View>
          <Text>No items</Text>
        </View>
      );
    }
    return itemList;
  }

  render() {
    const { isLoaded } = this.props;

    return (
      <>
        <View>
          <LoadingModal visible={!isLoaded} />
          <Text style={styles.headerText}>My Schedule</Text>
          {this.renderScheduleList()}
        </View>
        <CustomButton label="Go to Calendar" onPress={this.onPressCalendar} />
      </>
    );
  }
}

MySchedule.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired,
  fetchData: PropTypes.func.isRequired,
  scheduleData: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoaded: PropTypes.bool.isRequired
};

export default MySchedule; */
