import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';

export function newPushNotificationEvent(handleNotification) {
  PushNotification.configure({
    onRegister: function (token) {
        //Here we get token
    },

    onNotification: function (notification) {
      if (notification.foreground) {
        PushNotification.localNotification({
          channelId: notification.channelId,
          title: notification.title,
          message: notification.message,
        });
      }
      handleNotification(notification);
    },

    onAction: function (notification) {
    //Here we get notification object
    },

    onRegistrationError: function (err) {
      //Here we get error message
    },

    senderID: '27580035138',

    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },

    requestPermissions: true,
  });
};

export function Subscribe() {
  messaging()
    .subscribeToTopic('testing_topic')
    .then(() => console.log('Subscribed to topic!'));
}

export function Unsubscribe() {
  messaging()
    .unsubscribeFromTopic('testing_topic')
    .then(() => console.log('Unsubscribed fom the topic!'));
}