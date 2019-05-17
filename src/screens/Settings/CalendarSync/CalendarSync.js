import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Button from 'react-native-button';
import PropTypes from 'prop-types';
import { Text, Header, Input } from '../../../components';
import styles from './CalendarSync.styles';

class CalendarSync extends Component {
  onPressBack = () => {
    const { navigation } = this.props;
    navigation.goBack('');
  };

  onPressUpdatePassword = () => {
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title="Calendar Sync" leftButton="back" onLeftButtonPress={this.onPressBack} />
        <ScrollView>
          <View style={styles.formContainer}>
            <Text style={styles.text}>
              View your schedule inside your calendar with a one-way sync.
            </Text>
            <Text style={[styles.text, styles.textLast]}>
              The iCal format works with Apple Calendar, Outlook, Google Calendar and mobile devices.
            </Text>

            <Input
              containerStyle={styles.inputContainer}
              editable={false}
              label="Calendar Subscription URL (iCal)"
              placeholder=""
              autoCapitalize="none"
              value="webcal://api.officesecurity.com/api/ical/nuGjmO6q"
            />
            <Button
              containerStyle={styles.buttonContainer}
              style={styles.buttonText}>
              COPY TO CLIPBOARD
            </Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}

CalendarSync.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default CalendarSync;
