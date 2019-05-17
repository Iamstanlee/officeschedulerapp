import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Header, Button } from '../../../../components';
import styles from './RequestVacation.styles';
import images from '../../../../assets/images';
import { Colors, GlobalStyles } from '../../../../constants/GlobalStyles';

class requestDays extends Component {
  constructor(props) {
    super(props);
    this.requestDays = [
      {
        label: 'Request Vacation Day',
        action: this.requestDays
      },
      {
        label: 'Pending Request',
        action: this.pendingRequest,
        subLabel: '1 Pending Request'
      },
      {
        label: 'Vacation Request log',
        action: this.vacationLog,
        subLabel: '2 requests processed in the last 30days'
      }
    ];
  }

  requestDays = () => {
    console.log('Navigation Props:', this.props);
    const { navigation } = this.props;
    navigation.navigate('RequestDays');
  };

  pendingRequest = () => {
    const { navigation } = this.props;
    navigation.navigate('PendingRequests');
  };

  vacationLog = () => {
    const { navigation } = this.props;
    navigation.navigate('RequestLogs');
  };

  onPressLeft = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Header title="Vacation Days" onLeftButtonPress={this.onPressLeft} leftButton="Back" />
          <StatusBar backgroundColor={Colors.blue} />
          {this.requestDays.map(req => {
            return (
              <View key={req.label}>
                <View style={styles.divider} />
                <TouchableOpacity onPress={req.action}>
                  <View style={styles.rowContainer}>
                    <View style={styles.columnText}>
                      <Text style={styles.leftLabel}>{req.label}</Text>
                      {req.subLabel && (
                        <Text numberOfLines={1} style={styles.leftSubLabel}>
                          {req.subLabel}
                        </Text>
                      )}
                    </View>
                    <Image style={GlobalStyles.iconChevron} source={images.iconChevron} />
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </React.Fragment>
    );
  }
}

export default requestDays;
