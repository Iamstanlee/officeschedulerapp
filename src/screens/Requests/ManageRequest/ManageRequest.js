import React, { Component } from "react";
import { View, ScrollView, Text, StatusBar } from "react-native";
import { Header, Button } from "../../../components";
import styles from "./ManageRequest.styles";
import { Colors } from "../../../constants/GlobalStyles";

class ManageRequest extends Component {
    onPressLeft = () => {
        const { navigation } = this.props;
        navigation.goBack();
    };
    onCancelRequest = () => {
        console.log("Navigation Props:", this.props);
        const { navigation } = this.props;
        navigation.navigate("");
    };
    render() {
        return (
            <React.Fragment>
                <Header
                    title="Manage Request"
                    onLeftButtonPress={this.onPressLeft}
                    leftButton="Back"
                />
                <StatusBar backgroundColor={Colors.blue} />

                <ScrollView contentContainerStyle={styles.container}>
                    <View>
                        <View style={styles.textContainer}>
                            <Text style={styles.texttop}>Expires In 1d 23h 59min</Text>
                            <Text style={styles.text}>
                                You Have Made a request change to location with Michael Sharpe. You
                                have include Message Request
                            </Text>
                        </View>
                        <View style={styles.columnContainer}>
                            <Text style={styles.text}>
                                <Text style={styles.bold}>Current Call</Text> {"     "} Josh Winter
                            </Text>
                            <Text style={styles.text}>Wed April 24 7:00am - 9:00pm</Text>
                            <Text style={styles.text}>Main Building</Text>
                        </View>
                        <View style={styles.columnContainer}>
                            <Text style={styles.text}>
                                <Text style={styles.bold}>Requested Call</Text> {"     "} John Doe
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

export default ManageRequest;
