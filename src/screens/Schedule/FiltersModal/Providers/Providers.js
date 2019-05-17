import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Header, CustomMultiPicker, Button } from '../../../../components';
import styles from './Providers.styles';
import { Window, App } from '../../../../constants/GlobalStyles';
import { providers } from '../../../../constants/staticData';

class Providers extends Component {
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
    const selected = ['ms'];

    return (
      <View style={styles.container}>
        <Header
          title="Providers"
          onLeftButtonPress={this.onPressClose}
          leftButton="Back"
        />
        <CustomMultiPicker
          options={providers}
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

Providers.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default Providers;
