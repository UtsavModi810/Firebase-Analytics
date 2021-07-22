import React, {Component} from 'react';
import firebase from '@react-native-firebase/app';
import analytics from '@react-native-firebase/analytics';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';

function Separator() {
  return <View style={styles.separator} />;
}

export default class Analytics extends Component {
  componentDidMount() {
    // analytics().setAnalyticsCollectionEnabled(true);
    analytics().logScreenView({
      screen_name: "Utsav analytics screen",
      screen_class: "Analytics",
    });
  }

  addCustomEvent() {
    analytics().logEvent('custom_event', {
      id: '123123',
      value: 'buy',
      variable: '123',
    });
  }

  onSignIn() {
    analytics().setUserId("2345"),
    analytics().setUserProperty('account_balance', "1234567890")
  }

  onSignOut() {
    analytics().resetAnalyticsData();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>
            To log a custom event, use the logEvent method:
          </Text>
          <TouchableOpacity
            onPress={() => {
              analytics().logEvent('Home', {});
            }}>
            <Text> Hellooo</Text>
          </TouchableOpacity>
          <Button
            title="Add custom event"
            onPress={() => this.addCustomEvent()}
          />
        </View>
        <Separator />
        <View>
          <Text style={styles.title}>
            User data can be attached to analytical events via the setUserId,
            setUserProperties and setUserProperty methods. Each Firebase project
            can have up to 25 uniquely named (case-sensitive) user properties.
          </Text>
          <Button
            title="Set User"
            color="#f194ff"
            onPress={() => this.onSignIn()}
          />
        </View>
        <Separator />
        <View>
          <Text style={styles.title}>
            In some cases, resetting all analytics data is required on certain
            events such as signing out of the application. To achieve this call
            the resetAnalyticsData method.
          </Text>
          <Button
            title="Reset Analyticss Data"
            onPress={() => this.onSignOut()}
          />
        </View>
        <Separator />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 44,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
