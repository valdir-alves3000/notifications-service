import { Notification } from '@application/entities/notification';

export class NotificationsViewModel {
  static toHttp(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
    };
  }
}
