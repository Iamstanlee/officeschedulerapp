import { createStackNavigator } from 'react-navigation';
import BottomTabsNavigator from './BottomTabsNavigator';
import {
  FiltersModal,
  Departments,
  Locations,
  Offices,
  Providers
} from '../screens/Schedule';

const FiltersStack = createStackNavigator(
  {
    Departments,
    Locations,
    Offices,
    Providers
  },
  {
    navigationOptions: {
      gesturesEnabled: false
    },
    mode: 'card',
    headerMode: 'none'
  }
);

const ModalStack = createStackNavigator(
  {
    FiltersModal: { screen: FiltersModal },
    FiltersStack
  },
  {
    navigationOptions: {
      gesturesEnabled: false
    },
    mode: 'card',
    headerMode: 'none'
  }
);

export default createStackNavigator(
  {
    Main: { screen: BottomTabsNavigator },
    ModalStack
  },
  {
    navigationOptions: {
      gesturesEnabled: false
    },
    mode: 'modal',
    initialRouteName: 'Main',
    headerMode: 'none'
  }
);
