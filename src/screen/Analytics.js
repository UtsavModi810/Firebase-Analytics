import React, { Component } from 'react';
import firebase from '@react-native-firebase/app';
import analytics from '@react-native-firebase/analytics';
import { Button, View, SafeAreaView, Text, ScrollView } from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification, { Importance } from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';
import styles from './style';
import {
  addCustomEvent,
  setUser,
  resetData,
  logScreen,
} from '../component/AnalyticsEvent';
import {
  crashUser,
  setCrashlyticsCollection,
  setCrashlyticsLog,
} from '../component/CrashlyticsEvent';
import { newPushNotificationEvent, Subscribe, Unsubscribe } from '../component/NotificationEvent';
import { LocalNotification } from '../component/LocalNotificationEvent';

function Separator() {
  return <View style={styles.separator} />;
}

export class Analytics extends Component {
  componentDidMount() {
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
    setCrashlyticsCollection();
    logScreen();
    //newPushNotificationEvent();
    this.PushNotification = newPushNotificationEvent(this._handleNotificationOpen);

    // newPushNotificationEvent();
  }
  
  _handleNotificationOpen = () => {
    console.log('notifcation click')
    const { navigate } = this.props.navigation.navigate(
      'LocalNotificationScreen',
    );
  };


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.title1}>Analytics Event Start Here</Text>
          </View>
          <Separator />
          <View>
            <Button
              title="Add custom event"
              onPress={() => addCustomEvent('12341234', 'sell', '1234')}
            />
          </View>
          <Separator />
          <View>
            <Button
              title="Set User"
              color="#f194ff"
              onPress={() => setUser('2345', 'account_balance', '1234567890')}
            />
          </View>
          <Separator />
          <View>
            <Button title="Reset Analyticss Data" onPress={() => resetData()} />
          </View>
          <Separator />
          <View>
            <Text style={styles.title1}>Crashlytics Event Start Here</Text>
          </View>

          <View>
            <Button
              title="Crashlytics"
              onPress={() =>
                crashUser({
                  uid: 'Aa0Bb1Cc2Dd3Ee4Ff5Gg6Hh7Ii8Jj9',
                  username: 'Joaquin Phoenix',
                  email: 'phoenix@example.com',
                  credits: 42,
                })
              }
            />
            <Separator />
            <Button
              title="Test Crash"
              color="#f194ff"
              onPress={() => crashlytics().crash()}
            />
          </View>
          <Separator />
          <View>
            <Button
              title="Crashlytics Log"
              onPress={() => setCrashlyticsLog()}
            />
          </View>

          <Separator />
          <View>
            <Text style={styles.title1}>
              Local Notification Event Start Here
            </Text>
            <Button
              color="#f194ff"
              title="Press to navigate Local Notification"
              onPress={() =>
                this.props.navigation.navigate('LocalNotificationScreen')
              }
            />
          </View>
          <Separator />
          <View>
            <Button
              color="#f194ff"
              title="firebase Channel"
              onPress={() =>
                PushNotification.localNotification({
                  /* Android Only Properties */
                  channelId: 'channel-id', // (required) channelId, if the channel doesn't exist, notification will not trigger.
                  message: 'My Notification Message13',
                })
              }
            />
            <Separator />
            <Text style={styles.title1}>
              Create the Subscribe and Unsubscribe notification
            </Text>
            <Separator />
            <Button
              title="Subscribe"
              onPress={() => Subscribe()}
            />
            <Separator />
            <Button
              title="Unsubscribe"
              onPress={() => Unsubscribe()}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Analytics;
