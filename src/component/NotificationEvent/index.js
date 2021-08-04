import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';

export function newPushNotificationEvent(handleNotification) {
  PushNotification.configure({
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },

    onNotification: function (notification) {
      console.log('notification', notification)

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
      console.log('ACTION:', notification.action);
      console.log('NOTIFICATION:', notification);

    },

    onRegistrationError: function (err) {
      console.error(err.message, err);
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
    .subscribeToTopic('weather')
    .then(() => console.log('Subscribed to topic!'));
}

export function Unsubscribe() {
  messaging()
    .unsubscribeFromTopic('weather')
    .then(() => console.log('Unsubscribed fom the topic!'));
}