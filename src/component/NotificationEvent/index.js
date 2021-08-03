import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';

export const newPushNotificationEvent = () => {
  PushNotification.configure({
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },

    onNotification: function (notification) {
      if (notification.foreground) {
        console.log('NOTIFICATION:', notification);
        PushNotification.localNotification({
          channelId: notification.channelId,
          title: notification.title,
          message: notification.message,
        });
      }
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
