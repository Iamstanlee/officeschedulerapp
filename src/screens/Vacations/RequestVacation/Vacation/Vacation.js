import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar } from 'react-native'
import styles from './Vacation.styles';
import { Header } from '../../../../components';
import { Colors } from '../../../../constants/GlobalStyles';

class Vacation extends Component {
    onPressLeft = () => {
        const { navigation } = this.props;
        navigation.goBack()
    };
    render() {
        return (
            <ScrollView>
                <View>
                    <Header title="Pending Request"
                        onPressLeft={this.onPressLeft} lefttext="Back" />
                    <StatusBar backgroundColor={Colors.blue} />
                    <View style={styles.rowcontainer}>
                        <Text style={styles.container}>Expires in 1d 23h 59min</Text>
                        <View>
                            <Text style={styles.texttop}>
                                You Have Made a request change to location with Michel Sharpe.You have include Manage Request
                </Text>
                        </View>
                        <View style={styles.viewrequest}>
                            <Text style={styles.text}>
                                Current Call
                  </Text>
                            <Text style={styles.textsize}>
                                Josh Winter
                   </Text>
                        </View>
                        <View>
                            <Text style={styles.textsize}>
                                WED 24 APR 2019 07:00 A to 07:00 P
             </Text>
                        </View>
                        <View>
                            <Text style={styles.textsize}>
                                Mayo Clinic Hospital
              </Text>
                        </View>
                        <View style={styles.viewrequest}>
                            <Text style={styles.text}>
                                Requested Call
                  </Text>
                            <Text style={styles.textsize}>
                                Michel Sharp
              </Text>
                        </View>
                        <View>
                            <Text style={styles.textsize}>
                                WED 24 APR 2019 07:00 A to 07:00 P
             </Text>
                        </View>
                        <View>
                            <Text style={styles.textsize}>
                                Mayo Clinic Location
              </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Vacation;
