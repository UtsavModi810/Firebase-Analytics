import React, {Component} from 'react';
import firebase from '@react-native-firebase/app';
import analytics from '@react-native-firebase/analytics';
import {Button, View, SafeAreaView, Text, ScrollView} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import styles from './style';
import {
  addCustomEvent,
  onSignIn,
  onSignOut,
  logScreen,
} from '../component/AnalyticsEvent';
import {
  crashUser,
  setCrashlyticsCollection,
  setCrashlyticsLog,
} from '../component/CrashlyticsEvent';
import {newPushNotificationEvent} from '../component/NotificationEvent';
import {LocalNotification} from '../component/LocalNotificationEvent';
import LocalNotificationScreen from './LocalNotificationScreen';

function Separator() {
  return <View style={styles.separator} />;
}


export class Analytics extends Component {
  componentDidMount() {
    setCrashlyticsCollection();
    logScreen();
    newPushNotificationEvent();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.title1}>Analytics Event Start Here</Text>
          </View>
          <Separator />
          <View>
            <Button title="Add custom event" onPress={() => addCustomEvent()} />
          </View>
          <Separator />
          <View>
            <Button
              title="Set User"
              color="#f194ff"
              onPress={() => onSignIn()}
            />
          </View>
          <Separator />
          <View>
            <Button title="Reset Analyticss Data" onPress={() => onSignOut()} />
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
              title="Local Notification"
              onPress={() =>
                this.props.navigation.navigate('LocalNotificationScreen')
              }
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Analytics;
