import React, {Component} from 'react';
import {View,Text} from 'react-native';
import analytics from '@react-native-firebase/analytics';
import Analytics from './src/screen/Analytics';
import {analyticsCollection} from './src/component/AnalyticsEvent';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';


class App extends Component {
  componentDidMount() {
    analyticsCollection();
    messaging().setBackgroundMessageHandler( remoteMessage => {
      console.log('Message handled in the background!-----', remoteMessage);
    });
  }
  
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Analytics />
      </View>
    );
  }
}

export default App;

