import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
import { Header } from '../../../components';
import styles from './Requests.styles';
import images from '../../../assets/images';
import { Colors, GlobalStyles } from '../../../constants/GlobalStyles';

class Requests extends Component {
  constructor(props) {
    super(props);
    this.requests = [
      {
        type: 'Request by Date',
        action: this.requestdate,
        notification: props.notification
      },
      {
        type: 'Request by Provider',
        action: this.requestprovider,
        notification: props.notification
      },
      { type: 'divider' }, //divider view
      {
        type: 'Manage Requests',
        action: this.managerequest,
        notification: props.notification
      },
      {
        type: 'Request Log',
        action: this.requestlog,
        notification: 4
      }
    ];
  }
  requestlog = () => {
    console.log('Navigation Props:', this.props);
    const { navigation } = this.props;
    navigation.navigate('RequestLog');
  };

  managerequest = () => {
    console.log('Navigation Props:', this.props);
    const { navigation } = this.props;
    navigation.navigate('ManageRequest');
  };

  requestprovider = () => {
    console.log('Navigation Props:', this.props);
    const { navigation } = this.props;
    navigation.navigate('RequestProvider');
  };

  requestdate = () => {
    console.log('Navigation Props:', this.props);
    const { navigation } = this.props;
    navigation.navigate('RequestDate');
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.top}>
          <Header title="Request Change" />
          <StatusBar backgroundColor={Colors.blue} />
          <Text style={styles.texttop}>Make a Change Request</Text>
        </View>
        {this.requests.map((req, index) => {
          return (
            <React.Fragment key={req.type}>
              {index === 2 ? (
                <View style={styles.divider} />
              ) : (
                <TouchableOpacity onPress={req.action}>
                  <View style={styles.rowContainer}>
                    <Text style={styles.leftLabel}>{req.type}</Text>
                    <View style={styles.rightLabel}>
                      {req.notification && (
                        <View style={styles.notificationContainer}>
                          <Text style={styles.notificationText}>{req.notification}</Text>
                        </View>
                      )}
                      <Image style={GlobalStyles.iconChevron} source={images.iconChevron} />
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            </React.Fragment>
          );
        })}
      </ScrollView>
    );
  }
}

export default Requests;
