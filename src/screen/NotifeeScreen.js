import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import styles from './style';
import { cancel, onDisplayNotification } from '../component/NotifeeEvent';

function Separator() {
  return <View style={styles.separator} />;
}
const notificationData={
  "id": 'default',
  "name": 'Default Channel',
  "title": 'Image uploaded',
  "body": 'Your image has been successfully uploaded',
  "pressAction": {
    "id": 'default',
    "launchActivity": 'default' // works fine
  },
  "actions": [
    {
      "title": '<b>Yes</b>',
      "pressAction": { "id": 'Yes' },
    },
    {
      "title": '<p style="color: #f44336;"><b>No</b></p>',
      "pressAction": { "id": 'No' },
    },

  ],
  "picture":
        'https://static.toiimg.com/thumb/72975551.cms?width=150&resizemode=4&imgsize=881753',

}
export class NotifeeScreen extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title1}> Notifee Notification </Text>
        <Separator />

        <Button
          title="Notifee Navigation"
          color="#f194ff"
          onPress={() => onDisplayNotification(this.props.navigation,notificationData)}
        />

        <Separator />

        <Button title="Cancel Notification" onPress={() => cancel} />
      </View>
    );
  }
}

export default NotifeeScreen;
