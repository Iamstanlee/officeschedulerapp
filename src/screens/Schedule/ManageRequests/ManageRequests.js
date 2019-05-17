import React, { Component } from 'react';
import { View, Text, Switch, Image, StatusBar, TouchableOpacity } from 'react-native';
import Button from 'react-native-button';
import { Header } from '../../../components';
import styles from './ManageRequests.styles';
import images from "../../../assets/images";
import { Colors } from '../../../constants/GlobalStyles';

class ManageRequests extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apply_filter: false,
    };

  }
  onSendFilters = () => {
    const { navigation } = this.props;
    navigation.navigate('');
  };

  onpressRight = () => {
    const { navigation } = this.props;
    navigation.navigate('Schedule');
  };

  onPressLeft = () => {
    const { navigation } = this.props;
    navigation.goBack('')
  };

  department = () => {
    const { navigation } = this.props;
    navigation.navigate('Departments');
  };

  location = () => {
    const { navigation } = this.props;
    navigation.navigate('Locations');
  };

  building = () => {
    const { navigation } = this.props;
    navigation.navigate('Offices');
  };

  provider = () => {
    const { navigation } = this.props;
    navigation.navigate('Provider');
  };
  render() {
    return (
      <View>
        <Header title="Filters"
          onPressRight={this.onpressRight} righttext="Reset"
          onPressLeft={this.onPressLeft} lefttext="Back" />
        <StatusBar backgroundColor={Colors.blue} />
        <View>
          <View style={styles.rowContainer}>
            <Text style={styles.leftLabel}>Apply Filter</Text>
            <Switch
              value={this.state.apply_filter}
              onValueChange={(val) => { this.setState({ apply_filter: val }) }}
            />
          </View>
          <View style={styles.seperator} />
          <TouchableOpacity onPress={() => this.department()}>
            <View style={styles.rowContainer}>

              <Text style={styles.leftLabel}>Department</Text>
              <View style={styles.view}>
                <Text style={styles.text}>Caenio</Text>
                <Image
                  style={styles.nextIcon}
                  source={images.iconRightArrow}
                />
              </View>

            </View>
          </TouchableOpacity>
          <View style={styles.seperator} />
          <TouchableOpacity onPress={() => this.location()}>
            <View style={styles.rowContainer}>

              <Text style={styles.leftLabel}>Location</Text>
              <View style={styles.view}>
                <Text style={styles.text}>All</Text>
                <Image
                  style={styles.nextIcon}
                  source={images.iconRightArrow}
                />
              </View>

            </View>
          </TouchableOpacity>
          <View style={styles.seperator} />
          <TouchableOpacity onPress={() => this.building()}>
            <View style={styles.rowContainer}>

              <Text style={styles.leftLabel}>Building</Text>
              <View style={styles.view}>
                <Text style={styles.text}>2 Selected</Text>
                <Image
                  style={styles.nextIcon}
                  source={images.iconRightArrow}
                />
              </View>

            </View>
          </TouchableOpacity>
          <View style={styles.seperator} />
          <TouchableOpacity onPress={() => this.provider()}>
            <View style={styles.rowContainer}>

              <Text style={styles.leftLabel}>Provider</Text>
              <View style={styles.view}>
                <Text style={styles.text}>All</Text>
                <Image
                  style={styles.nextIcon}
                  source={images.iconRightArrow}
                />
              </View>

            </View>
          </TouchableOpacity>
          <View style={styles.seperator} />
          <Button
            containerStyle={styles.messageContainer}
            style={styles.faceIdText}
            onPress={() => this.onSendFilters()}>
            Apply Filters
          </Button>
        </View>
      </View>
    );
  }
}

export default ManageRequests;
