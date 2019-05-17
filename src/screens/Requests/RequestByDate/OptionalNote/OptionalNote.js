import React, { Component } from "react";
import { View, Text, ScrollView, StatusBar } from "react-native";
import CheckBox from "react-native-check-box";
import Button from "react-native-button";
import { Header } from "../../../../components";
import styles from "./OptionalNote.styles";
import { Colors } from "../../../../constants/GlobalStyles";

class OptionalNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedules: [
                {
                    position: "Main Building",
                    date: "Tuesday April 16, 2019",
                    time: "7am to 7pm",
                    checked: false
                },
                {
                    position: "PentHouse",
                    date: "Wednesday April 18, 2019",
                    time: "6am to 10pm",
                    checked: false
                },
                {
                    position: "Masters Lounge",
                    date: "Monday June 26, 2019",
                    time: "10am to 8pm",
                    checked: false
                },
                {
                    position: "Other Places",
                    date: "Friday June 2, 2019",
                    time: "1am to 12pm",
                    checked: false
                }
            ]
        };
    }

    handleSchedule = () => {
        //get the selected items and navigate back
        const { navigation } = this.props;
        navigation.goBack();
    };

    onPressLeft = () => {
        const { navigation } = this.props;
        navigation.goBack();
    };

    handleChecked = (value, index) => {
        const { schedules } = this.state;
        schedules[index].checked = !value;
        this.setState({ schedules });
    };
    render() {
        const { schedules } = this.state;

        return (
            <React.Fragment>
                <Header
                    title="John's Schedule"
                    onLeftButtonPress={this.onPressLeft}
                    leftButton="Back"
                />
                <ScrollView>
                    <StatusBar backgroundColor={Colors.blue} />
                    {schedules.map((schedule, index) => {
                        return (
                            <View style={styles.container} key={schedule.position}>
                                <Text style={styles.texttop}>{schedule.date}</Text>
                                <View style={styles.rowContainer}>
                                    <CheckBox
                                        isChecked={schedule.checked}
                                        onClick={() => this.handleChecked(schedule.checked, index)}
                                    />
                                    <Text style={styles.leftLabel}>{schedule.position}</Text>
                                    <Text>{schedule.time}</Text>
                                </View>
                            </View>
                        );
                    })}
                    <Button
                        containerStyle={styles.buttonContainer}
                        style={styles.buttonText}
                        onPress={this.handleSchedule}
                    >
                        SELECT
                    </Button>
                </ScrollView>
            </React.Fragment>
        );
    }
}

export default OptionalNote;
