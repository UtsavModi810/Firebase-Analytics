import notifee, {EventType, AndroidStyle} from '@notifee/react-native';

export async function onDisplayNotification() {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  await notifee.displayNotification({
    title: 'Image uploaded',
    body: 'Your image has been successfully uploaded',
    android: {
      channelId,
      style: {
        type: AndroidStyle.BIGPICTURE,
        picture:
          'https://static.toiimg.com/thumb/72975551.cms?width=150&resizemode=4&imgsize=881753',
      },
    },
  });
  await notifee.displayNotification({
    title: 'Image uploaded',
    body: 'Your image has been successfully uploaded',
    android: {
      channelId,
      style: {
        type: AndroidStyle.BIGPICTURE,
        picture:
          'https://static.toiimg.com/thumb/72975551.cms?width=150&resizemode=4&imgsize=881753',
      },
    },
  });
  await notifee.onForegroundEvent(({type, detail}) => {
    switch (type) {
      case EventType.DISMISSED:
        alert('User dismissed notification', detail.notification);
        break;
      case EventType.PRESS:
        alert('User pressed notification', detail.notification);
        break;
    }
  });
  await notifee.onBackgroundEvent(async ({type, detail}) => {
    const {notification, pressAction} = detail;

    if (type === EventType.ACTION_PRESS && pressAction.id === 'mark-as-read') {
      alert('Background Notification');

      await notifee.cancelNotification(notification.id);
    }
  });
}

export async function cancel(notificationId) {
  await notifee.cancelNotification(notificationId);
}
