import React, { Component } from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { Header, Button } from '../../../../components';
import styles from './SelectProviders.styles';
import { Colors } from '../../../../constants/GlobalStyles';
import CheckBoxLine from '../../../../components/Checkbox/CheckBoxLine/CheckBoxLine';

class SelectProviders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      providers: [
        {
          name: 'John Doe',
          checked: false
        },
        {
          name: 'Emma Foo',
          checked: false
        },
        {
          name: 'Dan',
          checked: false
        }
      ]
    };
  }

  handleProvider = () => {
    //get the selected items and navigate back
    const { navigation } = this.props;
    navigation.goBack();
  };

  selectprovider = (value, index) => {
    const { providers } = this.state;
    providers[index].checked = !value;
    this.setState({ providers });
  };

  onPressLeft = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    const { providers } = this.state;

    return (
      <React.Fragment>
        <Header title="Select Providers" onLeftButtonPress={this.onPressLeft} leftButton="Back" />
        <ScrollView style={styles.container}>
          <StatusBar backgroundColor={Colors.blue} />
          {providers.map((provider, index) => {
            return (
              <View key={provider.name}>
                <CheckBoxLine
                  checked={provider.checked}
                  leftLabel={provider.name}
                  onPress={() => this.selectprovider(provider.checked, index)}
                />
              </View>
            );
          })}
          <Button style={styles.button} color="blue" onPress={this.handleProvider}>
            SELECT
          </Button>
        </ScrollView>
      </React.Fragment>
    );
  }
}

export default SelectProviders;
