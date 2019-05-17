/* eslint react/prop-types: 0 */
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import images from '../assets/images';
import {
  ManageRequests,
  ManageRequest,
  MyShifts,
  OptionalNote,
  OthersShifts,
  RequestDate,
  RequestProvider,
  SelectProviders,
  Requests,
  RequestLog
} from '../screens/Requests';
import { Message, Schedule } from '../screens/Schedule';
import { Chat } from '../screens/Chat';
import {
  PendingRequests,
  RequestDays,
  RequestLogs,
  RequestVacation,
  Vacation
} from '../screens/Vacations';
import { CalendarSync, ChangePassword, Settings } from '../screens/Settings';
import { Colors } from '../constants/GlobalStyles';

const styles = StyleSheet.create({
  bottomNavIcon: {
    width: 21,
    height: 21
  }
});

const ScheduleStack = createStackNavigator(
  {
    Schedule,
    Message,
    ManageRequests
  },
  { headerMode: 'none' }
);

ScheduleStack.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'Schedule',
  tabBarVisible: navigation.state.index === 0,
  tabBarIcon: ({ focused }) =>
    focused ? (
      <Image source={images.iconScheduleActive} style={styles.bottomNavIcon} />
    ) : (
      <Image source={images.iconScheduleInActive} style={styles.bottomNavIcon} />
    )
});

const RequestChangeStack = createStackNavigator(
  {
    Requests,
    ManageRequests,
    ManageRequest,
    MyShifts,
    OptionalNote,
    OthersShifts,
    RequestDate,
    SelectProviders,
    RequestProvider,
    RequestLog
  },
  { headerMode: 'none' }
);

RequestChangeStack.navigationOptions = {
  tabBarLabel: 'Requests',
  tabBarIcon: ({ focused }) =>
    focused ? (
      <Image source={images.iconRequestsActive} style={styles.bottomNavIcon} />
    ) : (
      <Image source={images.iconRequestsInActive} style={styles.bottomNavIcon} />
    )
};

const ChatStack = createStackNavigator(
  {
    Chat
  },
  { headerMode: 'none' }
);

ChatStack.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ focused }) =>
    focused ? (
      <Image source={images.iconChatActive} style={styles.bottomNavIcon} />
    ) : (
      <Image source={images.iconChatInActive} style={styles.bottomNavIcon} />
    )
};

const VacationsChangeStack = createStackNavigator(
  { Vacation, PendingRequests, RequestDays, RequestLogs, RequestVacation },
  { headerMode: 'none' }
);

VacationsChangeStack.navigationOptions = {
  tabBarLabel: 'Vacations',
  tabBarIcon: ({ focused }) =>
    focused ? (
      <Image source={images.iconVacationsActive} style={styles.bottomNavIcon} />
    ) : (
      <Image source={images.iconVacationsInActive} style={styles.bottomNavIcon} />
    )
};

const SettingsChangeStack = createStackNavigator(
  {
    Settings,
    CalendarSync,
    ChangePassword
  },
  { headerMode: 'none' }
);

SettingsChangeStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) =>
    focused ? (
      <Image source={images.iconSettingsActive} style={styles.bottomNavIcon} />
    ) : (
      <Image source={images.iconSettingsInActive} style={styles.bottomNavIcon} />
    )
};

export default createBottomTabNavigator(
  {
    ScheduleStack,
    RequestChangeStack,
    ChatStack,
    VacationsChangeStack,
    SettingsChangeStack
  },
  {
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#329afc',
      inactiveTintColor: '#737476',
      labelStyle: {
        fontSize: 10
      },
      style: {
        height: 54,
        backgroundColor: '#fff',
        borderTopColor: '#d0d4d9'
      },
      tabStyle: {
        paddingBottom: 4,
        paddingTop: 4
      }
    }
  }
);
