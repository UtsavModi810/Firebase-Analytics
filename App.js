import React, {Component} from 'react';
import {View,Text} from 'react-native';
import analytics from '@react-native-firebase/analytics';
import Analytics from './src/screen/Analytics';
import {analyticsCollection} from './src/component/AnalyticsEvent';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';

class App extends Component {
  componentDidMount() {
    // Must be outside of any component LifeCycle (such as `componentDidMount`).
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },

      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);

        // process the notification

        // (required) Called when a remote is received or opened, or local notification is opened
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);

        // process the action
      },

      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function (err) {
        console.error(err.message, err);
      },

      // senderID: "27580035138",

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      // Should the initial notification be popped automatically
      // default: true
      // popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true,
    });
  }
  render() {
    return (
      <View>
        <Text style={{ alignSelf: 'center', marginTop: 20 }}> FireBase Demo  </Text>
      </View>
      // <PushController />
    )
  }

  // componentDidMount() {
  //   analyticsCollection();
  // }
  // render() {
  //   return (
  //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //       <Analytics />
  //     </View>
  //   );
  // }
}

export default App;

