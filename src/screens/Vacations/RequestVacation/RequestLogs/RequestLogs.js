import React, { Component } from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { Header } from '../../../../components';
import styles from './RequestLogs.styles';
import { Colors } from '../../../../constants/GlobalStyles';

class RequestLogs extends Component {
  onPressLeft = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    return (
      <React.Fragment>
        <Header
          title="Vacation Request Log"
          onLeftButtonPress={this.onPressLeft}
          leftButton="Back"
        />
        <StatusBar backgroundColor={Colors.blue} />

        <ScrollView contentContainerStyle={styles.container}>
          <View>
            <View style={styles.textContainer}>
              <Text style={styles.texttop}>
                Request Timeout as include on Mon 22 April at 1:00pm
              </Text>
              <Text style={styles.text}>
                You Have Made a request change to location with Michael Sharpe.
              </Text>
            </View>
            <View style={styles.columnContainer}>
              <Text style={styles.text}>
                <Text style={styles.bold}>Current Call</Text> {'     '} Josh Winter
              </Text>
              <Text style={styles.text}>Wed April 24 7:00am - 9:00pm</Text>
              <Text style={styles.text}>Main Building</Text>
            </View>
            <View style={styles.columnContainer}>
              <Text style={styles.text}>
                <Text style={styles.bold}>Requested Call</Text> {'     '} John Doe
              </Text>
              <Text style={styles.text}>Fri June 24 8:00am - 12:00pm</Text>
              <Text style={styles.text}>PentHouse</Text>
            </View>
          </View>
        </ScrollView>
      </React.Fragment>
    );
  }
}

export default RequestLogs;
