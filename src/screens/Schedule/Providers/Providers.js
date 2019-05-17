import React, { Component } from 'react';
import { View, Text, TouchableOpacity,StatusBar } from 'react-native';
import { Header } from '../../../components/Header';
import styles from './Providers.styles';
import { Colors } from '../../../constants/GlobalStyles';

class Providers extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

  }
  onSendMessge = () => {
    console.log('Navigation Props:', this.props)
    const { navigation } = this.props;
    navigation.navigate('');
  };

  render() {
    return (
      <View >
        <Header title="Schedule" />
        <StatusBar backgroundColor={Colors.blue} />
        <View>
          <Text style={styles.texttop}>Tuesday April 16, 2019</Text>
        </View>
        <View>
          <View>
            <Text style={styles.texttop}>Tuesday April 16, 2019</Text>
          </View>
          
          <View>
            <View style={styles.rowContainer}>
              <TouchableOpacity onPress={() => this.onSendMessge()}>
                <Text style={styles.leftLabel}>ShulMen Building</Text>
                <Text style={styles.rightlabel}>7am to 7pm</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.texttop}>Wednesday April 17, 2019</Text>
          </View>

          <View>
            <View style={styles.rowContainer}>
              <TouchableOpacity onPress={() => this.onSendMessge()}>
                <Text style={styles.leftLabel}>ShulMen Building</Text>
                <Text style={styles.rightlabel}>7am to 7pm</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.texttop}>Thrusday April 18, 2019</Text>
          </View>

          <View>
            <View style={styles.rowContainer}>
              <TouchableOpacity onPress={() => this.onSendMessge()}>
                <Text style={styles.leftLabel}>ShulMen Building</Text>
                <Text style={styles.rightlabel}>7am to 7pm</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.texttop}>Sunday April 28, 2019</Text>
          </View>

          <View>
            <View style={styles.rowContainer}>
              <TouchableOpacity onPress={() => this.onSendMessge()}>
                <Text style={styles.leftLabel}>ShulMen Building</Text>
                <Text style={styles.rightlabel}>7am to 7pm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>

    );
  }
}

export default Providers;
