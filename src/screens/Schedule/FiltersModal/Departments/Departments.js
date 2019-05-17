import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Header, CustomMultiPicker, Button } from '../../../../components';
import styles from './Departments.styles';
import { Window, App } from '../../../../constants/GlobalStyles';
import { departments } from '../../../../constants/staticData';

class Departments extends Component {
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
    const selected = ['ad'];

    return (
      <View style={styles.container}>
        <Header title="Departments" onLeftButtonPress={this.onPressClose} leftButton="Back" />
        <CustomMultiPicker
          options={departments}
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

Departments.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default Departments;
