import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  onNotification: function (notification) {
    console.log('LOCAL NOTIFICATION ==>', notification);
  },

  popInitialNotification: true,
  requestPermissions: true,
});

export const LocalNotification = () => {
  PushNotification.localNotification({
    channelId: 'fcm_fallback_notification_channel',
    autoCancel: true,
    bigText:
      'This is local notification demo in React Native app. Only shown, when expanded.',
    subText: 'Local Notification Demo',
    title: 'Local Notification Title',
    message: 'Expand me to see more',
    vibrate: true,
    vibration: 300,
    playSound: true,
    priority: 'high',
    soundName: 'default',
    actions: '["CANCEL"]',
    color: 'grey',
    largeIcon: 'ic_launcher',
    ticker: 'My Notification Ticker',
    showWhen: true,
    autoCancel: true,
    largeIcon: 'ic_launcher',
    largeIconUrl:
      'https://static.toiimg.com/thumb/72975551.cms?width=150&resizemode=4&imgsize=881753',
    smallIcon: 'ic_notification',
    importance: 'high',
    allowWhileIdle: false,
    ignoreInForeground: false,
    shortcutId: 'shortcut-id',
    onlyAlertOnce: false,
    messageId: 'google:message_id',
    invokeApp: true,
  });
};
