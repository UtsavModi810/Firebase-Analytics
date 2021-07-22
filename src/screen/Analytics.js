import React, {Component} from 'react';
import firebase from '@react-native-firebase/app';
import analytics from '@react-native-firebase/analytics';
import {Button, View, SafeAreaView, Text} from 'react-native';
import styles from './style';
import {
  addCustomEvent,
  onSignIn,
  onSignOut,
  logScreen,
} from '../component/AnalyticsEvent';

function Separator() {
  return <View style={styles.separator} />;
}

export default class Analytics extends Component {
  componentDidMount() {
    logScreen();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>
            To log a custom event, use the logEvent method:
          </Text>
          <Button title="Add custom event" onPress={() => addCustomEvent()} />
        </View>
        <Separator />
        <View>
          <Text style={styles.title}>
            User data can be attached to analytical events via the setUserId,
            setUserProperties and setUserProperty methods. Each Firebase project
            can have up to 25 uniquely named (case-sensitive) user properties.
          </Text>
          <Button title="Set User" color="#f194ff" onPress={() => onSignIn()} />
        </View>
        <Separator />
        <View>
          <Text style={styles.title}>
            In some cases, resetting all analytics data is required on certain
            events such as signing out of the application. To achieve this call
            the resetAnalyticsData method.
          </Text>
          <Button title="Reset Analyticss Data" onPress={() => onSignOut()} />
        </View>
        <Separator />
      </SafeAreaView>
    );
  }
}
