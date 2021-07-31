import notifee from '@notifee/react-native';

export async function onDisplayNotification() {
    // Create a channel
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
  
    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
        smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
      },
    });
    await notifee.displayNotification({
      id: '123',
      title: 'Updated Notification Title',
      body: 'Updated main body content of the notification',
      android: {
        channelId,
      },
    });
  }
  
export async function cancel(notificationId) {
    await notifee.cancelNotification(notificationId);
  }
  