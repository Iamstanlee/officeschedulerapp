import React, { Component } from "react";
import { AppRegistry, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { SafeAreaView } from "react-navigation";
import store from "./src/store";
import { name as appName } from "./app.json";
import AppNavigator from "./src/navigation/AppNavigator";

export default class OfficeScheduler extends Component {
    componentDidMount() {
        // StatusBar.setBarStyle('light-content');
    }

    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => OfficeScheduler);
