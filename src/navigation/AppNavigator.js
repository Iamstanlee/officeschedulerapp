import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";
// import AuthLoadingScreen from '../screens/AuthLoadingScreen'

const Navigator = createSwitchNavigator({
    // AuthFlow: AuthNavigator,
    MainFlow: MainNavigator
});

const AppNavigator = createAppContainer(Navigator);
export default AppNavigator;
