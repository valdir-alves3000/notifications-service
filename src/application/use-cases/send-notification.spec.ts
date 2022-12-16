import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsrepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsrepository);

    const { notification } = await sendNotification.execute({
      category: 'Social',
      content: 'This is a notification',
      recipientId: 'example-recipient-id',
    });

    expect(notificationsrepository.notifications).toHaveLength(1);
    expect(notificationsrepository.notifications[0]).toEqual(notification);
  });
});
