import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {
  LocalNotification,
  setPushNotification,
} from '../component/LocalNotificationEvent';
import styles from './style';
import PushNotification from 'react-native-push-notification';
import notifee from '@notifee/react-native';


function Separator() {
  return <View style={styles.separator} />;
}

async function onDisplayNotification() {
  // Create a channel
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  // Display a notification
  await notifee.displayNotification({
    title: 'Notification Title',
    body: 'Main body content of the notification',
    android: {
      channelId,
      smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
    },
  });
  await notifee.displayNotification({
    id: '123',
    title: 'Updated Notification Title',
    body: 'Updated main body content of the notification',
    android: {
      channelId,
    },
  });
  
}

async function cancel(notificationId) {
  await notifee.cancelNotification(notificationId,123);
}

const handleButtonPress = () => {
  LocalNotification();
};

class LocalNotificationScreen extends Component {
  componentDidMount() {
    this.PushNotification = setPushNotification(this._handleNotificationOpen);
  }

  _handleNotificationOpen = () => {
    const {navigate} = this.props.navigation.navigate(
      'LocalNotificationScreen',
    );
  };
  render() {
    return (
      <View>
        <View>
          <Text style={styles.title1}>Local Notification Event Start Here</Text>
          <Button
            title="Local Notification"
            onPress={() => handleButtonPress()}
          />
           <Separator />

          <Button title="Display Notification" onPress={() => onDisplayNotification()} />  

          <Separator />

          <Button title="Cancel Notification" onPress={() => cancel()} />  
          
        </View>
      
      </View>
    );
  }
}

export default LocalNotificationScreen;
