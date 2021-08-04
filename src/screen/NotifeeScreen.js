import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import styles from './style';
import { bootstrap, cancel, onDisplayNotification } from '../component/NotifeeEvent';

function Separator() {
  return <View style={styles.separator} />;
}

export class NotifeeScreen extends Component {
  componentDidUpdate(){
    bootstrap()
  }
  render() {
    return (
      <View>
        <Text style={styles.title1}> Notifee Notification </Text>
        <Separator />

        <Button
          title="Notifee Navigation"
          color="#f194ff"
          onPress={() => onDisplayNotification()}
        />

        <Separator />

        <Button title="Cancel Notification" onPress={() => cancel} />
      </View>
    );
  }
}

export default NotifeeScreen;
