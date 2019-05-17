import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Header, CustomMultiPicker, Button } from '../../../../components';
import styles from './Locations.styles';
import { Window, App } from '../../../../constants/GlobalStyles';
import { locations } from '../../../../constants/staticData';

class Locations extends Component {
  onChangeForm = value => {
    console.log(value);
  };

  onPressClose = () => {
    const { navigation } = this.props;
    navigation.navigate('FiltersModal');
  };

  onPressApply = () => {
    const { navigation } = this.props;
    navigation.navigate('FiltersModal');
  };

  render() {
    const selected = ['fw'];

    return (
      <View style={styles.container}>
        <Header
          title="Locations"
          onLeftButtonPress={this.onPressClose}
          leftButton="Back"
        />
        <CustomMultiPicker
          options={locations}
          selected={selected}
          returnValue="value"
          multiple
          callback={res => {
            this.onChangeForm(res);
          }}
          rowBackgroundColor="#fff"
          rowHeight={46}
          scrollViewHeight={Window.height - App.headerHeight - 90}
        />
        <Button onPress={() => this.onPressApply()}>Save</Button>
      </View>
    );
  }
}

Locations.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default Locations;
