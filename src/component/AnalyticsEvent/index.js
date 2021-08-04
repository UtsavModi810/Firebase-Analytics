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

export const analyticsCollection = (test) => {
  analytics().setAnalyticsCollectionEnabled(test);
};

export const logScreen = (screen_name,screen_class) => {
  analytics().logScreenView({
    screen_name: screen_name,
    screen_class: screen_class,
  });
};
