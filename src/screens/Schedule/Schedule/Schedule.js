import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import PropTypes from 'prop-types';
import { Header } from '../../../components';
import images from '../../../assets/images';
import styles from './Schedule.styles';
import { Colors } from '../../../constants/GlobalStyles';
import utils from '../../../utils/utils';

class Schedule extends Component {
  constructor(props) {
    super(props);

    const today = utils.momentDateFormat(new Date(), 'YYYY-MM-DD');

    this.state = {
      activeTab: 0,
      headerTitle: 'Schedule',
      headerSubTitle: '',
      rightButton: 'Filter',
      today,
      selectedDate: today
    };

    this.onPressDay = this.onPressDay.bind(this);
  }

  componentWillMount() {}

  onPressDay(day) {
    this.setState({
      selectedDate: day.dateString
    });
  }

  onPressTab = index => {
    const headerTitle = index === 0 ? 'Schedule' : 'R. Stevenson';
    const headerSubTitle = index === 0 ? '' : 'Schedule';
    const rightButton = index === 0 ? 'Filter' : '';

    this.setState({
      activeTab: index,
      headerTitle,
      headerSubTitle,
      rightButton
    });
  };

  onPressFilters = () => {
    const { navigation } = this.props;
    console.log('FiltersModals');
    navigation.navigate('FiltersModal');
  };

  buttonSelectedStyle = currentTab => {
    const { activeTab } = this.state;
    if (currentTab === activeTab) {
      return { backgroundColor: '#c7dfc5' };
    }
    return '';
  };

  buttonSelectedTextStyle = currentTab => {
    const { activeTab } = this.state;
    if (currentTab === activeTab) {
      return { color: '#38732e' };
    }
    return '';
  };

  renderSchedule = () => {
    return (
      <>
        <View style={styles.myScheduleDateContainer}>
          <View style={styles.myScheduleHeaderDayContainer}>
            <Text style={styles.myScheduleDateText}>Thursday May 9, 2019</Text>
            <View style={styles.myScheduleDayBadgeContainer}>
              <Text style={styles.myScheduleDayBadge}>Today</Text>
            </View>
          </View>

          <View style={styles.myScheduleShiftDay}>
            <Text style={styles.myScheduleLocationText}>CMM</Text>
            <Text style={styles.shiftTimeText}>7am to 7pm</Text>
          </View>
          <View style={styles.myScheduleShiftDay}>
            <Text style={styles.myScheduleLocationText}>NWH</Text>
            <Text style={styles.shiftTimeText}>7am to 7pm</Text>
          </View>
        </View>

        <View style={styles.myScheduleDateContainer}>
          <View style={styles.myScheduleHeaderDayContainer}>
            <Text style={styles.myScheduleDateText}>Friday May 10, 2019</Text>
          </View>

          <View style={styles.myScheduleShiftDay}>
            <Text style={styles.myScheduleLocationText}>CMM</Text>
            <Text style={styles.shiftTimeText}>7am to 7pm</Text>
          </View>
          <View style={styles.myScheduleShiftDay}>
            <Text style={styles.myScheduleLocationText}>NWH</Text>
            <Text style={styles.shiftTimeText}>7am to 7pm</Text>
          </View>
        </View>
      </>
    );
  };

  renderCalender = () => {
    const { today, selectedDate } = this.state;

    // Will come from props later on.
    const shiftDates = ['2019-05-17', '2019-05-18', '2019-05-19'];

    const markedDates = {};

    shiftDates.forEach(date => {
      markedDates[date] = {
        customStyles: {
          container: {
            borderColor: Colors.markedCalDateBorder,
            borderWidth: 1
          }
        },
        marked: true,
        selected: selectedDate === date
      };
    });

    markedDates[selectedDate] = {
      customStyles: {
        container: {
          backgroundColor: Colors.selectedCalDateBackground
        },
        text: {
          color: 'white'
        }
      }
    };

    if (selectedDate !== today) {
      if (!markedDates[today]) {
        markedDates[today] = {
          customStyles: {
            container: {
              backgroundColor: Colors.unSelectedCalDateBackground
            },
            text: {
              color: 'black'
            }
          }
        };
      } else {
        markedDates[today] = {
          customStyles: {
            container: {
              backgroundColor: Colors.unSelectedCalDateBackground,
              borderColor: '#83c57c',
              borderWidth: 1
            },
            text: {
              color: 'black'
            }
          }
        };
      }
    }

    return (
      <>
        <Calendar
          onDayPress={this.onPressDay}
          current={utils.momentDateFormat(new Date(), 'YYYY-MM-DD')}
          theme={{
            calendarBackground: '#ffffff',
            textSectionTitleColor: 'gray',
            selectedDayBackgroundColor: Colors.blue,
            selectedDayTextColor: 'white',
            dayTextColor: 'black',
            textDisabledColor: '#d9e1e8',
            dotColor: Colors.orange,
            arrowColor: 'black',
            monthTextColor: 'black',
            textDayFontSize: 15,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 15,
            textMonthFontWeight: 'bold'
          }}
          markingType="custom"
          markedDates={markedDates}
          style={styles.calendar}
        />

        <Text style={styles.scheduleDateHeadingText}>
          {utils.momentDateFormat(new Date(), 'dddd MMMM Do, YYYY')}
        </Text>

        <View style={[styles.scheduleContainer, styles.scheduleContainerFirst]}>
          <View style={styles.scheduleRowLeft}>
            <Text style={styles.providerNameText}>Stevenson</Text>
            <Text style={styles.shiftTimeText}>7am to 7pm</Text>
          </View>
          <View style={styles.scheduleRowRight}>
            <Text style={styles.providerLocationText}>NWH</Text>
            <Image style={styles.chatIcon} source={images.iconChat} />
          </View>
        </View>

        <View style={styles.scheduleContainer}>
          <View style={styles.scheduleRowLeft}>
            <Text style={styles.providerNameText}>Winter</Text>
            <Text style={styles.shiftTimeText}>7am to 7pm</Text>
          </View>
          <View style={styles.scheduleRowRight}>
            <Text style={styles.providerLocationText}>CMM</Text>
            <Image style={styles.chatIcon} source={images.iconChat} />
          </View>
        </View>

        <View style={styles.scheduleContainer}>
          <View style={styles.scheduleRowLeft}>
            <Text style={styles.providerNameText}>Sharpe</Text>
            <Text style={styles.shiftTimeText}>7am to 7pm</Text>
          </View>
          <View style={styles.scheduleRowRight}>
            <Text style={styles.providerLocationText}>West Harrison</Text>
            <Image style={styles.chatIcon} source={images.iconChat} />
          </View>
        </View>
      </>
    );
  };

  render() {
    const { activeTab, headerTitle, headerSubTitle, rightButton } = this.state;

    return (
      <View style={styles.container}>
        <Header
          title={headerTitle}
          subtitle={headerSubTitle}
          onRightButtonPress={this.onPressFilters}
          rightButton={rightButton}
        />
        <ScrollView>
          {activeTab === 0 ? this.renderCalender() : this.renderSchedule()}
        </ScrollView>
      </View>
    );
  }
}

Schedule.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default Schedule;
