import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notification-repository';
import { CountRecipientNotification } from './count-recipent-notification';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: '1id-recipient' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: '1id-recipient' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: '2id-recipient' }),
    );

    const { count } = await countRecipientNotification.execute({
      recipientId: '1id-recipient',
    });

    expect(count).toEqual(2);
  });
});
