import notifee, { EventType, AndroidStyle } from '@notifee/react-native';
import { NavigationHelpersContext } from '@react-navigation/native';

export async function onDisplayNotification(navigation) {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  await notifee.displayNotification({

    title: 'Image uploaded',
    body: 'Your image has been successfully uploaded',
    android: {
      channelId,
      pressAction: {
        id: 'default',
        launchActivity: 'default' // works fine
      },
      actions: [
        {
          title: '<b>Yes</b>',
          pressAction: { id: 'Yes' },
        },
        {
          title: '<p style="color: #f44336;"><b>No</b></p>',
          pressAction: { id: 'No' },
        },

      ],
      style: {
        type: AndroidStyle.BIGPICTURE,
        picture:
          'https://static.toiimg.com/thumb/72975551.cms?width=150&resizemode=4&imgsize=881753',
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
    console.log('---------',navigation)
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

