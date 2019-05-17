import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Header, Button } from '../../../../components';
import styles from './RequestDate.styles';
import images from '../../../../assets/images';
import { Colors, GlobalStyles } from '../../../../constants/GlobalStyles';

class RequestDate extends Component {
  constructor(props) {
    super(props);
    this.requestDate = [
      {
        reqtype: 'Day and Location to Switch',
        action: this.myShifts,
        selected: props.selected || '2 shifts selected'
      },
      {
        reqtype: "Other Provider's Day and Location",
        action: this.othersShifts,
        selected: props.selected || 'A shift selected'
      },
      {
        reqtype: 'Optional Note',
        action: this.optionalNote,
        selected: 'No optional note'
      }
    ];
  }

  myShifts = () => {
    console.log('Navigation Props:', this.props);
    const { navigation } = this.props;
    navigation.navigate('MyShifts');
  };
  othersShifts = () => {
    console.log('Navigation Props:', this.props);
    const { navigation } = this.props;
    navigation.navigate('OthersShifts');
  };

  optionalNote = () => {
    const { navigation } = this.props;
    navigation.navigate('OptionalNote');
  };

  onSendMessge = () => {
    console.log('Navigation Props:', this.props);
    const { navigation } = this.props;
    // navigation.navigate();
  };

  onPressLeft = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Header title="Request by Date" onLeftButtonPress={this.onPressLeft} leftButton="Back" />
          <StatusBar backgroundColor={Colors.blue} />
          {this.requestDate.map(req => {
            return (
              <TouchableOpacity onPress={req.action} key={req.reqtype}>
                <View style={styles.rowContainer}>
                  <View style={styles.columnText}>
                    <Text style={styles.leftLabel}>{req.reqtype}</Text>
                    <Text style={styles.leftSubLabel}>{req.selected}</Text>
                  </View>
                  <Image style={GlobalStyles.iconChevron} source={images.iconChevron} />
                </View>
              </TouchableOpacity>
            );
          })}
          <Button color="blue" onPress={this.onSendMessge}>
            SEND REQUEST
          </Button>
        </View>
      </React.Fragment>
    );
  }
}

export default RequestDate;
