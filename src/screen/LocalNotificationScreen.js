import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {LocalNotification} from '../component/LocalNotificationEvent';
import styles from './style';

const handleButtonPress = () => {
  LocalNotification();
};

class LocalNotificationScreen extends Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.title1}>Local Notification Event Start Here</Text>
          <Button
            title="Local Notification"
            onPress={() => handleButtonPress()}
          />
        </View>
      </View>
    );
  }
}

export default LocalNotificationScreen;
