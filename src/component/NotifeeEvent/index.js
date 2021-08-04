import notifee, { EventType, AndroidStyle } from '@notifee/react-native';
import { NavigationHelpersContext } from '@react-navigation/native';


export async function onDisplayNotification(navigation,notificationData) {
  const channelId = await notifee.createChannel({
    id: notificationData.id,
    name: notificationData.name,
  });

  await notifee.displayNotification({

    title: notificationData.title,
    body: notificationData.body,
    android: {
      channelId,
      pressAction: {
        id: notificationData.pressAction.id,
        launchActivity: notificationData.pressAction.launchActivity, // works fine
      },
      actions:notificationData.actions, 
      style: {
        type: AndroidStyle.BIGPICTURE,
        picture:
         notificationData.picture,
      },
    },
  });

  await notifee.onForegroundEvent(({ type, detail }) => {
    const { notification, pressAction } = detail;
    if (type === EventType.ACTION_PRESS && detail.pressAction.id === 'Yes') {
      navigation.navigate('Analytics')
      notifee.cancelNotification(notification.id);
    }
    if (type === EventType.ACTION_PRESS && detail.pressAction.id === 'No') {
       notifee.cancelNotification(notification.id);
    }
  });

  await notifee.onForegroundEvent(({ type, detail }) => {
    switch (type) {
      case EventType.DISMISSED:
        break;
      case EventType.PRESS:
        navigation.navigate('Analytics')
        break;
    }
  });
  await notifee.onBackgroundEvent(async ({ type, detail }) => {
    const { notification, pressAction } = detail;
    if (type === EventType.PRESS) {
      navigation.navigate('Analytics')
      await notifee.cancelNotification(notification.id);
    }
  });

}

export async function cancel(notificationId) {
  await notifee.cancelNotification(notificationId);
}

