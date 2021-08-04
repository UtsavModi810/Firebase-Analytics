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
    if (type === EventType.ACTION_PRESS && detail.pressAction.id === 'Yes') {
      console.log('User pressed an action with the id: ', detail.pressAction.id);
      alert('Yes Pressed', detail.pressAction.id)
    }
    if (type === EventType.ACTION_PRESS && detail.pressAction.id === 'No') {
      console.log('User pressed an action with the id: ', detail.pressAction.id);
      alert('No Pressed', detail.pressAction.id)
    }
  });

  await notifee.onForegroundEvent(({ type, detail }) => {
    switch (type) {
      case EventType.DISMISSED:
        alert('User dismissed notification', detail.notification);
        break;
      case EventType.PRESS:
        alert('User pressed notification', detail.notification);
        navigation.navigate('Analytics')
        break;
    }
  });
  await notifee.onBackgroundEvent(async ({ type, detail }) => {
    const { notification, pressAction } = detail;
    console.log('---------', navigation)
    if (type === EventType.PRESS) {

      console.log('Background Notification', detail.notification)
      navigation.navigate('Analytics')
      await notifee.cancelNotification(notification.id);
    }
  });

}

export async function cancel(notificationId) {
  await notifee.cancelNotification(notificationId);
}

