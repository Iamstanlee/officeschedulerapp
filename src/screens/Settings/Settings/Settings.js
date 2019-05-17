import React, { Component } from "react";
import { View, Text, ScrollView, Image, Switch, TouchableHighlight } from "react-native";
import Button from "react-native-button";
import PropTypes from "prop-types";
import { Header } from "../../../components";
import styles from "./Settings.styles";
import images from "../../../assets/images";
import { Colors, GlobalStyles } from "../../../constants/GlobalStyles";

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            faceId: false,
            touchId: false,
            autoTimeout: false
        };
    }

    onPressChangePassword = () => {
        const { navigation } = this.props;

        navigation.navigate("ChangePassword");
    };

    onPressCalendarSync = () => {
        const { navigation } = this.props;

        navigation.navigate("CalendarSync");
    };

    render() {
        const { faceId, touchId, autoTimeout } = this.state;

        return (
            <View style={styles.container}>
                <Header title="Settings" />
                <ScrollView>
                    <TouchableHighlight
                        onPress={this.onPressCalendarSync}
                        activeOpacity={0.7}
                        underlayColor={Colors.white}
                    >
                        <View style={styles.rowContainer}>
                            <Text style={styles.leftLabel}>Calendar Sync</Text>
                            <Image style={GlobalStyles.iconChevron} source={images.iconChevron} />
                        </View>
                    </TouchableHighlight>

                    <View style={styles.rowContainer}>
                        <Text style={styles.leftLabel}>Enable Face ID Login</Text>
                        <Switch
                            value={faceId}
                            trackColor={{ true: Colors.blue, false: Colors.trackColorFalse }}
                            onValueChange={val => {
                                this.setState({ faceId: val });
                            }}
                        />
                    </View>

                    <View style={styles.rowContainer}>
                        <Text style={styles.leftLabel}>Enable Touch ID Login</Text>
                        <Switch
                            value={touchId}
                            trackColor={{ true: Colors.blue, false: Colors.trackColorFalse }}
                            onValueChange={val => {
                                this.setState({ touchId: val });
                            }}
                        />
                    </View>

                    <View style={styles.rowContainer}>
                        <Text style={styles.leftLabel}>Automatic Time Out</Text>
                        <Switch
                            value={autoTimeout}
                            trackColor={{ true: Colors.blue, false: Colors.trackColorFalse }}
                            onValueChange={val => {
                                this.setState({ autoTimeout: val });
                            }}
                        />
                    </View>

                    <TouchableHighlight
                        onPress={this.onPressChangePassword}
                        activeOpacity={0.7}
                        underlayColor={Colors.white}
                    >
                        <View style={styles.rowContainer}>
                            <Text style={styles.leftLabel}>Change Password</Text>
                            <Image style={GlobalStyles.iconChevron} source={images.iconChevron} />
                        </View>
                    </TouchableHighlight>

                    <Button
                        containerStyle={styles.signOutButtonContainer}
                        style={styles.signOutButtonText}
                    >
                        SIGN OUT
                    </Button>
                </ScrollView>
            </View>
        );
    }
}

Settings.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired
    }).isRequired
};

export default Settings;
