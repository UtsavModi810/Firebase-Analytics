import firebase from '@react-native-firebase/app';
import crashlytics from '@react-native-firebase/crashlytics';

export const setCrashlyticsCollection = () => {
  crashlytics().setCrashlyticsCollectionEnabled(true);
};

export const setCrashlyticsLog = () => {
  crashlytics().log('User Log');
};

export const crashUser = async user => {
  crashlytics().log('User signed in.');
  await Promise.all([
    crashlytics().setUserId(user.uid),
    crashlytics().setAttribute('credits', String(user.credits)),
    crashlytics().setAttributes({
      role: 'admin',
      followers: '13',
      email: user.email,
      username: user.username,
    }),
  ]);
};
