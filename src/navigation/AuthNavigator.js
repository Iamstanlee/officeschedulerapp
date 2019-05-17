import { createStackNavigator } from 'react-navigation';

import { Login, ForgotPassword, ResetPassword, EmailSuccess } from '../screens/Auth';

export default createStackNavigator(
  {
    Login,
    ForgotPassword,
    ResetPassword,
    EmailSuccess
  },
  {
    headerMode: 'none'
  }
);
