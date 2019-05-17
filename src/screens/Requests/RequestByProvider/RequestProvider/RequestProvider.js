import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TimePickerAndroid,
  TouchableOpacity,
  Image,
  StatusBar
} from 'react-native';
import { Header, Button } from '../../../../components';
import styles from './RequestProvider.styles';
import images from '../../../../assets/images';
import { Colors, GlobalStyles } from '../../../../constants/GlobalStyles';

class RequestProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: '6',
      endTime: '12'
    };
  }

  selectprovider = () => {
    console.log('Navigation Props:', this.props);
    const { navigation } = this.props;
    navigation.navigate('SelectProviders');
  };

  optionalnode = () => {
    //navigate to optionalnote and pass params indicating request by provider
    console.log('Navigation Props:', this.props);
    const { navigation } = this.props;
    navigation.navigate('OptionalNote');
  };

  onPressLeft = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  onSendMessge = () => {
    const { navigation } = this.props;
    navigation.navigate('OthersShifts');
  };

  selectTime = async type => {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        mode: 'spinner',
        hour: 14,
        minute: 0,
        is24Hour: false
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        //run some logic to include am/pm
        if (type === 'start') {
          this.setState({ startTime: hour + ':' + minute });
        } else this.setState({ endTime: hour + ':' + minute });
      }
    } catch (e) {
      return e; //handle error
    }
  };

  myShifts = () => {
    const { navigation } = this.props;
    navigation.navigate('MyShifts');
  };

  render() {
    const { startTime, endTime } = this.state;
    return (
      <React.Fragment>
        <Header
          title="Request by provider"
          onLeftButtonPress={this.onPressLeft}
          leftButton="Back"
        />
        <ScrollView style={styles.container}>
          <StatusBar backgroundColor={Colors.blue} />
          <TouchableOpacity onPress={this.myShifts}>
            <View style={styles.rowContainer}>
              <View style={styles.columnText}>
                <Text style={styles.leftLabel}>Days And Location To Switch</Text>
                <Text style={styles.leftSubLabel}>2 shifts selected</Text>
              </View>
              <Image style={GlobalStyles.iconChevron} source={images.iconChevron} />
            </View>
          </TouchableOpacity>

          <View style={styles.coverageContainer}>
            <Text style={styles.coverageText}>Coverage Time</Text>
          </View>
          <TouchableOpacity onPress={() => this.selectTime('start')} style={styles.rowContainer}>
            <Text style={styles.leftLabel}>Start Time</Text>
            <Text>{startTime}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.selectTime('end')} style={styles.rowContainer}>
            <Text style={styles.leftLabel}>End Time</Text>
            <Text>{endTime}</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity onPress={this.selectprovider}>
            <View style={styles.rowContainer}>
              <View style={styles.columnText}>
                <Text style={styles.leftLabel}>Select Providers</Text>
                <Text style={styles.leftSubLabel}>3 providers selected</Text>
              </View>
              <Image style={GlobalStyles.iconChevron} source={images.iconChevron} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.optionalnode}>
            <View style={styles.rowContainer}>
              <View style={styles.columnText}>
                <Text style={styles.leftLabel}>Optional Note</Text>
                <Text style={styles.leftSubLabel}>No Optional Note</Text>
              </View>
              <Image style={GlobalStyles.iconChevron} source={images.iconChevron} />
            </View>
          </TouchableOpacity>

          <Button color="blue" onPress={() => this.onSendMessge()}>
            SEND REQUEST
          </Button>
        </ScrollView>
      </React.Fragment>
    );
  }
}

export default RequestProvider;
