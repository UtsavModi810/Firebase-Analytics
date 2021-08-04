import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import {
  LocalNotification,
  setPushNotification,
} from '../component/LocalNotificationEvent';
import styles from './style';
import PushNotification from 'react-native-push-notification';


function Separator() {
  return <View style={styles.separator} />;
}


class LocalNotificationScreen extends Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.title1}>Push Notification Event Start Here</Text>
          <Separator />

          <Button
            title="Press Navigate Notifee Navigation"
            color="#f194ff"
            onPress={() => this.props.navigation.navigate('NotifeeScreen')}
          />
        </View>
      </View>
    );
  }
}

export default LocalNotificationScreen;
