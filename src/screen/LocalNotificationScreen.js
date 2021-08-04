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

const handleButtonPress = () => {
  LocalNotification();
};

class LocalNotificationScreen extends Component {
  componentDidMount() {
    this.PushNotification = setPushNotification(this._handleNotificationOpen);
  }

  _handleNotificationOpen = () => {
    const { navigate } = this.props.navigation.navigate(
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
