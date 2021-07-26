import React, {Component} from 'react';
import {View,Text} from 'react-native';
import analytics from '@react-native-firebase/analytics';
import Analytics from './src/screen/Analytics';
import {analyticsCollection} from './src/component/AnalyticsEvent';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';

class App extends Component {
  componentDidMount() {
    analyticsCollection();
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

