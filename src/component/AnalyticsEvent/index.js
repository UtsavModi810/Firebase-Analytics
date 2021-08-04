import analytics from '@react-native-firebase/analytics';
import firebase from '@react-native-firebase/app';

export const addCustomEvent = (id, value, variable) => {
  analytics().logEvent('custom_event', {
    id: id,
    value: value,
    variable: variable,
  });
};

export const setUser = (setUserId, setUserProperty) => {
  analytics().setUserId(setUserId),
    analytics().setUserProperty(setUserProperty);
};

export const resetData = () => {
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
