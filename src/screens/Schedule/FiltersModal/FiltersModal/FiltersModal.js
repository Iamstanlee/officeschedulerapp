import React, { Component } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, Switch } from 'react-native';
import PropTypes from 'prop-types';
import { Header } from '../../../../components';
import styles from './FiltersModal.styles';
import images from '../../../../assets/images';
import { Colors, GlobalStyles } from '../../../../constants/GlobalStyles';

class FiltersModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSwitchActive: true
    };

    this.onToggleApplyFilters = this.onToggleApplyFilters.bind(this);
    this.onPressDepartments = this.onPressDepartments.bind(this);
    this.onPressLocations = this.onPressLocations.bind(this);
    this.onPressOffices = this.onPressOffices.bind(this);
    this.onPressProviders = this.onPressProviders.bind(this);
  }

  onPressReset = () => {};

  onPressClose = () => {
    const { navigation } = this.props;
    navigation.goBack('');
  };

  onToggleApplyFilters = value => {
    const { isSwitchActive } = this.state;

    this.setState({
      isSwitchActive: value
    });
  };

  onPressDepartments = () => {
    const { navigation } = this.props;
    navigation.navigate('Departments');
  };

  onPressLocations = () => {
    const { navigation } = this.props;
    navigation.navigate('Locations');
  };

  onPressOffices = () => {
    const { navigation } = this.props;
    navigation.navigate('Offices');
  };

  onPressProviders = () => {
    const { navigation } = this.props;
    navigation.navigate('Providers');
  };

  render() {
    const { isSwitchActive } = this.state;

    return (
      <View style={styles.container}>
        <Header
          title="Filters"
          onLeftButtonPress={this.onPressClose}
          leftButton="Close"
          onRightButtonPress={this.onPressReset}
          rightButton="Reset"
        />
        <StatusBar backgroundColor={Colors.blue} />
        <View>
          <View style={styles.rowContainer}>
            <Text style={styles.leftLabel}>Apply Filter</Text>
            <Switch
              value={isSwitchActive}
              trackColor={{true: Colors.blue, false: Colors.trackColorFalse}}
              onValueChange={val => {
                this.setState({ isSwitchActive: val });
              }}
            />
          </View>

          <TouchableOpacity activeOpacity={1} onPress={this.onPressDepartments}>
            <View style={styles.rowContainer}>
              <Text style={styles.leftLabel}>Departments</Text>
              <Text style={styles.text}>Administration</Text>
              <Image
                style={GlobalStyles.iconChevron}
                source={images.iconChevron}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={1} onPress={this.onPressLocations}>
            <View style={styles.rowContainer}>
              <Text style={styles.leftLabel}>Locations</Text>
              <Text style={styles.text}>Florida West</Text>
              <Image
                style={GlobalStyles.iconChevron}
                source={images.iconChevron}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={1} onPress={this.onPressOffices}>
            <View style={styles.rowContainer}>
              <Text style={styles.leftLabel}>Offices</Text>
              <Text style={styles.text}>A1A Downtown, Midway</Text>
              <Image
                style={GlobalStyles.iconChevron}
                source={images.iconChevron}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={1} onPress={this.onPressProviders}>
            <View style={styles.rowContainer}>
              <Text style={styles.leftLabel}>Providers</Text>
              <Text style={styles.text}>Michael Sharpe</Text>
              <Image
                style={GlobalStyles.iconChevron}
                source={images.iconChevron}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

FiltersModal.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default FiltersModal;
