import analytics from '@react-native-firebase/analytics';
import firebase from '@react-native-firebase/app';


export const addCustomEvent = () => {
  analytics().logEvent('custom_event', {
    id: '123123',
    value: 'buy',
    variable: '123',
  });
};

export const onSignIn = () => {
  analytics().setUserId('2345'),
    analytics().setUserProperty('account_balance', '1234567890');
};

export const onSignOut = () => {
  analytics().resetAnalyticsData();
};

export const analyticsCollection = () => {
  analytics().setAnalyticsCollectionEnabled(true);
};

export const logScreen = () => {
  analytics().logScreenView({
    screen_name: 'Utsav analytics screen',
    screen_class: 'Analytics',
  });
};


