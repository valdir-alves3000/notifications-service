import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';

type Overrride = Partial<Notification>;

export function makeNotification(override: Overrride = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade!'),
    recipientId: 'recipient-1',
    ...override,
  });
}
